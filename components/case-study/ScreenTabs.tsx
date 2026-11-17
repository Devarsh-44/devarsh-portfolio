"use client";

import { useState } from "react";
import Image from "next/image";

export type ScreenTabsCopy = {
  tabsLabel: string;
  items: { id: string; tab: string; body: string; src: string; alt: string }[];
};

/** Page switcher for a set of product screenshots. Without JavaScript it shows the first screen. */
export function ScreenTabs({ copy }: { copy: ScreenTabsCopy }) {
  const [index, setIndex] = useState(0);
  const item = copy.items[index];

  return (
    <div>
      <div role="group" aria-label={copy.tabsLabel} className="flex flex-wrap gap-2">
        {copy.items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
            className={`min-h-11 rounded-full border px-4 font-mono text-xs transition-colors ${
              i === index ? "border-ink bg-ink text-paper" : "border-ink-soft/40 text-ink-soft hover:border-ink"
            }`}
          >
            {it.tab}
          </button>
        ))}
      </div>
      <p className="mt-4 min-h-14 max-w-2xl leading-relaxed text-ink-soft" aria-live="polite">
        {item.body}
      </p>
      <div className="mt-4 overflow-hidden rounded-xl border-2 border-ink/20">
        <Image
          key={item.id}
          src={item.src}
          alt={item.alt}
          width={1440}
          height={900}
          sizes="(min-width: 1024px) 940px, 100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
