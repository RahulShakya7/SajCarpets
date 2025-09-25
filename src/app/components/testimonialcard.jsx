"use client";

import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial, current, index }) => {
  return (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{
        opacity: index === current ? 1 : 0,
        x: index === current ? 0 : 50,
      }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className={`${
        index === current ? "flex" : "hidden"
      } w-full flex-col md:flex-row items-center bg-gray-200 rounded-xl shadow-md p-8 md:p-12 gap-8`}
    >
      {/* Image */}
      <div
        className="flex-1 h-64 md:h-[368px] rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${testimonial.photo})` }}
      />

      {/* Content */}
      <div className="flex-1 flex flex-col gap-4">
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
