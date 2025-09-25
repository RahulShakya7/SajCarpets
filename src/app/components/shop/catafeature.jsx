
const FeatureCard = ({ title, description }) => {
  return (
    <article className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 bg-gray-100 rounded-xl flex-1">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">
        {title[0]}
      </div>
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold text-black">{title}</h3>
        <p className="text-sm md:text-base text-gray-700">{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
