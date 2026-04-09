"use client";
import Skills from "./Skills";
import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="w-screen relative overflow-hidden py-20 md:py-32 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="max-w-4xl w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-8xl font-black mb-12 text-foreground uppercase tracking-tighter leading-none"
          >
            A Bit About Me<span className="text-primary">.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-foreground mb-16 leading-tight uppercase font-bold tracking-tight"
            style={{ fontSize: "clamp(0.85rem, 2.2vw, 1.25rem)" }}
          >
            <p>
              I&apos;m an Information Technology graduate with a passion for
              creating engaging digital experiences. I specialize in combining
              creative coding with thoughtful design to build applications that
              are both functional and beautiful.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring new technologies,
              experimenting with design patterns, and always looking for ways to
              push the boundaries of what&apos;s possible on the web.
            </p>
          </motion.div>

          <Skills />
        </div>
      </div>
    </section>
  );
}
