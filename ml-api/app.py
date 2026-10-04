# ml-api/app.py
# Flask ML API - serves disease predictions via HTTP

from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd

# ---------- Initialize Flask app ----------
app = Flask(__name__)
CORS(app)  # Allow requests from other origins (React will call this)

# ---------- Load the trained model and features ----------
model = joblib.load("model.pkl")
features = joblib.load("features.pkl")

print(f"Model loaded with {len(features)} symptoms and {len(model.classes_)} diseases")


# ---------- ROUTE 1: Health check ----------
@app.route("/health", methods=["GET"])
def health():
    """Simple endpoint to check if the server is running."""
    return jsonify({
        "status": "ok",
        "symptoms_count": len(features),
        "diseases_count": len(model.classes_),
        "message": "ML API is running"
    })


# ---------- ROUTE 2: Get all symptom names ----------
@app.route("/symptoms", methods=["GET"])
def get_symptoms():
    """Returns the full list of symptoms the model knows about."""
    pretty_symptoms = [s.replace("_", " ") for s in features]
    return jsonify({
        "symptoms": pretty_symptoms,
        "count": len(pretty_symptoms)
    })


# ---------- ROUTE 3: Predict disease from symptoms ----------
@app.route("/predict", methods=["POST"])
def predict():
    """Main endpoint - predicts disease from symptoms."""
    data = request.get_json()

    if not data or "symptoms" not in data:
        return jsonify({"error": "Missing 'symptoms' field in request body"}), 400

    raw_symptoms = data["symptoms"]

    if not isinstance(raw_symptoms, list):
        return jsonify({"error": "'symptoms' must be a list"}), 400

    if len(raw_symptoms) < 2:
        return jsonify({"error": "Please provide at least 2 symptoms"}), 400

    # Normalize: "skin rash" -> "skin_rash"
    cleaned = []
    for s in raw_symptoms:
        normalized = str(s).lower().strip().replace(" ", "_")
        if normalized in features:
            cleaned.append(normalized)

    cleaned = list(dict.fromkeys(cleaned))

    if len(cleaned) < 2:
        return jsonify({
            "error": "None or too few of the provided symptoms are recognized",
            "recognized": cleaned
        }), 400

    # Build input vector
    x = pd.DataFrame(
        np.zeros((1, len(features)), dtype=np.int8),
        columns=features
    )
    for symptom in cleaned:
        x.loc[0, symptom] = 1

    # Predict
    probabilities = model.predict_proba(x)[0]
    top_indices = np.argsort(probabilities)[::-1][:5]

    predictions = []
    for idx in top_indices:
        disease = str(model.classes_[idx])
        confidence = round(float(probabilities[idx]) * 100, 2)
        predictions.append({
            "disease": disease,
            "confidence": confidence
        })

    top_confidence = predictions[0]["confidence"]
    sufficient_evidence = top_confidence >= 70

    return jsonify({
        "input_symptoms": [s.replace("_", " ") for s in cleaned],
        "top_prediction": predictions[0]["disease"],
        "confidence": top_confidence,
        "sufficient_evidence": sufficient_evidence,
        "predictions": predictions
    })


# ---------- Run the server ----------
if __name__ == "__main__":
    print("Starting ML API on http://localhost:8000")
    app.run(host="0.0.0.0", port=8000, debug=True)