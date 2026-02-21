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
      if (offsetRef.current <= -singleWidth) offsetRef.current += singleWidth;
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [hovered, cards.length]);

  return (
    <>
      {/* ── Mobile: vertical stack ── */}
      <div className="md:hidden flex flex-col gap-4 px-4 w-full">
        {cards.map((card, index) => (
          <a
            key={`mobile-${card.src}-${index}`}
            href={card.ctaLink ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full overflow-hidden rounded-2xl border border-border bg-secondary"
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
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Label always visible on mobile */}
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent flex items-end p-5">
              <div className="font-black text-foreground leading-tight tracking-tighter uppercase text-base">
                {card.title}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* ── Desktop: original carousel ── */}
      <div className="hidden md:block relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-6 sm:py-10 bg-background">
        <div
          ref={trackRef}
          className="flex items-center gap-3 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-10 whitespace-nowrap will-change-transform"
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
                "flex-none relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ease-out border border-border bg-secondary",
                card.aspect === "portrait"
                  ? "w-[clamp(10rem,30vw,21.875rem)]"
                  : card.aspect === "landscape"
                    ? "w-[clamp(14rem,40vw,37.5rem)]"
                    : "w-[clamp(12rem,35vw,28.125rem)]",
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
                  "absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent flex items-end p-4 sm:p-6 md:p-10 transition-opacity duration-500",
                  hovered === index ? "opacity-100" : "opacity-0",
                )}
              >
                <div
                  className="font-black text-foreground whitespace-normal leading-tight tracking-tighter uppercase"
                  style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.875rem)" }}
                >
                  {card.title}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-40 bg-linear-to-r from-background/80 dark:from-background to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-40 bg-linear-to-l from-background/80 dark:from-background to-transparent z-20" />
      </div>
    </>
  );
}
