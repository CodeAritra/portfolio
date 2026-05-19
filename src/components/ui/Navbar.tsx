"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const desktopNavLinks = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const mobileNavLinks = [
  { label: "HOME", href: "#hero" },
  { label: "MY SELF", href: "#hero" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "MY WORK", href: "#projects" },
  { label: "ALL PROJECTS", href: "#projects" },
  { label: "REVIEWS", href: "#experience" },
  { label: "CERTIFICATIONS", href: "#skills" },
  { label: "MY YOUTUBE", href: "#hero" },
  { label: "CONTACT", href: "#contact" },
];

const layerColors = [
  "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800",
  "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
  "bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-600",
  "bg-teal-50 dark:bg-teal-950 border-teal-100 dark:border-teal-900",
  "bg-teal-100 dark:bg-teal-900 border-teal-200 dark:border-teal-800",
  "bg-teal-200 dark:bg-teal-800 border-teal-300 dark:border-teal-700",
  "bg-teal-300 dark:bg-teal-700 border-teal-400 dark:border-teal-600",
  "bg-teal-400 dark:bg-teal-600 border-teal-500 dark:border-teal-500",
  "bg-teal-500 dark:bg-teal-500 border-teal-600 dark:border-teal-400",
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-[60] px-6 py-4 flex items-center justify-between pointer-events-none"
      >
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between pointer-events-auto">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-card border-2 border-foreground rounded-full shadow-pop font-heading font-extrabold text-lg"
          >
            <span className="w-3 h-3 rounded-full bg-accent inline-block" />
            <span className="w-3 h-3 rounded-sm bg-secondary inline-block rotate-12" />
            <span className="w-3 h-3 rounded-full bg-tertiary inline-block" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-card border-2 border-foreground rounded-full shadow-pop px-2 py-1">
            {desktopNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-5 py-2 rounded-full text-sm font-bold text-foreground hover:bg-accent hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Hamburger Button */}
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-12 h-12 bg-card border-2 border-foreground rounded-full shadow-pop relative z-[70]"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>*/ }
          </div>
        </div>
      </motion.header>

      {/* Radial Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[50] md:hidden overflow-hidden pointer-events-none">
            {/* Darken backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Origin at Top-Right Corner */}
            <div className="absolute top-0 right-0 w-0 h-0 pointer-events-none">
              {mobileNavLinks.map((link, index) => {
                const radius = 130 + index * 28; // Step is exactly 28px for mobile compatibility
                const angleDeg = -15 - (index * 8); // Gentle, uniform sweep keeping all links perfectly on screen
                const bandCenter = radius - 14; // Mathematically centered in the 28px band
                
                return (
                  <motion.div
                    key={link.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      delay: index * 0.04, // Stagger expanding outward
                    }}
                    className={cn(
                      "absolute top-0 right-0 rounded-full border border-opacity-50 shadow-pop",
                      layerColors[index]
                    )}
                    style={{
                      width: radius * 2,
                      height: radius * 2,
                      transform: "translate(50%, -50%)",
                      pointerEvents: "auto",
                      zIndex: 50 - index, // Ensure smaller circles are on top of larger ones!
                    }}
                  >
                    {/* The text positioned on the arc */}
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="absolute top-1/2 left-1/2 whitespace-nowrap text-[12px] sm:text-[14px] font-heading font-extrabold tracking-[0.2em] text-slate-800 dark:text-slate-100 hover:text-accent dark:hover:text-tertiary hover:scale-105 transition-all duration-200"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angleDeg}deg) translateX(-${bandCenter}px) rotate(${-angleDeg}deg)`,
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
