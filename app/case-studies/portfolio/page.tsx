import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { CopyAudit } from "@/components/case-study/CopyAudit";
import { MaterialLab } from "@/components/case-study/MaterialLab";
import { SectionBreakdown } from "@/components/case-study/SectionBreakdown";
import { SpringLab } from "@/components/case-study/SpringLab";
import { StudyHeader } from "@/components/case-study/StudyHeader";
import { TokenDiff } from "@/components/case-study/TokenDiff";
import { TypeMatrix } from "@/components/case-study/TypeMatrix";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { DrawnUnderline } from "@/components/ui/DrawnUnderline";
import { Footer } from "@/components/ui/Footer";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { BeforeAfter } from "@/components/work/BeforeAfter";
import { contact, portfolioCompare, portfolioStudy as s, site } from "@/content";

export const metadata: Metadata = {
  title: s.meta.title,
  description: s.meta.description,
  openGraph: {
    title: s.meta.title,
    description: s.meta.description,
    url: `${site.url}/case-studies/portfolio`,
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

/** One lab on a paper sheet: kicker, serif title, one line of instructions, then the interactive tool. */
function Lab({ kicker, heading, intro, children }: { kicker: string; heading: string; intro: string; children: ReactNode }) {
  return (
    <article className={sheet}>
      <div className="border-b border-ink/15 pb-5">
        <span className="block font-mono text-[0.7rem] uppercase tracking-wider text-accent">{kicker}</span>
        <h3 className="mt-1 font-serif text-2xl sm:text-3xl">{heading}</h3>
        <p className="mt-1 leading-relaxed text-ink-soft">{intro}</p>
      </div>
      <div className="mt-5">{children}</div>
    </article>
  );
}

/** Portfolio case study: the old devarshkotak.com against this site, section by section, then the system and the labs. */
export default function PortfolioCaseStudyPage() {
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
                <a href="#compare" className={`${pill} bg-accent font-medium text-ink`}>
                  {s.hero.compareCta} <span aria-hidden>↓</span>
                </a>
                <a href="#sections" className={`${pill} border border-chalk/30 text-chalk hover:border-chalk`}>
                  {s.hero.sectionsCta}
                </a>
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

        <section id="compare" className={`${wrap} scroll-mt-16 py-16 sm:py-24`}>
          <Head {...s.compare} />
          <div className={`${sheet} mt-10`}>
            <BeforeAfter copy={portfolioCompare} sizes="(min-width: 1024px) 940px, 100vw" />
          </div>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.phones} />
          <div className={`${sheet} mt-10 grid grid-cols-2 gap-4 sm:gap-10 sm:px-16`}>
            {[s.phones.before, s.phones.after].map((p) => (
              <figure key={p.label} className="mx-auto w-full max-w-64">
                <div className="overflow-hidden rounded-2xl border-2 border-ink/25">
                  <Image src={p.src} alt={p.alt} width={390} height={844} sizes="(min-width: 640px) 256px, 45vw" className="h-auto w-full" />
                </div>
                <figcaption className="mt-3 text-center"><Label>{p.label}</Label></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="sections" className={`${wrap} scroll-mt-16 pb-16 sm:pb-24`}>
          <Head {...s.sections} />
          <div className={`${sheet} mt-10`}>
            <SectionBreakdown copy={s.sections} />
          </div>
          <div className={`${sheet} mt-5`}>
            <h3 className="font-serif text-2xl">{s.sections.addedHeading}</h3>
            <ul className="mt-5 grid gap-5 sm:grid-cols-2">
              {s.sections.added.map((a) => (
                <li key={a.name} className="border-l-2 border-accent pl-4">
                  <span className="font-medium">{a.name}</span>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{a.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.tokens} />
          <div className={`${sheet} mt-10`}>
            <TokenDiff copy={s.tokens} />
          </div>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.copy} />
          <div className={`${sheet} mt-10`}>
            <CopyAudit copy={s.copy} />
          </div>
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

        <section id="labs" className={`${wrap} scroll-mt-16 pb-16 sm:pb-24`}>
          <Head {...s.labs} />
          <div className="mt-10 space-y-8">
            <Lab {...s.spring}>
              <SpringLab copy={s.spring} />
            </Lab>
            <Lab {...s.materials}>
              <MaterialLab copy={s.materials} />
            </Lab>
            <Lab {...s.type}>
              <TypeMatrix copy={s.type} />
            </Lab>
          </div>
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
