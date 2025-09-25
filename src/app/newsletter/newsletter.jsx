"use client";

import { useState } from "react";
import Button from "../components/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}!`);
      setEmail(""); // Reset input
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-[300px] py-12 md:py-[72px] bg-cover bg-center relative"
         style={{ backgroundImage: `url(https://c.animaapp.com/ypxcOp9T/img/newsletter.png)` }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl p-6 md:p-12 w-full max-w-5xl">
        {/* Image */}
        <img
          className="w-32 h-32 md:w-[172px] md:h-[172px] object-contain"
          src="https://c.animaapp.com/ypxcOp9T/img/newspaper.svg"
          alt="Newsletter"
        />

        {/* Content */}
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">
            Subscribe to our Newsletter!
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700">
            Get 50% off on your 1st purchase after subscription
          </p>

          {/* Input & Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-4 rounded-[8px] border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <Button onClick={handleSubscribe} size="small">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;