import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  // Function to calculate time left
  function getTimeLeft() {
    const now = new Date();
    const distance = new Date(targetDate) - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {timeBlocks.map((block, idx) => (
        <div
          key={idx}
          className="bg-gray-100 rounded-lg px-6 py-4 flex flex-col items-center min-w-[70px]"
        >
          <div className="text-orange-500 text-lg font-bold uppercase">
            {String(block.value).padStart(2, "0")}
          </div>
          <div className="text-orange-500 text-xs uppercase">{block.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
