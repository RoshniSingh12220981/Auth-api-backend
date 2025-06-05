// This file defines the routes for user authentication
// It includes routes for user registration and login
const express = require('express');
const { register, login } = require('../controllers/authController');
const { validate, schemas } = require('../middleware/validation');
const router = express.Router();

// Routes with validation middleware
router.post('/register', validate(schemas.register), register);
router.post('/login', validate(schemas.login), login);

module.exports = router;
