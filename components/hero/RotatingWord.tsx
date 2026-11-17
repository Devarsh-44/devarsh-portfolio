"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * Cycles the last word of the tagline. The first word is server-rendered and
 * the full list is exposed to assistive tech and crawlers as plain text.
 */
export function RotatingWord({
  words,
  interval = 2400,
}: {
  words: readonly string[];
  interval?: number;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [reduce, words.length, interval]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden className="relative inline-flex h-[1.3em] overflow-y-clip align-bottom">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            className="inline-block italic text-accent"
            initial={{ y: "70%", opacity: 0, filter: "blur(6px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-60%", opacity: 0, filter: "blur(6px)" }}
            transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.7 }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
