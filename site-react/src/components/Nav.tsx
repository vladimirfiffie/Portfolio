"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { motion } from "motion/react";

/* ── Theme toggle button ────────────────────────────────── */
function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Sync with whatever is already on <html> on mount
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-7 h-7 rounded-full text-muted-foreground hover:bg-foreground hover:text-background transition-colors duration-150"
    >
      <motion.span
        key={dark ? "moon" : "sun"}
        initial={{ rotate: -30, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 30, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.15 }}
      >
        {dark ? <IconSun size={14} /> : <IconMoon size={14} />}
      </motion.span>
    </button>
  );
}

/* ── Nav items config ────────────────────────────────────── */
const navItems = [
  { name: "About", link: "#about" },
  { name: "Journey", link: "#journey" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

/* ── Nav ─────────────────────────────────────────────────── */
export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (

    <Navbar>

      {/* ── Desktop pill ────────────────────────── */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        {/* Thin divider + theme toggle sits flush with nav items */}
        <span className="w-px h-4 bg-border mx-1" aria-hidden />
        <ThemeToggle />
      </NavBody>

      {/* ── Mobile pill ─────────────────────────── */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-6 py-3.5 text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:bg-foreground hover:text-background transition-colors duration-150 last:rounded-b-3xl"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>

    </Navbar>
  );
}
