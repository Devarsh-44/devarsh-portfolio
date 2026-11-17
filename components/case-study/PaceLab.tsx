"use client";

import { useMemo, useState } from "react";

type Compound = "S" | "M" | "H";
const COMPOUNDS: Compound[] = ["S", "M", "H"];

export type PaceLabCopy = {
  raceLabel: string;
  stint1: string;
  stint2: string;
  pitLabel: string;
  compounds: Record<Compound, string>;
  timeLabel: string;
  deltaLabel: string;
  fastest: string;
  actual: string;
  sameCompound: string;
  showBest: string;
  lapsUnit: string;
  note: string;
  model: {
    laps: number;
    pitLoss: number;
    base: number;
    fuel: number;
    offset: Record<Compound, number>;
    deg: Record<Compound, number>;
    minStint: number;
    actual: { first: string; second: string; pitLap: number };
  };
};

const TONE: Record<Compound, string> = {
  S: "bg-accent text-ink",
  M: "bg-ink text-paper",
  H: "bg-paper text-ink",
};

function clock(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = (seconds % 60).toFixed(1).padStart(4, "0");
  return `${h}:${String(m).padStart(2, "0")}:${s}`;
}

/**
 * A one-stop strategy calculator running RI360's fitted pace equation for one
 * race. Without JavaScript it shows the winner's real plan and its predicted time.
 */
export function PaceLab({ copy }: { copy: PaceLabCopy }) {
  const m = copy.model;
  const [first, setFirst] = useState(m.actual.first as Compound);
  const [second, setSecond] = useState(m.actual.second as Compound);
  const [pitLap, setPitLap] = useState(m.actual.pitLap);

  // lap = base + fuel × laps left + offset[compound] + wear[compound] × tyre age
  const total = (a: Compound, lap: number, b: Compound) => {
    const stint = (c: Compound, n: number) => n * m.offset[c] + (m.deg[c] * n * (n + 1)) / 2;
    const fixed = m.laps * m.base + (m.fuel * (m.laps - 1) * m.laps) / 2;
    return fixed + stint(a, lap) + stint(b, m.laps - lap) + m.pitLoss;
  };

  const best = useMemo(() => {
    let out = { time: Infinity, first: first, second: second, pitLap: pitLap };
    for (const a of COMPOUNDS)
      for (const b of COMPOUNDS) {
        if (a === b) continue;
        for (let lap = m.minStint; lap <= m.laps - m.minStint; lap++) {
          const time = total(a, lap, b);
          if (time < out.time - 1e-9) out = { time, first: a, second: b, pitLap: lap };
        }
      }
    return out;
    // The model is fixed for the page, so this runs once.
  }, []);

  const time = total(first, pitLap, second);
  const delta = time - best.time;
  const isBest = delta < 0.05 && first !== second;
  const isActual = first === m.actual.first && second === m.actual.second && pitLap === m.actual.pitLap;

  const picker = (label: string, value: Compound, set: (c: Compound) => void) => (
    <fieldset className="min-w-0">
      <legend className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{label}</legend>
      <div className="mt-2 flex gap-2">
        {COMPOUNDS.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={value === c}
            onClick={() => set(c)}
            className={`min-h-11 flex-1 rounded-lg border-2 px-2 font-mono text-sm transition-colors ${
              value === c ? "border-accent bg-ink text-paper" : "border-ink/20 text-ink hover:border-ink"
            }`}
          >
            {copy.compounds[c]}
          </button>
        ))}
      </div>
    </fieldset>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div className="space-y-6">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">{copy.raceLabel}</p>
        {picker(copy.stint1, first, setFirst)}
        {picker(copy.stint2, second, setSecond)}
        <label className="block">
          <span className="flex items-baseline justify-between font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">
            <span>{copy.pitLabel}</span>
            <span className="text-base font-semibold normal-case tracking-normal text-ink">{pitLap}</span>
          </span>
          <input
            type="range"
            min={m.minStint}
            max={m.laps - m.minStint}
            value={pitLap}
            onChange={(e) => setPitLap(Number(e.target.value))}
            className="mt-3 h-11 w-full cursor-ew-resize accent-accent"
          />
        </label>
        <button
          type="button"
          onClick={() => {
            setFirst(best.first);
            setSecond(best.second);
            setPitLap(best.pitLap);
          }}
          className="inline-flex min-h-11 items-center rounded-full border-2 border-ink/25 px-5 font-mono text-sm text-ink transition-colors hover:border-ink"
        >
          {copy.showBest}
        </button>
      </div>

      <div className="rounded-xl border-2 border-ink/20 bg-paper p-5" aria-live="polite">
        <div className="flex h-11 overflow-hidden rounded-lg border-2 border-ink/25 font-mono text-xs" aria-hidden>
          <span className={`grid place-items-center ${TONE[first]}`} style={{ flex: pitLap }}>
            {first} · {pitLap}
          </span>
          <span className={`grid place-items-center border-l-2 border-ink/25 ${TONE[second]}`} style={{ flex: m.laps - pitLap }}>
            {second} · {m.laps - pitLap}
          </span>
        </div>
        <p className="sr-only">
          {copy.compounds[first]} {pitLap} {copy.lapsUnit}, {copy.compounds[second]} {m.laps - pitLap} {copy.lapsUnit}
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{copy.timeLabel}</dt>
            <dd className="mt-1 font-mono text-2xl font-semibold tabular-nums sm:text-3xl">{clock(time)}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{copy.deltaLabel}</dt>
            <dd className={`mt-1 font-mono text-2xl font-semibold tabular-nums sm:text-3xl ${isBest ? "" : "text-accent"}`}>
              +{Math.max(0, delta).toFixed(1)}s
            </dd>
          </div>
        </dl>

        <p className="mt-5 min-h-12 leading-relaxed text-ink-soft">
          {first === second ? copy.sameCompound : isBest ? `${copy.fastest}${isActual ? ` ${copy.actual}` : ""}` : null}
        </p>
        <p className="mt-3 border-t border-ink/15 pt-3 font-mono text-[0.7rem] leading-relaxed text-ink-soft">{copy.note}</p>
      </div>
    </div>
  );
}
