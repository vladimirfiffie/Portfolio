"use client";
import React, { useState, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

const NavContext = createContext({ visible: false });

export const scrollToSection = (e: React.MouseEvent, href: string) => {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  } else if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 50);
  });

  return (
    <NavContext.Provider value={{ visible }}>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] flex justify-center p-4 pointer-events-none",
          className,
        )}
      >
        {/* pointer-events-auto here ensures children can be clicked */}
        <div className="w-full max-w-7xl flex justify-center pointer-events-auto">
          {children}
        </div>
      </header>
    </NavContext.Provider>
  );
};

export const NavBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { visible } = useContext(NavContext);
  return (
    <motion.div
      animate={{
        paddingTop: visible ? "0.5rem" : "0.75rem",
        paddingBottom: visible ? "0.5rem" : "0.75rem",
      }}
      className={cn(
        "hidden lg:flex items-center justify-between px-6 rounded-full transition-all duration-500 border",
        visible
          ? "bg-background/70 backdrop-blur-md border-foreground/[0.08] shadow-lg w-fit"
          : "bg-transparent border-transparent shadow-none w-full",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
}: {
  items: { name: string; link: string }[];
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <nav
      className="flex items-center gap-1"
      onMouseLeave={() => setHovered(null)}
    >
      {items.map((item, idx) => (
        <a
          key={item.name}
          href={item.link}
          onClick={(e) => scrollToSection(e, item.link)}
          onMouseEnter={() => setHovered(idx)}
          className="relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors"
        >
          <AnimatePresence>
            {hovered === idx && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 bg-foreground/[0.05] rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{item.name}</span>
        </a>
      ))}
    </nav>
  );
};

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  const { visible } = useContext(NavContext);
  return (
    <div
      className={cn(
        "lg:hidden w-full transition-all duration-500 rounded-[2rem] px-4 py-2 border",
        visible
          ? "bg-background/80 backdrop-blur-md border-foreground/[0.08] shadow-lg"
          : "bg-transparent border-transparent",
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="flex items-center justify-between w-full h-12">
    {children}
  </div>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="p-2 text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
  >
    {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
  </button>
);

export const MobileNavMenu = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="overflow-hidden flex flex-col gap-2 py-8 items-center bg-background/98 backdrop-blur-2xl rounded-[2rem] mt-2 border border-foreground/[0.05] shadow-2xl"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const NavbarLogo = () => (
  <a
    href="/"
    onClick={(e) => scrollToSection(e, "#")}
    className="text-xl font-black tracking-tighter uppercase px-2 hover:opacity-70 transition-opacity cursor-pointer"
  >
    VF<span className="text-primary">.</span>
  </a>
);
