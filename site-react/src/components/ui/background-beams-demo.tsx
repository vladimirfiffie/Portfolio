"use client";
import { BackgroundBeams } from "../ui/background-beams";
import { motion } from "motion/react";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Connect With Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          I'm always interested in hearing about new projects and creative opportunities.
          Whether you have an exciting idea to explore or need help bringing your vision to life,
          feel free to reach out. Let's collaborate and create something amazing together.
        </p>
        
        {/* Contact Links */}
        <div className="flex justify-center gap-4 mt-6 relative z-10 flex-wrap">
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vladimirfiffiejr@proton.me"
            target="_blank"  
            rel="noopener noreferrer"
            className="relative px-6 py-2 rounded-lg border border-neutral-700 text-neutral-300 overflow-hidden"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 bg-neutral-300"
              initial={{ x: "-100%" }}
              variants={{
                hover: { x: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              initial={{ color: "rgb(212, 212, 212)" }}
              variants={{
                hover: { color: "rgb(13, 13, 13)" }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative z-10"
            >
              Email
            </motion.span>
          </motion.a>
          <motion.a
            href="https://github.com/vladimirfiffie"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-2 rounded-lg border border-neutral-700 text-neutral-300 overflow-hidden"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 bg-neutral-300"
              initial={{ x: "-105%" }}
              variants={{
                hover: { x: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              initial={{ color: "rgb(212, 212, 212)" }}
              variants={{
                hover: { color: "rgb(13, 13, 13)" }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative z-10"
            >
              GitHub
            </motion.span>
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-2 rounded-lg border border-neutral-700 text-neutral-300 overflow-hidden"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 bg-neutral-300"
              initial={{ x: "-100%" }}
              variants={{
                hover: { x: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              initial={{ color: "rgb(212, 212, 212)" }}
              variants={{
                hover: { color: "rgb(13, 13, 13)" }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative z-10"
            >
              LinkedIn
            </motion.span>
          </motion.a>
        </div>
      </div>

      {/* Center a full-bleed BackgroundBeams across the viewport */}
      <BackgroundBeams className="left-1/2 -translate-x-1/2 w-screen" />
    </div>
  );
}
