export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const productImages = [
    "/images/carpet1.jpg",
    "/images/carpet2.jpg",
    "/images/carpet3.jpg",
    "/images/carpet4.jpg",
  ];

  const similarProducts = [
    { id: 1, title: "Light Square Carpet", image: "/images/carpet1.jpg", price: "£24.99" },
    { id: 2, title: "Dark Rug", image: "/images/carpet2.jpg", price: "£29.99" },
    { id: 3, title: "Pattern Carpet", image: "/images/carpet3.jpg", price: "£19.99" },
    { id: 4, title: "Classic Rug", image: "/images/carpet4.jpg", price: "£39.99" },
  ];

  const reviews = [
    { user: "Alice", rating: 5, comment: "Excellent quality!" },
    { user: "Bob", rating: 4, comment: "Very comfortable." },
    { user: "Charlie", rating: 3, comment: "Good but pricey." },
  ];

  const countdownTarget = new Date();
  countdownTarget.setDate(countdownTarget.getDate() + 5); // 5 days from now

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gray-50">
      {/* Images */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex sm:flex-col gap-2">
          {productImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className={`w-20 h-20 sm:w-24 sm:h-24 object-cover cursor-pointer rounded ${selectedImage === idx ? "border-2 border-orange-500" : "border"}`}
              onClick={() => setSelectedImage(idx)}
            />
          ))}
        </div>
        <div className="flex-1">
          <img
            src={productImages[selectedImage]}
            alt="Selected product"
            className="w-full h-80 sm:h-96 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 sm:mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Luxury Carpet</h1>
        <StarRating rating={4} />
        <p className="mt-2 text-2xl sm:text-3xl text-orange-500 font-bold">£120</p>
        <CountdownTimer targetDate={countdownTarget} />
        <div className="flex items-center gap-3 mt-4">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-1 bg-gray-200 rounded">-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 sm:mt-8">
        <div className="flex gap-4 border-b">
          <button
            className={`pb-2 ${activeTab === "description" ? "border-b-2 border-orange-500 font-bold" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`pb-2 ${activeTab === "reviews" ? "border-b-2 border-orange-500 font-bold" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className="mt-4">
          {activeTab === "description" && <p>This luxurious carpet is made from high-quality materials, perfect for your living room or office. Durable, easy to clean, and stylish.</p>}
          {activeTab === "reviews" && <Reviews reviews={reviews} />}
        </div>
      </div>

      {/* Similar Products */}
      <h2 className="mt-10 mb-4 text-xl font-bold">You may also like</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {similarProducts.map(prod => <ProductCard key={prod.id} product={prod} />)}
      </div>
    </div>
  );
}
