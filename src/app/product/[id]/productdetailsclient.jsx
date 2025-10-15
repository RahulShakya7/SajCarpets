// app/product/[id]/ProductDetailsClient.jsx
"use client";

import { useState } from "react";
import {
    attributes,
    attributeValues,
    categories,
    productAttributeValues,
    productImages,
    products,
    reviews
} from "../../../data/tempdata";
import Button from "../../components/button";
import CountdownTimer from "../../components/countdown";
import Reviews from "../../product/[id]/reviews";
import ProductCard from "../../product/productcard";

function getCategoryTrail(category_id) {
  const trail = [];
  let current = categories.find((c) => c.id === category_id);
  while (current) {
    trail.unshift(current); // build from top → down
    current = current.parent_id
      ? categories.find((c) => c.id === current.parent_id)
      : null;
  }
  return trail;
}

// collect images for a product
function getImages(product_id) {
  return productImages
    .filter((pi) => pi.product_id === product_id)
    .map((pi) => ({ src: pi.image, alt: pi.alt_text || "" }));
}

// attributes grouped (e.g., { Color: ["Ivory"], Size: ["160×230 cm", ...] })
function getAttributeGroups(product_id) {
  const rows = productAttributeValues.filter((pav) => pav.product_id === product_id);
  const groups = {};
  rows.forEach((r) => {
    const val = attributeValues.find((av) => av.id === r.attributevalue_id);
    if (!val) return;
    const attr = attributes.find((a) => a.id === val.attribute_id);
    if (!attr) return;
    if (!groups[attr.name]) groups[attr.name] = [];
    groups[attr.name].push(val.value);
  });
  return groups;
}

// simple “similar” = same category, different product
function getSimilar(product) {
  return products
    .filter((p) => p.id !== product.id && p.category_id === product.category_id && p.is_active)
    .slice(0, 8)
    .map((p) => {
      const firstImg = getImages(p.id)[0]?.src ||
        "https://via.placeholder.com/600x400?text=Rug";
      return {
        id: p.id,
        title: p.name,
        image: firstImg,
        price: `£${(p.discount_price ?? p.price).toFixed(2)}`,
        originalPrice: p.discount_price ? `£${p.price.toFixed(2)}` : null,
      };
    });
}

// reviews for product
function getReviews(product_id) {
  return reviews.filter((r) => r.product_id === product_id);
}

