// src/pages/Dashboard.jsx
// Main dashboard with symptom selector and profile

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SymptomSelector from "../components/SymptomSelector";
import PatientProfile from "../components/PatientProfile";
import QuickHealthTips from "../components/QuickHealthTips";
import API from "../api/axios";

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [profile, setProfile] = useState({
    age: 30,
    weight: 65,
    height: 170,
    bmi: null,
    smoking: "Non-Smoker",
    diabetes: "No Diabetes",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canPredict = selectedSymptoms.length >= 2;

  const handlePredict = async () => {
    if (!canPredict) return;

    setLoading(true);
    setError("");

    try {
      const response = await API.post("/predict", {
        symptoms: selectedSymptoms,
        profile: {
          age: profile.age,
          weight: profile.weight,
          height: profile.height,
          bmi: profile.bmi
            ? profile.bmi < 18.5
              ? "Underweight"
              : profile.bmi < 25
              ? "Normal"
              : profile.bmi < 30
              ? "Overweight"
              : "Obese"
            : "Normal",
          smoking: profile.smoking,
          diabetes: profile.diabetes,
        },
      });

      // Navigate to prediction page with result
      navigate("/prediction", { state: { result: response.data } });
    } catch (err) {
      console.error("Prediction error:", err);
      setError(
        err.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT: Main content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                  From Symptoms to Possible Diseases
                </h1>
                <p className="text-gray-600 mt-1">
                  Get quick, accurate predictions based on your symptoms.
                </p>
              </div>

              {/* Symptom Selector */}
              <SymptomSelector
                selected={selectedSymptoms}
                setSelected={setSelectedSymptoms}
              />

              {/* Patient Profile */}
              <PatientProfile profile={profile} setProfile={setProfile} />

              {/* Error */}
              {error && (
                <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <p className="text-red-700 text-sm">❌ {error}</p>
                </div>
              )}

              {/* Predict Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handlePredict}
                  disabled={!canPredict || loading}
                  className={`px-8 py-4 rounded-xl font-semibold text-white transition-all ${
                    canPredict && !loading
                      ? "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 shadow-lg hover:shadow-xl"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  {loading
                    ? "Analyzing..."
                    : canPredict
                    ? "Predict Now →"
                    : "Select at least 2 symptoms"}
                </button>
              </div>
            </div>

            {/* RIGHT: Quick Health Tips */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <QuickHealthTips />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}