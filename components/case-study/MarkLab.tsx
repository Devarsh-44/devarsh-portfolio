"use client";

import { useState } from "react";
import {
  RCintelBadge,
  RCintelLockup,
  RCintelMonogram,
  RCintelSeal,
  RCintelSignature,
  RCintelStack,
  type MonogramTone,
  type SignatureTone,
} from "./RCintelMarks";

type MarkId = "sig" | "badge" | "lockup" | "mono" | "stack" | "seal";
type GroundId = "night" | "paper" | "almond";

export type MarkLabCopy = {
  pickLabel: string;
  groundLabel: string;
  finishLabel: string;
  clearSpaceOn: string;
  clearSpaceOff: string;
  clearSpaceNote: string;
  minLabel: string;
  noMin: string;
  list: { id: string; label: string; min: string | null; use: string }[];
  grounds: { id: string; label: string }[];
  finishes: Record<string, string>;
};

/** Finishes the kit supplies for each mark, by ground. Marks not listed have one version per ground. */
const FINISHES: Partial<Record<MarkId, { dark: string[]; light: string[] }>> = {
  sig: { dark: ["foil", "almond", "mono-white"], light: ["slate", "mono-slate"] },
  mono: { dark: ["foil", "almond", "mono-white", "mono-bluegray"], light: ["slate", "mono-slate"] },
  badge: { dark: ["standard", "flat"], light: ["standard", "flat"] },
};

/**
 * Mark tester: pick one of the six marks, a ground and a finish. Without
 * JavaScript it shows the Signature in foil on Night Slate with its usage note.
 */
export function MarkLab({ copy }: { copy: MarkLabCopy }) {
  const [mark, setMark] = useState<MarkId>("sig");
  const [ground, setGround] = useState<GroundId>("night");
  const [finish, setFinish] = useState<string | null>(null);
  const [clear, setClear] = useState(false);

  const dark = ground === "night";
  const options = FINISHES[mark]?.[dark ? "dark" : "light"] ?? [];
  const active = finish && options.includes(finish) ? finish : options[0];
  const info = copy.list.find((m) => m.id === mark) ?? copy.list[0];
  const tone = dark ? "dark" : "light";

  return (
    <div className="lab-shell">
      <div className="lab-controls">
        <fieldset className="card lab-group">
          <legend className="control-group-label">{copy.pickLabel}</legend>
          <div className="mark-list">
            {copy.list.map((m) => (
              <button
                key={m.id}
                type="button"
                aria-pressed={mark === m.id}
                className={`mark-btn ${mark === m.id ? "active" : ""}`}
                onClick={() => setMark(m.id as MarkId)}
              >
                {m.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="card lab-group">
          <legend className="control-group-label">{copy.groundLabel}</legend>
          <div className="surface-pills">
            {copy.grounds.map((g) => (
              <button
                key={g.id}
                type="button"
                aria-pressed={ground === g.id}
                className={`surface-pill ${ground === g.id ? "active" : ""}`}
                onClick={() => setGround(g.id as GroundId)}
              >
                <span className={`dot dot-${g.id}`} aria-hidden /> {g.label}
              </button>
            ))}
          </div>
        </fieldset>

        {options.length > 0 && (
          <fieldset className="card lab-group">
            <legend className="control-group-label">{copy.finishLabel}</legend>
            <div className="mark-list">
              {options.map((id) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active === id}
                  className={`mark-btn ${active === id ? "active" : ""}`}
                  onClick={() => setFinish(id)}
                >
                  {copy.finishes[id]}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        <button type="button" className="btn" aria-pressed={clear} onClick={() => setClear(!clear)}>
          {clear ? copy.clearSpaceOff : copy.clearSpaceOn}
        </button>
      </div>

      <div className="lab-stage" data-surface={ground}>
        <div className="lab-canvas">
          <div className={`clearspace-frame ${clear ? "show-grid" : ""}`}>
            <div className="lab-mark-wrap flex w-full max-w-full items-center justify-center p-2 sm:p-6">
              {mark === "sig" && (
                <RCintelSignature tone={active as SignatureTone} alt={info.label} style={{ width: 320 }} />
              )}
              {mark === "badge" && (
                <RCintelBadge flat={active === "flat"} alt={info.label} style={{ width: 160 }} />
              )}
              {mark === "lockup" && <RCintelLockup tone={tone} alt={info.label} style={{ width: 340 }} />}
              {mark === "mono" && (
                <RCintelMonogram tone={active as MonogramTone} alt={info.label} style={{ width: 220 }} />
              )}
              {mark === "stack" && <RCintelStack tone={tone} alt={info.label} style={{ width: 210 }} />}
              {mark === "seal" && <RCintelSeal alt={info.label} style={{ width: 210 }} />}
            </div>
          </div>
        </div>

        <div className="lab-stage-foot" aria-live="polite">
          <span>
            <strong>{info.label}.</strong> {info.use}
            {clear && <> {copy.clearSpaceNote}</>}
          </span>
          <span className="mono lab-min">
            {copy.minLabel}: {info.min ?? copy.noMin}
          </span>
        </div>
      </div>
    </div>
  );
}
