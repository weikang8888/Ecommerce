import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3005/ecommerce";

const API = axios.create({
  baseURL: baseURL,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && !config.headers?.Authorization) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
