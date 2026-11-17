"use client";

import { motion, useReducedMotion } from "motion/react";
import { NavDoodle, type DoodleName } from "./NavDoodle";

/** Spring-loaded doodle that pops and rotates above a hovered nav item. */
export function DoodlePop({
  name,
  active,
  tilt = -8,
}: {
  name: DoodleName;
  active: boolean;
  tilt?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.span
      aria-hidden
      className="pointer-events-none absolute bottom-full left-1/2 mb-1 hidden origin-bottom text-chalk sm:block"
      style={{ x: "-50%" }}
      initial={false}
      animate={
        active
          ? { scale: 1, rotate: tilt, opacity: 1, y: 0 }
          : { scale: 0.2, rotate: tilt * -3, opacity: 0, y: 10 }
      }
      transition={{ type: "spring", stiffness: 420, damping: 13, mass: 0.6 }}
    >
      <NavDoodle name={name} />
    </motion.span>
  );
}
