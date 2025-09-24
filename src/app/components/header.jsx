"use client";

import { ListIcon, MagnifyingGlassIcon, UserIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["ABOUT US", "CONTACT US", "SHOP", "CATALOGUE"];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[300px] h-24">
        {/* Logo */}
        <img
          className="w-[140px] sm:w-[169px] h-12 sm:h-16 object-cover"
          alt="Sajlogo"
          src="/sajlogo.png"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div
              key={link}
              className="text-black text-lg sm:text-xl font-normal cursor-pointer hover:text-primary transition"
            >
              {link}
            </div>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <MagnifyingGlassIcon size={32} className="text-black gap-2 cursor-pointer" />
          <div className="flex gap-4"></div>
          <UserIcon size={32} className="text-primary gap-2 cursor-pointer" />
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XIcon size={32} weight="bold" className="text-black" />
            ) : (
              <ListIcon size={32} weight="bold" className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full shadow-md">
          <nav className="flex flex-col items-start gap-4 px-4 py-4">
            {navLinks.map((link) => (
              <div
                key={link}
                className="text-black text-lg font-semibold w-full py-2 px-2 hover:bg-gray-100 rounded cursor-pointer transition"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
