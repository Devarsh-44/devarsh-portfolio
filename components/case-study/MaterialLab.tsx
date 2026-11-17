"use client";

import { useId, useState } from "react";
import type { PortfolioStudy } from "@/content";

type Copy = PortfolioStudy["materials"];

/** Surface picker: shows each site surface live, its tokens, measured contrast and the exact CSS from globals.css. Without JS the first surface shows. */
export function MaterialLab({ copy }: { copy: Copy }) {
  const [index, setIndex] = useState(0);
  const panelId = useId();
  const m = copy.items[index];

  return (
    <div>
      <div role="group" aria-label={copy.heading} className="flex flex-wrap gap-2">
        {copy.items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            aria-pressed={i === index}
            aria-controls={panelId}
            onClick={() => setIndex(i)}
            className={`min-h-11 rounded-full border-2 px-4 font-mono text-xs transition-colors ${
              i === index ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink hover:border-ink"
            }`}
          >
            {it.name}
          </button>
        ))}
      </div>

      <div id={panelId} className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <div
          className={`relative flex min-h-72 flex-col justify-between overflow-hidden rounded-xl border-2 border-ink/25 p-5 sm:p-6 ${m.className} ${
            m.dark ? "text-chalk" : "text-ink"
          }`}
        >
          {m.id === "mat" && <div aria-hidden className="ruler-x absolute inset-x-0 top-0" />}
          <span className={`mt-2 font-mono text-[0.7rem] uppercase tracking-wider ${m.dark ? "text-chalk-muted" : "text-ink-soft"}`}>
            {m.use}
          </span>
          <div className="mt-6 max-w-sm">
            <p className="font-serif text-3xl leading-tight">{m.name}</p>
            <p className={`mt-2 leading-relaxed ${m.dark ? "text-chalk-muted" : "text-ink-soft"}`}>{m.description}</p>
          </div>
          <div className="mt-6 w-fit -rotate-2 rounded-lg border-2 border-accent bg-paper px-4 py-2 font-mono text-xs text-ink">
            {copy.sample}
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{copy.tokensLabel}</p>
            <ul className="mt-2 space-y-2">
              {m.tokens.map((t) => (
                <li key={t.name} className="flex items-center justify-between gap-3 rounded-lg border border-ink/15 bg-paper px-3 py-2 font-mono text-xs">
                  <span className="flex min-w-0 items-center gap-2">
                    <span aria-hidden className="size-4 shrink-0 rounded-full border border-ink/25" style={{ background: t.value }} />
                    <span className="truncate">{t.name}</span>
                  </span>
                  <span className="text-ink-soft">{t.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{copy.contrastLabel}</p>
            <p className="mt-1 font-mono text-xs">{m.contrast}</p>
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{copy.cssLabel}</p>
            <pre tabIndex={0} className="mt-2 max-h-56 overflow-auto rounded-lg bg-canvas p-3 font-mono text-[0.7rem] leading-relaxed text-chalk">
              <code>{m.css}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
