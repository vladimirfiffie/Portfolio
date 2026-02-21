"use client";
import { useState, useEffect } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      /*
       * Sized to match the navbar pill height (py-2.5 = ~10px top+bottom).
       * h-7 w-7 keeps it compact without looking tiny next to nav links.
       * hover:bg-foreground / hover:text-background matches nav link hover.
       */
      className="relative flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-foreground hover:text-background transition-colors duration-150"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            <IconSun size={15} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center"
          >
            <IconMoon size={15} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
