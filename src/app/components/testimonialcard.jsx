"use client";

import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial, current, index }) => {
  return (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: index === current ? 1 : 0, x: index === current ? 0 : -50 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row items-center gap-6 p-6 sm:p-8 md:p-10 bg-gray-200 rounded-xl shadow-md w-full z-10 absolute inset-0 ${
        index === current ? "block" : "hidden"
      }`}
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
            <div className="text-lg sm:text-xl font-semibold text-gray-800">
              {testimonial.name}
            </div>
            <div className="text-gray-600 text-sm sm:text-base">
              {testimonial.location}
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          {testimonial.testimonial}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
