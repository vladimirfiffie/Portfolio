"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-white dark:text-white text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-white dark:text-white text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="relative px-4 py-3 text-sm rounded-full font-bold text-neutral-300 overflow-hidden border border-neutral-700"
                    whileHover="hover"
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
                      {active.ctaText}
                    </motion.span>
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Raspberry Pi Game",
    title: "Pao'er Ship",
    src: "/images/paoer-ship.jpg",
    ctaText: "View on GitHub",
    ctaLink: "https://github.com/ponderrr/paoer_ship",
    content: () => {
      return (
        <div className="space-y-3">
          <p>
            A Raspberry Pi-based Battleship game featuring custom animations and interactive gameplay. Built with Pygame for smooth performance on embedded systems.
          </p>
          <div>
            <p className="font-medium mb-2">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 dark:border-blue-400/50 rounded-full text-sm text-blue-200 dark:text-blue-300">Pygame</span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 dark:border-purple-400/50 rounded-full text-sm text-purple-200 dark:text-purple-300">Python</span>
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/50 dark:border-emerald-400/50 rounded-full text-sm text-emerald-200 dark:text-emerald-300">Raspberry Pi</span>
            </div>
          </div>
          <p className="text-sm text-neutral-500">2024 • Game Development</p>
        </div>
      );
    },
  },
  {
    description: "Cinema Booking Platform",
    title: "Lion's Den Cinema",
    src: "/images/lion-den-cinema.png",
    ctaText: "View on GitHub",
    ctaLink: "https://github.com/ponderrr",
    content: () => {
      return (
        <div className="space-y-3">
          <p>
            A comprehensive cinema booking platform with a dynamic UI and seamless animations. Built with React and TypeScript for type-safe, scalable development.
          </p>
          <div>
            <p className="font-medium mb-2">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 dark:border-blue-400/50 rounded-full text-sm text-blue-200 dark:text-blue-300">React</span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 dark:border-purple-400/50 rounded-full text-sm text-purple-200 dark:text-purple-300">TypeScript</span>
              <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/50 dark:border-orange-400/50 rounded-full text-sm text-orange-200 dark:text-orange-300">Figma</span>
            </div>
          </div>
          <p className="text-sm text-neutral-500">2024 • Web Application</p>
        </div>
      );
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-screen relative overflow-hidden py-20 md:py-32"
      aria-label="Featured projects"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 dark:text-white">
          Featured Projects
        </h2>
        <ExpandableCardDemo />
      </div>
    </section>
  );
}
