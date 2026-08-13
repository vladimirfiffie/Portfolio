"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ── Desktop: mouse-wheel scroll indicator ─────────────────── */
const MouseIndicator = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      onClick={() => scrollTo("about")}
      className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-4 cursor-pointer z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
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
        className="text-xs uppercase tracking-[0.18em] text-foreground/60 font-black"
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

  return (
    <motion.div
      style={{ opacity }}
      onClick={() => scrollTo("about")}
      className="flex md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
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
            transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
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
        className="text-xs uppercase tracking-[0.18em] text-foreground/60 font-black"
      >
        Swipe
      </motion.span>
    </motion.div>
  );
};

/* Facts strip under the CTAs */
const facts = [
  { k: "Graduated", v: "2025" },
  { k: "Projects", v: "4 Shipped" },
  { k: "Status", v: "Open to work" },
];

/* ── Hero ── */
const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden bg-background">
      <div className="relative w-full min-h-svh flex flex-col items-center justify-center px-4 pt-24 pb-32 sm:pt-28 sm:pb-36 md:pt-32 md:pb-40">
        {/* ── Availability chip ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mb-7 inline-flex items-center gap-2.5 border-2 border-foreground bg-background px-4 py-2 shadow-[4px_4px_0px_0px_var(--foreground)] sm:mb-9"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping bg-foreground opacity-75" />
            <span className="relative inline-flex h-2 w-2 bg-foreground" />
          </span>
          <span className="text-[11px] font-black uppercase tracking-[0.16em] text-foreground sm:text-xs">
            Available for work
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10 w-full text-center font-black text-foreground leading-[0.9] tracking-tighter uppercase whitespace-nowrap"
          style={{ fontSize: "clamp(1.2rem, 6vw, 6.5rem)" }}
        >
          Hi, I&apos;m Vladimir Fiffie Jr
          <span className="text-primary">.</span>
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 mt-5 sm:mt-7 w-full max-w-2xl text-center font-bold uppercase text-foreground/70 leading-relaxed"
          style={{
            fontSize: "clamp(0.8rem, 2vw, 1rem)",
            letterSpacing: "clamp(0.08em, 0.3vw, 0.18em)",
          }}
        >
          Creative IT Graduate building functional &amp; digital experiences.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative z-10 mt-9 flex flex-wrap items-center justify-center gap-4 sm:mt-12 sm:gap-5"
        >
          <motion.a
            href="/assets/Vladimir_Fiffie_Jr_IT_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3 sm:px-10 sm:py-4 cursor-pointer border-2 border-foreground bg-foreground text-background shadow-[4px_4px_0px_0px_var(--foreground)] hover:shadow-[7px_7px_0px_0px_var(--foreground)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-100"
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-black uppercase tracking-widest text-xs sm:text-sm">
              View My Resume
            </span>
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>

          <motion.button
            type="button"
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 px-7 py-3 sm:px-10 sm:py-4 cursor-pointer border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:shadow-[7px_7px_0px_0px_var(--foreground)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-100"
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-black uppercase tracking-widest text-xs sm:text-sm">
              See My Work
            </span>
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </motion.button>
        </motion.div>

        {/* ── Facts strip ── */}
        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="relative z-10 mt-12 grid w-full max-w-2xl grid-cols-3 border-2 border-foreground sm:mt-16"
        >
          {facts.map((f, i) => (
            <div
              key={f.k}
              className={`px-2 py-3 text-center sm:px-4 sm:py-4 ${i < facts.length - 1 ? "border-r-2 border-foreground" : ""}`}
            >
              <dt className="text-[9px] font-black uppercase tracking-[0.16em] text-foreground/50 sm:text-[10px]">
                {f.k}
              </dt>
              <dd className="mt-1.5 text-[11px] font-black uppercase tracking-tight text-foreground sm:text-sm">
                {f.v}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* Scroll indicators */}
        <MouseIndicator />
        <SwipeIndicator />
      </div>
    </section>
  );
};

export default Hero;
