// src/components/ProductCard.jsx
"use client";

import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col w-full p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="rounded-md object-cover w-full h-[200px] md:h-[250px] lg:h-[300px]"
      />
      <h3 className="mt-4 text-black text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 text-sm md:text-base">{product.description}</p>
      <p className="mt-2 text-3xl font-bold text-primary ">£{product.price}</p>
      <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-gray-800">
        Enquire Now
      </button>
    </div>
  );
};

export default ProductCard;
