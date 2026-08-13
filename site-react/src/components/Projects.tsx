"use client";
import { useEffect, useState } from "react";
import { FocusCards, CardType } from "@/components/ui/focus-cards";

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    const syncTheme = () => setIsDarkMode(html.classList.contains("dark"));
    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const cards: CardType[] = [
    {
      name: "Pao'er Ship",
      role: "Game build — Python & hardware",
      description:
        "A Pygame take on Battleship built to run on a Raspberry Pi, with a custom hardware input loop.",
      tags: ["Python", "Pygame", "Raspberry Pi"],
      title: "View on GitHub",
      src: "/images/paoer-ship.jpg",
      ctaLink: "https://github.com/ponderrr/paoer_ship",
      aspect: "landscape",
    },
    {
      name: "Lion's Den Cinema",
      role: "Designed the web UI",
      description:
        "A cinema booking platform where I designed and built the web UI, from seat selection through checkout.",
      tags: ["React", "UI Design", "Booking"],
      title: "View on GitHub",
      src: "/images/lion-den-cinema.png",
      ctaLink: "https://github.com/ponderrr/lions-den-cinema",
      aspect: "landscape",
    },
    {
      name: "Smart Advisor",
      role: "Designed & built the frontend",
      description:
        "An AI-powered recommendation platform. I designed and built the entire frontend experience.",
      tags: ["Next.js", "TypeScript", "AI"],
      title: "Visit Website",
      src: isDarkMode
        ? "/images/SmartAdvisor-DM.png"
        : "/images/SmartAdvisor-LM.png",
      ctaLink: "https://smartadvisor.live/",
      aspect: "landscape",
    },
  ];

  const inProgressCards: CardType[] = [
    {
      name: "Airflow",
      role: "In progress — solo build",
      description:
        "A flight SaaS in progress, focused on scalable React architecture and high-performance UX design.",
      tags: ["React", "SaaS", "In Progress"],
      title: "View on GitHub",
      src: "/images/airflow-logo.png",
      ctaLink: "https://github.com/vladimirfiffie/Airflow",
      aspect: "landscape",
      fit: "contain",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full relative overflow-hidden py-14 sm:py-20 md:py-32 bg-background"
      aria-label="Featured projects"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* ── Featured heading ── */}
        <h2
          className="font-black text-center mb-10 sm:mb-14 md:mb-16 text-foreground tracking-tighter leading-none uppercase"
          style={{ fontSize: "clamp(1.8rem, 7vw, 5rem)" }}
        >
          Featured Projects<span className="text-primary">.</span>
        </h2>
      </div>

      <FocusCards cards={cards} defaultFit="cover" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* ── In Progress ── */}
        <div className="mt-20 sm:mt-28 md:mt-40">
          <h2
            className="font-black text-center mb-8 sm:mb-10 md:mb-12 text-foreground tracking-tighter leading-none uppercase"
            style={{ fontSize: "clamp(1.6rem, 6vw, 4rem)" }}
          >
            Building Now<span className="text-primary">...</span>
          </h2>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <FocusCards cards={inProgressCards} defaultFit="cover" />
      </div>
    </section>
  );
}
