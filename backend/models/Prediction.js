// backend/models/Prediction.js
// Prediction schema - stores every prediction a user makes

const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  symptoms: {
    type: [String],
    required: true
  },
  profile: {
    age: Number,
    bmi: String,
    smoking: String,
    diabetes: String
  },
  topPrediction: {
    type: String,
    required: true
  },
  confidence: {
    type: Number,
    required: true
  },
  severity: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH"]
  },
  allPredictions: [
    {
      disease: String,
      confidence: Number
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Prediction", predictionSchema);