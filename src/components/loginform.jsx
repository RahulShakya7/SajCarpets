// /src/components/LoginForm.jsx
import { useState } from "react";
import { login } from "../api/auth";

export default function LoginForm({ onSuccess }) {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [err, setErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    try {
      await login(username, password);
      onSuccess?.();
    } catch {
      setErr("Invalid credentials");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
      <input value={username} onChange={(e)=>setUser(e.target.value)} placeholder="Username" />
      <input value={password} onChange={(e)=>setPass(e.target.value)} placeholder="Password" type="password" />
      <button type="submit">Login</button>
      {err && <div style={{color:"red"}}>{err}</div>}
    </form>
  );
}
