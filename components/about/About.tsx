import { about } from "@/content";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { DrawnUnderline } from "@/components/ui/DrawnUnderline";
import { Polaroid } from "./Polaroid";

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[auto_1fr] md:gap-16">
        <div className="pt-4">
          <Polaroid
            src={about.portrait.src}
            alt={about.portrait.alt}
            caption={about.portrait.caption}
            note={about.portrait.note}
          />
        </div>

        <div>
          <MonoLabel className="text-accent">{about.eyebrow}</MonoLabel>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{about.heading}</h2>
          <DrawnUnderline />

          <div className="mt-6 max-w-[62ch] space-y-4 text-lg leading-relaxed text-chalk-muted">
            {about.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {about.focus.map((f) => (
              <li
                key={f}
                className="rounded-full border border-accent px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-chalk"
              >
                {f}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {about.skills.map((s) => (
              <div key={s.group} className="border-t border-canvas-grid pt-3">
                <dt>
                  <MonoLabel className="text-chalk-muted">{s.group}</MonoLabel>
                </dt>
                <dd className="mt-1.5 text-chalk">{s.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
