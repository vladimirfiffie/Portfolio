"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type CardType = {
  title: string;
  src: string;
  ctaLink?: string;
  aspect?: "portrait" | "landscape" | "square";
};

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const offsetRef = useRef(0);

  const infiniteCards = cards.length >= 4 ? [...cards, ...cards] : cards;

  useEffect(() => {
    const track = trackRef.current;
    if (!track || hovered !== null || cards.length < 4) return;

    const speed = 1.35;
    const animate = () => {
      const singleWidth = track.scrollWidth / 2;

      offsetRef.current -= speed;

      if (offsetRef.current <= -singleWidth) {
        offsetRef.current += singleWidth;
      }

      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [hovered, cards.length]);

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-10 bg-background">
      <div
        ref={trackRef}
        className="flex items-center gap-6 px-10 whitespace-nowrap will-change-transform"
      >
        {infiniteCards.map((card, index) => (
          <a
            key={`${card.title}-${index}`}
            href={card.ctaLink ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "flex-none relative rounded-3xl overflow-hidden transition-all duration-500 ease-out border border-border bg-secondary",
              card.aspect === "portrait"
                ? "w-70 md:w-87.5"
                : card.aspect === "landscape"
                  ? "w-100 md:w-150"
                  : "w-75 md:w-112.5",
              hovered !== null &&
                hovered !== index &&
                "blur-[2px] scale-[0.98] opacity-50 grayscale",
              hovered === index &&
                "scale-105 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.1)]",
            )}
            style={{
              aspectRatio:
                card.aspect === "portrait"
                  ? "3/4"
                  : card.aspect === "landscape"
                    ? "16/9"
                    : "1/1",
            }}
          >
            <img
              src={card.src}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />

            <div
              className={cn(
                "absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent flex items-end p-6 md:p-10 transition-opacity duration-500",
                hovered === index ? "opacity-100" : "opacity-0",
              )}
            >
              <div className="text-xl md:text-3xl font-black text-foreground whitespace-normal leading-tight tracking-tighter uppercase">
                {card.title}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background/80 dark:from-background to-transparent z-20" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background/80 dark:from-background to-transparent z-20" />
    </div>
  );
}