function StarRating({ rating = 0, outOf = 5, size = "w-5 h-5" }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {Array.from({ length: outOf }).map((_, i) => (
          <svg
            key={i}
            className={`${size} ${i < rating ? "text-product-star fill-current" : "text-gray-300"}`}
            viewBox="0 0 20 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99922 15.3789L14.2742 18.0078C14.3851 18.0751 14.5135 18.1081 14.6432 18.1024C14.7728 18.0968 14.8979 18.0529 15.0025 17.9762C15.1072 17.8996 15.1868 17.7936 15.2313 17.6717C15.2758 17.5498 15.2831 17.4174 15.2523 17.2914L14.0898 12.3859L17.8945 9.10465C17.9915 9.01948 18.0615 8.90776 18.0957 8.78328C18.13 8.65881 18.127 8.52704 18.0872 8.40423C18.0474 8.28143 17.9725 8.17297 17.8718 8.09224C17.771 8.01151 17.6488 7.96205 17.5203 7.94997L12.5273 7.54372L10.6039 2.88747C10.5549 2.76734 10.4712 2.66454 10.3635 2.59218C10.2558 2.51982 10.129 2.48117 9.99922 2.48117C9.86947 2.48117 9.74266 2.51982 9.63497 2.59218C9.52727 2.66454 9.44357 2.76734 9.39453 2.88747L7.4711 7.54372L2.47813 7.94997C2.34873 7.96133 2.22554 8.01057 2.12396 8.09154C2.02239 8.17251 1.94692 8.28161 1.90699 8.40522C1.86707 8.52884 1.86445 8.66147 1.89947 8.78656C1.9345 8.91165 2.0056 9.02365 2.10391 9.10856L5.9086 12.3898L4.7461 17.2914C4.71536 17.4174 4.72269 17.5498 4.76716 17.6717C4.81162 17.7936 4.89122 17.8996 4.9959 17.9762C5.10058 18.0529 5.22564 18.0968 5.35528 18.1024C5.48491 18.1081 5.6133 18.0751 5.72422 18.0078L9.99922 15.3789Z"
              stroke={i < rating ? "#FFD230" : "#000"}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default function ProductDetailsClient({  product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const productImages = Array.isArray(product.heroImages) ? product.heroImages : [];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* main container with responsive padding; 300px on lg */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-[300px] py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Product Images */}
          <div className="w-full lg:w-[596px] flex flex-col gap-6">
            <div className="relative">
              <img
                src={productImages[selectedImage]}
                alt={product.title}
                className="w-full h-[400px] lg:h-[717px] object-cover rounded-lg"
              />
              {/* Zoom-ish Icon */}
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-product-border-light rounded flex items-center justify-center">
                <svg className="w-3 h-4" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.17248 8.54887C6.22674 8.60313 6.25387 8.66552 6.25387 8.73606C6.25387 8.80659 6.22674 8.86898 6.17248 8.92324L3.47053 11.6252L4.64246 12.7971C4.74555 12.9002 4.79709 13.0223 4.79709 13.1633C4.79709 13.3044 4.74555 13.4265 4.64246 13.5296C4.53938 13.6327 4.4173 13.6842 4.27624 13.6842H0.630233C0.489167 13.6842 0.367091 13.6327 0.264005 13.5296C0.160918 13.4265 0.109375 13.3044 0.109375 13.1633V9.51734C0.109375 9.37628 0.160918 9.2542 0.264005 9.15112C0.367091 9.04803 0.489167 8.99649 0.630233 8.99649C0.771298 8.99649 0.893374 9.04803 0.996461 9.15112L2.16839 10.323L4.87034 7.6211C4.92459 7.56684 4.98699 7.53971 5.05752 7.53971C5.12805 7.53971 5.19045 7.56684 5.24471 7.6211L6.17248 8.54887ZM12.61 1.70448V5.35048C12.61 5.49155 12.5584 5.61362 12.4553 5.71671C12.3522 5.8198 12.2302 5.87134 12.0891 5.87134C11.948 5.87134 11.826 5.8198 11.7229 5.71671L10.5509 4.54478L7.84899 7.24673C7.79474 7.30099 7.73234 7.32811 7.66181 7.32811C7.59128 7.32811 7.52888 7.30099 7.47463 7.24673L6.54685 6.31895C6.49259 6.2647 6.46547 6.2023 6.46547 6.13177C6.46547 6.06124 6.49259 5.99884 6.54685 5.94459L9.2488 3.24264L8.07687 2.07071C7.97378 1.96762 7.92224 1.84555 7.92224 1.70448C7.92224 1.56341 7.97378 1.44134 8.07687 1.33825C8.17995 1.23517 8.30203 1.18362 8.4431 1.18362H12.0891C12.2302 1.18362 12.3522 1.23517 12.4553 1.33825C12.5584 1.44134 12.61 1.56341 12.61 1.70448Z"
                    fill="#B23017"
                  />
                </svg>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-6 overflow-x-auto">
              {productImages.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-32 h-44 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage(index + 1)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 w-full flex flex-col gap-4">
            {/* Title + tiny nav */}
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-open-sans font-bold text-product-text leading-8">
                {product.title}
              </h1>

              <div className="flex gap-2">
                <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                  {/* left chevron */}
                  <svg className="w-1 h-4" viewBox="0 0 6 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.54073 4.64795C5.59643 4.70365 5.62428 4.7677 5.62428 4.84011C5.62428 4.91252 5.59643 4.97658 5.54073 5.03228L2.25725 8.31576L5.54073 11.5992C5.59643 11.6549 5.62428 11.719 5.62428 11.7914C5.62428 11.8638 5.59643 11.9279 5.54073 11.9836L5.12299 12.4013C5.06729 12.457 5.00323 12.4849 4.93082 12.4849C4.85841 12.4849 4.79436 12.457 4.73866 12.4013L0.845268 8.50792C0.789568 8.45222 0.761719 8.38817 0.761719 8.31576C0.761719 8.24335 0.789568 8.1793 0.845268 8.1236L4.73866 4.2302C4.79436 4.1745 4.85841 4.14666 4.93082 4.14666C5.00323 4.14666 5.06729 4.1745 5.12299 4.2302L5.54073 4.64795Z" fill="#B23017"/>
                  </svg>
                </button>

                <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                  {/* right chevron */}
                  <svg className="w-1 h-4" viewBox="0 0 6 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.21763 8.13827C5.27344 8.19407 5.30134 8.25825 5.30134 8.33079C5.30134 8.40334 5.27344 8.46751 5.21763 8.52332L1.31696 12.424C1.26116 12.4798 1.19699 12.5077 1.12444 12.5077C1.0519 12.5077 0.987723 12.4798 0.93192 12.424L0.513393 12.0055C0.457589 11.9497 0.429688 11.8855 0.429688 11.8129C0.429688 11.7404 0.457589 11.6762 0.513393 11.6204L3.80301 8.33079L0.513393 5.04117C0.457589 4.98537 0.429688 4.9212 0.429688 4.84865C0.429688 4.77611 0.457589 4.71193 0.513393 4.65613L0.93192 4.2376C0.987723 4.1818 1.0519 4.1539 1.12444 4.1539C1.19699 4.1539 1.26116 4.1818 1.31696 4.2376L5.21763 8.13827Z" fill="#B23017"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <StarRating rating={product.rating || 0} />
              <span className="text-base font-montserrat text-product-text">
                ({product.reviewsCount || 0} customer review{(product.reviewsCount || 0) === 1 ? "" : "s"})
              </span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="text-2xl font-montserrat text-product-text">
                <span className="font-normal">£{product.price?.toFixed(2)} </span>
                {product.originalPrice && (
                  <span className="line-through">£{Number(product.originalPrice).toFixed(2)}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-base font-montserrat text-product-text leading-6 mb-6">
              {product.description}
            </p>

            {/* Countdown */}
            <div className="mb-6">
              <CountdownTimer />
            </div>

            {/* Stock + Qty + CTA */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-xl font-open-sans font-bold text-gray-400">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>

              <div className="flex items-center border border-product-border rounded-lg">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-28 px-3 py-3 text-center text-xl font-montserrat border-0 bg-transparent outline-none"
                  min="1"
                />
              </div>

              {/* using your Button component */}
              <Button className="bg-product-orange text-white px-6 py-3 rounded-lg text-xl font-open-sans font-bold uppercase hover:bg-opacity-90 transition-colors">
                Enquire Now
              </Button>
            </div>

            {/* Wishlist / Compare using Button component */}
            <div className="flex gap-6 mb-6">
              <Button className="flex items-center gap-2 border border-product-border-light bg-gray-200 px-6 py-3 rounded-lg text-base font-open-sans text-gray-400 hover:border-gray-400 transition-colors">
                <span>Wishlist</span>
                <svg className="w-5 h-5" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 17.59C10 17.59 1.875 13.215 1.875 8.05872C1.875 6.93983 2.31947 5.86678 3.11064 5.07561C3.90181 4.28444 4.97487 3.83997 6.09375 3.83997C7.85859 3.83997 9.37031 4.80168 10 6.33997C10.6297 4.80168 12.1414 3.83997 13.9062 3.83997C15.0251 3.83997 16.0982 4.28444 16.8894 5.07561C17.6805 5.86678 18.125 6.93983 18.125 8.05872C18.125 13.215 10 17.59 10 17.59Z" stroke="#EC003F" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>

              <Button className="border border-product-border-light bg-gray-200 px-6 py-3 rounded-lg text-base font-open-sans text-gray-400 hover:border-gray-400 transition-colors">
                Compare
              </Button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2 border-t border-b border-product-border py-4 mb-6">
              <span className="text-sm font-montserrat font-bold text-product-text uppercase">Categories:</span>
              {Array.isArray(product.categories) &&
                product.categories.map((cat, i) => (
                  <span key={cat} className="text-sm font-montserrat text-product-text">
                    {cat}{i < product.categories.length - 1 ? "," : ""}
                  </span>
                ))}
            </div>

            {/* Social (kept minimal) */}
            <div className="flex items-center gap-5">
              <span className="text-sm font-montserrat font-bold text-product-text uppercase">
                Share this product
              </span>
              <div className="flex gap-5">
                <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity" aria-label="Share">
                  <span className="text-sm">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12 border-t border-b border-gray-200">
          <div className="py-6">
            <div className="bg-product-tab-bg rounded-lg p-4 flex justify-center mb-8">
              <div className="flex gap-12">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`text-xl font-montserrat font-medium capitalize leading-7 ${activeTab === "description" ? "text-product-text" : "text-gray-600"}`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`text-xl font-montserrat font-medium capitalize leading-7 ${activeTab === "reviews" ? "text-product-text" : "text-gray-600"}`}
                >
                  Reviews ({product.reviewsCount || 0})
                </button>
              </div>
            </div>

            <div className="pb-8">
              {activeTab === "description" && (
                <div className="space-y-4">
                  <p className="text-base font-montserrat text-product-text leading-6">{product.description}</p>
                  <p className="text-base font-montserrat text-product-text leading-6">{product.details}</p>
                </div>
              )}
              {activeTab === "reviews" && <Reviews reviews={product.reviews || []} />}
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="py-16">
          <h2 className="text-center text-5xl font-open-sans font-bold text-black leading-[120%] mb-12">
            Similar Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(product.similar || []).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
