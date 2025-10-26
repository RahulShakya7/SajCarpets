"use client";
import AdvertisementCards from "../components/advertisement/adcardbottom";
import Advertisements from "../components/advertisement/advertisement";
import Helmet from "../components/helmet/helmet";
import IntroSection from "../components/introsection";
import TeamMemberCard from "../components/teammembercard";
import Testimonials from "./testimonials";

import { PiggyBankIcon, SealCheckIcon, SmileyIcon } from "@phosphor-icons/react";

const dataok = [
  {
    title: "Savings",
    description:
      "We promise to beat any competitor's quote by 10%, with average savings of 5%-20%.",
    icon: PiggyBankIcon,
  },
  {
    title: "Convenience",
    description:
      "Enjoy free estimating, no delivery charges, and next-day delivery on most carpets.",
    icon: SealCheckIcon,
  },
  {
    title: "Quality Service",
    description:
      "Our experienced team provides seamless installation, a huge selection of samples, and advice.",
    icon: SmileyIcon,
  },
];


function AboutUs({ introData, teamMembers }) {
  return (
    <div className="w-full flex flex-col bg-gray-50">
      <Helmet title="About Us" breadcrumb="Home / About Us" />

      <section className="w-full flex flex-col items-center text-center gap-6 py-16">
        <IntroSection {...introData} />
      </section>

      <section className="w-full flex flex-col items-center text-center gap-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
           Why Choose Us?
        </h2>
        <div className="flex flex-col w-full gap-12 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[300px] py-[72px] bg-white">
          <AdvertisementCards data={dataok} />
        </div>
        <Advertisements />
      </section>

      <section className="flex flex-col items-center gap-12 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mt-3 text-base md:text-lg">
            Our dedicated team of professionals works together to bring innovation,
            expertise, and creativity to everything we do.
          </p>
        </div>
        <div
          className="grid gap-8 sm:gap-10 lg:gap-14 w-full max-w-7xl mx-auto"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </div>
      </section>
      <section>
        <Testimonials />
      </section>
    </div>
  );
}

export default AboutUs;