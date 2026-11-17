"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Magnetic } from "@/components/ui/Magnetic";
import { RevealIllustration } from "./RevealIllustration";

/**
 * Interactive "What I look for" checklist. Each tick draws one part of the
 * illustration; ticking everything lights up the CTA. The mailto link is
 * always present and usable, ticked or not.
 */
export function Checklist({
  items,
  email,
  subject,
  cta,
  hint,
  progressLabel,
}: {
  items: readonly string[];
  email: string;
  subject: string;
  cta: string;
  hint: string;
  progressLabel: string;
}) {
  const reduce = useReducedMotion();
  const [ticked, setTicked] = useState<boolean[]>(() => items.map(() => false));
  const count = ticked.filter(Boolean).length;
  const complete = count === items.length;

  const chosen = items.filter((_, i) => ticked[i]);
  const body = chosen.length ? `What matters to me:\n- ${chosen.join("\n- ")}\n\n` : "";
  const href = `mailto:${email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

  return (
    <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10">
      <div className="flex flex-col">
        <ul className="divide-y divide-dashed divide-accent/60 border-y border-dashed border-accent/60">
          {items.map((item, i) => (
            <li key={item}>
              <label className="flex cursor-pointer items-center gap-4 py-4 text-lg">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={ticked[i]}
                  onChange={(e) =>
                    setTicked((prev) => prev.map((v, j) => (j === i ? e.target.checked : v)))
                  }
                />
                <span className="grid size-6 shrink-0 place-items-center rounded border-2 border-accent bg-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                  <svg viewBox="0 0 16 16" className="size-4 text-accent" fill="none" aria-hidden>
                    <motion.path
                      d="M3 8.5 6.5 12 13 4.500"
                      stroke="currentColor"
                      strokeWidth={2.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={false}
                      animate={{ pathLength: ticked[i] ? 1 : 0, opacity: ticked[i] ? 1 : 0 }}
                      transition={reduce ? { duration: 0 } : { duration: 0.25 }}
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </label>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Magnetic strength={0.25}>
          <motion.a
            href={href}
            className={`inline-flex items-center rounded-xl border-[3px] border-accent px-7 py-3 font-serif text-2xl font-semibold italic transition-colors ${
              complete ? "bg-accent text-ink" : "bg-transparent text-ink hover:bg-accent/15"
            }`}
            initial={false}
            animate={complete && !reduce ? { scale: [1, 1.12, 1], rotate: [0, -3, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {cta}
          </motion.a>
          </Magnetic>
          <p className="font-mono text-xs text-ink-soft" aria-live="polite">
            {count} / {items.length} {progressLabel}
          </p>
        </div>
        <p className="mt-3 text-sm text-ink-soft">{hint}</p>
      </div>

      <RevealIllustration ticked={ticked} emptyHint="tick an item to start the drawing" />
    </div>
  );
}
