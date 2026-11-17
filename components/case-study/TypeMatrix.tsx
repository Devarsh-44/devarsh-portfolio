"use client";

import { useId, useState } from "react";
import type { PortfolioStudy } from "@/content";

type Copy = PortfolioStudy["type"];

/** Type tester for the site's three typefaces: switch face, set size, type a line. Without JS the first specimen shows at 32px. */
export function TypeMatrix({ copy }: { copy: Copy }) {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(32);
  const [text, setText] = useState("");
  const sizeId = useId();
  const inputId = useId();
  const panelId = useId();
  const f = copy.fonts[index];

  return (
    <div>
      <div role="group" aria-label={copy.heading} className="flex flex-wrap gap-2">
        {copy.fonts.map((font, i) => (
          <button
            key={font.id}
            type="button"
            aria-pressed={i === index}
            aria-controls={panelId}
            onClick={() => setIndex(i)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm transition-colors ${font.className} ${
              i === index ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink hover:border-ink"
            }`}
          >
            {font.name}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <div className="flex justify-between font-mono text-xs">
            <label htmlFor={sizeId} className="font-medium">{copy.sizeLabel}</label>
            <span className="text-ink-soft">{size}px</span>
          </div>
          <input
            id={sizeId}
            type="range"
            min={14}
            max={72}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="mt-2 h-2 w-full cursor-pointer accent-accent"
          />
        </div>
        <div>
          <label htmlFor={inputId} className="block font-mono text-xs font-medium">{copy.inputLabel}</label>
          <input
            id={inputId}
            type="text"
            maxLength={120}
            placeholder={f.sample}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-1.5 min-h-11 w-full rounded-lg border-2 border-ink/20 bg-paper px-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-accent"
          />
        </div>
      </div>

      <div id={panelId} className="mt-5 rounded-xl border-2 border-ink/20 bg-paper p-5 sm:p-6">
        <p className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">
          {f.name} · {f.role}
        </p>
        <p className={`mt-3 min-h-24 break-words leading-tight ${f.className}`} style={{ fontSize: `${size}px` }}>
          {text.trim() || f.sample}
        </p>
        <p className="mt-4 border-t border-ink/15 pt-3 text-sm leading-relaxed text-ink-soft">{f.details}</p>
      </div>
    </div>
  );
}
