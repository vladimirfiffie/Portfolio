"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      id="journey"
      className="w-full bg-background"
      ref={containerRef}
    >
      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-10 text-center flex flex-col items-center">
        <h2
          className="mb-4 sm:mb-6 text-foreground font-black uppercase tracking-tighter leading-none"
          style={{ fontSize: "clamp(2.4rem, 9vw, 7rem)" }}
        >
          My Journey<span className="text-primary">.</span>
        </h2>
        <p
          className="text-foreground/70 max-w-2xl font-bold uppercase leading-relaxed"
          style={{
            fontSize: "clamp(0.6rem, 1.8vw, 0.9rem)",
            letterSpacing: "clamp(0.05em, 0.3vw, 0.15em)",
          }}
        >
          From building my first projects to creating engaging digital
          experiences. Here&apos;s a timeline of my growth as a developer.
        </p>
      </div>

      {/* ── Timeline entries ── */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-16 sm:pb-20 px-4 md:px-8 lg:px-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 sm:pt-12 md:pt-40 md:gap-10"
          >
            {/* Sticky year label + dot (desktop) */}
            <div className="sticky top-40 flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full shrink-0">
              {/* Dot */}
              <div className="h-8 w-8 md:h-10 md:w-10 absolute left-0 md:left-3 bg-background flex items-center justify-center border border-border shrink-0">
                <div className="h-2.5 w-2.5 md:h-3 md:w-3 bg-primary" />
              </div>
              {/* Year — hidden on mobile, shown md+ */}
              <h3
                className="hidden md:block md:pl-20 font-black text-foreground uppercase tracking-tighter opacity-20 leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
              >
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative pl-10 sm:pl-14 md:pl-4 w-full min-w-0">
              {/* Year — shown on mobile only */}
              <h3
                className="md:hidden block mb-4 text-left font-black text-foreground uppercase tracking-tighter leading-none"
                style={{ fontSize: "clamp(1.6rem, 7vw, 2.5rem)" }}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Animated line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-4 md:left-10 top-0 overflow-hidden w-0.5 bg-border/20"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-0.5 bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

Timeline.displayName = "Timeline";
