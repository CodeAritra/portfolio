"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 bg-card border-2 border-foreground rounded-full shadow-pop font-heading font-extrabold text-lg"
        >
          <span className="w-3 h-3 rounded-full bg-accent inline-block" />
          <span className="w-3 h-3 rounded-sm bg-secondary inline-block rotate-12" />
          <span className="w-3 h-3 rounded-full bg-tertiary inline-block" />
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1 bg-card border-2 border-foreground rounded-full shadow-pop px-2 py-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-bold text-foreground hover:bg-accent hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </motion.header>
  );
}
