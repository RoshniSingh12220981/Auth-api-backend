// Import the Preference model
const Preference = require('../models/Preference');

// Controller to save user preferences (theme, layout)
exports.savePreference = async (req, res) => {
  // Destructure theme and layout from request body
  const { theme, layout } = req.body;

  // Find and update preference by userId (if exists), else create new (upsert: true)
  const pref = await Preference.findOneAndUpdate(
    { userId: req.user?.id },      // Filter by userId (optional chaining in case req.user is undefined)
    { theme, layout },             // New values to set
    { upsert: true, new: true }    // Create if not found, return updated document
  );

  // Return updated or created preference as JSON
  res.json(pref);
};

// Controller to fetch user preferences
exports.getPreference = async (req, res) => {
  // Find preference document by userId
  const pref = await Preference.findOne({ userId: req.user?.id });

  // Return found preference as JSON
  res.json(pref);
};
