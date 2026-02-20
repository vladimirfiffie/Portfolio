"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

/* ============================= */
/* NAVBAR ROOT */
/* ============================= */

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 60);
  });

  return (
    <div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center w-full",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, {
            visible,
          })
          : child
      )}
    </div>
  );
};

/* ============================= */
/* NAV BODY (FROSTED PILL) */
/* ============================= */

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        width: visible ? "fit-content" : "100%",
        scale: visible ? 1 : 0.98,
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={cn(
        "relative z-[60] flex items-center transition-all duration-300",
        visible
          ? "rounded-full border border-border bg-background/60 backdrop-blur-xl backdrop-saturate-150 shadow-md py-2 px-6"
          : "bg-transparent border-transparent py-6 max-w-7xl w-full",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

/* ============================= */
/* NAV ITEMS */
/* ============================= */

interface NavItem {
  name: string;
  link: string;
}

export const NavItems = ({ items }: { items: NavItem[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className="flex items-center space-x-1"
    >
      {items.map((item, idx) => (
        <a
          key={item.name}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          className="relative px-3 py-1.5 text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors"
        >
          {hovered === idx && (
            <motion.div
              layoutId="nav-hover-bg"
              className="absolute inset-0 rounded-full bg-accent"
              transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

/* ============================= */
/* LOGO */
/* ============================= */

export const NavbarLogo = () => (
  <a
    href="#"
    className="flex items-center space-x-1 text-base font-black tracking-tighter uppercase text-foreground"
  >
    <span>VF</span>
    <motion.span
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="text-primary"
    >
      .
    </motion.span>
  </a>
);
