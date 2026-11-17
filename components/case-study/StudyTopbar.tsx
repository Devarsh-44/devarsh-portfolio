"use client";

import { useEffect, useState } from "react";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { RCintelBadge } from "./RCintelMarks";

export type StudyTopbarCopy = {
  back: string;
  brand: string;
  tag: string;
  navLabel: string;
  nav: { id: string; label: string }[];
  progressLabel: string;
  toNight: string;
  toPaper: string;
  themeLabel: string;
  cta: string;
};

/**
 * Sticky case-study bar: section links, the eight shift lights as reading
 * progress, and a paper/night theme switch. Without JavaScript the links
 * still work and the page stays in the paper theme.
 */
export function StudyTopbar({ copy, ctaHref }: { copy: StudyTopbarCopy; ctaHref: string }) {
  const [night, setNight] = useState(false);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    if (night) root.setAttribute("data-theme", "night");
    else root.removeAttribute("data-theme");
    return () => root.removeAttribute("data-theme");
  }, [night]);

  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      setLit(Math.min(8, Math.floor((window.scrollY / total) * 9)));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="flex items-center gap-2 sm:gap-3">
          <TransitionLink
            href="/case-studies"
            className="topbar-back mr-1 inline-flex min-h-11 shrink-0 items-center gap-1.5 text-xs"
          >
            <span aria-hidden>←</span>
            <span className="max-sm:sr-only">{copy.back}</span>
          </TransitionLink>
          <div className="brand-pill">
            <RCintelBadge flat alt="" style={{ width: 24, height: 24 }} />
            <span>{copy.brand}</span>
            <span className="tag hidden 2xl:inline-block">{copy.tag}</span>
          </div>
        </div>

        <nav className="nav-links" aria-label={copy.navLabel}>
          {copy.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <div className="shift-progress hidden xl:inline-flex" role="img" aria-label={copy.progressLabel}>
            {Array.from({ length: 8 }, (_, i) => (
              <span key={i} className={`shift-dot ${i < lit ? (i < 4 ? "on-foil" : "on-blue") : ""}`} />
            ))}
          </div>
          <button
            type="button"
            className="btn btn-sm"
            aria-label={copy.themeLabel}
            aria-pressed={night}
            onClick={() => setNight(!night)}
          >
            {night ? copy.toPaper : copy.toNight}
          </button>
          <a href={ctaHref} className="btn btn-primary btn-sm btn-hire">
            {copy.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
