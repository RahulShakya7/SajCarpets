// /src/components/ProductList.jsx
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";

export default function ProductList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    (async ()=>{
      try {
        const data = await fetchProducts();
        setItems(data);
      } finally {
        setLoading(false);
      }
    })();
  },[]);

  if (loading) return <p>Loading products…</p>;
  return (
    <ul>
      {items.map(p => (
        <li key={p.id}>
          <strong>{p.name || p.title}</strong> — {p.price ?? ""}
        </li>
      ))}
    </ul>
  );
}
