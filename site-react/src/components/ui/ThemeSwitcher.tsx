"use client";
import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "site-theme";

export default function ThemeSwitcher(): JSX.Element {
  // 1. Initialize state as null to avoid mismatch during hydration
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // 2. On mount, get the theme from localStorage or system preference
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (systemPrefersDark ? "dark" : "light");
    
    setTheme(initial);
  }, []);

  // 3. Watch for theme changes and update the DOM
  useEffect(() => {
    if (!theme) return;

    const root = document.documentElement;
    localStorage.setItem(STORAGE_KEY, theme);

    if (theme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Prevent rendering icons until we know the theme to avoid "flickering" icons
  if (!theme) return <button className="theme-toggle" aria-label="Loading theme" />;

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme} 
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className="iconify theme-icon-sun" data-icon="mdi:weather-sunny"></span>
      <span className="iconify theme-icon-moon" data-icon="mdi:weather-night"></span>
    </button>
  );
}