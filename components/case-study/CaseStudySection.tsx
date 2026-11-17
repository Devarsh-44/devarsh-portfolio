"use client";

import type { CSSProperties } from "react";
import { caseStudies, caseStudiesSection } from "@/content";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { DrawnUnderline } from "@/components/ui/DrawnUnderline";
import { TiltedCard } from "@/components/work/TiltedCard";
import { TechTags } from "@/components/work/TechTags";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { icons } from "@/components/ui/icons";
import { RCintelSignature } from "@/components/case-study/RCintelMarks";

export function CaseStudySection() {
  const featured = caseStudies.find((c) => c.slug === "rcintel") || caseStudies[0];
  const others = caseStudies.filter((c) => c.slug !== "rcintel");
  const Arrow = icons.arrowUpRight;

  return (
    <section
      id="case-studies"
      className="cutting-mat relative overflow-x-clip border-y border-chalk/15 py-20 sm:py-28"
    >
      <div className="ruler-x" aria-hidden />

      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <MonoLabel className="text-accent">{caseStudiesSection.eyebrow}</MonoLabel>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl text-chalk">
              {caseStudiesSection.heading}
            </h2>
            <DrawnUnderline />
          </div>
          <div className="flex flex-col items-start sm:items-end gap-3">
            <p className="max-w-xs text-chalk-muted">{caseStudiesSection.intro}</p>
            <TransitionLink
              href="/case-studies"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
            >
              <span>{caseStudiesSection.viewAllLabel} ({caseStudies.length})</span>
              <span aria-hidden>→</span>
            </TransitionLink>
          </div>
        </div>

        {/* Primary Featured Case Study: RCintel */}
        <div className="mt-14">
          <TiltedCard tilt={-1.2}>
            <div className="relative p-6 sm:p-10 md:p-12">
              {/* Subtle paper grid texture */}
              <div className="pointer-events-none absolute inset-0 bg-paper-grid opacity-50" />

              <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
                {/* Left: Detailed Case Study Narrative */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <MonoLabel className="text-ink-soft">
                      01 · {featured.categoryLabel} · {featured.year}
                    </MonoLabel>
                    <span className="text-ink/30">/</span>
                    <span className="font-mono text-xs font-semibold text-accent">
                      {featured.role}
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-3xl sm:text-4xl leading-tight font-semibold text-ink">
                    <TransitionLink
                      href={featured.href}
                      className="hover:text-accent transition-colors"
                    >
                      {featured.title}
                    </TransitionLink>
                  </h3>

                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-soft">
                    {featured.subtitle}
                  </p>

                  {/* Summary Bullets */}
                  <ul className="mt-6 space-y-3 leading-relaxed text-ink-soft">
                    {featured.summary.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm sm:text-base">
                        <span
                          aria-hidden
                          className="mt-[0.7em] h-px w-4 shrink-0 bg-accent"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Telemetry Inset Strip */}
                  <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 rounded-xl border border-ink/10 bg-paper/90 p-3.5 shadow-sm">
                    {featured.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                          {m.label}
                        </div>
                        <div className="mt-0.5 font-mono text-xs sm:text-sm font-bold text-ink">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer CTAs */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <TransitionLink
                      href={featured.href}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper shadow-md transition-all hover:bg-accent/85 hover:scale-[1.02]"
                    >
                      <span>Read Full Case Study</span>
                      <span aria-hidden>→</span>
                    </TransitionLink>

                    <TechTags items={featured.stack} />
                  </div>
                </div>

                {/* Right: Cockpit Visual Card (Directly Clickable) */}
                <TransitionLink
                  href={featured.href}
                  className="group relative block overflow-hidden rounded-2xl border border-[#2B3A4C] bg-[#1F2A36] p-6 text-[#F3EEE5] shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#C9B89A]/60"
                  aria-label="Open RCintel Case Study"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(115,147,179,0.25),transparent_60%)]"
                  />

                  {/* Top Bar of Visual Card */}
                  <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#9DB4CB]">
                      <span className="size-2 rounded-full bg-[#5E8C6A] animate-pulse" />
                      <span>TELEMETRY STAGE</span>
                    </div>

                    {/* 8 Shift-Lights Bar */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 8 }, (_, i) => (
                        <span
                          key={i}
                          className={`size-2 rounded-full transition-opacity ${
                            i < 4
                              ? "bg-[#C9B89A] opacity-90"
                              : i < 6
                              ? "bg-[#7393B3] opacity-80"
                              : "bg-[#2B3A4C] opacity-40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Center Monogram & Character Graphic */}
                  <div className="relative py-8 flex flex-col items-center justify-center text-center">
                    <RCintelSignature
                      tone="foil"
                      style={{ width: "220px", height: "auto" }}
                      className="transition-transform duration-300 group-hover:scale-105"
                      alt="RCintel Signature Mark"
                    />

                    <div className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#9DB4CB]">
                      RCintel <span className="text-[#C9B89A]">·</span> System 01
                    </div>
                  </div>

                  {/* Bottom Hover Pill */}
                  <div className="relative flex items-center justify-between rounded-xl border border-white/10 bg-[#18212B]/80 px-4 py-3 backdrop-blur group-hover:bg-[#18212B]">
                    <span className="font-mono text-xs text-[#E1D4C0]">
                      Interactive Case Study
                    </span>
                    <span className="font-mono text-xs text-[#7393B3] group-hover:translate-x-1 transition-transform">
                      Open ↗
                    </span>
                  </div>
                </TransitionLink>
              </div>
            </div>
          </TiltedCard>
        </div>

        {/* Secondary Case Studies Grid (Direct Access) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {others.map((study, idx) => (
            <div
              key={study.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-chalk/15 bg-paper p-6 text-ink shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] text-ink-soft">
                  <span>0{idx + 2} · {study.categoryLabel}</span>
                  <span>{study.year}</span>
                </div>

                <h4 className="mt-3 font-serif text-xl font-semibold leading-tight text-ink group-hover:text-accent transition-colors">
                  {study.title}
                </h4>

                <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                  {study.subtitle}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {study.stack.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded border border-ink/15 px-2 py-0.5 font-mono text-[10px] text-ink-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-ink/10 pt-4">
                {study.isExternal ? (
                  <a
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline"
                  >
                    <span>{study.ctaLabel}</span>
                    <Arrow width={13} height={13} />
                  </a>
                ) : (
                  <TransitionLink
                    href={study.href}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline"
                  >
                    <span>{study.ctaLabel}</span>
                    <span aria-hidden>→</span>
                  </TransitionLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
