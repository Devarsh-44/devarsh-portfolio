"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { MONOGRAM_VIEWBOX, monogramPaths } from "./Monogram";

// Diagonal wipe: the curtain's slanted left edge travels left to right.
const COVER = "polygon(0% 0%, 100% 0%, 100% 100%, -30% 100%)";
const GONE = "polygon(130% 0%, 100% 0%, 100% 100%, 100% 100%)";
const WIPE = { duration: 0.75, ease: [0.7, 0, 0.2, 1] as const };

/**
 * Full-viewport intro. It is an overlay on top of fully rendered HTML, so
 * page content is never hidden from crawlers. It plays once per session and
 * is skipped for reduced motion (see the inline gate in app/layout.tsx).
 */
export function IntroCurtain() {
  const [wipe, setWipe] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (document.documentElement.dataset.intro === "skip") setDone(true);
  }, []);

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem("dk-intro", "1");
    } catch {
      /* storage unavailable: the intro just plays again next load */
    }
    document.documentElement.dataset.intro = "skip";
    setDone(true);
  }, []);

  if (done) return null;

  const last = monogramPaths.length - 1;

  return (
    <div className="intro-curtain pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      {/* Beam: trails the curtain edge by a few frames, leaving a hard strip of light */}
      <motion.div
        className="intro-beam absolute inset-0"
        initial={{ clipPath: COVER }}
        animate={{ clipPath: wipe ? GONE : COVER }}
        transition={{ ...WIPE, delay: 0.07 }}
        onAnimationComplete={() => wipe && finish()}
      />
      <motion.div
        className="absolute inset-0 grid place-items-center bg-curtain"
        initial={{ clipPath: COVER }}
        animate={{ clipPath: wipe ? GONE : COVER }}
        transition={WIPE}
      >
        <svg
          viewBox={MONOGRAM_VIEWBOX}
          className="w-40 text-accent sm:w-56"
          fillRule="evenodd"
          style={{
            filter:
              "drop-shadow(0 0 10px rgb(217 78 52 / 0.55)) drop-shadow(0 0 26px rgb(34 211 238 / 0.22))",
          }}
        >
          {monogramPaths.map((d, i) => (
            <motion.path
              key={d}
              d={d}
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={2}
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1 }}
              transition={{
                pathLength: { duration: 0.65, delay: 0.15 + i * 0.18, ease: [0.65, 0, 0.35, 1] },
                fillOpacity: { duration: 0.25, delay: 0.65 + i * 0.14 },
              }}
              onAnimationComplete={
                i === last ? () => window.setTimeout(() => setWipe(true), 240) : undefined
              }
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
