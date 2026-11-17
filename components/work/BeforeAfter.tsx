"use client";

import { useState } from "react";
import Image from "next/image";

type Shot = { src: string; alt: string };

export type BeforeAfterCopy = {
  sliderLabel: string;
  tabsLabel: string;
  before: string;
  after: string;
  caption: string;
  pairs: { id: string; tab: string; before: Shot; after: Shot }[];
};

/**
 * Before/after comparison: drag (or use the arrow keys) to wipe between two
 * screenshots. Without JavaScript it stays as a 50/50 split of the first pair.
 */
export function BeforeAfter({
  copy,
  className = "",
  sizes = "(min-width: 768px) 460px, 100vw",
}: {
  copy: BeforeAfterCopy;
  className?: string;
  /** next/image sizes hint; pass a wider value when the slider is shown large. */
  sizes?: string;
}) {
  const [pos, setPos] = useState(50);
  const [index, setIndex] = useState(0);
  const pair = copy.pairs[index];
  const chip = "absolute top-2 rounded bg-ink px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-wider text-paper";

  return (
    <figure className={`flex flex-col justify-center gap-3 ${className}`}>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 border-ink/20 bg-paper">
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={copy.sliderLabel}
          className="peer absolute inset-0 z-10 size-full cursor-ew-resize touch-pan-y opacity-0"
        />
        <Image src={pair.before.src} alt={pair.before.alt} fill sizes={sizes} className="object-cover object-top" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <Image src={pair.after.src} alt={pair.after.alt} fill sizes={sizes} className="object-cover object-top" />
        </div>
        <span className={`${chip} left-2`}>{copy.before}</span>
        <span className={`${chip} right-2`}>{copy.after}</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-accent peer-focus-visible:w-1"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-accent bg-paper font-mono text-xs text-ink">
            ↔
          </span>
        </span>
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div role="group" aria-label={copy.tabsLabel} className="flex gap-1.5">
          {copy.pairs.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
              className={`min-h-11 rounded-full border px-3 font-mono text-xs transition-colors ${
                i === index ? "border-ink bg-ink text-paper" : "border-ink-soft/40 text-ink-soft hover:border-ink"
              }`}
            >
              {p.tab}
            </button>
          ))}
        </div>
        <span className="font-mono text-[0.7rem] text-ink-soft">{copy.caption}</span>
      </figcaption>
    </figure>
  );
}
