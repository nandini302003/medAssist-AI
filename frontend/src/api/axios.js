import axios from "axios";

// Use VITE_API_URL from environment (Vercel pe set karenge)
// Fallback to localhost for local development
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});