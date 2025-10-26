// /src/App.jsx (Vite) or a page in Next.js
import { useState } from "react";
import { isLoggedIn, logout } from "./api/auth";
import AdminProducts from "./components/AdminProducts";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";

export default function App() {
  const [_, force] = useState({}); // quick re-render trick after login/logout
  return (
    <div style={{padding:16}}>
      <header style={{display:"flex", justifyContent:"space-between", marginBottom:16}}>
        <h2>SAJ Carpet</h2>
        {isLoggedIn()
          ? <button onClick={()=>{ logout(); force({}); }}>Logout</button>
          : null}
      </header>

      <h3>Public Products</h3>
      <ProductList />

      <hr style={{margin:"24px 0"}}/>

      <h3>Admin</h3>
      {isLoggedIn() ? <AdminProducts /> : <LoginForm onSuccess={()=>force({})} />}
    </div>
  );
}
