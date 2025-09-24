"use client";
import { List, MagnifyingGlassIcon, UserIcon, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import "./globals.css";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        
        <nav className="flex w-[1920px] h-24 items-center justify-between px-[300px] py-2.5 relative bg-white">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-2xl tracking-widest z-20">
                <Image
                    src="/sajlogo.png" // Make sure this matches your public folder path and case!
                    alt="Saj Carpets & Beds"
                    width={0}
                    height={72}
                    className="relative w-[169px] h-16 aspect-[2.64] object-cover"
                    priority
                />
            </div>

            {/* Hamburger Icon */}
            <button
                className="sm:hidden z-20"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="Toggle menu"
            >
                {menuOpen ? (
                    <X size={28} color="#222" />
                ) : (
                    <List size={28} color="#222" />
                )}
            </button>

            {/* Nav Options */}
            <ul
                className={`
                    flex gap-8 list-none m-0 p-0 text-base
                    transition-all duration-300
                    ${menuOpen ? "flex-col absolute top-16 left-0 w-full bg-white shadow-md py-6 px-4" : "hidden"}
                    sm:flex sm:static sm:flex-row sm:bg-transparent sm:shadow-none sm:py-0 sm:px-0
                `}
            >
                <li>
                    <a href="#about" className="no-underline text-gray-900 hover:text-blue-600 transition-colors block py-2 sm:py-0">About Us</a>
                </li>
                <li>
                    <a href="#contact" className="no-underline text-gray-900 hover:text-blue-600 transition-colors block py-2 sm:py-0">Contact Us</a>
                </li>
                <li>
                    <a href="#shop" className="no-underline text-gray-900 hover:text-blue-600 transition-colors block py-2 sm:py-0">Shop</a>
                </li>
                <li>
                    <a href="#catalogue" className="no-underline text-gray-900 hover:text-blue-600 transition-colors block py-2 sm:py-0">Catalogue</a>
                </li>
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-6 z-20">
                <MagnifyingGlassIcon size={28} color="#222" className="cursor-pointer" />
                <UserIcon size={28} color="#222" className="cursor-pointer" />
            </div>

            {/* Overlay for mobile menu */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-10 sm:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </nav>
    );
};

export default Navbar;