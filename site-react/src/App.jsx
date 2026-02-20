"use client";

// Import the specific components from your new file
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "./components/ui/resizable-navbar";

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
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Implementation of the Resizable Navbar structure */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={NAV_LINKS} />

        </NavBody>
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
