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
  scrollToSection,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useState } from "react";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Journey", link: "#journey" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <Navbar>
      {/* ── Desktop pill ── */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <span className="w-px h-4 bg-border mx-1 shrink-0" aria-hidden />
        <ThemeToggle />
      </NavBody>

      {/* ── Mobile pill ── */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();

                closeMobileMenu();
                setTimeout(() => scrollToSection(item.link), 220);
              }}
              className="w-full px-6 py-3.5 text-sm font-black uppercase tracking-widest text-muted-foreground hover:bg-foreground hover:text-background transition-colors duration-150 last:rounded-b-3xl"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
