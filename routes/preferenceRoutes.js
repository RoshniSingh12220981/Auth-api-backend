// This file defines the routes for user preferences
const express = require('express');
const { savePreference, getPreference } = require('../controllers/preferenceController');
const auth = require('../middleware/authMiddleware');
const { validate, schemas } = require('../middleware/validation');
const router = express.Router();

// Routes with authentication and validation middleware
router.post('/preferences', auth, validate(schemas.preferences), savePreference);
router.get('/preferences', auth, getPreference);

// Dashboard summary endpoint (bonus feature)
router.get('/dashboard-summary', auth, (req, res) => {
  try {
    res.json({
      teams: 3,
      projects: 5,
      notifications: 7,
      message: 'Dashboard summary data retrieved successfully'
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
