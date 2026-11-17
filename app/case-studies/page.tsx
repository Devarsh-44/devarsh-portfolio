"use client";

import { useState } from "react";
import { caseStudies, site, contact } from "@/content";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { Monogram } from "@/components/intro/Monogram";
import { StudioPill } from "@/components/nav/StudioPill";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { DrawnUnderline } from "@/components/ui/DrawnUnderline";
import { TechTags } from "@/components/work/TechTags";
import { TiltedCard } from "@/components/work/TiltedCard";
import { Footer } from "@/components/ui/Footer";
import { icons } from "@/components/ui/icons";

const CARD_TILTS = [-1.2, 1.1, -1.4, 0.9];

export default function CaseStudiesIndexPage() {
  const [filter, setFilter] = useState<"all" | "telemetry" | "product" | "brand">("all");
  const Arrow = icons.arrowUpRight;

  const filteredStudies =
    filter === "all" ? caseStudies : caseStudies.filter((cs) => cs.category === filter);

  return (
    <div className="min-h-screen bg-canvas text-chalk selection:bg-accent selection:text-paper antialiased">
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-chalk/15 bg-canvas/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-8">
          <div className="flex items-center gap-3">
            <TransitionLink
              href="/"
              aria-label={`${site.name}, back to home`}
              className="py-1 text-accent transition-transform hover:scale-105"
            >
              <Monogram className="h-6 w-auto" />
            </TransitionLink>

            <span className="text-chalk/25 font-mono text-xs">/</span>

            <TransitionLink
              href="/"
              className="font-mono text-xs lowercase tracking-wide text-chalk-muted hover:text-chalk transition-colors"
            >
              {site.name}
            </TransitionLink>

            <span className="text-chalk/25 font-mono text-xs">/</span>

            <span className="font-mono text-xs lowercase tracking-wide text-accent font-medium">
              case-studies
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-chalk/15 bg-canvas-grid px-3 py-1 font-mono text-[11px] text-chalk-muted">
              <span className="size-1.5 rounded-full bg-accent" />
              {caseStudies.length} Deep Dives
            </span>

            <StudioPill />
          </div>
        </div>
      </header>

      {/* Cutting-Mat Hero Section with Metric Ruler */}
      <section className="cutting-mat relative overflow-x-clip border-b border-chalk/15">
        <div className="ruler-x" aria-hidden />

        <div className="mx-auto max-w-5xl px-4 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20">
          <div className="max-w-3xl">
            <MonoLabel className="text-accent">
              ARCHIVE &amp; CASE STUDIES · 2024–2026
            </MonoLabel>

            <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-6xl text-chalk">
              Engineering calm precision across telemetry, products &amp; design systems.
            </h1>

            <DrawnUnderline className="w-52" />

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-chalk-muted">
              Every project here documents the end-to-end design engineering process:
              conceived from first principles, wireframed and prototyped in Figma, and
              built with clean, maintainable code without handoff friction.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-chalk/15 pt-6 sm:grid-cols-4 max-w-3xl">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-chalk-muted">
                Focus
              </div>
              <div className="mt-1 font-mono text-sm font-semibold text-chalk">
                UI/UX + Telemetry
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-chalk-muted">
                Philosophy
              </div>
              <div className="mt-1 font-mono text-sm font-semibold text-accent">
                Design &amp; Build
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-chalk-muted">
                Standard
              </div>
              <div className="mt-1 font-mono text-sm font-semibold text-chalk">
                WCAG AAA &amp; Precision
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-chalk-muted">
                Status
              </div>
              <div className="mt-1 font-mono text-sm font-semibold text-[#7393B3]">
                Studio Jan 2027
              </div>
            </div>
          </div>

          {/* Filter Tabs Bar */}
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-b border-chalk/15 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              {(
                [
                  { id: "all", label: "all case studies", count: caseStudies.length },
                  {
                    id: "brand",
                    label: "brand & systems",
                    count: caseStudies.filter((c) => c.category === "brand").length,
                  },
                  {
                    id: "telemetry",
                    label: "telemetry & motorsport",
                    count: caseStudies.filter((c) => c.category === "telemetry").length,
                  },
                  {
                    id: "product",
                    label: "product & web",
                    count: caseStudies.filter((c) => c.category === "product").length,
                  },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
                    filter === tab.id
                      ? "bg-accent text-paper font-semibold shadow-[0_0_18px_rgba(217,78,52,0.35)]"
                      : "border border-chalk/20 bg-canvas/70 text-chalk-muted hover:border-chalk/40 hover:text-chalk"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            <div className="font-mono text-xs text-chalk-muted">
              showing {filteredStudies.length} of {caseStudies.length}
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Studies Stream (Authentic Cream Paper Cards) */}
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-8 sm:py-24">
        <div className="space-y-16 md:space-y-20">
          {filteredStudies.map((study, idx) => {
            const tilt = CARD_TILTS[idx % CARD_TILTS.length];

            return (
              <TiltedCard key={study.id} tilt={tilt}>
                <div className="relative p-6 sm:p-10 md:p-12">
                  {/* Subtle paper grid texture */}
                  <div className="pointer-events-none absolute inset-0 bg-paper-grid opacity-50" />

                  {/* Corner Index Number */}
                  <div className="absolute right-6 top-6 font-mono text-5xl font-bold text-ink/10 select-none sm:text-7xl">
                    0{idx + 1}
                  </div>

                  <div className="relative z-10 max-w-3xl">
                    {/* Meta Header */}
                    <div className="flex flex-wrap items-center gap-3">
                      <MonoLabel className="text-ink-soft">
                        0{idx + 1} · {study.categoryLabel} · {study.year}
                      </MonoLabel>
                      <span className="text-ink/30">/</span>
                      <span className="font-mono text-xs font-semibold text-accent">
                        {study.role}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl leading-tight text-ink font-semibold">
                      {study.title}
                    </h2>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-soft">
                      {study.subtitle}
                    </p>

                    {/* Bullet Points with Terracotta Rules */}
                    <ul className="mt-6 space-y-3 leading-relaxed text-ink-soft">
                      {study.summary.map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-[0.7em] h-px w-4 shrink-0 bg-accent"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Key Telemetry / Performance Strip */}
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 rounded-xl border border-ink/10 bg-paper/90 p-4 shadow-sm backdrop-blur-sm">
                      {study.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                            {m.label}
                          </div>
                          <div className="mt-1 font-mono text-xs sm:text-sm font-bold text-ink">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer Row: Tech Stack & Action Link */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6">
                      <TechTags items={study.stack} />

                      {study.isExternal ? (
                        <a
                          href={study.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 border-b-2 border-accent pb-0.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-accent/15"
                        >
                          <span>{study.ctaLabel}</span>
                          <Arrow width={14} height={14} />
                        </a>
                      ) : (
                        <TransitionLink
                          href={study.href}
                          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper transition-all hover:bg-accent hover:text-paper hover:shadow-md"
                        >
                          <span>{study.ctaLabel}</span>
                          <span aria-hidden>→</span>
                        </TransitionLink>
                      )}
                    </div>
                  </div>
                </div>
              </TiltedCard>
            );
          })}
        </div>

        {/* Bottom Collaboration Memo Card */}
        <div className="mt-24">
          <TiltedCard tilt={-0.8}>
            <div className="p-8 sm:p-12 text-center">
              <div className="mx-auto max-w-xl">
                <MonoLabel className="text-accent">
                  COLLABORATION &amp; WORK INQUIRIES
                </MonoLabel>

                <h3 className="mt-3 font-serif text-3xl sm:text-4xl text-ink font-semibold">
                  Have a complex interface or telemetry project?
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft">
                  I help studios, motorsport operations, and product teams transform high-density
                  technical data into quiet, legible, high-performance interfaces.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`mailto:${contact.email}?subject=Case%20Study%20Inquiry`}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper shadow-sm transition-all hover:bg-accent/85 hover:scale-[1.02]"
                  >
                    <span>Start a Conversation</span>
                    <span aria-hidden>→</span>
                  </a>

                  <TransitionLink
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition-all hover:border-ink hover:bg-paper-grid"
                  >
                    <span>← Back to Portfolio</span>
                  </TransitionLink>
                </div>
              </div>
            </div>
          </TiltedCard>
        </div>
      </main>

      {/* Shared Portfolio Footer */}
      <Footer />
    </div>
  );
}
