// src/pages/Profile.jsx
// User profile page with account info and logout

import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { User, Mail, Calendar, LogOut, Shield, Activity } from "lucide-react";
import { useEffect, useState } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        console.error("Error parsing user:", e);
      }
    }
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <span>👤</span> Profile
            </h1>
            <p className="text-gray-600 mt-1">
              Manage your account and preferences.
            </p>
          </div>

          {/* Profile card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {/* Avatar + name */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <span className="text-3xl text-white font-bold">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {user?.name || "User"}
                </h2>
                <p className="text-gray-500">{user?.email || "No email"}</p>
              </div>
            </div>

            {/* Info list */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <User size={20} className="text-purple-500" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Full Name</p>
                  <p className="font-medium text-gray-800">
                    {user?.name || "—"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <Mail size={20} className="text-purple-500" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Email Address</p>
                  <p className="font-medium text-gray-800">
                    {user?.email || "—"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <Calendar size={20} className="text-purple-500" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Member Since</p>
                  <p className="font-medium text-gray-800">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : "Recently joined"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Activity size={20} className="text-green-500" />
                <p className="text-sm font-semibold text-gray-700">
                  Total Predictions
                </p>
              </div>
              <p className="text-2xl font-bold text-gray-800">—</p>
              <p className="text-xs text-gray-500 mt-1">
                Check History page for details
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Shield size={20} className="text-blue-500" />
                <p className="text-sm font-semibold text-gray-700">
                  Account Status
                </p>
              </div>
              <p className="text-2xl font-bold text-green-600">Active</p>
              <p className="text-xs text-gray-500 mt-1">
                Your data is securely stored
              </p>
            </div>
          </div>

          {/* Logout button */}
          <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Account Actions</h3>
            <p className="text-sm text-gray-500 mb-4">
              Logout from your account on this device.
            </p>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all shadow-sm hover:shadow-md"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}