"use client";

import { useEffect, useState } from "react";
import TestimonialCard from "./testimonialcard";

const testimonials = [
  {
    id: 1,
    name: "John P.",
    location: "London",
    image: "https://c.animaapp.com/ypxcOp9T/img/ellipse-5@2x.png",
    testimonial:
      "I was a bit overwhelmed by all the choices, but the team at Saj Carpets & Beds was so helpful. They guided me to the perfect mattress and bed frame for my needs, and the delivery was quick and professional. I highly recommend them!",
    photo: "https://c.animaapp.com/ypxcOp9T/img/frame-14-1.png",
  },
  {
    id: 2,
    name: "Sarah K.",
    location: "New York",
    image: "https://c.animaapp.com/ypxcOp9T/img/ellipse-5@2x.png",
    testimonial:
      "Amazing service and very friendly staff! I found exactly what I was looking for, and the quality of the products is outstanding. Highly recommend!",
    photo: "https://c.animaapp.com/ypxcOp9T/img/frame-14-1.png",
  },
  {
    id: 3,
    name: "Michael L.",
    location: "Berlin",
    image: "https://c.animaapp.com/ypxcOp9T/img/ellipse-5@2x.png",
    testimonial:
      "Great experience from start to finish. The team helped me choose the perfect bed, and delivery was prompt. Definitely a 5-star experience.",
    photo: "https://c.animaapp.com/ypxcOp9T/img/frame-14-1.png",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-12 px-4 sm:px-8 md:px-16 lg:px-[300px] py-12 md:py-[72px] bg-white w-full">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black">
          Testimonials
        </h2>
        <p className="text-base sm:text-lg text-gray-700">
          See what our clients have to say!
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative w-full flex justify-center items-center">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={t.id}
            testimonial={t}
            current={current}
            index={i}
          />
        ))}
      </div>
      
      {/* Dots BELOW the card */}
      <div className="flex items-center gap-2 mt-4">
        {testimonials.map((_, dotIndex) => (
          <div
            key={dotIndex}
            onClick={() => setCurrent(dotIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              dotIndex === current ? "bg-blue-600" : "bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
