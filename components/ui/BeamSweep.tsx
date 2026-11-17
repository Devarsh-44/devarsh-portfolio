"use client";

import { motion, useReducedMotion } from "motion/react";

const tones = {
  // for dark surfaces
  cool: "via-streak/25",
  // for cream paper
  warm: "via-accent/20",
} as const;

/**
 * A single diagonal bar of light that sweeps across its parent the first time
 * it scrolls into view. The parent must be `relative overflow-hidden`.
 * It sits on top of content and never hides it.
 */
export function BeamSweep({
  tone = "cool",
  delay = 0.2,
}: {
  tone?: keyof typeof tones;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.span
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent to-transparent ${tones[tone]}`}
      initial={{ x: "-160%" }}
      whileInView={{ x: "460%" }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 1.3, delay, ease: [0.7, 0, 0.2, 1] }}
    />
  );
}
