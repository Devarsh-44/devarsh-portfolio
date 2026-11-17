import type { CSSProperties } from "react";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { site, studio, studioBridge } from "@/content";
import { BeamSweep } from "@/components/ui/BeamSweep";
import { Magnetic } from "@/components/ui/Magnetic";
import { TiltCard } from "@/components/hero/TiltCard";

/**
 * Portal card to the RCintel studio. The only place on the portfolio that uses
 * the RCintel palette, so it reads as a doorway to a different brand.
 */
export function StudioBridge() {
  return (
    <section id="studio" className="px-4 py-24 sm:px-8 sm:py-32">
      <TiltCard
        max={1.6}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-studio/50 bg-studio-night text-studio-white shadow-[0_0_0_1px_rgb(115_147_179/0.15),0_0_70px_-18px_rgb(115_147_179/0.55),0_30px_80px_-24px_rgb(0_0_0/0.9)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(44rem_26rem_at_12%_0%,rgb(115_147_179/0.22),transparent_70%)]"
        />

        <BeamSweep tone="cool" />

        <div className="relative p-6 sm:p-10 md:p-14">
          {/* portfolio ⇄ studio */}
          <p className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-studio-300">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className="size-2 rounded-full bg-accent" />
              {studioBridge.here}
              <span className="sr-only">: {site.name}, you are here</span>
            </span>
            <span aria-hidden className="h-px w-10 bg-studio/60 sm:w-20" />
            <span className="inline-flex items-center gap-2 text-studio-almond">
              <span aria-hidden className="size-2 rounded-full bg-studio" />
              {studioBridge.there}
              <span className="sr-only">: {studio.name}</span>
            </span>
          </p>

          <div className="mt-10 grid items-center gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/rcintel/rcintel-horizontal-for-dark.svg"
              alt={`${studio.name} logo`}
              width={430}
              height={200}
              loading="lazy"
              className="h-auto w-full max-w-sm"
            />

            <div>
              <div className="flex items-center gap-4">
                <div className="rc-lights" aria-hidden>
                  {Array.from({ length: 8 }, (_, i) => (
                    <span key={i} style={{ "--i": i } as CSSProperties} />
                  ))}
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-studio-300">
                  {studioBridge.eyebrow} · {studio.status}
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {studio.name}
                <span className="mt-1 block text-xl font-normal text-studio-almond sm:text-2xl">
                  {studio.tagline}
                </span>
              </h2>

              <p className="mt-5 max-w-[52ch] leading-relaxed text-studio-300">{studio.summary}</p>
              <p className="mt-3 text-sm text-studio-300">
                {studio.meaning} {studio.role}: {site.name}.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Magnetic strength={0.25}>
                <TransitionLink
                  href={studio.href}
                  className="inline-flex items-center gap-2 rounded-full bg-studio-almond px-6 py-3 font-medium text-studio-night transition-transform hover:-translate-y-0.5 hover:bg-studio-white motion-reduce:transform-none"
                >
                  {studioBridge.cta}
                  <span aria-hidden>→</span>
                </TransitionLink>
                </Magnetic>
                <TransitionLink
                  href="/case-studies/rcintel"
                  className="inline-flex items-center gap-2 rounded-full border border-studio-almond/40 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-studio-almond transition-colors hover:border-studio-almond hover:bg-studio-almond/10"
                >
                  Read Case Study
                  <span aria-hidden>↗</span>
                </TransitionLink>
                <p className="font-mono text-xs text-studio-300">{studioBridge.ctaNote}</p>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </section>
  );
}
