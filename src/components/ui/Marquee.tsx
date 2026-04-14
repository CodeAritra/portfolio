"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const content = items.join(" ✦ ") + " ✦ ";

  return (
    <div
      className={cn(
        "overflow-hidden border-y-2 border-foreground py-4 bg-foreground text-background",
        className
      )}
    >
      <motion.div
        className="whitespace-nowrap flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
        }}
      >
        <span className="text-lg md:text-xl font-heading font-bold tracking-wide px-4">
          {content}
        </span>
        <span className="text-lg md:text-xl font-heading font-bold tracking-wide px-4">
          {content}
        </span>
      </motion.div>
    </div>
  );
}
