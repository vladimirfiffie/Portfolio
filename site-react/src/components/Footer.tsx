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
              <p className="text-foreground text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-black text-center md:text-left">
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
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
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
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Center — Core stack (visible lg+, hidden below) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-6 xl:gap-8 whitespace-nowrap">
              {coreStack.map((tech) => (
                <LinkPreview
                  key={tech.name}
                  url={tech.url}
                  className="inline-block text-foreground text-[10px] font-black uppercase tracking-[0.2em] transition-colors border-b border-primary/0 hover:border-primary hover:text-primary"
                >
                  {tech.name}
                </LinkPreview>
              ))}
            </div>
          </div>

          {/* Mobile stack — wrapping pill list, shown below lg */}
          <div className="flex lg:hidden flex-wrap items-center justify-center gap-x-4 gap-y-2">
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
              <span className="text-primary text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                Available for work
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-foreground text-[10px] uppercase tracking-[0.2em] font-black text-center sm:text-left">
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
