import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://sajcarpet-gixu.onrender.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach Access token if present
api.interceptors.request.use((config) => {
  const access = localStorage.getItem("access");
  if (access) config.headers.Authorization = `Bearer ${access}`;
  return config;
});

// Optional: auto-refresh Access token on 401 if refresh exists
let refreshing = false;
let queue = [];

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      const refresh = localStorage.getItem("refresh");
      if (!refresh) throw error;

      if (refreshing) {
        // queue requests while refresh in progress
        return new Promise((resolve, reject) => queue.push({ resolve, reject, original }));
      }

      try {
        refreshing = true;
        original._retry = true;
        const { data } = await axios.post(`${API_BASE_URL}/api/token/refresh/`, { refresh });
        localStorage.setItem("access", data.access);
        queue.forEach(({ resolve, original }) => {
          original.headers.Authorization = `Bearer ${data.access}`;
          resolve(api(original));
        });
        queue = [];
        original.headers.Authorization = `Bearer ${data.access}`;
        return api(original);
      } catch (e) {
        queue.forEach(({ reject }) => reject(e));
        queue = [];
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        throw e;
      } finally {
        refreshing = false;
      }
    }
    throw error;
  }
);
