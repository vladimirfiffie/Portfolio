import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base lg:text-lg font-normal text-neutral-800 dark:text-neutral-200">
            Built two major projects that showcased my growth in React and web development: Pao'er Ship, a Pygame-based Battleship game for Raspberry Pi, and Lion's Den Cinema, a full-featured cinema booking platform with dynamic UI.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/50 flex items-center justify-center dark:from-blue-900/20 dark:to-cyan-900/20">
              <span className="text-xs md:text-sm text-blue-600 dark:text-blue-300 font-semibold">Pao'er Ship</span>
            </div>
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/50 flex items-center justify-center dark:from-purple-900/20 dark:to-pink-900/20">
              <span className="text-xs md:text-sm text-purple-600 dark:text-purple-300 font-semibold">Lion's Den Cinema</span>
            </div>
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/50 flex items-center justify-center dark:from-emerald-900/20 dark:to-teal-900/20">
              <span className="text-xs md:text-sm text-emerald-600 dark:text-emerald-300 font-semibold">React & TypeScript</span>
            </div>
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/50 flex items-center justify-center dark:from-orange-900/20 dark:to-red-900/20">
              <span className="text-xs md:text-sm text-orange-600 dark:text-orange-300 font-semibold">Full Stack Dev</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Present",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base lg:text-lg font-normal text-neutral-800 dark:text-neutral-200">
            Graduated and launched this modern portfolio website showcasing my projects. Built with React, TypeScript, Tailwind CSS, and Framer Motion for smooth animations and engaging interactions.
          </p>
          <p className="mb-8 text-sm md:text-base lg:text-lg font-normal text-neutral-800 dark:text-neutral-200">
            Recently completed the portfolio, now focusing on building an ecommerce website while continuously updating and improving the portfolio. Deepening expertise in React patterns, animations, and responsive design.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/50 flex items-center justify-center dark:from-blue-900/20 dark:to-indigo-900/20">
              <span className="text-xs md:text-sm text-blue-600 dark:text-blue-300 font-semibold">Portfolio</span>
            </div>
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-cyan-500/20 to-sky-500/20 border border-cyan-500/50 flex items-center justify-center dark:from-cyan-900/20 dark:to-sky-900/20">
              <span className="text-xs md:text-sm text-cyan-600 dark:text-cyan-300 font-semibold">Framer Motion</span>
            </div>
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/50 flex items-center justify-center dark:from-violet-900/20 dark:to-purple-900/20">
              <span className="text-xs md:text-sm text-violet-600 dark:text-violet-300 font-semibold">Ecommerce Project</span>
            </div>
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/50 flex items-center justify-center dark:from-pink-900/20 dark:to-rose-900/20">
              <span className="text-xs md:text-sm text-pink-600 dark:text-pink-300 font-semibold">Continuous Learning</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Next Steps",
      content: (
        <div>
          <p className="mb-4 text-sm md:text-base lg:text-lg font-normal text-neutral-800 dark:text-neutral-200">
            Building scalable applications with modern technologies and best practices
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🚀 Build a full-featured ecommerce platform
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🚀 Master advanced React patterns and state management
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🚀 Create compelling user experiences with animations
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🚀 Deploy scalable web applications
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🚀 Collaborate on innovative projects
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/50 flex items-center justify-center dark:from-green-900/20 dark:to-emerald-900/20">
              <span className="text-xs md:text-sm text-green-600 dark:text-green-300 font-semibold">Backend Dev</span>
            </div>
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/50 flex items-center justify-center dark:from-yellow-900/20 dark:to-amber-900/20">
              <span className="text-xs md:text-sm text-yellow-600 dark:text-yellow-300 font-semibold">Databases</span>
            </div>
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/50 flex items-center justify-center dark:from-red-900/20 dark:to-orange-900/20">
              <span className="text-xs md:text-sm text-red-600 dark:text-red-300 font-semibold">API Design</span>
            </div>
            <div className="h-20 md:h-44 lg:h-60 rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-500/50 flex items-center justify-center dark:from-fuchsia-900/20 dark:to-purple-900/20">
              <span className="text-xs md:text-sm text-fuchsia-600 dark:text-fuchsia-300 font-semibold">Growth</span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
