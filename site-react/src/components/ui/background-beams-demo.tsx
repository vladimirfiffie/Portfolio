"use client";
import { useState } from "react";
import { BackgroundBeams } from "./background-beams";
import { motion } from "framer-motion";

type Channel = {
  label: string;
  value: string;
  href?: string;
  copy?: boolean;
  external?: boolean;
};

export function BackgroundBeamsDemo() {
  const [copied, setCopied] = useState(false);
  const email = "vladimirfiffiejr@proton.me";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  const channels: Channel[] = [
    { label: "Email", value: email, href: `mailto:${email}`, copy: true },
    {
      label: "GitHub",
      value: "@vladimirfiffie",
      href: "https://github.com/vladimirfiffie",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "in/vladimir-fiffie",
      href: "https://www.linkedin.com/in/vladimir-fiffie/",
      external: true,
    },
  ];

  return (
    <div
      id="contact"
      className="w-full bg-background relative flex flex-col items-center justify-center antialiased overflow-hidden py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-foreground text-center font-black tracking-tighter uppercase leading-none md:whitespace-nowrap"
          style={{ fontSize: "clamp(2.2rem, 8.5vw, 7rem)" }}
        >
          Connect with me<span className="text-primary">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground/70 max-w-xl mx-auto mt-6 sm:mt-8 text-center relative z-10 font-bold uppercase leading-relaxed"
          style={{
            fontSize: "clamp(0.85rem, 1.6vw, 1rem)",
            letterSpacing: "0.09em",
          }}
        >
          Open to roles, collaborations and good ideas.
        </motion.p>

        {/* ── Channel rows: whole row inverts on hover ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="relative z-10 mt-12 w-full border-2 border-foreground sm:mt-16"
        >
          {channels.map((c, i) => (
            <motion.div
              key={c.label}
              variants={{
                hidden: { opacity: 0, x: -16 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className={i < channels.length - 1 ? "border-b-2 border-foreground" : ""}
            >
              <div className="group flex items-stretch bg-background transition-colors duration-150 hover:bg-foreground">
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="flex flex-1 items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5"
                >
                  <span className="flex min-w-0 flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                    <span className="shrink-0 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/50 transition-colors group-hover:text-background/60 sm:text-[11px]">
                      {c.label}
                    </span>
                    <span className="truncate text-sm font-black uppercase tracking-tight text-foreground transition-colors group-hover:text-background sm:text-base">
                      {c.value}
                    </span>
                  </span>

                  <span
                    aria-hidden
                    className="shrink-0 text-foreground transition-all duration-300 group-hover:text-background group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </a>

                {/* Copy sits beside the link so the row stays one target */}
                {c.copy && (
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="shrink-0 border-l-2 border-foreground px-3 text-[10px] font-black uppercase tracking-widest text-foreground transition-colors group-hover:border-background/40 group-hover:text-background sm:px-5 sm:text-[11px]"
                    aria-label="Copy email address"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
