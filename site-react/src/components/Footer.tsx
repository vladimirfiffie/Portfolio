"use client";
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
    <footer className="relative w-full bg-background pt-14 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* ── Main row ── */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-10">

          {/* Left — Identity */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start space-y-1.5"
          >
            <h2
              className="font-black text-foreground tracking-tighter text-center md:text-left uppercase leading-none"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
            >
              Vladimir<span className="text-primary">.</span>
            </h2>
            <div className="flex items-center gap-3">
              <p className="text-foreground text-[11px] sm:text-xs uppercase tracking-[0.16em] font-black text-center md:text-left">
                Creative IT Graduate
              </p>
              <a
                href="https://github.com/vladimirfiffie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground/50 hover:text-foreground transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695[...]
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/vladimir-fiffie/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/50 hover:text-foreground transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.3[...]
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Center — Core stack (visible lg+, hidden below) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex flex-col items-center gap-2.5">
              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-foreground/55">
                Site made with
              </p>
              <div className="flex items-center gap-6 xl:gap-8 whitespace-nowrap">
                {coreStack.map((tech) => (
                  <LinkPreview
                    key={tech.name}
                    url={tech.url}
                    className="inline-block text-foreground text-[11px] font-black uppercase tracking-[0.12em] transition-colors border-b border-primary/0 hover:border-primary hover:text-primary"
                  >
                    {tech.name}
                  </LinkPreview>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile stack — wrapping pill list, shown below lg */}
          <div className="flex lg:hidden flex-col items-center justify-center gap-2">
            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-foreground/55">
              Site made with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {coreStack.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-colors"
                >
                  {tech.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-primary bg-background shadow-[4px_4px_0px_0px_var(--primary)]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-primary" />
              </span>
              <span className="text-primary text-[11px] sm:text-xs font-black uppercase tracking-[0.14em] whitespace-nowrap">
                Available for work
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-foreground text-[11px] uppercase tracking-[0.14em] font-black text-center sm:text-left">
            © {currentYear} Vladimir Fiffie Jr<span className="text-primary">.</span>
          </p>
          <p className="text-foreground/40 text-[9px] uppercase tracking-[0.15em] font-bold text-center sm:text-right">
            Designed for the web 2026
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
