"use client";
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="w-screen relative overflow-hidden bg-background border-b border-border">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute -top-40 left-0 md:left-60 md:-top-20 pointer-events-none z-0">
          <Spotlight />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-6xl text-center text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-black text-foreground leading-none tracking-tighter uppercase px-4"
        >
          Hi, I&apos;m Vladimir<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 mt-6 max-w-2xl text-center text-lg md:text-xl font-bold uppercase tracking-tight text-foreground px-4"
        >
          Creative IT Graduate building functional & digital
          experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative z-10 mt-12"
        >
          <motion.a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "group relative inline-flex items-center px-10 py-4 cursor-pointer",
              "border-2 border-foreground bg-background text-foreground",
              "shadow-[4px_4px_0px_0px_var(--foreground)]",
              "hover:bg-foreground hover:text-background",
              "active:shadow-none active:translate-x-1 active:translate-y-1",
              "transition-all duration-100",
            ].join(" ")}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-black uppercase tracking-widest text-sm">
              View My Resume
            </span>
          </motion.a>
        </motion.div>

        {/* Minimalist Animated Mouse Scroll */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-6.5 h-10 border-2 border-foreground rounded-full flex justify-center p-2">
            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-foreground rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
