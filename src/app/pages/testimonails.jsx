"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <div className="flex flex-col items-center gap-12 px-4 sm:px-8 md:px-16 lg:px-[300px] py-12 md:py-[72px] bg-blue-50 w-full">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black">Testimonials</h2>
        <p className="text-base sm:text-lg text-gray-700">
          See what our clients have to say!
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="w-full max-w-6xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          {testimonials.map(
            (testimonial, index) =>
              index === current && (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row items-center gap-6 p-6 sm:p-8 md:p-10 bg-white rounded-xl shadow-md w-full"
                >
                  {/* Testimonial Image */}
                  <div
                    className="w-full md:w-1/2 h-64 md:h-[368px] rounded-xl bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${testimonial.photo})` }}
                  />

                  {/* Testimonial Content */}
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div>
                        <div className="text-lg sm:text-xl font-semibold text-gray-800">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm sm:text-base">{testimonial.location}</div>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      {testimonial.testimonial}
                    </p>

                    {/* Dots */}
                    <div className="flex items-center gap-2 mt-4">
                      {testimonials.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            dotIndex === current ? "bg-blue-600" : "bg-blue-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
