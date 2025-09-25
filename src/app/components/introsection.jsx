import Image from "next/image";

const IntroSection = ({ title, description, secondaryText, imageUrl }) => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full rounded-xl overflow-hidden">
      {/* Text content */}
      <div className="flex-1 p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-black">{title}</h1>
        {description && (
          <p className="mt-4 text-base md:text-lg text-black leading-relaxed">{description}</p>
        )}
        {secondaryText && (
          <p className="mt-2 text-base md:text-lg text-black leading-relaxed">{secondaryText}</p>
        )}
      </div>

      {/* Image */}
      <div className="flex-1">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={372}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default IntroSection;
