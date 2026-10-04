// backend/middleware/auth.js
// Middleware to verify JWT tokens on protected routes

const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  // Get token from Authorization header
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "No token, access denied" });
  }

  // Token format: "Bearer <token>"
  const token = authHeader.replace("Bearer ", "").trim();

  if (!token) {
    return res.status(401).json({ error: "Invalid token format" });
  }

  try {
    // Verify token with secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next(); // Continue to the actual route
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

module.exports = auth;