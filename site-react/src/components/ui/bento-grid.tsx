"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Single column on mobile, 3-col on md+
        // Row height is auto on mobile so content breathes naturally,
        // fixed 20rem rows on md+ for the visual grid effect
        "mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:auto-rows-[18rem] lg:auto-rows-[20rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-3 rounded-2xl md:rounded-3xl border border-border bg-secondary/30 p-3 sm:p-4 transition-all duration-300 hover:bg-secondary/50 hover:border-primary/50",
        // On mobile, give a sensible min-height so skeleton animations are visible
        "min-h-50 sm:min-h-60 md:min-h-0",
        className,
      )}
    >
      {/* Skeleton / header */}
      <div className="flex flex-1 w-full h-full min-h-35 sm:min-h-35 md:min-h-0">
        {header}
      </div>

      {/* Text block */}
      <div className="transition duration-300 group-hover/bento:translate-x-1">
        <div className="text-primary">{icon}</div>
        <div className="mt-1.5 mb-0.5 font-sans font-black text-foreground uppercase tracking-tighter leading-none"
          style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)" }}
        >
          {title}
        </div>
        <div className="font-sans font-medium text-muted-foreground leading-relaxed"
          style={{ fontSize: "clamp(0.7rem, 1.4vw, 0.875rem)" }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
