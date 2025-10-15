// app/product/[id]/countdown.jsx
"use client";

import { useEffect, useState } from "react";

// Demo version shows zeros like your reference.
// Swap in a real targetDate if you want a true countdown.
export default function CountdownTimer({ targetDate }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      if (!targetDate) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTime({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const blocks = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Mins" },
    { value: time.seconds, label: "Secs" },
  ];

  return (
    <div className="flex items-center gap-3">
      {blocks.map((b, i) => (
        <div
          key={i}
          className="bg-product-gray border-r border-product-border rounded-lg px-6 py-4 flex flex-col items-center"
        >
          <div className="text-product-orange text-lg font-montserrat leading-7 uppercase">
            {String(b.value).padStart(2, "0")}
          </div>
          <div className="text-product-orange text-xs font-montserrat leading-7 uppercase">{b.label}</div>
        </div>
      ))}
    </div>
  );
}
