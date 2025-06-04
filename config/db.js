// Import Mongoose for MongoDB interaction
const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect using MongoDB URI from environment variables
    await mongoose.connect(process.env.MONGO_URI);

    // Log success message
    console.log('MongoDB connected');
  } catch (err) {
    // Log error message if connection fails
    console.error('MongoDB connection failed', err);

    // Exit the process with failure code
    process.exit(1);
  }
};

// Export the connection function to use in other files
module.exports = connectDB;
