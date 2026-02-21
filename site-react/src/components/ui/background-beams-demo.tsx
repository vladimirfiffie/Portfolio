"use client";
import { useState } from "react";
import { BackgroundBeams } from "./background-beams";
import { motion } from "framer-motion";

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

  const sharedClass = [
    "relative inline-flex items-center justify-center",
    "px-6 py-2.5 sm:px-8 sm:py-3",
    "cursor-pointer border-2 border-foreground bg-background text-foreground",
    "shadow-[4px_4px_0px_0px_var(--foreground)]",
    "hover:bg-foreground hover:text-background",
    "active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    "transition-all duration-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  ].join(" ");

  return (
    <div
      id="contact"
      className="w-full bg-background relative flex flex-col items-center justify-center antialiased overflow-hidden min-h-128 sm:min-h-152 md:min-h-168 py-16 sm:py-20 md:py-28"
    >
      {/* Changed max-w-4xl to max-w-7xl.
        A larger container prevents the "Connect with me" text from wrapping on desktop.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center w-full">

        {/* Heading:
          - Added md:whitespace-nowrap to keep it on one line for desktop.
          - Adjusted clamp to scale perfectly with viewport width.
        */}
        <h1
          className="relative z-10 text-foreground text-center font-black tracking-tighter uppercase leading-none md:whitespace-nowrap"
          style={{ fontSize: "clamp(2.2rem, 8.5vw, 7rem)" }}
        >
          Connect with me<span className="text-primary">.</span>
        </h1>

        {/* Subtext:
          - Increased max-w to 2xl so the paragraph width balances with the wide heading.
        */}
        <p
          className="text-foreground/70 max-w-2xl mx-auto mt-6 sm:mt-8 text-center relative z-10 font-bold uppercase leading-relaxed"
          style={{
            fontSize: "clamp(0.7rem, 1.6vw, 1rem)",
            letterSpacing: "0.15em",
          }}
        >
          I&apos;m always interested in hearing about new projects and creative
          opportunities. Let&apos;s collaborate and create something amazing
          together.
        </p>

        {/* CTA buttons */}
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mt-10 sm:mt-12 relative z-10 flex-wrap">
          {links.map((link) => {
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
