// This file defines the routes for user authentication
const app = require('./app');
// Load environment variables

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend server is running 🚀');
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
