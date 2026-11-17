import type { Metadata } from "next";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { notFound as copy, site } from "@/content";

export const metadata: Metadata = {
  title: `${copy.title} · ${site.name}`,
};

/** 404 page for unmatched URLs. Static, no motion, one link home. */
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 sm:px-8">
      <div className="max-w-md">
        <MonoLabel className="text-accent">{copy.eyebrow}</MonoLabel>
        <h1 className="mt-3 font-serif text-4xl text-chalk sm:text-5xl">{copy.heading}</h1>
        <p className="mt-4 text-chalk-muted">{copy.body}</p>
        <TransitionLink
          href="/"
          className="mt-6 inline-flex min-h-11 items-center font-mono text-sm text-chalk underline decoration-accent decoration-2 underline-offset-8"
        >
          <span aria-hidden>←&nbsp;</span>
          {copy.homeLabel}
        </TransitionLink>
      </div>
    </main>
  );
}
