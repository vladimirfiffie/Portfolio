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
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Nav() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Journey", link: "#journey" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Note: The Navbar component already handles the "fixed" positioning internally,
    // but keeping this wrapper is fine for extra padding control.
    <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar>
        {/* Desktop Navigation - Glass Pill */}
        <NavBody>
          <div className="flex items-center gap-8">
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation - Glass Pill */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          {/* Mobile Menu - Glass Extension */}
          <MobileNavMenu isOpen={isMobileMenuOpen}>
            <div className="flex flex-col items-center w-full">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center text-foreground hover:text-primary transition-all py-5 text-xl font-black uppercase tracking-[0.25em] border-b border-border/10 last:border-none active:scale-95"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
