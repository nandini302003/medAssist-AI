// src/components/Sidebar.jsx
// Left sidebar navigation for dashboard

import { Link, useLocation } from "react-router-dom";
import { Home, History, User } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

    const navItems = [
    { path: "/dashboard", label: "Home", icon: Home },
    { path: "/history", label: "History", icon: History },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">🩺</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-800">MedAssist AI</h1>
            <p className="text-xs text-gray-500">Your AI Health Assistant</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-400 text-center italic">
          "Small steps towards better health"
        </p>
      </div>
    </aside>
  );
}