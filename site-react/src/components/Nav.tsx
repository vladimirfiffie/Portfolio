"use client";
import { useState, useEffect } from 'react';
import ThemeSwitcher from './ui/ThemeSwitcher';

export default function Nav() {
  const [menuActive, setMenuActive] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${navHidden ? 'nav-hidden' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">VF</span>
        </div>
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#projects" className="nav-link">Work</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <ThemeSwitcher />
        <button className={`nav-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}