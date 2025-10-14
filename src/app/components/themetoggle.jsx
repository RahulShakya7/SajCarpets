"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-white dark:bg-gray-700 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {currentTheme === "dark" ? (
        <SunIcon size={32} className="text-yellow-400 cursor-pointer hover:text-primary transition-colors duration-200" />
      ) : (
        <MoonIcon size={32} className="text-gray-900 cursor-pointer hover:text-primary transition-colors duration-200" />
      )}
    </button>
  );
}



export default ThemeToggle;