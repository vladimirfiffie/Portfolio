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
      className="w-full bg-background font-sans md:px-10 border-t border-border"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center flex flex-col items-center">
        {/* Header matched to Hero/About font */}
        <h2 className="text-5xl md:text-7xl lg:text-9xl mb-6 text-foreground font-black uppercase tracking-tighter leading-none">
          My Journey<span className="text-primary">.</span>
        </h2>

        <p className="text-foreground text-sm md:text-base max-w-2xl font-bold uppercase tracking-tight">
          From building my first projects to creating engaging digital
          experiences. Here&apos;s a timeline of my growth as a developer.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* STICKY YEAR CONTAINER */}
            <div className="sticky top-40 flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 bg-background flex items-center justify-center border border-border">
                <div className="h-3 w-3 bg-primary" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-7xl font-black text-foreground uppercase tracking-tighter opacity-20">
                {item.title}
              </h3>
            </div>

            {/* CONTENT SECTION */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-3xl mb-4 text-left font-black text-foreground uppercase tracking-tighter">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* TRACKING LINE - Stripped of soft gradients */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-border/20"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

Timeline.displayName = "Timeline";
