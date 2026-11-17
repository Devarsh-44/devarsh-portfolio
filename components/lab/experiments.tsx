"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MONOGRAM_VIEWBOX, monogramPaths } from "@/components/intro/Monogram";
import { Magnetic } from "@/components/ui/Magnetic";

const stage =
  "grid h-32 w-full place-items-center rounded-xl bg-canvas text-chalk outline-offset-2";

/** Replays the monogram stroke-draw from the intro. */
export function StrokeDraw({ label }: { label: string }) {
  const reduce = useReducedMotion();
  const [run, setRun] = useState(0);

  return (
    <button
      type="button"
      className={`${stage} cursor-pointer`}
      aria-label={label}
      onClick={() => setRun((n) => n + 1)}
    >
      <svg
        key={run}
        viewBox={MONOGRAM_VIEWBOX}
        className="w-24 text-accent"
        fillRule="evenodd"
        aria-hidden
      >
        {monogramPaths.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={1.5}
            initial={run === 0 || reduce ? false : { pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{
              pathLength: { duration: 0.55, delay: i * 0.16, ease: [0.65, 0, 0.35, 1] },
              fillOpacity: { duration: 0.2, delay: 0.5 + i * 0.12 },
            }}
          />
        ))}
      </svg>
    </button>
  );
}

/** A dot that leans toward the pointer and springs back. */
export function MagneticDot() {
  return (
    <div className={stage}>
      <Magnetic strength={0.55} className="p-6">
        <span className="block size-10 rounded-full bg-accent shadow-[0_0_24px_rgb(217_78_52/0.6)]" />
      </Magnetic>
    </div>
  );
}

/** A switch whose knob travels on a spring. */
export function SpringSwitch({ label }: { label: string }) {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(false);

  return (
    <div className={stage}>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={label}
        onClick={() => setOn((v) => !v)}
        className={`flex h-10 w-20 cursor-pointer items-center rounded-full border-2 border-accent p-1 transition-colors ${
          on ? "bg-accent" : "bg-transparent"
        }`}
      >
        <motion.span
          className="block size-7 rounded-full bg-paper"
          initial={false}
          animate={{ x: on ? 40 : 0 }}
          transition={
            reduce ? { duration: 0 } : { type: "spring", stiffness: 520, damping: 17 }
          }
        />
      </button>
    </div>
  );
}

const SHOWN = "polygon(0% 0%, 130% 0%, 100% 100%, 0% 100%)";
const HIDDEN = "polygon(0% 0%, 0% 0%, -30% 100%, 0% 100%)";

/** The diagonal beam wipe from the intro, in miniature. */
export function BeamWipe({ label }: { label: string }) {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(false);
  const t = reduce ? { duration: 0 } : { duration: 0.6, ease: [0.7, 0, 0.2, 1] as const };

  return (
    <button
      type="button"
      aria-pressed={on}
      aria-label={label}
      onClick={() => setOn((v) => !v)}
      className={`${stage} relative cursor-pointer overflow-hidden font-serif text-2xl italic`}
    >
      <span aria-hidden>before</span>
      <motion.span
        aria-hidden
        className="intro-beam absolute inset-0"
        initial={false}
        animate={{ clipPath: on ? SHOWN : HIDDEN }}
        transition={{ ...t, delay: reduce ? 0 : 0.05 }}
      />
      <motion.span
        aria-hidden
        className="absolute inset-0 grid place-items-center bg-paper text-ink"
        initial={false}
        animate={{ clipPath: on ? SHOWN : HIDDEN }}
        transition={t}
      >
        after
      </motion.span>
    </button>
  );
}
