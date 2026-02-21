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

/* ── Skeletons ──────────────────────────────────────────────── */

// 1. Frontend — animated code bars
const SkeletonOne = () => (
  <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full h-full min-h- bg-dot-black/[0.08] dark:bg-dot-white/[0.08] flex-col justify-center space-y-2 rounded-lg p-3 sm:p-4 font-mono"
  >
    {[40, 70, 50].map((width, i) => (
      <motion.div
        key={i}
        variants={{
          initial: { width: 0, opacity: 0 },
          animate: { width: `${width}%`, opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="h-1.5 sm:h-2 bg-foreground/20 rounded-full"
      />
    ))}
    <div className="flex gap-2 pt-1">
      <div className="h-1.5 sm:h-2 w-4 bg-primary rounded-full" />
      <div className="h-1.5 sm:h-2 w-12 bg-foreground/10 rounded-full" />
    </div>
  </motion.div>
);

// 2. UI / Styling — bouncing boxes
const SkeletonTwo = () => (
  <motion.div
    whileHover="hover"
    className="flex flex-1 w-full h-full min-h-25 bg-secondary/50 rounded-lg p-3 sm:p-4 items-center justify-center gap-2 sm:gap-3"
  >
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        variants={{
          hover: { scale: [1, 1.1, 1], y: [0, -5, 0] },
        }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
        className="h-8 w-8 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-xl border-2 border-primary bg-background shadow-[4px_4px_0px_0px_var(--primary)]"
      />
    ))}
  </motion.div>
);

// 3. Backend — rising data packet
const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-25 bg-secondary/50 rounded-lg p-3 sm:p-4 flex-col justify-between overflow-hidden relative">
    <div className="flex justify-between w-full border-b border-border pb-2">
      <div className="h-1.5 sm:h-2 w-8 bg-primary rounded-full animate-pulse" />
      <div className="h-1.5 sm:h-2 w-2 bg-muted-foreground rounded-full" />
    </div>
    <motion.div
      animate={{ y: [0, -40], opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1 h-8 bg-linear-to-t from-primary to-transparent"
    />
    <div className="h-6 sm:h-8 w-full bg-background border border-border rounded-md" />
  </div>
);

// 4. Tools — expanding version nodes
const SkeletonFour = () => (
  <motion.div
    className="flex flex-1 w-full h-full min-h-25 bg-secondary/50 rounded-lg p-3 sm:p-4 flex-col justify-center space-y-2 sm:space-y-3"
    initial="initial"
    whileHover="hover"
  >
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex items-center gap-2 sm:gap-3">
        <motion.div
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.2, backgroundColor: "var(--primary)" },
          }}
          className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 rounded-full border-2 border-primary"
        />
        <motion.div
          variants={{
            initial: { width: "20%" },
            hover: { width: "100%" },
          }}
          className="h-1.5 sm:h-2 bg-primary/20 rounded-full"
        />
      </div>
    ))}
  </motion.div>
);

// 5. Growth — animated bar chart
const SkeletonFive = () => (
  <div className="flex flex-1 w-full h-full min-h-25 bg-secondary/50 rounded-lg p-3 sm:p-4 items-end justify-around">
    {[60, 100, 80].map((height, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${height}%` }}
        className="w-3 sm:w-4 bg-primary rounded-t-sm"
        transition={{ duration: 1, delay: i * 0.2 }}
      />
    ))}
  </div>
);

/* ── Skill items config ─────────────────────────────────────── */
const skillItems = [
  {
    title: "Frontend",
    description: <span>React, Next.js, TypeScript, JavaScript</span>,
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconBrandJavascript className="h-4 w-4 text-primary" />,
  },
  {
    title: "UI / Styling",
    description: <span>Tailwind CSS, Framer Motion, Figma</span>,
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconBrandTailwind className="h-4 w-4 text-primary" />,
  },
  {
    title: "Backend",
    description: <span>Node.js, Express, PostgreSQL, Docker</span>,
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconBrandNodejs className="h-4 w-4 text-primary" />,
  },
  {
    title: "Tools",
    description: <span>Git, GitHub, VSCode, Postman</span>,
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconBrandGithub className="h-4 w-4 text-primary" />,
  },
  {
    title: "Growth",
    description: <span>Accessibility, Performance, Testing</span>,
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBrandFigma className="h-4 w-4 text-primary" />,
  },
];

/* ── Skills section ─────────────────────────────────────────── */
export default function Skills() {
  return (
    <div className="mt-8 sm:mt-12 px-4 md:px-0">
      {/* Heading uses same fluid clamp pattern as the rest of the site */}
      <h3
        className="font-black mb-6 sm:mb-8 text-foreground text-center uppercase tracking-tighter leading-none"
        style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)" }}
      >
        Skills &amp; Tools
      </h3>

      <BentoGrid>
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
