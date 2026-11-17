import type { ReactNode } from "react";
import { lab } from "@/content";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { DrawnUnderline } from "@/components/ui/DrawnUnderline";
import { BeamWipe, MagneticDot, SpringSwitch, StrokeDraw } from "./experiments";

type TileId = (typeof lab.tiles)[number]["id"];

function experiment(id: TileId, label: string): ReactNode {
  switch (id) {
    case "draw":
      return <StrokeDraw label={label} />;
    case "magnet":
      return <MagneticDot />;
    case "toggle":
      return <SpringSwitch label={label} />;
    case "wipe":
      return <BeamWipe label={label} />;
  }
}

/** Compact strip of the site's own micro-interactions. */
export function LabStrip() {
  return (
    <section id="lab" className="px-4 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <MonoLabel className="text-accent">{lab.eyebrow}</MonoLabel>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{lab.heading}</h2>
          <DrawnUnderline />
          </div>
          <p className="max-w-xs text-chalk-muted">{lab.intro}</p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {lab.tiles.map((tile, i) => (
            <li
              key={tile.id}
              className="rounded-2xl border border-chalk/15 bg-canvas-grid p-2 pb-3"
            >
              {experiment(tile.id, `${tile.title}: ${tile.hint}`)}
              <div className="mt-3 px-2">
                <p className="font-mono text-xs text-chalk-muted">
                  0{i + 1} <span className="text-chalk">{tile.title}</span>
                </p>
                <p className="mt-0.5 text-sm text-chalk-muted">{tile.hint}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
