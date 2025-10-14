"use client";

import { ListIcon, MagnifyingGlassIcon, UserIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchPopup from "../../search/search";
import ThemeToggle from "../themetoggle";


const navLinks = [
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT US", href: "/contact" },
  { label: "BLOG", href: "/blog" },
  { label: "SHOP", href: "/shop" },
  { label: "CATALOGUE", href: "/catalogue" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-white shadow-md">
      <SearchPopup isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[300px] h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            className="w-[140px] sm:w-[169px] h-12 sm:h-16 object-cover"
            alt="Sajlogo"
            src="/sajlogo.png"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-lg sm:text-xl font-normal transition ${
                pathname === href
                  ? "text-primary font-semibold"
                  : "text-gray-400 hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setSearchOpen(true)}>
              <MagnifyingGlassIcon
                size={32}
                className="text-black cursor-pointer hover:text-primary transition-colors"
              />
            </button>

            <UserIcon
              size={32}
              className="text-primary cursor-pointer hover:text-blue-600 transition-colors duration-200"
            />
            <ThemeToggle
              size={32}
              className="text-black cursor-pointer hover:text-yellow-500 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Mobile Hamburger + ThemeToggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* ThemeToggle always visible */}
          <ThemeToggle size={32} className="text-black cursor-pointer" />
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
      <div
        className={`md:hidden bg-white w-full shadow-md transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-start gap-4 px-4 py-4">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-lg font-semibold w-full py-2 px-2 rounded transition ${
                pathname === href
                  ? "text-primary font-bold"
                  : "text-black hover:bg-gray-100"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
