"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Spotlight } from "./components/ui/spotlight-new";
import { BackgroundBeamsDemo } from "./components/ui/background-beams-demo";
import Projects from "./components/Projects";
import About from "./components/About";
import { TimelineDemo } from "./components/Timeline";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    /* Changed dark:bg-neutral-950 to dark:bg-background to use your CSS variables */
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
      <Nav />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden">
          <Spotlight />
          <Hero />
        </section>

        {/* CONTENT SECTIONS */}
        <About />

        {/* We wrap Timeline in a container to manage the B&W borders if needed */}
        <section className="border-t border-border bg-background">
          <TimelineDemo />
        </section>

        <Projects />

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="relative overflow-hidden border-t border-border"
        >
          <BackgroundBeamsDemo />
        </section>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
