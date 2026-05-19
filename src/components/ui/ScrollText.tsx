"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollTextProps {
  roles: string[];
}

export function ScrollText({ roles }: ScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track viewport scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Create beautiful, scroll-linked opposite directions sliding effect
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  // Infinite repetition for full width text scroll coverage
  const repeatedRoles = [...roles, ...roles, ...roles, ...roles, ...roles, ...roles, ...roles, ...roles];

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden py-6 md:py-8 bg-accent dark:bg-accent border-y-4 border-foreground shadow-[0_8px_0_var(--shadow-color)] select-none -skew-y-2 transform origin-center z-20 my-16 md:my-24"
    >
      {/* Row 1: Sliding Left */}
      <motion.div 
        style={{ x: xLeft }}
        className="flex whitespace-nowrap gap-6 md:gap-8 text-3xl sm:text-5xl md:text-7xl font-heading font-extrabold uppercase tracking-wider text-white dark:text-tertiary drop-shadow-[3px_3px_0px_#1E293B] dark:drop-shadow-[3px_3px_0px_#000000]"
      >
        {repeatedRoles.map((role, idx) => (
          <span key={`left-${idx}`} className="flex items-center gap-6 md:gap-8">
            <span>{role}</span>
            <span className="text-secondary dark:text-quaternary font-sans select-none">★</span>
          </span>
        ))}
      </motion.div>

      {/* Row 2: Sliding Right */}
      <motion.div 
        style={{ x: xRight }}
        className="flex whitespace-nowrap gap-6 md:gap-8 text-3xl sm:text-5xl md:text-7xl font-heading font-extrabold uppercase tracking-wider text-white/80 dark:text-tertiary/80 drop-shadow-[3px_3px_0px_#1E293B] dark:drop-shadow-[3px_3px_0px_#000000] mt-3 md:mt-4"
      >
        {repeatedRoles.map((role, idx) => (
          <span key={`right-${idx}`} className="flex items-center gap-6 md:gap-8">
            <span>{role}</span>
            <span className="text-secondary dark:text-quaternary font-sans select-none">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
