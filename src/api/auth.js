import axios from "axios";

const BASE = import.meta.env.VITE_API_BASE_URL || "https://sajcarpet-gixu.onrender.com";

export async function login(username, password) {
  const { data } = await axios.post(`${BASE}/api/token/`, { username, password });
  localStorage.setItem("access", data.access);
  localStorage.setItem("refresh", data.refresh);
  return data;
}

export function logout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
}

export function isLoggedIn() {
  return !!localStorage.getItem("access");
}
