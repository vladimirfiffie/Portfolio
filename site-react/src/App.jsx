"use client";

import Nav from './components/Nav';
import Hero from './components/Hero';
import { Spotlight } from './components/ui/spotlight-new';
import { BackgroundBeamsDemo } from './components/ui/background-beams-demo';
import Projects from './components/Projects';
import About from './components/About';
import { TimelineDemo } from './components/Timeline';


export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 font-sans antialiased">
      <Nav />
      
      <main>
        {/* Main Sections */}
        <div className="relative">
          <Spotlight />
          <Hero />
        </div>
        <About />
        <TimelineDemo />
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-8 relative overflow-hidden">
          <BackgroundBeamsDemo />
        </section>
      </main>

      
    </div>
  );
}