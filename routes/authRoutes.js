// This file defines the routes for user authentication
// It includes routes for user registration and login
const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();
// Middleware to parse JSON bodies
router.post('/register', register);
router.post('/login', login);

module.exports = router;
