
const AdvertisementCards = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-gray-300 bg-white rounded-xl shadow-sm overflow-hidden">
      {data.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="flex w-full md:flex-1 items-center gap-4 md:gap-8 p-6 md:p-8 hover:bg-gray-50 transition"
          >
            <Icon className="text-primary w-14 h-14 md:w-20 md:h-20 flex-shrink-0" />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
                {item.title}
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );  
};

export default AdvertisementCards;