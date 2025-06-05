// Import the Preference model
const Preference = require('../models/Preference');

// Controller to save user preferences (theme, layout)
exports.savePreference = async (req, res) => {
  try {
    // Data is already validated by middleware
    const preferenceData = req.body;

    // Find and update preference by userId (if exists), else create new (upsert: true)
    const pref = await Preference.findOneAndUpdate(
      { userId: req.user?.id },      // Filter by userId (optional chaining in case req.user is undefined)
      preferenceData,                // New values to set (validated data)
      { upsert: true, new: true }    // Create if not found, return updated document
    );

    // Return updated or created preference as JSON
    res.json(pref);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Controller to fetch user preferences
exports.getPreference = async (req, res) => {
  try {
    // Find preference document by userId
    const pref = await Preference.findOne({ userId: req.user?.id });

    // Return found preference as JSON (null if no preferences set)
    res.json(pref);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
