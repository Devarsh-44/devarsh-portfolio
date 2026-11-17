import { Monogram } from "@/components/intro/Monogram";
import { StudioPill } from "@/components/nav/StudioPill";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { site } from "@/content";

/** Sticky breadcrumb bar for a portfolio case study: monogram / case-studies / this page. Static. */
export function StudyHeader({ parent, current }: { parent: string; current: string }) {
  const link = "inline-flex min-h-11 items-center font-mono text-xs lowercase tracking-wide text-chalk-muted transition-colors hover:text-chalk";

  return (
    <header className="sticky top-0 z-40 border-b border-chalk/15 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-1.5 sm:px-8">
        <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <TransitionLink href="/" aria-label={`${site.name}, back to home`} className="inline-flex min-h-11 items-center text-accent">
            <Monogram className="h-6 w-auto" />
          </TransitionLink>
          <span aria-hidden className="font-mono text-xs text-chalk/25">/</span>
          <TransitionLink href="/case-studies" className={link}>
            {parent}
          </TransitionLink>
          <span aria-hidden className="font-mono text-xs text-chalk/25">/</span>
          <span aria-current="page" className="truncate font-mono text-xs font-medium lowercase tracking-wide text-accent">
            {current}
          </span>
        </nav>
        <div className="hidden sm:block">
          <StudioPill />
        </div>
      </div>
    </header>
  );
}
