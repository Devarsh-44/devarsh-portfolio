import type { CSSProperties } from "react";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { contact, site, studio } from "@/content";

const delay = (d: number) => ({ "--d": d }) as CSSProperties;

/** RCintel coming-soon page, built from the RCintel brand kit. */
export default function RCintelComingSoon() {
  const { comingSoon } = studio;

  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-6 py-8 sm:px-10 sm:py-10">
      <header className="flex items-center justify-between gap-4">
        <TransitionLink href="/" className="rc-link text-sm">
          <span aria-hidden>← </span>
          {comingSoon.backLabel}
        </TransitionLink>
        <p className="rc-label hidden sm:block">{studio.status}</p>
      </header>

      <main className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="rc-enter" style={delay(0)}>
          {/* Horizontal lockup for dark grounds, used unmodified */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rcintel/rcintel-horizontal-for-dark.svg"
            alt={`${studio.name} logo`}
            width={430}
            height={200}
            className="h-auto w-full max-w-md"
          />
        </div>

        <div>
          <div className="rc-enter flex items-center gap-4" style={delay(1)}>
            <div className="rc-lights" aria-hidden>
              {Array.from({ length: 8 }, (_, i) => (
                <span key={i} style={{ "--i": i } as CSSProperties} />
              ))}
            </div>
            <p className="rc-label">{comingSoon.eyebrow}</p>
          </div>

          <h1
            className="rc-display rc-enter mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl"
            style={delay(2)}
          >
            {comingSoon.heading}
          </h1>

          <div className="rc-foil-rule rc-enter mt-8" style={delay(3)} aria-hidden />

          <p
            className="rc-enter mt-8 max-w-[52ch] text-lg leading-relaxed text-[var(--rc-blue-gray-300)]"
            style={delay(3)}
          >
            {studio.summary}
          </p>

          <ul className="rc-enter mt-8 flex flex-wrap gap-x-6 gap-y-2" style={delay(4)}>
            {comingSoon.services.map((s) => (
              <li key={s} className="rc-label !text-[var(--rc-almond)]">
                {s}
              </li>
            ))}
          </ul>

          <div className="rc-enter mt-10 flex flex-wrap items-center gap-x-6 gap-y-4" style={delay(5)}>
            <a href={`mailto:${contact.email}?subject=RCintel`} className="rc-cta">
              {comingSoon.contactLabel}
              <span aria-hidden>→</span>
            </a>
            <TransitionLink
              href="/case-studies/rcintel"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--rc-almond)]/40 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-[var(--rc-almond)] transition-colors hover:border-[var(--rc-almond)] hover:bg-[var(--rc-almond)]/10"
            >
              Explore Brand Case Study
              <span aria-hidden>↗</span>
            </TransitionLink>
            <p className="rc-display text-xl font-light text-[var(--rc-almond)]">
              {studio.status}
            </p>
          </div>
        </div>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-[rgb(157_180_203/0.2)] pt-6 text-sm text-[var(--rc-blue-gray-300)]">
        <p>{studio.meaning}</p>
        <p>
          {studio.role}:{" "}
          <TransitionLink href="/" className="rc-link !text-[var(--rc-almond)]">
            {site.name}
          </TransitionLink>
        </p>
      </footer>
    </div>
  );
}
