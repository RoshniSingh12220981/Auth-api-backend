// This file defines the routes for user authentication
// It includes routes for user registration and login
const express = require('express');
const { savePreference, getPreference } = require('../controllers/preferenceController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();
// Middleware to parse JSON bodies
router.post('/preferences', auth, savePreference);
router.get('/preferences', auth, getPreference);

// This file defines the routes for user preferences
router.get('/dashboard-summary', auth, (req, res) => {
  res.json({ teams: 3, projects: 5, notifications: 7 });
});


module.exports = router;
