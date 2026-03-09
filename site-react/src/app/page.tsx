"use client";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import { TimelineDemo } from "../components/Timeline";
import Projects from "../components/Projects";
import { BackgroundBeamsDemo } from "../components/ui/background-beams-demo";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Nav />

      <main>
        <section className="relative overflow-hidden">
          <Hero />
        </section>

        <About />

        <section id="journey" className="bg-background">
          <TimelineDemo />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact" className="relative overflow-hidden">
          <BackgroundBeamsDemo />
        </section>
      </main>

      <Footer />
    </div>
  );
}
