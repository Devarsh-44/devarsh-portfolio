"use client";

import { useId, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { PortfolioStudy } from "@/content";

type Copy = PortfolioStudy["spring"];
type Params = { stiffness: number; damping: number; mass: number };
type Key = keyof Params;

/** Spring tuner: presets are the site's real springs; sliders drive a draggable card and a step-response curve. Reduced motion swaps the spring for an instant move. */
export function SpringLab({ copy }: { copy: Copy }) {
  const reduce = useReducedMotion();
  const first = copy.presets[0];
  const [p, setP] = useState<Params>({ stiffness: first.stiffness, damping: first.damping, mass: first.mass });
  const [flick, setFlick] = useState(0);
  const baseId = useId();

  const stats = useMemo(() => respond(p), [p]);
  const r = copy.readouts;
  const kind = stats.zeta < 0.98 ? r.under : stats.zeta <= 1.02 ? r.critical : r.over;

  return (
    <div>
      <p className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{copy.presetsLabel}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {copy.presets.map((pre) => {
          const on = pre.stiffness === p.stiffness && pre.damping === p.damping && pre.mass === p.mass;
          return (
            <button
              key={pre.name}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setP({ stiffness: pre.stiffness, damping: pre.damping, mass: pre.mass });
                setFlick((n) => n + 1);
              }}
              className={`min-h-11 rounded-lg border-2 px-3 py-1.5 text-left font-mono text-xs transition-colors ${
                on ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink hover:border-ink"
              }`}
            >
              <span className="block font-medium">{pre.name}</span>
              <span className={`block text-[0.65rem] ${on ? "text-paper/80" : "text-ink-soft"}`}>
                {pre.source} · {pre.stiffness}/{pre.damping}/{pre.mass}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          {copy.sliders.map((s) => {
            const key = s.key as Key;
            const id = `${baseId}-${key}`;
            return (
              <div key={key}>
                <div className="flex justify-between font-mono text-xs">
                  <label htmlFor={id} className="font-medium">{s.label}</label>
                  <span className="text-ink-soft">{p[key]}</span>
                </div>
                <input
                  id={id}
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={p[key]}
                  onChange={(e) => setP((cur) => ({ ...cur, [key]: Number(e.target.value) }))}
                  className="mt-2 h-2 w-full cursor-pointer accent-accent"
                />
                <p className="text-xs text-ink-soft">{s.hint}</p>
              </div>
            );
          })}
          <dl className="grid grid-cols-3 gap-3 border-t border-ink/15 pt-4">
            {[
              { k: r.ratio, v: stats.zeta.toFixed(2), d: kind },
              { k: r.settle, v: `${stats.settle} ms`, d: "±2%" },
              { k: r.overshoot, v: `${stats.overshoot}%`, d: "" },
            ].map((x) => (
              <div key={x.k}>
                <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-soft">{x.k}</dt>
                <dd className="mt-1 font-mono text-lg font-medium">{x.v}</dd>
                {x.d && <dd className="text-xs text-ink-soft">{x.d}</dd>}
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-xl bg-canvas p-4 text-chalk">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-chalk-muted">{copy.stageLabel}</span>
            <button
              type="button"
              onClick={() => setFlick((n) => n + 1)}
              className="min-h-11 rounded-full bg-accent px-4 font-mono text-xs font-medium text-ink transition-transform active:scale-95"
            >
              {copy.flick}
            </button>
          </div>
          <div className="relative mt-3 flex h-36 items-center justify-center overflow-hidden rounded-lg border border-chalk/15 bg-canvas-grid">
            <div aria-hidden className="absolute inset-y-0 left-1/2 border-l border-dashed border-chalk/25" />
            <motion.div
              key={flick}
              drag={reduce ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              dragTransition={{ bounceStiffness: p.stiffness, bounceDamping: p.damping }}
              initial={{ x: flick === 0 || reduce ? 0 : flick % 2 ? 110 : -110 }}
              animate={{ x: 0 }}
              transition={reduce ? { duration: 0.01 } : { type: "spring", ...p }}
              className="relative cursor-grab touch-pan-y rounded-xl border-2 border-accent bg-paper px-5 py-3 text-center text-ink active:cursor-grabbing"
            >
              <span className="block font-serif text-lg">{copy.card}</span>
              <span className="block font-mono text-[0.65rem] text-ink-soft">{copy.stageHint}</span>
            </motion.div>
          </div>
          {reduce && <p className="mt-2 text-xs text-chalk-muted">{copy.reduced}</p>}
          <p className="mt-4 font-mono text-[0.7rem] text-chalk-muted">{copy.curveLabel}</p>
          <svg viewBox="0 0 300 80" className="mt-2 w-full" aria-hidden>
            <line x1="0" y1="20" x2="300" y2="20" className="stroke-chalk/30" strokeDasharray="3 3" />
            <line x1="0" y1="70" x2="300" y2="70" className="stroke-chalk/15" />
            <polyline fill="none" className="stroke-accent" strokeWidth="2.5" points={stats.curve} />
          </svg>
        </div>
      </div>
    </div>
  );
}

/** Step response of a damped spring, sampled over one second, plus damping ratio, 2% settling time and overshoot. */
function respond({ stiffness: k, damping: c, mass: m }: Params) {
  const wn = Math.sqrt(k / m);
  const zeta = c / (2 * Math.sqrt(k * m));
  const at = (t: number) => {
    if (zeta < 1) {
      const wd = wn * Math.sqrt(1 - zeta * zeta);
      return 1 - Math.exp(-zeta * wn * t) * (Math.cos(wd * t) + (zeta * wn / wd) * Math.sin(wd * t));
    }
    if (zeta === 1) return 1 - Math.exp(-wn * t) * (1 + wn * t);
    const s = Math.sqrt(zeta * zeta - 1);
    const r1 = -wn * (zeta - s);
    const r2 = -wn * (zeta + s);
    return 1 - (r2 * Math.exp(r1 * t) - r1 * Math.exp(r2 * t)) / (r2 - r1);
  };
  const pts: string[] = [];
  for (let i = 0; i <= 80; i++) {
    const y = Math.max(4, Math.min(76, 70 - at(i / 80) * 50));
    pts.push(`${((i / 80) * 300).toFixed(1)},${y.toFixed(1)}`);
  }
  const overshoot = zeta < 1 ? Math.round(Math.exp((-Math.PI * zeta) / Math.sqrt(1 - zeta * zeta)) * 100) : 0;
  const slowest = zeta <= 1 ? zeta * wn : wn * (zeta - Math.sqrt(zeta * zeta - 1));
  return { zeta, settle: Math.min(9999, Math.round((4 / slowest) * 1000)), overshoot, curve: pts.join(" ") };
}
