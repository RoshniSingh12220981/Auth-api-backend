// This file defines the routes for user profile management
const express = require('express');
const { getProfile, updateProfile } = require('../controllers/profileController');
const auth = require('../middleware/authMiddleware');
const { validate, schemas } = require('../middleware/validation');
const router = express.Router();

// Routes with authentication and validation middleware
router.get('/profile', auth, getProfile);
router.patch('/profile', auth, validate(schemas.updateProfile), updateProfile);

module.exports = router;
