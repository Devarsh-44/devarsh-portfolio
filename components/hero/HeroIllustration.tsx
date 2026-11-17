"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Original line illustration: one window split between a pen-tool curve
 * (design) and lines of code (build). Decorative.
 *
 * It plays an 8-second loop: the cursor draws the curve, the handles and
 * anchors appear, the code types itself line by line, the arrow connects the
 * two halves, then everything clears and starts again. Under reduced motion
 * it renders as a finished still.
 */

const LOOP = 8;

// Code lines, in typing order. Dotted lines fade in instead of drawing.
const CODE = [
  "M204 84h46",
  "M204 104h18",
  "M230 104h62",
  "M220 124h74",
  "M220 144h40",
  "M268 144h30",
  "M220 164h58",
  "M204 184h24",
  "M204 212h14",
  "M226 212h50",
];

// Where the cursor tip travels while it draws the curve, as offsets from its
// resting spot. Sampled from the curve at t = 0, .25, .5, .75 and 1.
const CURSOR_X = [-60, -60, -40, -11, 22, 52, 0, 0];
const CURSOR_Y = [46, 46, -16, -48, -52, -26, 0, 0];
const CURSOR_T = [0, 0.06, 0.12, 0.18, 0.24, 0.3, 0.4, 1];

export function HeroIllustration({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const still = Boolean(reduce);

  const loop = (times: number[]) => ({
    duration: LOOP,
    times,
    repeat: Infinity,
    ease: "easeInOut" as const,
  });

  /** Draws a stroke between `from` and `to` (fractions of the loop). */
  const draw = (from: number, to: number) =>
    still
      ? {}
      : {
          // opacity hides the round-cap dot a zero-length stroke would leave
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: [0, 0, 1, 1], opacity: [0, 0, 1, 1] },
          transition: {
            pathLength: loop([0, from, to, 1]),
            opacity: loop([0, from, from + 0.004, 1]),
          },
        };

  /** Fades or pops something in at `at`. */
  const appear = (at: number, pop = false) =>
    still
      ? {}
      : {
          initial: { opacity: 0, ...(pop ? { scale: 0 } : {}) },
          animate: {
            opacity: [0, 0, 1, 1],
            ...(pop ? { scale: [0, 0, 1.25, 1] } : {}),
          },
          transition: loop([0, at, Math.min(at + 0.04, 0.99), 1]),
        };

  return (
    <svg
      viewBox="0 0 360 290"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* window: always present */}
      <rect x="18" y="26" width="324" height="236" rx="14" />
      <path d="M18 58h324" />
      <circle cx="38" cy="42" r="3.5" />
      <circle cx="52" cy="42" r="3.5" />
      <circle cx="66" cy="42" r="3.5" />
      <path d="M250 42h72" strokeDasharray="1 7" />
      <path d="M180 70v180" strokeDasharray="3 8" />

      {/* Subtle blueprint guidelines: elegant CAD draft lines ensure the canvas is never blank */}
      <g opacity={0.16} stroke="currentColor" strokeDasharray="2 4">
        <path d="M44 222C62 120 120 96 156 150" strokeWidth={1.5} />
        {CODE.map((d) => (
          <path key={`blueprint-${d}`} d={d} strokeWidth={1.2} />
        ))}
      </g>

      {/* everything below clears at the end of each loop */}
      <motion.g
        {...(still
          ? {}
          : {
              initial: { opacity: 1 },
              animate: { opacity: [1, 1, 0, 1] },
              transition: loop([0, 0.94, 0.98, 1]),
            })}
      >
        {/* swatches */}
        <motion.rect x="40" y="76" width="16" height="16" rx="3" fill="currentColor" {...appear(0.02, true)} />
        <motion.rect x="62" y="76" width="16" height="16" rx="3" {...appear(0.04, true)} />
        <motion.rect x="84" y="76" width="16" height="16" rx="3" {...appear(0.06, true)} />

        {/* design: the cursor draws the curve */}
        <motion.path d="M44 222C62 120 120 96 156 150" strokeWidth={3} {...draw(0.06, 0.3)} />
        <motion.rect x="39" y="217" width="10" height="10" fill="var(--color-paper)" {...appear(0.05, true)} />
        <motion.rect x="151" y="145" width="10" height="10" fill="var(--color-paper)" {...appear(0.3, true)} />

        {/* handles */}
        <motion.path d="M44 222 58 168" strokeWidth={1.4} {...draw(0.32, 0.38)} />
        <motion.path d="M156 150 132 108" strokeWidth={1.4} {...draw(0.34, 0.4)} />
        <motion.circle cx="58" cy="168" r="4" fill="var(--color-paper)" {...appear(0.38, true)} />
        <motion.circle cx="132" cy="108" r="4" fill="var(--color-paper)" {...appear(0.4, true)} />

        {/* build: code types itself */}
        {CODE.map((d, i) => {
          const start = 0.42 + i * 0.036;
          return <motion.path key={d} d={d} {...draw(start, start + 0.05)} />;
        })}
        <motion.path d="M204 232h80" strokeDasharray="1 7" {...appear(0.8)} />

        {/* the handoff that isn't one */}
        <motion.path d="M150 248c18 14 44 14 62 0" {...draw(0.82, 0.88)} />
        <motion.path d="m204 246 8 2-2 8" {...draw(0.87, 0.9)} />
      </motion.g>

      {/* cursor: follows the curve, then rests */}
      <motion.path
        d="m104 176 4 26 7-8 10-2z"
        fill="var(--color-paper)"
        {...(still
          ? {}
          : {
              initial: { x: CURSOR_X[0], y: CURSOR_Y[0] },
              animate: { x: CURSOR_X, y: CURSOR_Y },
              transition: loop(CURSOR_T),
            })}
      />
    </svg>
  );
}
