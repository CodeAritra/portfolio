"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { THEME_COLORS, ThemeColorKey } from "@/lib/colors";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  shadowColor?: ThemeColorKey;
}

export function Card({
  children,
  className,
  delay = 0,
  shadowColor = "default"
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay,
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{
        rotate: -1,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={cn(
        "bg-card border-2 border-foreground rounded-2xl p-6 relative group",
        THEME_COLORS[shadowColor].shadow,
        className
      )}
    >
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
}
