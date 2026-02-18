"use client";
import { useState } from "react";
import { BackgroundBeams } from "./background-beams";
import { motion } from "motion/react";

export function BackgroundBeamsDemo() {
  const [copied, setCopied] = useState(false);
  const email = "vladimirfiffiejr@proton.me";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  const links = [
    { label: "Email", action: handleCopy, isCopy: true, href: null },
    { label: "GitHub", href: "https://github.com/vladimirfiffie" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vladimir-fiffie/" },
  ];

  return (
    <div
      id="contact"
      className="h-160 w-full bg-background relative flex flex-col items-center justify-center antialiased overflow-hidden"
    >
      <div className="max-w-4xl mx-auto p-4 relative z-10">
        <h1 className="relative z-10 text-5xl md:text-8xl text-foreground text-center font-black tracking-tighter uppercase leading-none whitespace-nowrap">
          CONNECT WITH ME<span className="text-primary">.</span>
        </h1>

        <p className="text-foreground max-w-lg mx-auto my-8 text-sm md:text-base text-center relative z-10 font-black uppercase tracking-tight">
          I&apos;m always interested in hearing about new projects and creative
          opportunities. Let&apos;s collaborate and create something amazing
          together.
        </p>

        <div className="flex justify-center gap-6 mt-8 relative z-10 flex-wrap">
          {links.map((link) => {
            /*
             * DARK MODE FIX: All contact buttons now use the same brutalist
             * border + shadow-offset style as the "Available for Work" badge
             * in the footer. Works in both light and dark mode via CSS variables.
             *
             * Pattern:
             *   - border-2 border-foreground  → sharp black (light) / white (dark) border
             *   - shadow-[4px_4px_0px_0px_var(--foreground)]  → offset shadow
             *   - hover: bg-foreground + text-background  → inverted fill
             *   - active: translate + remove shadow → pressed effect
             */
            const sharedClass = [
              "relative inline-flex items-center justify-center px-8 py-3 cursor-pointer",
              "border-2 border-foreground bg-background text-foreground",
              "shadow-[4px_4px_0px_0px_var(--foreground)]",
              "hover:bg-foreground hover:text-background",
              "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
              "transition-all duration-100",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            ].join(" ");

            if (link.href) {
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sharedClass}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="font-black uppercase tracking-[0.2em] text-xs">
                    {link.label}
                  </span>
                </motion.a>
              );
            }

            return (
              <motion.button
                key={link.label}
                type="button"
                onClick={link.action}
                className={sharedClass}
                whileTap={{ scale: 0.97 }}
              >
                <span className="font-black uppercase tracking-[0.2em] text-xs">
                  {link.isCopy && copied ? "Copied!" : link.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
