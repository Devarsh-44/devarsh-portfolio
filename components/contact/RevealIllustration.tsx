"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Original line drawing of a conversation over coffee, in four parts.
 * Part N draws itself when checklist item N is ticked.
 */
const PARTS: string[][] = [
  // 1. the table
  ["M30 232H290", "M62 232V282", "M258 232V282"],
  // 2. two mugs
  [
    "M90 192h36v30a8 8 0 0 1-8 8h-20a8 8 0 0 1-8-8z",
    "M126 200h6a8 8 0 0 1 0 16h-6",
    "M194 192h36v30a8 8 0 0 1-8 8h-20a8 8 0 0 1-8-8z",
    "M194 200h-6a8 8 0 0 0 0 16h6",
  ],
  // 3. steam
  [
    "M101 180c-6-8 6-12 0-20",
    "M115 180c-6-8 6-12 0-20",
    "M205 180c-6-8 6-12 0-20",
    "M219 180c-6-8 6-12 0-20",
  ],
  // 4. the conversation
  [
    "M50 36h90a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12h-50l-18 18v-18h-22a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12z",
    "M58 60h70",
    "M58 78h46",
    "M180 66h90a12 12 0 0 1 12 12v36a12 12 0 0 1-12 12h-22v18l-18-18h-50a12 12 0 0 1-12-12v-36a12 12 0 0 1 12-12z",
    "M200 96h8",
    "M222 96h8",
    "M244 96h8",
  ],
];

export function RevealIllustration({
  ticked,
  emptyHint,
}: {
  ticked: boolean[];
  emptyHint: string;
}) {
  const reduce = useReducedMotion();
  const none = !ticked.some(Boolean);

  return (
    <div className="relative grid aspect-[16/15] place-items-center rounded-2xl border-[3px] border-accent bg-paper-grid">
      <p
        className={`absolute px-6 text-center font-mono text-xs text-ink-soft transition-opacity duration-300 ${
          none ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      >
        {emptyHint}
      </p>
      <svg
        viewBox="0 0 320 300"
        className="w-full text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {PARTS.map((paths, part) =>
          paths.map((d, i) => {
            const on = Boolean(ticked[part]);
            return (
              <motion.path
                key={d}
                d={d}
                initial={false}
                animate={{ pathLength: on ? 1 : 0, opacity: on ? 1 : 0 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        pathLength: {
                          duration: 0.7,
                          delay: on ? i * 0.12 : 0,
                          ease: [0.65, 0, 0.35, 1],
                        },
                        opacity: { duration: 0.15, delay: on ? i * 0.12 : 0.3 },
                      }
                }
              />
            );
          }),
        )}
      </svg>
    </div>
  );
}
