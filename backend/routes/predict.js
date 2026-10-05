// backend/routes/predict.js
// Prediction routes - handles symptom prediction and history

const express = require("express");
const axios = require("axios");
const auth = require("../middleware/auth");
const Prediction = require("../models/Prediction");
const diseaseInfo = require("../data/diseaseInfo");

const router = express.Router();


// ---------- GET /api/symptoms ----------
router.get("/symptoms", async (req, res) => {
  try {
    const response = await axios.get(`${process.env.ML_API_URL}/symptoms`, {timeout: 60000,});
    res.json(response.data);
  } catch (err) {
    console.error("Symptoms fetch error:", err.message);
    res.status(500).json({ error: "Could not fetch symptoms from ML API" });
  }
});

// ---------- POST /api/predict ----------
router.post("/predict", auth, async (req, res) => {
  try {
    const { symptoms, profile } = req.body;

    if (!symptoms || !Array.isArray(symptoms) || symptoms.length < 2) {
      return res.status(400).json({ error: "At least 2 symptoms required" });
    }

    // Call ML API directly - return its response as-is
    const mlResponse = await axios.post(
  `${process.env.ML_API_URL}/predict`,{ symptoms },{ timeout: 60000 });

    const mlResult = mlResponse.data;

    // Save to MongoDB (optional)
    const savedPrediction = await Prediction.create({
      userId: req.user.id,
      symptoms: mlResult.input_symptoms,
      profile: profile || {},
      topPrediction: mlResult.top_prediction,
      confidence: mlResult.confidence,
      severity: "MEDIUM",
      allPredictions: mlResult.predictions.map((p) => ({
        disease: p.disease,
        confidence: p.confidence,
      })),
    });

         // Enrich predictions with disease info (description, precautions, awareness)
    const enrichedPredictions = mlResult.predictions.map((p) => {
      const info = diseaseInfo[p.disease] || {};
      return {
        disease: p.disease,
        confidence: p.confidence,
        description: info.description || "",
        precautions: info.precautions || [],
        awareness: info.awareness || [],
      };
    });

        res.json({
      ...mlResult,
      predictions: enrichedPredictions,
      topDiseaseInfo: {
        description: diseaseInfo[mlResult.top_prediction]?.description || "",
        precautions: diseaseInfo[mlResult.top_prediction]?.precautions || [],
        awareness: diseaseInfo[mlResult.top_prediction]?.awareness || [],
      },
      profile: profile || {},
      id: savedPrediction._id,
    });

  } catch (err) {
    console.error("Predict error:", err.message);

    if (err.response) {
      return res.status(err.response.status).json(err.response.data);
    }

    res.status(500).json({ error: "Prediction failed" });
  }
});

// ---------- GET /api/history ----------
router.get("/history", auth, async (req, res) => {
  try {
    const history = await Prediction.find({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .limit(50);

    res.json(history);
  } catch (err) {
    console.error("History error:", err.message);
    res.status(500).json({ error: "Could not fetch history" });
  }
});

module.exports = router;