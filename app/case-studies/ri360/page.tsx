import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { PaceLab } from "@/components/case-study/PaceLab";
import { ScreenTabs } from "@/components/case-study/ScreenTabs";
import { StudyHeader } from "@/components/case-study/StudyHeader";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { DrawnUnderline } from "@/components/ui/DrawnUnderline";
import { Footer } from "@/components/ui/Footer";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { BeforeAfter } from "@/components/work/BeforeAfter";
import { contact, ri360Compare, ri360Study as s, site } from "@/content";

export const metadata: Metadata = {
  title: s.meta.title,
  description: s.meta.description,
  openGraph: {
    title: s.meta.title,
    description: s.meta.description,
    url: `${site.url}/case-studies/ri360`,
    type: "article",
  },
};

const wrap = "mx-auto max-w-5xl px-4 sm:px-8";
const sheet = "rounded-2xl border-2 border-accent bg-paper-grid p-5 text-ink sm:p-7";
const pill = "inline-flex min-h-11 items-center gap-2 rounded-full px-5 font-mono text-sm";

function Head({ eyebrow, heading, intro }: { eyebrow: string; heading: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <MonoLabel className="text-accent">{eyebrow}</MonoLabel>
      <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{heading}</h2>
      <DrawnUnderline />
      {intro && <p className="mt-5 leading-relaxed text-chalk-muted">{intro}</p>}
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <span className="block font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{children}</span>;
}

function Out({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${pill} ${primary ? "bg-accent font-medium text-ink" : "border border-chalk/30 text-chalk hover:border-chalk"}`}
    >
      {children} <span aria-hidden>↗</span>
    </a>
  );
}

/** RI360 case study: the data problem, six decisions, a runnable pace model, the screens and the limits. */
export default function RI360CaseStudyPage() {
  return (
    <div className="min-h-screen bg-canvas text-chalk">
      <StudyHeader parent={s.crumbParent} current={s.crumb} />

      <main>
        <section className="cutting-mat relative overflow-x-clip border-b border-chalk/15">
          <div className="ruler-x" aria-hidden />
          <div className={`${wrap} pb-16 pt-14 sm:pb-20 sm:pt-20`}>
            <div className="max-w-3xl">
              <MonoLabel className="text-accent">{s.hero.eyebrow}</MonoLabel>
              <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-6xl">{s.hero.heading}</h1>
              <DrawnUnderline className="w-52" />
              <p className="mt-6 text-base leading-relaxed text-chalk-muted sm:text-lg">{s.hero.lead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Out href={s.links.live} primary>{s.hero.liveCta}</Out>
                <Out href={s.links.repo}>{s.hero.repoCta}</Out>
                <Out href={s.links.figma}>{s.hero.figmaCta}</Out>
              </div>
            </div>
            <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-5 border-t border-chalk/15 pt-6 sm:grid-cols-4">
              {s.hero.meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-chalk-muted">{m.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-chalk">{m.value}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {s.hero.stats.map((k) => (
                <li key={k.d} className="rounded-xl border border-chalk/15 bg-canvas-grid p-4">
                  <span className="block font-serif text-3xl sm:text-4xl">{k.n}</span>
                  <span className="mt-1 block text-sm text-chalk-muted">{k.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${wrap} py-16 sm:py-24`}>
          <Head {...s.themes} />
          <div className={`${sheet} mt-10`}>
            <BeforeAfter copy={ri360Compare} sizes="(min-width: 1024px) 940px, 100vw" />
          </div>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.data} />
          <ol className={`${sheet} mt-10 space-y-6`}>
            {s.data.steps.map((step) => (
              <li key={step.label} className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <div>
                  <span className={`block font-serif text-4xl ${step.loss ? "text-accent" : ""}`}>
                    {step.loss && <span aria-hidden>−</span>}
                    {step.n}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium">{step.label}</h3>
                  <p className="mt-1 leading-relaxed text-ink-soft">{step.body}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-ink/10" aria-hidden>
                      <div className={`h-full rounded-full ${step.loss ? "bg-accent" : "bg-ink"}`} style={{ width: `${step.share}%` }} />
                    </div>
                    <span className="shrink-0 font-mono text-[0.7rem] text-ink-soft">
                      {step.share}% {s.data.shareLabel}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.decisions} />
          <ol className="mt-10 space-y-5">
            {s.decisions.items.map((d, i) => (
              <li key={d.title} className={sheet}>
                <Label>0{i + 1}</Label>
                <h3 className="mt-2 font-serif text-2xl leading-snug sm:text-3xl">{d.title}</h3>
                <dl className="mt-5 grid gap-5 md:grid-cols-3">
                  <div className="border-l-2 border-ink/25 pl-4">
                    <dt><Label>{s.decisions.labels.problem}</Label></dt>
                    <dd className="mt-1 leading-relaxed text-ink-soft">{d.problem}</dd>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <dt><Label>{s.decisions.labels.decision}</Label></dt>
                    <dd className="mt-1 leading-relaxed">{d.decision}</dd>
                  </div>
                  <div className="border-l-2 border-ink/25 pl-4">
                    <dt><Label>{s.decisions.labels.cost}</Label></dt>
                    <dd className="mt-1 leading-relaxed text-ink-soft">{d.cost}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </section>

        <section id="lab" className={`${wrap} scroll-mt-16 pb-16 sm:pb-24`}>
          <Head {...s.lab} />
          <div className={`${sheet} mt-10`}>
            <PaceLab copy={s.lab} />
          </div>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.screens} />
          <div className={`${sheet} mt-10`}>
            <ScreenTabs copy={s.screens} />
          </div>
          <div className={`${sheet} mt-5`}>
            <h3 className="font-serif text-2xl">{s.screens.phones.heading}</h3>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-10 sm:px-16">
              {s.screens.phones.items.map((p) => (
                <figure key={p.label} className="mx-auto w-full max-w-64">
                  <div className="overflow-hidden rounded-2xl border-2 border-ink/25">
                    <Image src={p.src} alt={p.alt} width={780} height={1688} sizes="(min-width: 640px) 256px, 45vw" className="h-auto w-full" />
                  </div>
                  <figcaption className="mt-3 text-center"><Label>{p.label}</Label></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.design} />
          <div className={`${sheet} mt-10`}>
            <ul className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {s.design.items.map((it) => (
                <li key={it.d}>
                  <span className="block font-serif text-4xl">{it.n}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{it.d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-ink/15 pt-4 leading-relaxed text-ink-soft">{s.design.type}</p>
            <a
              href={s.links.figma}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pill} mt-4 bg-ink font-medium text-paper hover:bg-accent hover:text-ink`}
            >
              {s.hero.figmaCta} <span aria-hidden>↗</span>
            </a>
          </div>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.pipeline} />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.pipeline.steps.map((step, i) => (
              <li key={step.title} className={sheet}>
                <Label>0{i + 1}</Label>
                <h3 className="mt-2 font-serif text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.limits} />
          <div className={`${sheet} mt-10`}>
            <ul className="space-y-3">
              {s.limits.items.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
                  <span aria-hidden className="font-mono text-accent">○</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-ink/15 pt-4 font-mono text-[0.7rem] leading-relaxed text-ink-soft">{s.limits.credit}</p>
          </div>
        </section>

        <section className={`${wrap} pb-24`}>
          <div className="rounded-2xl border border-chalk/15 bg-canvas-grid p-8 sm:p-12">
            <h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl">{s.cta.heading}</h2>
            <p className="mt-3 text-chalk-muted">{s.cta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${contact.email}?subject=${encodeURIComponent(s.cta.subject)}`} className={`${pill} bg-accent font-medium text-ink`}>
                {s.cta.primary} <span aria-hidden>→</span>
              </a>
              <TransitionLink href="/case-studies" className={`${pill} border border-chalk/30 text-chalk hover:border-chalk`}>
                <span aria-hidden>←</span> {s.cta.back}
              </TransitionLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
