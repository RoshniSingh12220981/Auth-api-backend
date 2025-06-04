// Import the User model
const User = require('../models/User');

// Controller to get the current user's profile
exports.getProfile = async (req, res) => {
  // Find the user by ID, exclude the password field from the result
  const user = await User.findById(req.user?.id).select('-password');

  // Return user data as JSON
  res.json(user);
};

// Controller to update the user's profile (name and email)
exports.updateProfile = async (req, res) => {
  // Destructure updated name and email from request body
  const { name, email } = req.body;

  // Find the user by ID and update their name and email, return the updated document
  const user = await User.findByIdAndUpdate(
    req.user?.id,            // User ID to find
    { name, email },         // Fields to update
    { new: true }            // Return the updated user
  );

  // Return updated user data as JSON
  res.json(user);
};
