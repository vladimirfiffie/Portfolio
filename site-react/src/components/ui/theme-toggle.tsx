"use client";
import { useState, useEffect } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { motion } from "motion/react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent"
      aria-label="Toggle Theme"
    >
      <div className="relative h-5 w-5">
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 90 : 0,
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0 : 1,
          }}
          className="absolute inset-0"
        >
          <IconSun size={20} />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : -90,
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0,
          }}
          className="absolute inset-0"
        >
          <IconMoon size={20} />
        </motion.div>
      </div>
    </motion.button>
  );
};
