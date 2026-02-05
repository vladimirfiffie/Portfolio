"use client";
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-screen relative overflow-hidden bg-neutral-950">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Container for the Spotlight.*/}

        <div className="absolute -top-40 left-0 md:left-60 md:-top-20 pointer-events-none z-0">
          <Spotlight />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-6xl text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-slate-900 dark:text-slate-50 leading-tight"
        >
          Hi, I&apos;m Vladimir — a Creative IT Graduate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 mt-6 max-w-3xl text-center text-lg md:text-xl lg:text-2xl font-normal text-neutral-600 dark:text-neutral-300"
        >
          I create engaging digital experiences, combining coding and thoughtful
          design to build applications that are both functional and beautiful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative z-10 mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-3 rounded-lg border border-neutral-700 text-neutral-300 text-lg overflow-hidden group"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 bg-neutral-100"
              initial={{ x: "-100%" }}
              variants={{
                hover: { x: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span className="relative z-10 text-neutral-300 transition-colors duration-300 group-hover:text-neutral-900">
              View My Resume
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Scroll Down Animation */}
        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <motion.span
            animate={{
              opacity: [0.4, 1, 0.4],
              y: [0, 5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-50 tracking-widest uppercase"
          >
            Scroll to explore
          </motion.span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-6 h-6 text-slate-900 dark:text-slate-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
