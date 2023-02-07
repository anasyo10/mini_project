import axios from "axios";
import CSRFToken from "../csrf";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  config.headers["X-CSRF-TOKEN"] = CSRFToken(document.cookie);
  return config;
});

export default api;
