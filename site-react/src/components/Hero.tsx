import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollVariants = {
    initial: { opacity: 0 },
    animate: { opacity: [0.5, 1, 0.5], transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } },
  };

  return (
    <section className="w-screen relative overflow-hidden">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-6xl text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-slate-900 dark:text-slate-50 leading-tight"
        >
          Hi, I'm Vladimir — a Creative IT Graduate
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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-3 rounded-lg border border-neutral-700 text-neutral-300 text-lg overflow-hidden"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 bg-neutral-300 rounded-lg"
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
              View My Resume
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Scroll Down Animation */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.span
            animate={{ 
              opacity: [0.4, 1, 0.4],
              scale: [0.95, 1, 0.95]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-sm md:text-base lg:text-lg font-semibold text-slate-900 dark:text-slate-50 tracking-wider"
          >
            Scroll to explore
          </motion.span>
          <motion.div
            animate={{ 
              y: [0, 16, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-slate-900 dark:text-slate-50"
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