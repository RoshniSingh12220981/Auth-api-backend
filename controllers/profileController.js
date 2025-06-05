// Import the User model
const User = require('../models/User');

// Controller to get the current user's profile
exports.getProfile = async (req, res) => {
  try {
    // Find the user by ID, exclude the password field from the result
    const user = await User.findById(req.user?.id).select('-password');

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Return user data as JSON
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Controller to update the user's profile (name and email)
exports.updateProfile = async (req, res) => {
  try {
    // Data is already validated by middleware
    const updateData = req.body;

    // Check if email already exists (if email is being updated)
    if (updateData.email) {
      const existingUser = await User.findOne({
        email: updateData.email,
        _id: { $ne: req.user?.id }
      });
      if (existingUser) {
        return res.status(400).json({ msg: 'Email already exists' });
      }
    }

    // Find the user by ID and update their name and email, return the updated document
    const user = await User.findByIdAndUpdate(
      req.user?.id,            // User ID to find
      updateData,              // Fields to update (validated data)
      { new: true }            // Return the updated user
    ).select('-password');     // Exclude password from response

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Return updated user data as JSON
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
