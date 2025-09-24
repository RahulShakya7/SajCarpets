"use client";
import { ArrowUUpLeft, Money, Package } from "@phosphor-icons/react";
import Button from "../components/button";

const advertisementsData = [
  {
    title: "Cash on Delivery",
    description:
      "Pay with confidence! We offer Cash on Delivery (COD) on all orders.",
    icon: Money,
  },
  {
    title: "Order Return",
    description:
      "Not satisfied? Our easy returns policy makes it simple to send it back within 7 days.",
    icon: ArrowUUpLeft,
  },
  {
    title: "Free Shipping",
    description:
      "Enjoy free shipping on all orders, delivered right to your door at no extra cost.",
    icon: Package,
  },
];

const topSectionData = {
  title: "Dream Bigger. Sleep Better.",
  description: `Your bedroom should be your sanctuary. Transform it into a haven of
rest and relaxation with our beautiful range of beds and mattresses.
From plush upholstered frames to smart storage solutions, we have
the perfect fit for your dream home.`,
  buttonText: "Check Out!",
  imageUrl: "https://c.animaapp.com/ypxcOp9T/img/frame-14@2x.png",
};

const Advertisements = () => {
  return (
    <div className="flex flex-col w-full items-start gap-12 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[300px] py-12 bg-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full bg-gray-100 rounded-xl p-6 sm:p-8 md:p-12">
        {/* Text Content */}
        <div className="flex flex-col flex-1 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            {topSectionData.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
            {topSectionData.description}
          </p>
          <Button size="small">{topSectionData.buttonText}</Button>
        </div>

        {/* Image */}
        <div
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-cover bg-center rounded-xl flex-shrink-0"
          style={{ backgroundImage: `url(${topSectionData.imageUrl})` }}
        />
      </div>

      {/* Bottom Advertisement Cards with Dividers */}
      <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-gray-300">
        {advertisementsData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex w-full md:flex-1 items-center gap-4 md:gap-12 p-6 md:p-8"
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
    </div>
  );
};

export default Advertisements;
