import type { CSSProperties } from "react";

const streaks = [
  { top: "18%", duration: "9s", delay: "0s" },
  { top: "46%", duration: "12s", delay: "3.5s" },
  { top: "74%", duration: "10s", delay: "6s" },
];

/** Thin cyan light streaks sweeping across the dark grid. Pure CSS transforms. */
export function LightStreaks() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -rotate-[14deg] scale-125 overflow-hidden"
    >
      {streaks.map((s) => (
        <span
          key={s.top}
          className="streak"
          style={
            {
              top: s.top,
              "--streak-duration": s.duration,
              "--streak-delay": s.delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
