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

  return (
    <div
      id="contact"
      className="h-[40rem] w-full bg-background relative flex flex-col items-center justify-center antialiased overflow-hidden"
    >
      <div className="max-w-4xl mx-auto p-4 relative z-10">
        <h1 className="relative z-10 text-5xl md:text-8xl text-foreground text-center font-black tracking-tighter uppercase leading-none">
          CONNECT WITH ME<span className="text-primary">.</span>
        </h1>

        <p className="text-foreground max-w-lg mx-auto my-8 text-sm md:text-base text-center relative z-10 font-black uppercase tracking-tight">
          I&apos;m always interested in hearing about new projects and creative
          opportunities. Let&apos;s collaborate and create something amazing
          together.
        </p>

        <div className="flex justify-center gap-6 mt-8 relative z-10 flex-wrap">
          {[
            { label: "Email", action: handleCopy, isCopy: true, href: null },
            { label: "GitHub", href: "https://github.com/vladimirfiffie" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/vladimir-fiffie/",
            },
          ].map((link) => {
            const Component = link.href ? motion.a : motion.button;
            return (
              <Component
                key={link.label}
                href={link.href as string}
                target={link.href ? "_blank" : undefined}
                rel={link.href ? "noopener noreferrer" : undefined}
                onClick={link.action}
                className="relative px-8 py-3 bg-background border-2 border-foreground text-foreground cursor-pointer transition-all duration-75 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                whileHover={{
                  backgroundColor: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                <span className="relative z-10 font-black uppercase tracking-[0.2em] text-xs">
                  {link.isCopy && copied ? "Copied!" : link.label}
                </span>
              </Component>
            );
          })}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
