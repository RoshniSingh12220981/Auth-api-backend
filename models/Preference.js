const mongoose = require('mongoose');
// Define the schema for user preferences
// This schema will store user-specific settings like theme and layout preferences
const preferenceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  theme: String,
  layout: String
});

module.exports = mongoose.model('Preference', preferenceSchema);
