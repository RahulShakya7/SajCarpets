"use client";

import { useMemo, useState } from "react";
import CatalogueCard from "../components/cataloguecard";

export default function CataloguePageClient({ initialItems = [] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sortBy, setSortBy] = useState(""); // "", "az", "za"

  // Build category set dynamically from data
  const allCategories = useMemo(() => {
    const set = new Set();
    initialItems.forEach((it) => {
      (it.category || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .forEach((c) => set.add(c));
    });
    return ["all", ...Array.from(set)];
  }, [initialItems]);

  const filtered = useMemo(() => {
    let list = initialItems.slice();

    // search (title + description)
    if (q.trim()) {
      const needle = q.toLowerCase();
      list = list.filter(
        (it) =>
          it.title.toLowerCase().includes(needle) ||
          (it.description || "").toLowerCase().includes(needle)
      );
    }

    // category (matches any token in a comma-separated string)
    if (cat !== "all") {
      list = list.filter((it) =>
        (it.category || "")
          .split(",")
          .map((s) => s.trim())
          .includes(cat)
      );
    }

    // sort
    if (sortBy === "az") list.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "za") list.sort((a, b) => b.title.localeCompare(a.title));

    return list;
  }, [initialItems, q, cat, sortBy]);

  return (
    <div className="flex flex-col gap-8">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        {/* Search */}
        <div className="flex-1">
          <label className="sr-only" htmlFor="catalogue-search">Search</label>
          <input
            id="catalogue-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or description…"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base outline-none focus:border-[#b23017]"
          />
        </div>

        {/* Category */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Category:</label>
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm"
          >
            {allCategories.map((c) => (
              <option key={c} value={c}>
                {c === "all" ? "All" : c}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Sort:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm"
          >
            <option value="">Default</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>
        </div>
      </div>

      {/* Grid (auto, responsive) */}
      <div className="grid gap-6 md:gap-8 grid-cols-1">
        {/* Stack cards, two per row on lg+ with masonry-ish balance by letting each card be auto-height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {filtered.map((item) => (
            <CatalogueCard key={item.id} item={item} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-12 border border-dashed border-gray-300 rounded-xl">
            <p className="text-gray-700">No items match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
