// src/pages/HealthTips.jsx
// Static health tips and lifestyle advice

import Sidebar from "../components/sidebar";
import {
  Heart,
  Droplet,
  Moon,
  Apple,
  Activity,
  Brain,
  Shield,
  Sun,
} from "lucide-react";

export default function HealthTips() {
  const tips = [
    {
      icon: Droplet,
      color: "text-blue-500",
      bg: "bg-blue-50",
      title: "Stay Hydrated",
      description:
        "Drink 8-10 glasses of water daily. Helps digestion, skin, and energy levels.",
    },
    {
      icon: Apple,
      color: "text-green-500",
      bg: "bg-green-50",
      title: "Eat Balanced Meals",
      description:
        "Include fruits, vegetables, whole grains, and protein. Avoid processed foods.",
    },
    {
      icon: Moon,
      color: "text-purple-500",
      bg: "bg-purple-50",
      title: "Sleep 7-8 Hours",
      description:
        "Good sleep improves memory, mood, and immunity. Keep a fixed sleep schedule.",
    },
    {
      icon: Activity,
      color: "text-orange-500",
      bg: "bg-orange-50",
      title: "Exercise 30 Min Daily",
      description:
        "Walking, yoga, or any activity. Helps heart, weight, and mental health.",
    },
    {
      icon: Brain,
      color: "text-pink-500",
      bg: "bg-pink-50",
      title: "Manage Stress",
      description:
        "Meditate, breathe deeply, or take breaks. Stress affects everything.",
    },
    {
      icon: Shield,
      color: "text-red-500",
      bg: "bg-red-50",
      title: "Avoid Smoking & Alcohol",
      description:
        "Major causes of heart disease, cancer, and liver damage. Quit today.",
    },
    {
      icon: Sun,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      title: "Get Sunlight Daily",
      description:
        "15-20 min of morning sun for Vitamin D. Boosts mood and bones.",
    },
    {
      icon: Heart,
      color: "text-rose-500",
      bg: "bg-rose-50",
      title: "Regular Health Checkups",
      description:
        "Yearly checkup for BP, sugar, and cholesterol. Early detection saves lives.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <span>💡</span> Health Tips
            </h1>
            <p className="text-gray-600 mt-1">
              Simple daily habits for a healthier, longer life.
            </p>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tips.map((tip, i) => {
              const Icon = tip.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${tip.bg}`}
                    >
                      <Icon size={24} className={tip.color} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">
                        {tip.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 text-center">
            <p className="text-sm text-gray-700 italic">
              "Take care of your body. It's the only place you have to live."
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}