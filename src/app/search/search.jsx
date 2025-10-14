// import { db } from "@/utils/db"; // your database client

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const query = searchParams.get("q") || "";

//   if (!query) {
//     return new Response(JSON.stringify([]), { status: 200 });
//   }

//   try {
//     // Example using Prisma; adjust for your DB
//     const results = await db.products.findMany({
//       where: {
//         OR: [
//           { name: { contains: query, mode: "insensitive" } },
//           { description: { contains: query, mode: "insensitive" } },
//         ],
//       },
//       take: 10, // limit results
//     });

//     return new Response(JSON.stringify(results), { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error: "Search failed" }), {
//       status: 500,
//     });
//   }
// }

"use client";

import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function SearchPopup({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return setResults([]);

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error("Search error:", error);
      }
      setLoading(false);
    };

    const debounce = setTimeout(fetchResults, 300); // debounce input
    return () => clearTimeout(debounce);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-start p-4 md:p-12">
      <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-4">
          <MagnifyingGlass size={24} weight="bold" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button onClick={onClose}>
            <X size={24} weight="bold" />
          </button>
        </div>

        <div className="mt-4 max-h-64 overflow-y-auto">
          {loading && <p className="text-gray-500">Loading...</p>}
          {!loading && results.length === 0 && query && (
            <p className="text-gray-500">No results found.</p>
          )}
          <ul>
            {results.map((item) => (
              <li key={item.id} className="py-2 border-b border-gray-200 dark:border-gray-700">
                <a href={`/product/${item.id}`} className="flex flex-col">
                  <span className="font-semibold text-gray-800 dark:text-gray-100">{item.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
