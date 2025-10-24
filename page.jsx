"use client";

import { useMemo, useState } from "react";
import ProductCard from "./src/app/product/productcard";

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([50, 1200]);
  const [selectedView, setSelectedView] = useState("grid");
  const [sortBy, setSortBy] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTag, setActiveTag] = useState(null);

  const categories = ["By Fabric", "By Pile Type", "By Design", "By Room", "By Color"];
  const tags = ["Pattern", "Discount", "Price Drop", "Student Discount", "Deal"];

  const products = useMemo(
    () => [
      { id: 1, title: "Light Square Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/19d1bb41cbd6e0176ebf80317b751d0ccbe3ae2f?width=535", price: 24.99, priceLabel: "£24.99 m2" },
      { id: 2, title: "Soft Velvet Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/173f74973f14a08b13b34ad9a25d4c230bfbd09d?width=535", price: 29.5, priceLabel: "£29.50 m2" },
      { id: 3, title: "Luxury Wool Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/8d17621c679c138d103c75faa659100fee2604bb?width=535", price: 14.99, priceLabel: "£14.99 m2" },
      { id: 4, title: "Classic Beige Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/cf183c868f6c8e3236eb59ddb79b3155d8a73a07?width=535", price: 55.0, priceLabel: "£55.00 m2" },
      { id: 5, title: "Premium Floor Carpet", image: "https://api.builder.io/api/v1/image/assets/TEMP/0bf3841f4705854ba8bd726d45ae44183bee493f?width=535", price: 89.99, priceLabel: "£89.99 m2" },
    ],
    []
  );

  // Filtering and Sorting Logic
  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (activeCategory) {
      list = list.filter((p) => p.id % 2 === (categories.indexOf(activeCategory) % 2));
    }

    if (activeTag) {
      list = list.filter((p) => p.id % 3 === (tags.indexOf(activeTag) % 3));
    }

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return list;
  }, [products, priceRange, activeCategory, activeTag, sortBy]);

  // Price Slider Control
  const minPrice = 0;
  const maxPrice = 2000;
  const handleMinChange = (v) => setPriceRange(([_, high]) => [Math.min(v, high - 1), high]);
  const handleMaxChange = (v) => setPriceRange(([low, _]) => [low, Math.max(v, low + 1)]);

  const leftPercent = ((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100;
  const rightPercent = ((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100;

  return (
    <div className="min-h-screen bg-white font-open-sans px-6 py-12 sm:px-12 lg:px-24 xl:px-48">
      {/* Filters and Sort Bar */}
      <div className="flex flex-col gap-4 mb-12">
        <div className="w-full h-px bg-gray-200" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* View Toggle */}
          <div className="flex items-center gap-6">
            <button onClick={() => setSelectedView("grid")} className={selectedView === "grid" ? "opacity-100" : "opacity-50"}>
              🟦 Grid
            </button>
            <button onClick={() => setSelectedView("list")} className={selectedView === "list" ? "opacity-100" : "opacity-50"}>
              📃 List
            </button>
          </div>

          {/* Sorting */}
          <div className="flex items-center gap-4">
            <span className="text-base text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700"
            >
              <option value="">Select</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Product Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                  className={`text-left px-3 py-2 rounded ${activeCategory === category ? "bg-gray-100 font-bold" : "hover:bg-gray-50"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Price Filter</h3>
            <div className="relative h-2 bg-gray-200 rounded mb-4">
              <div className="absolute h-2 bg-orange-500 rounded" style={{ left: `${leftPercent}%`, width: `${rightPercent - leftPercent}%` }} />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span>£{priceRange[0]}</span> - <span>£{priceRange[1]}</span>
            </div>
            <input type="range" min={minPrice} max={maxPrice} value={priceRange[0]} onChange={(e) => handleMinChange(Number(e.target.value))} className="w-full" />
            <input type="range" min={minPrice} max={maxPrice} value={priceRange[1]} onChange={(e) => handleMaxChange(Number(e.target.value))} className="w-full" />
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-xl font-bold mb-4">Product Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`px-4 py-2 border rounded-lg text-sm ${
                    activeTag === tag ? "border-orange-500 text-orange-500" : "border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-400"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products Section */}
        <div className="flex-1">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${selectedView === "grid" ? "3" : "1"} gap-8`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} view={selectedView} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
