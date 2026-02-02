"use client";

import React from "react";
import { motion } from "framer-motion";
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
    <footer className="relative w-full bg-neutral-950 pt-24 pb-12 overflow-hidden">
      {/* Decorative Top Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent blur-md" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
          
          {/* Left: Identity */}
          <div className="flex flex-col space-y-2 items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white tracking-tighter text-center md:text-left">
                VLADIMIR<span className="text-blue-500">.</span>
              </h2>
              <p className="text-neutral-500 text-[10px] uppercase tracking-[0.3em] font-bold text-center md:text-left">
                Creative IT Graduate
              </p>
            </motion.div>
          </div>

          {/* Middle: Core Stack with Link Previews */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-6 whitespace-nowrap">
              {coreStack.map((tech, index) => (
                <React.Fragment key={tech.name}>
                  <LinkPreview
                    url={tech.url}
                    className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors"
                  >
                    {tech.name}
                  </LinkPreview>

                  {index !== coreStack.length - 1 && (
                    <div className="h-1 w-1 rounded-full bg-neutral-800" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right: Availability */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-end space-y-4"
          >
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-blue-500/90 text-[10px] font-bold uppercase tracking-[0.15em]">
                Available for work
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-neutral-900/50 flex flex-col items-center justify-center gap-4">
          <div className="text-center">
            <p className="text-neutral-600 text-[10px] uppercase tracking-[0.2em] font-medium">
              © {currentYear} Vladimir Fiffie Jr.
            </p>
            <p className="text-neutral-700 text-[9px] uppercase tracking-[0.15em] mt-1">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
