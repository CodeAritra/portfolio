"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
  href?: string;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  className,
  type = "button",
  href,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-base border-2 cursor-pointer select-none transition-[box-shadow] duration-200";

  const variants = {
    primary:
      "bg-accent text-white border-foreground shadow-pop hover:shadow-pop-hover active:shadow-pop-active",
    secondary:
      "bg-transparent text-foreground border-foreground hover:bg-tertiary hover:text-foreground active:shadow-pop-active",
  };

  const inner = (
    <motion.span
      className={cn(base, variants[variant], className)}
      whileHover={{ y: -2, x: -2 }}
      whileTap={{ y: 2, x: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}
