"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { CaseStudy } from "@/content";
import { studyIndex } from "@/content";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { DeckMedia } from "@/components/work/DeckMedia";

const EASE = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

/**
 * Case studies as a quiet index: one row per study, and beside it a single
 * large preview that eases to whichever row is hovered (mouse) or focused.
 * The rows are plain links with all text in the HTML. Below md each row shows
 * its own picture and the shared preview is not rendered.
 */
export function StudyIndex({ studies }: { studies: CaseStudy[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const t = reduce ? { duration: 0.01 } : EASE;

  return (
    <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:gap-12">
      <ol aria-label={studyIndex.listLabel} className="border-b border-chalk/15">
        {studies.map((s, i) => {
          const external = s.isExternal || s.href.startsWith("http");
          const on = i === active;
          const row = (
            <>
              <span className="relative mb-4 block aspect-[16/10] overflow-hidden rounded-xl border-2 border-accent bg-paper md:hidden">
                <DeckMedia slug={s.slug} media={studyIndex.media} sizes="(max-width: 767px) 100vw, 1px" />
              </span>
              <span className="flex items-baseline gap-4">
                <span className={`font-mono text-xs transition-colors duration-300 ${on ? "text-accent" : "text-chalk-muted"}`}>0{i + 1}</span>
                <span className="flex-1">
                  <span className={`block font-serif text-2xl leading-snug transition-colors duration-300 sm:text-[1.7rem] ${on ? "text-chalk" : "text-chalk/75"}`}>
                    {s.title}
                  </span>
                  <span className="mt-1 block font-mono text-[11px] uppercase tracking-wider text-chalk-muted">
                    {s.categoryLabel} · {s.year}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={`font-mono text-accent transition-transform duration-300 ${on ? "translate-x-0" : "-translate-x-2"}`}
                >
                  {external ? "↗" : "→"}
                </span>
              </span>
            </>
          );
          const props = {
            onPointerEnter: (e: React.PointerEvent) => e.pointerType === "mouse" && setActive(i),
            onFocus: () => setActive(i),
            className: "block border-t border-chalk/15 py-6 outline-offset-4",
          };
          return (
            <li key={s.id}>
              {external ? (
                <a href={s.href} target="_blank" rel="noopener noreferrer" {...props}>
                  {row}
                </a>
              ) : (
                <TransitionLink href={s.href} {...props}>
                  {row}
                </TransitionLink>
              )}
            </li>
          );
        })}
      </ol>

      <div aria-hidden className="hidden md:block">
        <div className="sticky top-24">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-[3px] border-accent bg-paper shadow-[0_26px_60px_-22px_rgb(0_0_0/0.95)]">
            {studies.map((s, i) => (
              <motion.div
                key={s.id}
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.04 }}
                transition={t}
              >
                <DeckMedia slug={s.slug} media={studyIndex.media} sizes="(min-width: 1024px) 460px, 45vw" />
              </motion.div>
            ))}
          </div>
          <div className="mt-4 grid">
            {studies.map((s, i) => (
              <motion.p
                key={s.id}
                className="text-sm leading-relaxed text-chalk-muted [grid-area:1/1]"
                initial={false}
                animate={{ opacity: i === active ? 1 : 0, y: i === active ? 0 : 6 }}
                transition={t}
              >
                {s.subtitle}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
