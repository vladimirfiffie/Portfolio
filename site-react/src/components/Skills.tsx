"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandFigma,
  IconBrandNodejs,
  IconBrandGithub,
} from "@tabler/icons-react";
import { motion } from "framer-motion"; // Note: ensure you use "framer-motion" or your specific alias

export default function Skills() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200 text-center">
        Skills & Tools
      </h3>

      <BentoGrid className="max-w-full md:auto-rows-[20rem]">
        {skillItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// 1. Frontend: Simulating code typing/logic flow
const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.1] flex-col space-y-2 rounded-lg p-4 font-mono text-[10px]"
    >
      {[40, 70, 50].map((width, i) => (
        <motion.div
          key={i}
          variants={{
            initial: { width: 0, opacity: 0 },
            animate: { width: `${width}%`, opacity: 1 },
          }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="h-2 bg-yellow-500/50 rounded-full"
        />
      ))}
      <div className="flex gap-2">
        <div className="h-2 w-4 bg-blue-500/50 rounded-full" />
        <div className="h-2 w-12 bg-purple-500/50 rounded-full" />
      </div>
    </motion.div>
  );
};

// 2. UI / Styling: Simulating a layout "Flexing" or scaling
const SkeletonTwo = () => {
  return (
    <motion.div
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4 items-center justify-center gap-2"
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          variants={{
            hover: { scale: [1, 1.2, 1], rotate: [0, i * 5, 0] }
          }}
          className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-sm"
        />
      ))}
    </motion.div>
  );
};

// 3. Backend: Simulating data packets moving through a pipe/server
const SkeletonThree = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4 flex-col justify-between overflow-hidden relative">
      <div className="flex justify-between w-full border-b border-neutral-200 pb-2">
        <div className="h-2 w-8 bg-green-500 rounded-full animate-pulse" />
        <div className="h-2 w-2 bg-neutral-400 rounded-full" />
      </div>
      <motion.div 
        animate={{ y: [0, -40], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-green-500 to-transparent"
      />
      <div className="h-8 w-full bg-neutral-200 dark:bg-neutral-800 rounded-md" />
    </div>
  );
};

// 4. Tools: Simulating Git Commits / Version History
const SkeletonFour = () => {
  return (
    <motion.div 
      className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4 flex-col space-y-3"
      initial="initial"
      whileHover="hover"
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <motion.div 
            variants={{
              initial: { scale: 1, rotate: 0 },
              hover: { scale: 1.5, rotate: 180 }
            }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="h-3 w-3 rounded-full border-2 border-orange-500 bg-white dark:bg-black" 
          />
          <motion.div 
            variants={{
              initial: { width: "20%" },
              hover: { width: "100%" }
            }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full"
          />
        </div>
      ))}
    </motion.div>
  );
};

// 5. Extras: Performance Gauges
const SkeletonFive = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4 items-end justify-around">
      {[60, 100, 80].map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          className="w-4 bg-gradient-to-t from-violet-500 to-pink-500 rounded-t-sm"
          transition={{ duration: 1, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
};

const skillItems = [
  {
    title: "Frontend",
    description: (
      <span className="text-sm">HTML, CSS, JavaScript, React, TypeScript</span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconBrandJavascript className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "UI / Styling",
    description: <span className="text-sm">Tailwind CSS, Styled-Components, Figma</span>,
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconBrandTailwind className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Backend & DevOps",
    description: <span className="text-sm">Node.js, Express, Docker, CI/CD</span>,
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconBrandNodejs className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tools",
    description: <span className="text-sm">Git, GitHub, VSCode, Postman</span>,
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Extras",
    description: <span className="text-sm">Testing, Accessibility, Performance Tuning</span>,
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBrandFigma className="h-4 w-4 text-neutral-500" />,
  },
];
