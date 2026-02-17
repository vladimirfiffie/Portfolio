"use client";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandFigma,
  IconBrandNodejs,
  IconBrandGithub,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <div className="mt-12 px-4 md:px-0">
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground text-center">
        Skills & Tools
      </h3>

      <BentoGrid className="max-w-full md:auto-rows-[20rem]">
        {skillItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn(
              "border-border bg-background transition-all duration-300",
              item.className,
            )}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// 1. Frontend: Grayscale Code Logic
const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-24 dark:bg-dot-white/[0.1] bg-dot-black/[0.1] flex-col space-y-2 rounded-lg p-4 font-mono"
    >
      {[40, 70, 50].map((width, i) => (
        <motion.div
          key={i}
          variants={{
            initial: { width: 0, opacity: 0 },
            animate: { width: `${width}%`, opacity: 1 },
          }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="h-2 bg-foreground/20 rounded-full"
        />
      ))}
      <div className="flex gap-2">
        <div className="h-2 w-4 bg-primary rounded-full" />
        <div className="h-2 w-12 bg-foreground/10 rounded-full" />
      </div>
    </motion.div>
  );
};

// 2. UI / Styling: Monochrome Layout Scaling
const SkeletonTwo = () => {
  return (
    <motion.div
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-24 bg-secondary/50 rounded-lg p-4 items-center justify-center gap-2"
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          variants={{
            hover: { scale: [1, 1.1, 1], y: [0, -5, 0] },
          }}
          className="h-12 w-12 rounded-xl border-2 border-primary bg-background shadow-[4px_4px_0px_0px_var(--primary)]"
        />
      ))}
    </motion.div>
  );
};

// 3. Backend: Data Packets (Solid Primary)
const SkeletonThree = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-24 bg-secondary/50 rounded-lg p-4 flex-col justify-between overflow-hidden relative">
      <div className="flex justify-between w-full border-b border-border pb-2">
        <div className="h-2 w-8 bg-primary rounded-full animate-pulse" />
        <div className="h-2 w-2 bg-muted-foreground rounded-full" />
      </div>
      <motion.div
        animate={{ y: [0, -40], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1 h-8 bg-linear-to-t from-primary to-transparent"
      />
      <div className="h-8 w-full bg-background border border-border rounded-md" />
    </div>
  );
};

// 4. Tools: Version History (Black/White Nodes)
const SkeletonFour = () => {
  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-24 bg-secondary/50 rounded-lg p-4 flex-col space-y-3"
      initial="initial"
      whileHover="hover"
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <motion.div
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.2, backgroundColor: "var(--primary)" },
            }}
            className="h-3 w-3 rounded-full border-2 border-primary"
          />
          <motion.div
            variants={{
              initial: { width: "20%" },
              hover: { width: "100%" },
            }}
            className="h-2 bg-primary/20 rounded-full"
          />
        </div>
      ))}
    </motion.div>
  );
};

// 5. Extras: Performance Bars (Solid Fills)
const SkeletonFive = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-24 bg-secondary/50 rounded-lg p-4 items-end justify-around">
      {[60, 100, 80].map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          className="w-4 bg-primary rounded-t-sm"
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
      <span className="text-sm">React, Next.js, TypeScript, JavaScript</span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconBrandJavascript className="h-4 w-4 text-primary" />,
  },
  {
    title: "UI / Styling",
    description: (
      <span className="text-sm">Tailwind CSS, Framer Motion, Figma</span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconBrandTailwind className="h-4 w-4 text-primary" />,
  },
  {
    title: "Backend",
    description: (
      <span className="text-sm">Node.js, Express, PostgreSQL, Docker</span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconBrandNodejs className="h-4 w-4 text-primary" />,
  },
  {
    title: "Tools",
    description: <span className="text-sm">Git, GitHub, VSCode, Postman</span>,
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconBrandGithub className="h-4 w-4 text-primary" />,
  },
  {
    title: "Growth",
    description: (
      <span className="text-sm">Accessibility, Performance, Testing</span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBrandFigma className="h-4 w-4 text-primary" />,
  },
];
