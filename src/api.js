import axios from "axios";

const BASE = import.meta.env.VITE_API_BASE_URL || "https://sajcarpet-gixu.onrender.com";

export async function fetchProducts() {
  const { data } = await axios.get(`${BASE}/api/products/`);
  return data;
}

export async function login(username, password) {
  const { data } = await axios.post(`${BASE}/api/token/`, { username, password });
  // store tokens so admin calls can use them
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

export async function fetchAdminProducts() {
  const access = localStorage.getItem("access");
  if (!access) throw new Error("No token");
  const { data } = await axios.get(`${BASE}/api/productscrud/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
  return data;
}
