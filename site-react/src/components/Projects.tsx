"use client";

import { FocusCards, CardType } from "@/components/ui/focus-cards";

export default function Projects() {
  const cards: CardType[] = [
    {
      title: "Pao'er Ship",
      src: "/images/paoer-ship.jpg",
      ctaLink: "https://github.com/ponderrr/paoer_ship",
      aspect: "landscape",
    },
    {
      title: "Lion's Den Cinema",
      src: "/images/lion-den-cinema.png",
      ctaLink: "https://github.com/ponderrr/lions-den-cinema",
      aspect: "landscape",
    },
    {
      title: "Smart Advisor",
      src: "/images/smart-advisor-transparent.png",
      ctaLink: "https://smartadvisor.live/",
      aspect: "landscape",
    },
  ];

  const inProgressCards: CardType[] = [
    {
      title: "Airflow (Flight SaaS)",
      src: "/images/Airflow-Logo.png",
      ctaLink: "https://github.com/vladimirfiffie/Airflow",
      aspect: "landscape",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full relative overflow-hidden py-20 md:py-32 bg-background"
      aria-label="Featured projects"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Main Projects Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-center mb-16 text-foreground tracking-tighter">
          FEATURED PROJECTS<span className="text-primary">.</span>
        </h2>

        <FocusCards cards={cards} />

        {/* In Progress Section */}
        <div className="mt-40">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 text-foreground tracking-tighter">
            BUILDING NOW<span className="text-primary">...</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <FocusCards cards={inProgressCards} />
          </div>
        </div>
      </div>
    </section>
  );
}
