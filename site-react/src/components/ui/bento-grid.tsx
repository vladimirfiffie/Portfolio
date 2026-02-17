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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3",
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
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-border bg-secondary/30 p-4 transition-all duration-300 hover:bg-secondary/50 hover:border-primary/50",
        className,
      )}
    >
      {/* Header container for Skeleton animations */}
      <div className="flex flex-1 w-full h-full min-h-24">{header}</div>

      <div className="transition duration-300 group-hover/bento:translate-x-1">
        {/* Icon is now primary-colored by default */}
        <div className="text-primary">{icon}</div>

        <div className="mt-2 mb-1 font-sans font-black text-foreground uppercase tracking-tighter text-lg leading-none">
          {title}
        </div>

        <div className="font-sans text-sm font-medium text-muted-foreground leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
