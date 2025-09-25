"use client";

import { ArrowUUpLeft, Money, Package } from "@phosphor-icons/react";
import AdvertisementCards from "./adcardbottom";
import TopAdvertisement from "./adcardtop";

// --- Data ---
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


const topSectionData = [
  {
    title: "Dream Bigger. Sleep Better.",
    description: `Your bedroom should be your sanctuary. Transform it into a haven of
    rest and relaxation with our beautiful range of beds and mattresses.
    From plush upholstered frames to smart storage solutions, we have
    the perfect fit for your dream home.`,
    buttonText: "Check Out!",
    imageUrl: "/images/pngegg.png",
  }
];

const Advertisements = () => {
  return (
    <section className="flex flex-col w-full gap-12 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[300px] py-[72px] bg-white">
      <TopAdvertisement slides={topSectionData} />
      <AdvertisementCards data={advertisementsData} />
    </section>
  );
};


export default Advertisements;