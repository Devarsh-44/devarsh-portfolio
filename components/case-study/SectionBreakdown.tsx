"use client";

import { useId, useState } from "react";
import Image from "next/image";
import type { PortfolioStudy } from "@/content";

type Copy = PortfolioStudy["sections"];

/** Section-by-section old vs new: tabs switch panels that are all in the HTML (inactive ones `hidden`). Without JS the first panel shows. */
export function SectionBreakdown({ copy }: { copy: Copy }) {
  const [index, setIndex] = useState(0);
  const base = useId();

  return (
    <div>
      <div role="group" aria-label={copy.tabsLabel} className="flex flex-wrap gap-2">
        {copy.items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            aria-pressed={i === index}
            aria-controls={`${base}-${it.id}`}
            onClick={() => setIndex(i)}
            className={`min-h-11 rounded-full border-2 px-4 font-mono text-xs transition-colors ${
              i === index ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink hover:border-ink"
            }`}
          >
            {it.tab}
          </button>
        ))}
      </div>

      {copy.items.map((it, i) => (
        <div key={it.id} id={`${base}-${it.id}`} hidden={i !== index} className="mt-6">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { label: copy.oldLabel, shot: it.old, points: it.then, head: copy.thenLabel, mark: "−", tone: "border-ink/25" },
              { label: copy.newLabel, shot: it.now, points: it.now_, head: copy.nowLabel, mark: "+", tone: "border-accent" },
            ].map((side) => (
              <figure key={side.label} className="flex flex-col gap-4">
                <div className="relative">
                  <span className="absolute left-2 top-2 z-10 rounded bg-ink px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-wider text-paper">
                    {side.label}
                  </span>
                  <div className="max-h-[28rem] overflow-y-auto overscroll-contain rounded-xl border-2 border-ink/20" tabIndex={side.shot.h > 900 ? 0 : undefined}>
                    <Image
                      src={side.shot.src}
                      alt={side.shot.alt}
                      width={side.shot.w}
                      height={side.shot.h}
                      sizes="(min-width: 768px) 460px, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
                <figcaption className={`border-l-2 pl-4 ${side.tone}`}>
                  <span className="block font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{side.head}</span>
                  <ul className="mt-2 space-y-2">
                    {side.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                        <span aria-hidden className="font-mono text-accent">{side.mark}</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 rounded-xl border-2 border-ink bg-paper p-4 leading-relaxed">
            <span className="mr-2 font-mono text-[0.7rem] uppercase tracking-wider text-accent">{copy.whyLabel}</span>
            {it.why}
          </p>
        </div>
      ))}
    </div>
  );
}
