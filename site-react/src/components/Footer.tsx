"use client";

import React from "react";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const coreStack = [
    { name: "React", url: "https://react.dev" },
    { name: "Next.js", url: "https://nextjs.org" },
    { name: "TypeScript", url: "https://www.typescriptlang.org" },
    { name: "Tailwind", url: "https://tailwindcss.com" },
    { name: "Framer Motion", url: "https://www.framer.com/motion" },
  ];

  return (
    <footer className="relative w-full bg-background pt-24 pb-12 overflow-hidden border-t border-border">
      {/* Sharp Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
          {/* Left: Identity */}
          <div className="flex flex-col space-y-2 items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-black text-foreground tracking-tighter text-center md:text-left uppercase leading-none">
                VLADIMIR<span className="text-primary">.</span>
              </h2>
              <p className="text-foreground text-[11px] uppercase tracking-[0.3em] font-black text-center md:text-left mt-2">
                Creative IT Graduate
              </p>
            </motion.div>
          </div>

          {/* Middle: Core Stack (No dots, just sharp spacing) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-8 whitespace-nowrap">
              {coreStack.map((tech) => (
                <LinkPreview
                  key={tech.name}
                  url={tech.url}
                  className="text-foreground text-[10px] font-black uppercase tracking-[0.2em] hover:text-primary transition-colors border-b border-transparent hover:border-primary"
                >
                  {tech.name}
                </LinkPreview>
              ))}
            </div>
          </div>

          {/* Right: Availability (Sharp Box) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-end space-y-4"
          >
            <div className="flex items-center gap-3 px-6 py-3 border-2 border-primary bg-background shadow-[4px_4px_0px_0px_var(--primary)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-primary" />
              </span>
              <span className="text-primary text-[11px] font-black uppercase tracking-[0.2em]">
                Available for work
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-foreground text-[10px] uppercase tracking-[0.2em] font-black">
              © {currentYear} Vladimir Fiffie Jr
              <span className="text-primary">.</span>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-foreground/40 text-[9px] uppercase tracking-[0.15em] font-bold">
              Designed for the web 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
