"use client";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
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

const NAV_ITEMS = [
  { name: "About", link: "#about" },
  { name: "Journey", link: "#journey" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop View */}
      <NavBody className="gap-8">
        <NavbarLogo />
        <NavItems items={NAV_ITEMS} />
        <ThemeToggle />
      </NavBody>

      {/* Mobile View */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={(e) => {
                setIsOpen(false);
                scrollToSection(e, item.link);
              }}
              className="w-full text-center py-4 text-2xl font-black uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
