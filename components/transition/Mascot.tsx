"use client";

import { motion } from "motion/react";

/**
 * The RCintel capsule mascot, redrawn inline from the brand kit badge
 * (02-Badge) with the same geometry and colours so its eyes can blink.
 */
export function Mascot({ className }: { className?: string }) {
  const blink = {
    animate: { scaleY: [1, 1, 0.1, 1, 1] },
    transition: { duration: 1.6, times: [0, 0.35, 0.42, 0.5, 1], repeat: Infinity },
  };

  return (
    <svg viewBox="30 55 140 100" className={className} aria-hidden>
      <ellipse cx="100" cy="142" rx="46" ry="6.5" fill="#1F2A36" fillOpacity="0.3" />
      <rect
        x="47"
        y="69"
        width="106"
        height="62"
        rx="31"
        fill="#E1D4C0"
        stroke="#2B3A4C"
        strokeWidth="3"
      />
      <rect x="64" y="72.500" width="72" height="2.400" rx="1.200" fill="#FFFFFF" fillOpacity="0.5" />
      <motion.g {...blink} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <ellipse cx="95.800" cy="98.700" rx="7.200" ry="10.200" fill="#2B3A4C" />
        <ellipse cx="123.300" cy="98.700" rx="7.200" ry="10.200" fill="#2B3A4C" />
        <circle cx="97.900" cy="94.600" r="1.900" fill="#FFFFFF" />
        <circle cx="125.400" cy="94.600" r="1.900" fill="#FFFFFF" />
      </motion.g>
    </svg>
  );
}
