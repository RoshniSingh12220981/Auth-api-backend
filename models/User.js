const mongoose = require('mongoose');
// Define the schema for user preferences
// This schema will store user-specific settings like theme and layout preferences
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
