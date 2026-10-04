// src/components/RecentSearches.jsx
// Shows recent predictions in the dashboard right panel

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { Clock, ArrowRight } from "lucide-react";

export default function RecentSearches() {
  const [searches, setSearches] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const response = await API.get("/history");
        // Show only top 5 recent
        setSearches(response.data.slice(0, 5));
      } catch (err) {
        console.error("Recent searches error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecent();
  }, []);

  // Format relative time
  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hr ago`;
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;

    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Clock size={16} className="text-purple-500" />
          Recent Searches
        </h3>
        {searches.length > 0 && (
          <button
            onClick={() => navigate("/history")}
            className="text-xs text-purple-600 font-medium hover:underline flex items-center gap-1"
          >
            View All <ArrowRight size={12} />
          </button>
        )}
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-sm text-gray-400 text-center py-4">Loading...</p>
      )}

      {/* Empty state */}
      {!loading && searches.length === 0 && (
        <div className="text-center py-6">
          <p className="text-sm text-gray-400">No recent searches</p>
          <p className="text-xs text-gray-400 mt-1">
            Make a prediction to see it here
          </p>
        </div>
      )}

      {/* Search list */}
      {!loading && searches.length > 0 && (
        <div className="space-y-2">
          {searches.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate("/history")}
              className="p-3 rounded-xl hover:bg-purple-50 cursor-pointer transition-all border border-transparent hover:border-purple-200"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {item.topPrediction}
                </p>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-md flex-shrink-0 ${
                    item.confidence >= 70
                      ? "bg-red-50 text-red-600"
                      : item.confidence >= 40
                      ? "bg-yellow-50 text-yellow-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {item.confidence.toFixed(0)}%
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate">
                {item.symptoms?.slice(0, 3).join(", ")}
                {item.symptoms?.length > 3 && ` +${item.symptoms.length - 3}`}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {formatTime(item.createdAt)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}