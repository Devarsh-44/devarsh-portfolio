"use client";

import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

/** Subtle magnetic tilt that follows the mouse. Off for touch and reduced motion. */
export function TiltCard({
  children,
  className,
  max = 2.5,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 18 });
  const sry = useSpring(ry, { stiffness: 160, damping: 18 });

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  }

  function reset() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <div style={{ perspective: 1400 }}>
      <motion.div
        className={className}
        style={{ rotateX: srx, rotateY: sry }}
        onPointerMove={onMove}
        onPointerLeave={reset}
      >
        {children}
      </motion.div>
    </div>
  );
}
