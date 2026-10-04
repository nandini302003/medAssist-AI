// src/components/PredictionResult.jsx
// Displays prediction with disease info, precautions, and awareness

import { AlertCircle, CheckCircle2, Shield, BookOpen } from "lucide-react";
import { Download } from "lucide-react";
import { generatePDF } from "../utils/pdfGenerator";



export default function PredictionResult({ result }) {
  if (!result) return null;

  // Get user info from localStorage for PDF
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const {
    top_prediction,
    confidence,
    sufficient_evidence,
    predictions,
    input_symptoms,
  } = result;

  // Get top disease info
  const topInfo = predictions[0] || {};

  // Confidence level → High / Medium / Low
  const getLevel = (conf) => {
    if (conf >= 70) return { label: "HIGH", color: "text-red-600", bg: "bg-red-50", border: "border-red-200" };
    if (conf >= 40) return { label: "MEDIUM", color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-200" };
    return { label: "LOW", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" };
  };

  const level = getLevel(confidence);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">
        {/* Header with Download PDF button */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span className="text-purple-500">🎯</span>
          Prediction Result
        </h2>
          <button
          onClick={() => generatePDF(result, user, result.profile)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
        >
          <Download size={16} />
          Download PDF
        </button>
      </div>

      {/* Main prediction card */}
      <div className={`rounded-2xl p-6 mb-6 ${level.bg} border-2 ${level.border}`}>
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
            sufficient_evidence ? "bg-purple-500" : "bg-yellow-500"
          }`}>
            {sufficient_evidence ? (
              <CheckCircle2 size={28} className="text-white" />
            ) : (
              <AlertCircle size={28} className="text-white" />
            )}
          </div>

          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
              Most Likely Disease
            </p>
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              {top_prediction}
            </h3>

            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className="flex justify-between text-sm text-gray-600 mb-1.5">
                  <span>Confidence</span>
                  <span className="font-bold text-gray-800">
                    {confidence.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-white rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${confidence}%` }}
                  />
                </div>
              </div>

              <div className={`px-4 py-2 rounded-xl text-sm font-bold ${level.bg} ${level.color} border-2 ${level.border}`}>
                {level.label}
              </div>
            </div>

            {!sufficient_evidence && (
              <p className="text-xs text-yellow-700 mt-3">
                ⚠️ Confidence is below 70%. Add more symptoms for a clearer prediction.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      {topInfo.description && (
        <div className="mb-6 p-5 bg-blue-50 border-2 border-blue-100 rounded-2xl">
          <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <BookOpen size={18} className="text-blue-600" />
            About {top_prediction}
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            {topInfo.description}
          </p>
        </div>
      )}

      {/* Precautions */}
      {topInfo.precautions && topInfo.precautions.length > 0 && (
        <div className="mb-6 p-5 bg-green-50 border-2 border-green-100 rounded-2xl">
          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Shield size={18} className="text-green-600" />
            Precautions
          </h4>
          <ul className="space-y-2">
            {topInfo.precautions.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Awareness */}
      {topInfo.awareness && topInfo.awareness.length > 0 && (
        <div className="mb-6 p-5 bg-yellow-50 border-2 border-yellow-100 rounded-2xl">
          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <AlertCircle size={18} className="text-yellow-600" />
            Awareness
          </h4>
          <ul className="space-y-2">
            {topInfo.awareness.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-yellow-600 font-bold mt-0.5">•</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Other possible diseases */}
      {predictions.length > 1 && (
        <div className="pt-5 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Other Possible Diseases
          </p>
          <div className="space-y-2">
            {predictions.slice(1, 5).map((pred, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs font-medium text-gray-400 w-4">
                  {i + 2}.
                </span>
                <span className="text-sm text-gray-700 flex-1 truncate">
                  {pred.disease}
                </span>
                <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"
                    style={{ width: `${pred.confidence}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-gray-600 w-12 text-right">
                  {pred.confidence.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Symptoms recap */}
      {input_symptoms && (
        <div className="mt-6 pt-5 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Based on symptoms:</p>
          <div className="flex flex-wrap gap-1.5">
            {input_symptoms.map((sym, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
              >
                {sym}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 italic">
          ⚠️ Educational tool only. Consult a doctor for medical advice.
        </p>
      </div>
    </div>
  );
}