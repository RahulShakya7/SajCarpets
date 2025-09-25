"use client";
import { EnvelopeSimpleIcon, PhoneIcon } from "@phosphor-icons/react";

const footerData = {
  logo: "https://c.animaapp.com/ypxcOp9T/img/sajlogo-1-1@2x.png",
  address: "28C Monument Road, Woking, UK, GU21 5LT",
  phone: "07976839153",
  email: "woking@sajcarpets.com",
  mapUrl: "https://c.animaapp.com/ypxcOp9T/img/map.png",
  links: {
    myAccount: [
      "About Us",
      "Shopping Guide",
      "Delivery Information",
      "Privacy Policy",
      "Our Store",
    ],
    openingHours: [
      "Mon to Fri - 9:00 AM to 6:00 PM",
      "Weekends - 10:00 AM to 2:00 PM",
      "Open during holidays",
    ],
  },
  poweredBy: "-------------",
  paymentImage: "https://c.animaapp.com/ypxcOp9T/img/cards-1@2x.png",
};

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-[300px]">
      <div className="flex flex-col gap-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo & Contact */}
          <div className="flex flex-col gap-6 flex-1">
            <img
              src={footerData.logo}
              alt="Logo"
              className="w-40 sm:w-52 md:w-60 object-cover"
            />
            <p className="text-2xl sm:text-3xl font-semibold text-black">
              {footerData.address}
            </p>
            <div className="flex items-center gap-2">
              <PhoneIcon size={32} className="text-primary" />
              <span className="text-black text-xl sm:text-lg">
                {footerData.phone}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeSimpleIcon size={32} className="text-primary" />
              <span className="text-black text-xl sm:text-lg">
                {footerData.email}
              </span>
            </div>
          </div>

          {/* Links & Opening Hours */}
          <div className="flex flex-col sm:flex-row gap-12 flex-1">
            {/* My Account Links */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg sm:text-xl text-black">
                My Account
              </h4>
              {footerData.links.myAccount.map((link, idx) => (
                <p
                  key={idx}
                  className="text-black text-base sm:text-lg hover:text-primary hover:underline cursor-pointer transition"
                >
                  {link}
                </p>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg sm:text-xl text-black">
                Opening Hours
              </h4>
              {footerData.links.openingHours.map((time, idx) => (
                <p key={idx} className="text-black text-base sm:text-lg">
                  {time}
                </p>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 w-full">
            <h4 className="font-semibold text-lg sm:text-xl text-black mb-4">
              Where to Find Us
            </h4>
            <div
              className="w-full h-52 sm:h-64 md:h-72 lg:h-80 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${footerData.mapUrl})` }}
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-black text-base sm:text-lg">
            {`Powered by: ${footerData.poweredBy}`}
          </span>
          <img
            src={footerData.paymentImage}
            alt="Payments"
            className="w-64 sm:w-72 md:w-80 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
