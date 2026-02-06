"use client";

import { FocusCards, CardType } from "@/components/ui/focus-cards";

export default function Projects() {
  const cards: CardType[] = [
    {
      title: "View on Github",
      src: "/images/paoer-ship.jpg",
      ctaLink: "https://github.com/ponderrr/paoer_ship",
      aspect: "landscape",
    },
    {
      title: "View on Github",
      src: "/images/lion-den-cinema.png",
      ctaLink: "https://github.com/ponderrr/lions-den-cinema",
      aspect: "landscape",
    },
    {
      title: "Visit Website",
      src: "/images/smart-advisor-transparent.png",
      ctaLink: "https://smartadvisor.live/",
      aspect: "landscape",
    },
  ];

  const inProgressCards: CardType[] = [
    {
      title: "SaaS Landing Page",
      src: "/images/placeholder.png",
      aspect: "landscape",
    },
  ];

  return (
    <section
      id="projects"
      className="w-screen relative overflow-hidden py-20 md:py-32"
      aria-label="Featured projects"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 dark:text-white">
          Featured Projects
        </h2>
        <FocusCards cards={cards} />

        {/* In Progress Section */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-32 mb-16 dark:text-white">
          Projects In Progress
        </h2>
        <FocusCards cards={inProgressCards} />
      </div>
    </section>
  );
}
