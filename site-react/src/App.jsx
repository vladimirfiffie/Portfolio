"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./components/ui/resizable-navbar";
import { useState } from "react";

import Hero from "./components/Hero";
import { Spotlight } from "./components/ui/spotlight-new";
import About from "./components/About";
import { TimelineDemo } from "./components/Timeline";
import Projects from "./components/Projects";
import { BackgroundBeamsDemo } from "./components/ui/background-beams-demo";
import Footer from "./components/Footer";

const NAV_LINKS = [
  { name: "About", link: "#about" },
  { name: "Journey", link: "#journey" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar>
        {/* Desktop */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={NAV_LINKS} />
        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {NAV_LINKS.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-4 py-4 text-sm font-black uppercase tracking-widest text-foreground border-b border-border hover:bg-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <main>
        <section className="relative overflow-hidden">
          <Spotlight />
          <Hero />
        </section>

        <About />

        <section id="journey" className="bg-background">
          <TimelineDemo />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact" className="relative overflow-hidden border-t border-border">
          <BackgroundBeamsDemo />
        </section>
      </main>

      <Footer />
    </div>
  );
}