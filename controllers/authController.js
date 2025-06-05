// Import required modules
const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For creating JWT tokens
const User = require('../models/User'); // Mongoose User model

// Helper function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId }, // Payload with user ID
    process.env.JWT_SECRET, // Secret key from environment variables
    { expiresIn: '1h' } // Token expires in 1 hour
  );
};

// Register a new user
exports.register = async (req, res) => {
  try {
    // Data is already validated by middleware
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new user
    const newUser = await User.create({ name, email, password: hashedPassword });

    // Generate JWT token for the new user
    const token = generateToken(newUser._id);

    // Respond with token and user details (excluding password)
    res.status(201).json({
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Login existing user
exports.login = async (req, res) => {
  try {
    // Data is already validated by middleware
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    // Compare password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    // Generate token
    const token = generateToken(user._id);

    // Respond with token and user info
    res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
