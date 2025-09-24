"use client";


// Example categories array
const categories = [
  {
    id: 1,
    title: "Carpets & Rugs",
    image: "https://c.animaapp.com/ypxcOp9T/img/carpets.png",
    link: "/shop/carpets",
  },
  {
    id: 2,
    title: "Beds & Mattresses",
    image: "https://c.animaapp.com/ypxcOp9T/img/carpets-1.png",
    link: "/shop/beds",
  },
  // Add more categories as needed
];

const Options = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-8 md:px-16 lg:px-[300px] bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
        Shop by Category
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative flex flex-col items-center justify-end h-80 sm:h-96 rounded-xl overflow-hidden cursor-pointer group"
            style={{
              backgroundImage: `url(${category.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-40 transition duration-300" />

            <div className="relative z-10 flex flex-col items-center gap-2 p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {category.title}
              </h2>
              <a
                href={category.link}
                className="text-lg sm:text-xl md:text-2xl text-secondary underline mt-2"
              >
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
