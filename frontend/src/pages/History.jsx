// src/pages/History.jsx
// Shows all past predictions for the logged-in user

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import API from "../api/axios";
import { Calendar, Activity, ChevronRight } from "lucide-react";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await API.get("/history");
        setHistory(response.data);
      } catch (err) {
        console.error("History fetch error:", err);
        setError("Could not load history. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  // Format date nicely
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hr ago`;
    if (diffDays < 7) return `${diffDays} days ago`;

    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Confidence color
  const getConfidenceColor = (conf) => {
    if (conf >= 70) return "text-red-600 bg-red-50";
    if (conf >= 40) return "text-yellow-600 bg-yellow-50";
    return "text-green-600 bg-green-50";
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <span>📜</span> Prediction History
            </h1>
            <p className="text-gray-600 mt-1">
              Your past symptom analyses and their results.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <p className="text-gray-500">Loading history...</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
              <p className="text-red-700 text-sm">❌ {error}</p>
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && history.length === 0 && (
            <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
              <div className="text-5xl mb-4">📋</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                No predictions yet
              </h2>
              <p className="text-gray-600 mb-4">
                Go to the dashboard and make your first prediction!
              </p>
              <a
                href="/dashboard"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Go to Dashboard →
              </a>
            </div>
          )}

          {/* History list */}
          {!loading && !error && history.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm text-gray-500 mb-3">
                {history.length} predictions found
              </p>

              {history.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Left: Disease info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-800">
                          {item.topPrediction}
                        </h3>
                        <span
                          className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold ${getConfidenceColor(
                            item.confidence
                          )}`}
                        >
                          {item.confidence.toFixed(1)}%
                        </span>
                      </div>

                      {/* Symptoms */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.symptoms?.slice(0, 5).map((sym, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md"
                          >
                            {sym}
                          </span>
                        ))}
                        {item.symptoms?.length > 5 && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-md">
                            +{item.symptoms.length - 5} more
                          </span>
                        )}
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {formatDate(item.createdAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Activity size={12} />
                          {item.allPredictions?.length || 0} diseases analyzed
                        </span>
                      </div>
                    </div>

                    {/* Right: Chevron */}
                    <ChevronRight size={20} className="text-gray-400 mt-2" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}