"use client";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Desktop: mouse-wheel scroll indicator ─────────────────── */
const MouseIndicator = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <motion.div
      style={{ opacity }}
      onClick={handleScroll}
      className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-4 cursor-pointer z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
    >
      <div className="group w-9 h-16 border-[3px] border-foreground/20 rounded-full flex justify-center p-2 transition-all duration-300 hover:border-foreground/60 hover:scale-110">
        <motion.div
          animate={{ y: [0, 20, 0], scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-3 bg-foreground/60 rounded-full"
        />
      </div>
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-black"
      >
        Scroll
      </motion.span>
    </motion.div>
  );
};

/* ── Mobile: swipe-up indicator ── */
const SwipeIndicator = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <motion.div
      style={{ opacity }}
      onClick={handleScroll}
      className="flex md:hidden absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 cursor-pointer z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center gap-0.5">
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
          >
            <path
              d="M2 10L10 2L18 10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground/50"
            />
          </motion.svg>
        ))}
      </div>
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-black"
      >
        Swipe
      </motion.span>
    </motion.div>
  );
};

/* ── Hero ── */
const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden bg-background">
      <div className="relative w-full min-h-svh flex flex-col items-center justify-center px-4 pt-24 pb-32 sm:pt-28 sm:pb-36 md:pt-32 md:pb-40">
        {/* ── Heading ── */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-6xl text-center font-black text-foreground leading-[0.9] tracking-tighter uppercase"
          style={{ fontSize: "clamp(2.2rem, 9.5vw, 8rem)" }}
        >
          Hi, I&apos;m Vladimir
          <span className="text-primary">.</span>
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 mt-4 sm:mt-6 w-full max-w-2xl text-center font-bold uppercase text-foreground/70 leading-relaxed"
          style={{
            fontSize: "clamp(0.6rem, 2vw, 1rem)",
            letterSpacing: "clamp(0.1em, 0.5vw, 0.3em)",
          }}
        >
          Creative IT Graduate building functional &amp; digital experiences.
        </motion.p>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative z-10 mt-10 sm:mt-12"
        >
          <motion.a
            href="/assets/Vladimir_Fiffie_Jr_IT_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3 sm:px-10 sm:py-4 cursor-pointer border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-100"
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-black uppercase tracking-widest text-xs sm:text-sm">
              View My Resume
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll indicators */}
        <MouseIndicator />
        <SwipeIndicator />
      </div>
    </section>
  );
};

export default Hero;
