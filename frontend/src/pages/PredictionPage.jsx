// src/pages/PredictionPage.jsx
// Dedicated prediction result page

import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import Sidebar from "../components/Sidebar";
import PredictionResult from "../components/PredictionResult";

export default function PredictionPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get result passed from Dashboard
  const result = location.state?.result;

  // If user directly opens this URL without result, redirect to dashboard
  if (!result) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with back button */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all mb-2"
              >
                <ArrowLeft size={18} />
                <span className="text-sm font-medium">Back to Dashboard</span>
              </button>
              <h1 className="text-3xl font-bold text-gray-800">
                Prediction Result
              </h1>
              <p className="text-gray-600 mt-1">
                Based on your symptoms and profile
              </p>
            </div>

            <button
              onClick={() => navigate("/dashboard")}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border-2 border-purple-200 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all"
            >
              <Home size={16} />
              New Prediction
            </button>
          </div>

          {/* Result Card */}
          <PredictionResult result={result} />

          {/* Bottom actions */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <button
              onClick={() => navigate("/history")}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              View History →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}