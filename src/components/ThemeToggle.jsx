"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  // Ensure the component only renders theme on client
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Update HTML class
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    // Persist in localStorage
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <button
      onClick={toggleTheme}
      className="p-4 mt-0 mb-4.5 m-2.5 rounded-full border border-gray-300 dark:border-gray-600"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
