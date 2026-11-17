import type { PortfolioStudy } from "@/content";

type Copy = PortfolioStudy["tokens"];

/** Old vs new design tokens: colour swatches (values come from content data) and a type/shape table. Static. */
export function TokenDiff({ copy }: { copy: Copy }) {
  const cell = "border-t border-ink/15 py-3 pr-3 align-top";

  return (
    <div className="space-y-8">
      <ul className="grid gap-4 sm:grid-cols-2">
        {copy.rows.map((r) => (
          <li key={r.name} className="rounded-xl border-2 border-ink/15 bg-paper p-4">
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">{r.name}</span>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { side: copy.oldLabel, t: r.old },
                { side: copy.newLabel, t: r.now },
              ].map(({ side, t }) => (
                <div key={side}>
                  <div aria-hidden className="h-14 rounded-lg border border-ink/20" style={{ background: t.value }} />
                  <span className="mt-2 block font-mono text-[0.65rem] uppercase tracking-wider text-ink-soft">{side}</span>
                  <span className="block text-sm font-medium">{t.label}</span>
                  <span className="block font-mono text-xs text-ink-soft">{t.value}</span>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[30rem] text-left text-sm">
          <thead>
            <tr className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">
              <th scope="col" className="pb-2 pr-3 font-normal"><span className="sr-only">{copy.heading}</span></th>
              <th scope="col" className="pb-2 pr-3 font-normal">{copy.oldLabel}</th>
              <th scope="col" className="pb-2 font-normal">{copy.newLabel}</th>
            </tr>
          </thead>
          <tbody>
            {copy.type.map((t) => (
              <tr key={t.name}>
                <th scope="row" className={`${cell} font-mono text-xs font-normal uppercase tracking-wider text-ink-soft`}>{t.name}</th>
                <td className={`${cell} text-ink-soft`}>{t.old}</td>
                <td className={`${cell} pr-0 font-medium`}>{t.now}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
