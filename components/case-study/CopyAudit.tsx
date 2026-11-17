import type { PortfolioStudy } from "@/content";

type Copy = PortfolioStudy["copy"];

/** What each site said, topic by topic: old quote struck through beside the new wording. Static. */
export function CopyAudit({ copy }: { copy: Copy }) {
  return (
    <dl className="divide-y divide-ink/15">
      {copy.rows.map((r) => (
        <div key={r.topic} className="grid gap-3 py-5 first:pt-0 last:pb-0 md:grid-cols-[9rem_1fr_1fr] md:gap-6">
          <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-accent">{r.topic}</dt>
          <dd>
            <span className="block font-mono text-[0.65rem] uppercase tracking-wider text-ink-soft">{copy.oldLabel}</span>
            <q className="mt-1 block leading-relaxed text-ink-soft line-through decoration-accent/60">{r.old}</q>
          </dd>
          <dd>
            <span className="block font-mono text-[0.65rem] uppercase tracking-wider text-ink-soft">{copy.newLabel}</span>
            <p className="mt-1 leading-relaxed">{r.now}</p>
          </dd>
        </div>
      ))}
    </dl>
  );
}
