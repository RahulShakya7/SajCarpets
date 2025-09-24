// src/app/listing/page.jsx
"use client";

import { useState } from "react";
import ProductCard from "../components/productcard";

const products = [
  { id: 1, name: "Luxury Carpet", description: "Soft and elegant design.", price: 120, image: "/images/carpet1.jpg", category: "carpets" },
  { id: 2, name: "Classic Carpet", description: "Durable and stylish carpet.", price: 350, image: "/images/carpet2.jpg", category: "carpets" },
  { id: 3, name: "Modern Carpet", description: "Perfect for contemporary homes.", price: 150, image: "/images/carpet3.jpg", category: "rugs" },
  { id: 4, name: "Persian Carpet", description: "Handmade traditional style.", price: 220, image: "/images/carpet4.jpg", category: "carpets" },
  { id: 5, name: "Persian Carpet", description: "Handmade traditional style.", price: 220, image: "/images/carpet4.jpg", category: "carpets" },
  { id: 6, name: "Persian Carpet", description: "Handmade traditional style.", price: 220, image: "/images/carpet4.jpg", category: "carpets" },
  { id: 7, name: "Persian Carpet", description: "Handmade traditional style.", price: 220, image: "/images/carpet4.jpg", category: "carpets" },
];

const tabs = ["all", "beds", "carpets", "rugs"];

export default function ListingPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="bg-blue-50 px-4 sm:px-8 md:px-16 lg:px-[200px] xl:px-[300px] py-12 md:py-[72px]">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl text-black font-bold text-center mb-8">
        Featured Products
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        {tabs.map((tab, index) => (
          <div key={tab} className="flex items-center">
            <button
              onClick={() => setActiveTab(tab)}
              className={`uppercase text-xl transition ${
                activeTab === tab ? "text-primary font-bold" : "text-gray-400"
              }`}
            >
              {tab}
            </button>
            {index < tabs.length - 1 && (
              <span className="mx-6 text-gray-200">•</span>
            )}
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 lg:gap-12">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="flex items-center justify-center h-[350px] col-span-full">
            <p className="text-gray-500 text-xl font-semibold text-center">
              No products yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
