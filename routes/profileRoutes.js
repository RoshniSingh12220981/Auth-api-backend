// This file defines the routes for user authentication
const express = require('express');
const { getProfile, updateProfile } = require('../controllers/profileController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();
// Middleware to parse JSON bodies
// This file defines the routes for user profile management
router.get('/profile', auth, getProfile);
router.patch('/profile', auth, updateProfile);

module.exports = router;
