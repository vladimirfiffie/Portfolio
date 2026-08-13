"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import ProjectMedia from "@/components/ui/project-media";

export type CardType = {
  /** CTA label, e.g. "View on GitHub" */
  title: string;
  /** Project name shown under the image */
  name?: string;
  /** What you specifically did on it */
  role?: string;
  /** One-line description of what it is */
  description?: string;
  /** Tech stack chips */
  tags?: string[];
  src: string;
  /**
   * Optional looping preview clip. Drop an .mp4 in `public/videos/` and set
   * the path here (e.g. "/videos/smart-advisor.mp4"). The card then plays it
   * on hover and falls back to `src` if the file is missing or fails.
   */
  video?: string;
  ctaLink?: string;
  aspect?: "portrait" | "landscape" | "square";
  fit?: "cover" | "contain" | "fill";
};

const ratioOf = (aspect: CardType["aspect"]) =>
  aspect === "portrait" ? "3/4" : aspect === "landscape" ? "16/9" : "1/1";

/* ── Text block under each card ── */
const CardMeta = ({ card }: { card: CardType }) => {
  if (!card.name && !card.description) return null;

  return (
    <div className="mt-4 whitespace-normal sm:mt-5">
      {card.name && (
        <h3
          className="font-black uppercase leading-none tracking-tighter text-foreground"
          style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
        >
          {card.name}
        </h3>
      )}

      {card.role && (
        <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50 sm:text-[11px]">
          {card.role}
        </p>
      )}

      {card.description && (
        <p
          className="mt-2.5 max-w-prose font-bold uppercase leading-relaxed tracking-tight text-foreground/70"
          style={{ fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)" }}
        >
          {card.description}
        </p>
      )}

      {card.tags && card.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
          {card.tags.map((tag) => (
            <li
              key={tag}
              className="border-2 border-foreground px-2 py-1 text-[10px] font-black uppercase tracking-widest text-foreground sm:text-[11px]"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-foreground sm:mt-4 sm:text-xs">
        {card.title}
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </div>
  );
};

export function FocusCards({
  cards,
  defaultFit = "cover",
}: {
  cards: CardType[];
  defaultFit?: NonNullable<CardType["fit"]>;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const resolveFit = (card: CardType) => card.fit ?? defaultFit;

  // Only loop when there are enough cards to hide the seam. Below that the
  // track is laid out to fit on screen instead, so nothing is unreachable.
  const isCarousel = cards.length >= 4;
  const infiniteCards = isCarousel ? [...cards, ...cards] : cards;

  useEffect(() => {
    const track = trackRef.current;
    if (!track || hovered !== null || !isCarousel) return;

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
  }, [hovered, isCarousel]);

  return (
    <>
      {/* ── Mobile: vertical stack ── */}
      <div className="md:hidden flex flex-col gap-10 px-4 w-full">
        {cards.map((card, index) => (
          <a
            key={`mobile-${card.src}-${index}`}
            href={card.ctaLink ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full"
          >
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-border bg-secondary"
              style={{ aspectRatio: ratioOf(card.aspect) }}
            >
              <ProjectMedia
                src={card.src}
                video={card.video}
                alt={card.name ?? card.title}
                fit={resolveFit(card)}
                imgClassName="transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <CardMeta card={card} />
          </a>
        ))}
      </div>

      {/* ── Desktop ── */}
      <div
        className={cn(
          "hidden md:block relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-6 sm:py-10 bg-background",
          // A short list can't auto-scroll, so let it scroll by hand instead
          // of being clipped by overflow-hidden.
          isCarousel ? "overflow-hidden" : "overflow-x-auto",
        )}
      >
        <div
          ref={trackRef}
          className={cn(
            "flex items-start gap-3 sm:gap-5 md:gap-6 px-6 md:px-8 whitespace-nowrap will-change-transform",
            !isCarousel && "justify-center",
          )}
        >
          {infiniteCards.map((card, index) => (
            <a
              key={`${card.name ?? card.title}-${index}`}
              href={card.ctaLink ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "group flex-none transition-all duration-500 ease-out",
                // Narrower when static so the whole set fits on screen
                isCarousel
                  ? card.aspect === "portrait"
                    ? "w-[clamp(10rem,30vw,21.875rem)]"
                    : card.aspect === "landscape"
                      ? "w-[clamp(14rem,40vw,37.5rem)]"
                      : "w-[clamp(12rem,35vw,28.125rem)]"
                  : card.aspect === "portrait"
                    ? "w-[clamp(10rem,20vw,20rem)]"
                    : card.aspect === "landscape"
                      ? "w-[clamp(12rem,27vw,30rem)]"
                      : "w-[clamp(11rem,24vw,26rem)]",
                hovered !== null &&
                  hovered !== index &&
                  "blur-[2px] scale-[0.98] opacity-50 grayscale",
                hovered === index && "scale-105 z-10",
              )}
            >
              {/* Image box keeps the aspect ratio; text lives below it */}
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-secondary transition-shadow duration-500",
                  hovered === index &&
                    "shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.1)]",
                )}
                style={{ aspectRatio: ratioOf(card.aspect) }}
              >
                <ProjectMedia
                  src={card.src}
                  video={card.video}
                  alt={card.name ?? card.title}
                  fit={resolveFit(card)}
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <CardMeta card={card} />
            </a>
          ))}
        </div>

        {/* Edge fades — only meaningful while the track is looping */}
        {isCarousel && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-40 bg-linear-to-r from-background/80 dark:from-background to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-40 bg-linear-to-l from-background/80 dark:from-background to-transparent z-20" />
          </>
        )}
      </div>
    </>
  );
}
