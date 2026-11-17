import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { StudyHeader } from "@/components/case-study/StudyHeader";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { DrawnUnderline } from "@/components/ui/DrawnUnderline";
import { Footer } from "@/components/ui/Footer";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { BeforeAfter } from "@/components/work/BeforeAfter";
import { contact, projects, safalCompare, safalStudy as s, site } from "@/content";

export const metadata: Metadata = {
  title: s.meta.title,
  description: s.meta.description,
  openGraph: {
    title: s.meta.title,
    description: s.meta.description,
    url: `${site.url}/case-studies/safal-vidyalaya`,
    type: "article",
  },
};

const demo = projects.find((p) => p.slug === "safal-vidyalaya")?.link?.href ?? "#";
const wrap = "mx-auto max-w-5xl px-4 sm:px-8";
const sheet = "rounded-2xl border-2 border-accent bg-paper-grid p-5 text-ink sm:p-7";
const sizes = "(min-width: 1024px) 460px, 100vw";

function Head({ eyebrow, heading, intro }: { eyebrow: string; heading: string; intro: string }) {
  return (
    <div className="max-w-2xl">
      <MonoLabel className="text-accent">{eyebrow}</MonoLabel>
      <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{heading}</h2>
      <DrawnUnderline />
      <p className="mt-5 leading-relaxed text-chalk-muted">{intro}</p>
    </div>
  );
}

function Shot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border-2 border-ink/20 ${className}`}>
      <Image src={src} alt={alt} width={1440} height={900} sizes={sizes} className="h-auto w-full" />
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <span className="block font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{children}</span>;
}

/** Safal Vidyalaya case study: audit of the old site, five decisions, phone comparison and honest status. */
export default function SafalCaseStudyPage() {
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
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 font-mono text-sm font-medium text-ink"
                >
                  {s.hero.demoCta} <span aria-hidden>↗</span>
                </a>
                <a
                  href="#compare"
                  className="inline-flex min-h-11 items-center rounded-full border border-chalk/30 px-5 font-mono text-sm text-chalk hover:border-chalk"
                >
                  {s.hero.compareCta}
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
          </div>
        </section>

        <section id="compare" className={`${wrap} scroll-mt-16 py-16 sm:py-24`}>
          <Head {...s.compare} />
          <div className={`${sheet} mt-10`}>
            <BeforeAfter copy={safalCompare} sizes="(min-width: 1024px) 940px, 100vw" />
          </div>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.audit} />
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {s.audit.items.map((item, i) => (
              <li key={item.title} className={`${sheet} flex flex-col gap-4`}>
                <div>
                  <Label>0{i + 1}</Label>
                  <h3 className="mt-2 font-serif text-2xl leading-snug">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{item.body}</p>
                </div>
                {item.image && <Shot {...item.image} className="mt-auto" />}
              </li>
            ))}
          </ol>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.decisions} />
          <ol className="mt-10 space-y-5">
            {s.decisions.items.map((d, i) => (
              <li key={d.title} className={`${sheet} grid gap-6 ${d.image ? "lg:grid-cols-2 lg:items-center" : ""}`}>
                <div>
                  <Label>0{i + 1}</Label>
                  <h3 className="mt-2 font-serif text-2xl leading-snug sm:text-3xl">{d.title}</h3>
                  <dl className="mt-4 space-y-4">
                    <div className="border-l-2 border-ink/25 pl-4">
                      <dt><Label>{s.decisions.labels.problem}</Label></dt>
                      <dd className="mt-1 leading-relaxed text-ink-soft">{d.problem}</dd>
                    </div>
                    <div className="border-l-2 border-accent pl-4">
                      <dt><Label>{s.decisions.labels.decision}</Label></dt>
                      <dd className="mt-1 leading-relaxed">{d.decision}</dd>
                    </div>
                  </dl>
                </div>
                {d.image && <Shot {...d.image} />}
              </li>
            ))}
          </ol>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <MonoLabel className="text-accent">{s.phones.eyebrow}</MonoLabel>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{s.phones.heading}</h2>
          <DrawnUnderline />
          <div className={`${sheet} mt-10 grid grid-cols-2 gap-4 sm:gap-10 sm:px-16`}>
            {[s.phones.before, s.phones.after].map((p) => (
              <figure key={p.label} className="mx-auto w-full max-w-64">
                <div className="overflow-hidden rounded-2xl border-2 border-ink/25">
                  <Image src={p.src} alt={p.alt} width={780} height={1688} sizes="(min-width: 640px) 256px, 45vw" className="h-auto w-full" />
                </div>
                <figcaption className="mt-3 text-center"><Label>{p.label}</Label></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={`${wrap} pb-16 sm:pb-24`}>
          <Head {...s.status} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { label: s.status.doneLabel, items: s.status.done, mark: "✓" },
              { label: s.status.todoLabel, items: s.status.todo, mark: "○" },
            ].map((col) => (
              <div key={col.label} className={sheet}>
                <h3 className="font-serif text-2xl">{col.label}</h3>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
                      <span aria-hidden className="font-mono text-accent">{col.mark}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={`${wrap} pb-24`}>
          <div className="rounded-2xl border border-chalk/15 bg-canvas-grid p-8 sm:p-12">
            <h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl">{s.cta.heading}</h2>
            <p className="mt-3 text-chalk-muted">{s.cta.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent(s.cta.subject)}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 font-mono text-sm font-medium text-ink"
              >
                {s.cta.primary} <span aria-hidden>→</span>
              </a>
              <TransitionLink
                href="/case-studies"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-chalk/30 px-5 font-mono text-sm text-chalk hover:border-chalk"
              >
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
