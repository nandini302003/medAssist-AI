// src/components/QuickHealthTips.jsx
// Compact health tips for dashboard right panel

import { Lightbulb } from "lucide-react";

export default function QuickHealthTips() {
  const tips = [
    { emoji: "💧", text: "Drink 8 glasses of water daily" },
    { emoji: "😴", text: "Sleep 7-8 hours every night" },
    { emoji: "🚶", text: "Walk 30 minutes every day" },
    { emoji: "🥗", text: "Eat more fruits and vegetables" },
    { emoji: "🧘", text: "Practice deep breathing for stress" },
    { emoji: "☀️", text: "Get 15 min morning sunlight" },
    { emoji: "🚭", text: "Avoid smoking and alcohol" },
    { emoji: "💊", text: "Take medicines on time" },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb size={18} className="text-yellow-500" />
        <h3 className="font-bold text-gray-800">Quick Health Tips</h3>
      </div>

      {/* Tips list */}
      <div className="space-y-2.5">
        {tips.map((tip, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-all"
          >
            <span className="text-lg flex-shrink-0">{tip.emoji}</span>
            <span className="text-sm text-gray-700 leading-snug">
              {tip.text}
            </span>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 italic text-center">
          "Small steps, big health"
        </p>
      </div>
    </div>
  );
}