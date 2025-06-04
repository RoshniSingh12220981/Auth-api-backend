const jwt = require('jsonwebtoken');
// Middleware to protect routes and verify JWT token
module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;
console.log('authHeader:', authHeader)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
// Extract the token from the Authorization header
  const token = authHeader.split(' ')[1];
// console.log('token:', token)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // decoded = { id, iat, exp }
    
    next();
  } catch (err) {
    console.error('Token verification failed:', err);
    res.status(401).json({ msg: 'Invalid token' });
  }
};
