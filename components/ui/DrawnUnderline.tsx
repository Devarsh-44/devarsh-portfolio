"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Hand-drawn terracotta stroke that draws itself under a section heading the
 * first time it scrolls into view. Decorative only.
 */
export function DrawnUnderline({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 200 14"
      className={`mt-3 block h-3.5 w-44 text-accent ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      aria-hidden
    >
      <motion.path
        d="M3 9C32 3 58 12 92 7s68-5 105 1"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}
