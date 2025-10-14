"use client";

const IntroSection = ({ title, description, secondaryText, imageUrl }) => {
  return (
    // CHANGE 1: On small screens, align items to the start (left) instead of center.
    // Keep vertical centering for medium screens and up.
    <section className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full px-6 md:px-[300px] py-12">
      {/* Left Image */}
      <div
        className="flex-1 h-80 md:h-[372px] rounded-xl bg-cover bg-center w-full" // Added w-full for consistency
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Right Text Content */}
      {/* CHANGE 2: Align all items in this column to the start (left). */}
      <div className="flex flex-col flex-1 gap-4 items-start">
        {/* Date Badge */}
        <div className="flex flex-col items-start gap-2">
          <span className="text-primary font-semibold text-lg md:text-xl">
            Since 1998
          </span>
          <div className="w-16 h-0.5 bg-primary" />
        </div>

        {/* Heading */}
        <h1 className="text-left text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
          {title}
        </h1>

        {/* Descriptions */}
        <p className="!text-left text-base md:text-lg text-gray-800">
          {description}
        </p>
        <p className="!text-left text-base md:text-lg text-gray-800">
          {secondaryText}
        </p>
      </div>
    </section>
  );
};

export default IntroSection;