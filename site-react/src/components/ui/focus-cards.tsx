"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export type CardType = {
  title: string;
  src: string;
  ctaLink?: string;
  aspect?: "portrait" | "landscape" | "square";
};

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(
        scrollRef.current.scrollWidth - scrollRef.current.offsetWidth,
      );
    }
  }, [scrollRef.current?.scrollWidth]);

  // Optional infinite auto-scroll (only for 4+ cards)
  useEffect(() => {
    if (!scrollRef.current || hovered !== null || cards.length < 4) return;

    const container = scrollRef.current;
    let requestId: number;
    const speed = 0.5;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += speed;
      }
      requestId = requestAnimationFrame(scroll);
    };

    requestId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(requestId);
  }, [hovered, cards.length]);

  const infiniteCards = cards.length >= 4 ? [...cards, ...cards] : cards;

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-10">
      <motion.div
        ref={scrollRef}
        className={cn(
          "flex items-center gap-6 px-10 cursor-grab overflow-x-auto no-scrollbar whitespace-nowrap",
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
        )}
        drag="x"
        dragConstraints={{ left: -scrollWidth, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
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
              "flex-none relative rounded-3xl overflow-hidden transition-all duration-500 ease-out bg-neutral-200 dark:bg-neutral-800",
              card.aspect === "portrait"
                ? "w-[280px] md:w-[350px]"
                : card.aspect === "landscape"
                  ? "w-[400px] md:w-[600px]"
                  : "w-[300px] md:w-[450px]",
              hovered !== null &&
                hovered !== index &&
                "blur-md scale-[0.95] opacity-40",
              hovered === index && "scale-105 z-10 shadow-2xl",
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
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              loading="lazy"
            />
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-10 transition-opacity duration-500",
                hovered === index ? "opacity-100" : "opacity-0",
              )}
            >
              <div className="text-xl md:text-3xl font-bold text-white whitespace-normal leading-tight">
                {card.title}
              </div>
            </div>
          </a>
        ))}
      </motion.div>

      {/* Soft edge gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-20" />
    </div>
  );
}
