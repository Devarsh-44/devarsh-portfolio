import { hero, site } from "@/content";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { HeroIllustration } from "./HeroIllustration";
import { LightStreaks } from "./LightStreaks";
import { LocalTime } from "./LocalTime";
import { RotatingWord } from "./RotatingWord";
import { TiltCard } from "./TiltCard";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-8 sm:pt-44 md:pt-48">
      <LightStreaks />

      <TiltCard className="relative mx-auto max-w-5xl rounded-[28px] border-[6px] border-accent bg-paper-grid text-ink shadow-[0_0_0_1px_rgb(34_211_238/0.12),0_30px_80px_-20px_rgb(0_0_0/0.9)]">
        <div className="grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[1.1fr_1fr] md:p-14">
          <div>
            <MonoLabel className="text-ink-soft">{site.role}</MonoLabel>

            <h1 className="mt-3 font-serif text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl">
              {site.name}
            </h1>

            <p className="mt-8 font-serif text-3xl leading-tight sm:text-[2.6rem]">
              {hero.taglineLead} <RotatingWord words={hero.taglineWords} />
            </p>

            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">{hero.pitch}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 font-mono text-sm font-medium text-ink"
              >
                {hero.primaryCta} <span aria-hidden>↓</span>
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center rounded-full border-2 border-ink/25 px-5 font-mono text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                {hero.secondaryCta}
              </a>
            </div>

            <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-ink-soft">
              <span className="inline-block size-2 rounded-full bg-accent" aria-hidden />
              <span>{site.location}</span>
              <span aria-hidden>·</span>
              <span>{site.timeZoneLabel}</span>
              <LocalTime timeZone={site.timeZone} fallback={site.timeZoneOffset} />
            </p>
          </div>

          <HeroIllustration className="mx-auto w-full max-w-sm text-accent md:max-w-none" />
        </div>
      </TiltCard>
    </section>
  );
}
