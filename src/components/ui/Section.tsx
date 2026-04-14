"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export function Section({
  children,
  title,
  subtitle,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 px-6 md:px-12 relative overflow-hidden", className)}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground squiggle-underline inline-block">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
