"use client";

import { motion } from "motion/react";
import { Mascot } from "./Mascot";
import type { Phase } from "./PageTransition";

const CLOSED = "circle(0% at 50% 50%)";
const OPEN = "circle(150% at 50% 50%)";

/**
 * Transition into the RCintel page: a blue-gray circle grows from the centre,
 * the capsule mascot pops in and blinks, then ducks away as the circle closes.
 */
export function StudioOverlay({ phase }: { phase: Phase }) {
  const entering = phase === "in";

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[200] grid place-items-center bg-studio"
      initial={{ clipPath: CLOSED }}
      animate={{ clipPath: entering ? OPEN : CLOSED }}
      transition={{
        duration: entering ? 0.6 : 0.55,
        delay: entering ? 0 : 0.22,
        ease: [0.7, 0, 0.2, 1],
      }}
    >
      {/* soft highlight, as on the badge */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_32%_25%,rgb(255_255_255/0.18),transparent_55%)]" />

      <motion.div
        className="relative w-56 sm:w-72"
        initial={{ scale: 0, y: 40, rotate: -8 }}
        animate={entering ? { scale: 1, y: 0, rotate: 0 } : { scale: 0, y: -30, rotate: 8 }}
        transition={
          entering
            ? { type: "spring", stiffness: 260, damping: 15, delay: 0.25 }
            : { duration: 0.22, ease: "easeIn" }
        }
      >
        {/* gentle bob while the next page loads */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mascot className="h-auto w-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
