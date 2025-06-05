const Joi = require('joi');

// Generic validation middleware factory
const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        msg: 'Validation error',
        errors: error.details.map(detail => detail.message)
      });
    }
    
    // Replace req.body with validated and sanitized data
    req.body = value;
    next();
  };
};

// Validation schemas
const schemas = {
  register: Joi.object({
    name: Joi.string().min(2).max(50).required().messages({
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name cannot exceed 50 characters',
      'any.required': 'Name is required'
    }),
    email: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email is required'
    }),
    password: Joi.string().min(6).max(128).required().messages({
      'string.min': 'Password must be at least 6 characters long',
      'string.max': 'Password cannot exceed 128 characters',
      'any.required': 'Password is required'
    })
  }),

  login: Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email is required'
    }),
    password: Joi.string().required().messages({
      'any.required': 'Password is required'
    })
  }),

  updateProfile: Joi.object({
    name: Joi.string().min(2).max(50).optional().messages({
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name cannot exceed 50 characters'
    }),
    email: Joi.string().email().optional().messages({
      'string.email': 'Please provide a valid email address'
    })
  }).min(1).messages({
    'object.min': 'At least one field (name or email) must be provided for update'
  }),

  preferences: Joi.object({
    theme: Joi.string().valid('light', 'dark', 'auto').optional().messages({
      'any.only': 'Theme must be one of: light, dark, auto'
    }),
    layout: Joi.string().valid('grid', 'list', 'compact', 'detailed').optional().messages({
      'any.only': 'Layout must be one of: grid, list, compact, detailed'
    })
  }).min(1).messages({
    'object.min': 'At least one preference field (theme or layout) must be provided'
  })
};

module.exports = {
  validate,
  schemas
};
