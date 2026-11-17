"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useMediaQuery } from "@/components/ui/useMediaQuery";

/**
 * A card resting at a slight angle on the cutting mat. It glides into place
 * when scrolled into view and straightens with a rim light on hover or focus.
 * Content is never hidden: the entrance only moves and rotates. Flat on
 * mobile so cards stack cleanly.
 */
export function TiltedCard({
  tilt,
  children,
  className = "",
}: {
  tilt: number;
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const wide = useMediaQuery("(min-width: 768px)");
  const rest = wide ? tilt : 0;
  const move = wide && !reduce;

  return (
    <motion.article
      className={`group relative rounded-2xl border-[3px] border-accent bg-paper text-ink shadow-[0_26px_60px_-22px_rgb(0_0_0/0.95)] transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgb(34_211_238/0.5),0_0_34px_-6px_rgb(34_211_238/0.35),0_26px_60px_-22px_rgb(0_0_0/0.95)] focus-within:shadow-[0_0_0_1px_rgb(34_211_238/0.5),0_0_34px_-6px_rgb(34_211_238/0.35),0_26px_60px_-22px_rgb(0_0_0/0.95)] ${className}`}
      // Remount when motion becomes available so the glide-in start pose applies.
      key={move ? "glide" : "still"}
      {...(move
        ? {
            initial: { y: 70, rotate: tilt * 3 },
            whileInView: { y: 0, rotate: tilt },
            viewport: { once: true, amount: "some" as const },
            whileHover: { rotate: 0, y: -6 },
          }
        : { initial: false as const, animate: { rotate: rest } })}
      transition={{ type: "spring", stiffness: 140, damping: 18, mass: 0.9 }}
    >
      {children}
    </motion.article>
  );
}
