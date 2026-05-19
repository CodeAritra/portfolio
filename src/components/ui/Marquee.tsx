"use client";
 
import { cn } from "@/lib/utils";
 
interface MarqueeProps {
  items: string[];
  className?: string;
}
 
export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border-y-2 border-foreground py-4 bg-foreground text-background w-full",
        className
      )}
    >
      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee-scroll 35s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className="marquee-container">
        <div className="flex shrink-0 items-center gap-4 px-4">
          {items.map((item, idx) => (
            <div key={`item-1-${idx}`} className="text-lg md:text-xl font-heading font-bold tracking-wide flex items-center gap-4">
              <span>{item}</span>
              <span className="text-white dark:text-black">✦</span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-4 px-4">
          {items.map((item, idx) => (
            <div key={`item-2-${idx}`} className="text-lg md:text-xl font-heading font-bold tracking-wide flex items-center gap-4">
              <span>{item}</span>
              <span className="text-black">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
