// This file defines the routes for user authentication
// It includes routes for user registration and login
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// Load environment variables and connect to the database
dotenv.config();
connectDB();
// Import necessary modules
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/profileRoutes'));
app.use('/api', require('./routes/preferenceRoutes'));

module.exports = app;
