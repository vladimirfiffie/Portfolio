"use client";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base lg:text-lg font-bold uppercase tracking-tight text-foreground leading-tight">
            Built two major projects:{" "}
            <span className="text-primary underline decoration-2 underline-offset-4">
              Pao&apos;er Ship
            </span>
            , a Pygame Battleship for Raspberry Pi, and{" "}
            <span className="text-primary underline decoration-2 underline-offset-4">
              Lion&apos;s Den Cinema
            </span>
            , a booking platform where I designed the web UI.
          </p>
          <div className="grid grid-cols-2 gap-0 border-l border-t border-border">
            <ProjectCard title="Pao'er Ship" />
            <ProjectCard title="Lion's Den Cinema" />
            <ProjectCard title="React & TypeScript" />
            <ProjectCard title="Full Stack Dev" />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base lg:text-lg font-bold uppercase tracking-tight text-foreground leading-tight">
            Graduated and focused on building skills in React, animations, and
            full-stack development.
          </p>
          <div className="grid grid-cols-2 gap-0 border-l border-t border-border">
            <ProjectCard title="Portfolio" />
            <ProjectCard title="Framer Motion" />
            <ProjectCard title="Learning Projects" />
            <ProjectCard title="Continuous Learning" />
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div>
          <p className="mb-8 text-sm md:text-base lg:text-lg font-bold uppercase tracking-tight text-foreground leading-tight">
            &quot;Portfolio launched. Currently building{" "}
            <span className="text-primary underline decoration-2 underline-offset-4">
              Airflow
            </span>
            , a flight SaaS, with a focus on scalable React applications and
            high-performance UX design.&quot;
          </p>
          <div className="grid grid-cols-2 gap-0 border-l border-t border-border">
            <ProjectCard title="Portfolio" />
            <ProjectCard title="Airflow (In Progress)" />
            <ProjectCard title="Framer Motion" />
            <ProjectCard title="Continuous Learning" />
          </div>
        </div>
      ),
    },
    {
      title: "NEXT",
      content: (
        <div>
          <p className="mb-4 text-sm md:text-base lg:text-lg font-bold uppercase tracking-tight text-foreground">
            Building scalable applications with modern technologies.
          </p>
          <ul className="mb-8 space-y-2">
            {[
              "Advanced React patterns",
              "Compelling UX animations",
              "Scalable deployments",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs text-foreground md:text-sm font-black uppercase tracking-widest"
              >
                <div className="h-2 w-2 bg-primary" />{" "}
                {/* Square bullet instead of round */}
                {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-0 border-l border-t border-border">
            <ProjectCard title="Backend Dev" />
            <ProjectCard title="Databases" />
            <ProjectCard title="API Design" />
            <ProjectCard title="Growth" />
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}

function ProjectCard({ title }: { title: string }) {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="h-20 md:h-44 lg:h-60 border-r border-b border-border bg-background flex items-center justify-center relative overflow-hidden group cursor-default"
    >
      {/* High-contrast fill animation on hover */}
      <motion.div
        className="absolute inset-0 bg-primary"
        variants={{
          initial: { y: "100%" },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.2, ease: "linear" }}
      />

      <motion.span
        variants={{
          initial: { color: "var(--foreground)" },
          hover: { color: "var(--primary-foreground)" },
        }}
        className="relative z-10 text-xs md:text-sm font-black uppercase tracking-tighter text-center px-4"
      >
        {title}
      </motion.span>
    </motion.div>
  );
}
