import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "https://nodejsbackend-p8sg.onrender.com/ecommerce";

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
