"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

/* ============================= */
/* TYPES                         */
/* ============================= */

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

/* ============================= */
/* NAVBAR ROOT                   */
/* ============================= */

export const Navbar = ({ children, className }: NavbarProps) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 60);
  });

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center w-full pointer-events-none",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
            child as React.ReactElement<{ visible?: boolean }>,
            { visible }
          )
          : child
      )}
    </div>
  );
};

/* ============================= */
/* NAV BODY                      */
/* Always a centered pill.       */
/* Transparent at top,           */
/* frosted when scrolled.        */
/* ============================= */

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        y: visible ? 16 : 8,
        // Slightly shrink width when transparent to hint at pill shape
        width: visible ? "auto" : "auto",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        // Always frosted pill shape — transparent bg at top, filled when scrolled
        backgroundColor: visible
          ? "color-mix(in oklch, var(--foreground) 8%, var(--background) 65%)"
          : "transparent",
        // Border fades in/out via opacity on the element
      }}
      className={cn(
        // Always pill, always centered, always same layout
        "relative z-[60] hidden lg:flex flex-row items-center gap-2 pointer-events-auto",
        "rounded-full px-4 py-2",
        // Border + blur only when scrolled — but we keep border transparent at top to avoid jump
        visible
          ? "border border-border backdrop-blur-md backdrop-saturate-150 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          : "border border-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

/* ============================= */
/* NAV ITEMS                     */
/* ============================= */

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn("flex items-center gap-0.5", className)}
    >
      {items.map((item, idx) => (
        <a
          key={item.name}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-muted-foreground transition-colors duration-150 hover:text-background"
        >
          {hovered === idx && (
            <motion.div
              layoutId="nav-hover-bg"
              // Solid foreground color for hover — black in light, white in dark
              className="absolute inset-0 rounded-full bg-foreground"
              transition={{ type: "spring", bounce: 0.15, duration: 0.25 }}
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

/* ============================= */
/* MOBILE NAV WRAPPER            */
/* ============================= */

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      initial={false}
      animate={{ y: visible ? 12 : 6 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        backgroundColor: visible
          ? "color-mix(in oklch, var(--foreground) 8%, var(--background) 65%)"
          : "transparent",
        marginLeft: "1rem",
        marginRight: "1rem",
        width: "calc(100% - 2rem)",
      }}
      className={cn(
        "relative z-50 flex flex-col pointer-events-auto lg:hidden",
        "rounded-full px-4 py-2",
        visible
          ? "border border-border backdrop-blur-md backdrop-saturate-150 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          : "border border-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

/* ============================= */
/* MOBILE NAV HEADER             */
/* ============================= */

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

/* ============================= */
/* MOBILE NAV MENU               */
/* ============================= */

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{
            backgroundColor:
              "color-mix(in oklch, var(--foreground) 4%, var(--background) 92%)",
            overflow: "hidden",
            // Pill shape continues below header
            borderRadius: "0 0 1.5rem 1.5rem",
          }}
          className={cn(
            "absolute inset-x-0 top-full mt-1 z-50 flex flex-col",
            "border-x border-b border-border backdrop-blur-md",
            className
          )}
        >
          <button onClick={onClose} className="sr-only" aria-label="Close menu" />
          <div className="w-full flex flex-col">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ============================= */
/* MOBILE TOGGLE                 */
/* ============================= */

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-8 h-8 rounded-full text-foreground hover:bg-foreground hover:text-background transition-colors duration-150"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            <IconX size={16} />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            <IconMenu2 size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

/* ============================= */
/* LOGO                          */
/* ============================= */

export const NavbarLogo = () => (
  <a
    href="#"
    className="flex items-center text-sm font-black tracking-tighter uppercase text-foreground shrink-0 px-2"
  >
    <span>VF</span>
    <motion.span
      animate={{ opacity: [1, 0.35, 1] }}
      transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      className="text-foreground"
    >
      .
    </motion.span>
  </a>
);
