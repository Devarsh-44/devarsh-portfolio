import { contact, lookFor } from "@/content";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { DrawnUnderline } from "@/components/ui/DrawnUnderline";
import { Checklist } from "./Checklist";

export function LookForCard() {
  return (
    <section id="contact" className="px-4 pb-28 sm:px-8 sm:pb-36">
      <div className="mx-auto max-w-4xl rounded-[28px] bg-paper p-6 text-ink shadow-[0_0_0_1px_rgb(34_211_238/0.12),0_30px_80px_-20px_rgb(0_0_0/0.9)] sm:p-10 md:p-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <MonoLabel className="text-ink-soft">{lookFor.eyebrow}</MonoLabel>
            <h2 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl">
              {lookFor.heading}
            </h2>
            <DrawnUnderline />
          </div>
          {lookFor.draft && (
            <span className="rotate-[-3deg] rounded border border-accent px-2 py-0.5 font-mono text-xs font-medium uppercase tracking-widest text-ink-soft">
              Draft
            </span>
          )}
        </div>

        <Checklist
          items={lookFor.items}
          email={contact.email}
          subject={lookFor.subject}
          cta={lookFor.cta}
          hint={lookFor.ctaHint}
          progressLabel={lookFor.progress}
        />
      </div>
    </section>
  );
}
