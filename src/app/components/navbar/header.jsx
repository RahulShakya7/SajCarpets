"use client";

import { ListIcon, MagnifyingGlassIcon, UserIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import ThemeToggle from "../themetoggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const navLinks = ["ABOUT US", "CONTACT US", "BLOG", "SHOP", "CATALOGUE"];

  // Fetch search results dynamically
  useEffect(() => {
    if (!query) return setResults([]);

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error("Search error:", error);
      }
      setLoading(false);
    };

    const debounce = setTimeout(fetchResults, 300); // debounce for typing
    return () => clearTimeout(debounce);
  }, [query]);

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
              className="text-gray-400 text-lg sm:text-xl font-normal cursor-pointer hover:text-primary transition"
            >
              {link}
            </div>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <MagnifyingGlassIcon
            size={32}
            className="text-black cursor-pointer"
            onClick={() => setSearchOpen(true)}
          />
          <UserIcon size={32} className="text-primary cursor-pointer" />
          <ThemeToggle size={32} className="text-black cursor-pointer" />
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

      {/* Search Popup */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-start p-4 md:p-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-4">
              <MagnifyingGlassIcon size={24} weight="bold" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button onClick={() => setSearchOpen(false)}>
                <XIcon size={24} weight="bold" />
              </button>
            </div>

            <div className="mt-4 max-h-64 overflow-y-auto">
              {loading && <p className="text-gray-500">Loading...</p>}
              {!loading && results.length === 0 && query && (
                <p className="text-gray-500">No results found.</p>
              )}
              <ul>
                {results.map((item) => (
                  <li
                    key={item.id}
                    className="py-2 border-b border-gray-200 dark:border-gray-700"
                  >
                    <a
                      href={`/product/${item.id}`}
                      className="flex flex-col"
                      onClick={() => setSearchOpen(false)}
                    >
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        {item.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
