/**
 * Centralized theme color mapping for the portfolio.
 * This ensures consistency between background classes (Tailwind) 
 * and shadow utility classes (defined in globals.css).
 */

export const THEME_COLORS = {
  accent: {
    bg: "bg-accent",
    shadow: "shadow-pop-accent",
    text: "text-white",
  },
  secondary: {
    bg: "bg-secondary",
    shadow: "shadow-pop-secondary",
    text: "text-foreground",
  },
  tertiary: {
    bg: "bg-tertiary",
    shadow: "shadow-pop-tertiary",
    text: "text-foreground",
  },
  quaternary: {
    bg: "bg-quaternary",
    shadow: "shadow-pop-quaternary",
    text: "text-foreground",
  },
  // Special utility colors
  pink: {
    bg: "bg-pink-400",
    shadow: "shadow-pop-pink",
    text: "text-white",
  },
  default: {
    bg: "bg-muted",
    shadow: "shadow-pop-lg",
    text: "text-muted-foreground",
  },
} as const;

export type ThemeColorKey = keyof typeof THEME_COLORS;
