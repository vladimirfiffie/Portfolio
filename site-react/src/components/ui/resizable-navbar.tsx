"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

/**
 * NAVBAR ROOT
 */
export const Navbar = ({ children, className }: NavbarProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <div className={cn("fixed inset-x-0 top-0 z-50 w-full pt-4", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </div>
  );
};

/**
 * DESKTOP NAVIGATION BODY (Floating Glass Pill)
 */
export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        // Switched to semi-transparent backgrounds for the blur effect
        backgroundColor: visible
          ? "rgba(var(--background-rgb), 0.7)"
          : "rgba(var(--background-rgb), 0)",
        borderColor: visible ? "var(--border)" : "transparent",
        scale: visible ? 0.98 : 1,
        y: visible ? 0 : 4,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "relative z-[60] mx-auto hidden w-[fit-content] min-w-[550px] flex-row items-center justify-between rounded-full border bg-transparent px-6 py-2 lg:flex transition-all duration-300",
        // Backdrop blur is key here
        visible && "backdrop-blur-md shadow-xl border-border",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

/**
 * NAV LINKS
 */
export const NavItems = ({ items, className, onItemClick }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-center gap-1",
        className,
      )}
    >
      {items.map((item: any, idx: number) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-5 py-2 text-foreground font-bold uppercase tracking-widest text-[10px] transition-colors hover:text-primary"
        >
          <AnimatePresence>
            {hovered === idx && (
              <motion.div
                layoutId="nav-hover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-0 rounded-full bg-primary/10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

/**
 * MOBILE NAVIGATION CONTAINER (Floating Glass Pill)
 */
export const MobileNav = ({ children, className, visible }: any) => {
  return (
    <motion.div
      animate={{
        backgroundColor: visible
          ? "rgba(var(--background-rgb), 0.7)"
          : "rgba(var(--background-rgb), 0)",
        width: visible ? "92%" : "100%",
        borderRadius: "100px",
        borderColor: visible ? "var(--border)" : "transparent",
        y: visible ? 0 : 10,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between border px-6 py-3 lg:hidden transition-all duration-300",
        visible && "backdrop-blur-md shadow-lg",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

/**
 * MOBILE HEADER
 */
export const MobileNavHeader = ({ children, className }: any) => (
  <div
    className={cn(
      "flex w-full flex-row items-center justify-between",
      className,
    )}
  >
    {children}
  </div>
);

/**
 * MOBILE TOGGLE BUTTON
 */
export const MobileNavToggle = ({ isOpen, onClick }: any) => (
  <button
    onClick={onClick}
    className="text-foreground p-2 rounded-full border border-border/50 hover:bg-primary/5 transition-colors focus:outline-none"
  >
    {isOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
  </button>
);

/**
 * MOBILE EXPANDABLE MENU (Glass Sub-Pill)
 */
export const MobileNavMenu = ({ children, isOpen }: any) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0, scale: 0.95 }}
        animate={{ opacity: 1, height: "auto", scale: 1 }}
        exit={{ opacity: 0, height: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full overflow-hidden"
      >
        <div className="flex w-full flex-col items-center justify-center gap-6 bg-background/80 backdrop-blur-lg rounded-[32px] border border-border mt-4 p-8 shadow-2xl">
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

/**
 * LOGO
 */
export const NavbarLogo = () => (
  <a href="#" className="relative z-20 flex items-center px-4 py-1 group">
    <span className="text-xl font-black tracking-tighter text-foreground uppercase">
      VF
      <span className="text-primary group-hover:scale-125 inline-block transition-transform">
        .
      </span>
    </span>
  </a>
);

/**
 * ROUNDED BUTTON
 */
export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  ...props
}: any) => {
  return (
    <Tag
      href={href}
      className={cn(
        "relative inline-block cursor-pointer bg-foreground px-6 py-2 text-center text-[10px] font-black uppercase tracking-[0.2em] text-background rounded-full border border-transparent transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-95 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
