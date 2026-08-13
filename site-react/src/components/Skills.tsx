"use client";
import { motion } from "motion/react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiJest,
  SiLighthouse,
  SiFlutter,
} from "react-icons/si";

/**
 * `color` is the official brand color, revealed on hover.
 * Brands whose mark is pure black use the foreground token instead, so they
 * stay visible in dark mode rather than disappearing into the background.
 */
type Tech = { name: string; Icon: IconType; color: string };

const groups: { label: string; tech: Tech[] }[] = [
  {
    label: "Frontend",
    tech: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "var(--foreground)" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    label: "UI / Styling",
    tech: [
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    label: "Mobile",
    tech: [{ name: "Flutter", Icon: SiFlutter, color: "#02569B" }],
  },
  {
    label: "Backend",
    tech: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", Icon: SiExpress, color: "var(--foreground)" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    ],
  },
  {
    label: "Tools",
    tech: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "var(--foreground)" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Vite", Icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    label: "Growth",
    tech: [
      { name: "Lighthouse", Icon: SiLighthouse, color: "#F44B21" },
      { name: "Jest", Icon: SiJest, color: "#C21325" },
    ],
  },
];

/**
 * Bare icon — no card, no border. Springs in on scroll, then on hover it
 * pops up, tilts, and takes on the brand color.
 *
 * Color is handled in CSS (a `--brand` custom property plus a hover rule) so
 * it can resolve theme tokens; Framer only drives the transform.
 */
const TechIcon = ({ name, Icon, color }: Tech) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0.4, y: 20 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 380, damping: 18 },
      },
    }}
    style={{ "--brand": color } as React.CSSProperties}
    className="group/icon flex cursor-pointer flex-col items-center gap-2.5"
  >
    <motion.span
      whileHover={{ scale: 1.3, rotate: -8, y: -12 }}
      transition={{ type: "spring", stiffness: 400, damping: 12, mass: 0.6 }}
      className="text-foreground/70 transition-colors duration-300 group-hover/icon:text-[var(--brand)]"
    >
      <Icon
        className="h-11 w-11 sm:h-14 sm:w-14 md:h-16 md:w-16"
        aria-label={name}
      />
    </motion.span>

    <span className="text-[10px] font-black uppercase tracking-[0.14em] text-transparent transition-colors duration-300 group-hover/icon:text-[var(--brand)] sm:text-[11px]">
      {name}
    </span>
  </motion.div>
);

export default function Skills() {
  return (
    <div className="mt-10 sm:mt-14 px-4 md:px-0">
      <h3
        className="font-black mb-10 sm:mb-14 text-foreground text-center uppercase tracking-tighter leading-none"
        style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)" }}
      >
        Skills &amp; Tools
      </h3>

      <div className="flex flex-col gap-12 sm:gap-16">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="mb-6 flex items-center gap-4 sm:mb-8">
              <span className="text-[11px] font-black uppercase tracking-[0.16em] text-foreground/50 sm:text-xs">
                {group.label}
              </span>
              <span className="h-px flex-1 bg-border" aria-hidden />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.09 } },
              }}
              className="flex flex-wrap items-start justify-center gap-x-10 gap-y-8 sm:gap-x-16 sm:gap-y-10"
            >
              {group.tech.map((t) => (
                <TechIcon key={t.name} {...t} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
