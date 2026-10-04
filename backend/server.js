// backend/server.js
// Main Express server for MedAssist AI backend

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const authRoutes = require("./routes/auth");
const predictRoutes = require("./routes/predict");

const app = express();

// ---------- Middleware ----------
app.use(cors());
app.use(express.json());

// ---------- Routes ----------
app.use("/api/auth", authRoutes);
app.use("/api", predictRoutes);

// ---------- Test route ----------
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "MedAssist AI Backend is running",
    version: "1.0.0"
  });
});

// ---------- Connect to MongoDB ----------
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    console.log(`   Database: ${mongoose.connection.name}`);
    console.log(`   Host: ${mongoose.connection.host}`);
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed");
    console.error("   Error:", err.message);
    process.exit(1);
  });

// ---------- Start server ----------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`   Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`   Routes loaded:`);
  console.log(`     - POST /api/auth/register`);
  console.log(`     - POST /api/auth/login`);
  console.log(`     - GET  /api/symptoms`);
  console.log(`     - POST /api/predict`);
  console.log(`     - GET  /api/history`);
});