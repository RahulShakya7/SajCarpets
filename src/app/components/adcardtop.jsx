"use client";
import Image from "next/image";
import Button from "../components/button";


// Top Section (Banner)
const TopAdvertisement = ({ slides }) => {
  return (
    <div className="w-full relative overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full bg-gray-100 rounded-xl p-6 sm:p-8 md:p-12 mb-8"
        >
          {/* Text Content */}
          <div className="flex flex-col flex-1 gap-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
              {slide.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
              {slide.description}
            </p>
            <div className="mt-2">
              <Button size="small">{slide.buttonText}</Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full max-w-sm">
            <Image
                src={slide.imageUrl}
                alt={slide.title}
                width={500}
                height={400}
                className="rounded-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopAdvertisement;