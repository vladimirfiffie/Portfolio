"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const TimelineItem = ({ item }: { item: TimelineEntry }) => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Track scroll progress specifically for this individual milestone
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"],
  });

  // Animate the Year based on scroll: scale up and fade in
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={targetRef} className="flex flex-col items-center mb-32 md:mb-48 last:mb-0">
      {/* ── Animated Year Header ── */}
      <motion.div
        style={{ scale, opacity, y }}
        className="flex flex-col items-center text-center mb-12"
      >
        <span className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-4">
          Milestone
        </span>

        <h3
          className="font-black text-foreground uppercase tracking-tighter leading-none"
          style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)" }}
        >
          {item.title}
        </h3>

        <div className="h-1.5 w-16 bg-primary mt-6" />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl text-center"
      >
        {item.content}
      </motion.div>
    </div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div id="journey" className="w-full bg-background overflow-hidden">
      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto py-20 px-4 text-center flex flex-col items-center">
        <h2
          className="mb-4 text-foreground font-black uppercase tracking-tighter leading-none"
          style={{ fontSize: "clamp(2.5rem, 10vw, 7rem)" }}
        >
          My Journey<span className="text-primary">.</span>
        </h2>
        <p
          className="text-foreground/60 max-w-xl font-bold uppercase leading-relaxed text-[clamp(0.65rem,1.8vw,0.9rem)] tracking-[0.2em]"
        >
          A scroll-reactive timeline of my growth.
        </p>
      </div>

      {/* ── Entries ── */}
      <div className="relative max-w-5xl mx-auto pb-32 px-4">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

Timeline.displayName = "Timeline";
