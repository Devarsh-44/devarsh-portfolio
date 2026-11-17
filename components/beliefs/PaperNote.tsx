const paperClass = {
  ruled: "bg-paper-ruled font-sans font-medium",
  grid: "bg-paper-grid font-mono text-[1.35rem]",
  plain: "bg-paper font-serif italic",
} as const;

export type PaperKind = keyof typeof paperClass;

/** One taped paper note. Purely presentational; motion is applied by the parent. */
export function PaperNote({
  text,
  paper,
  index,
  draftLabel,
}: {
  text: string;
  paper: PaperKind;
  index: number;
  draftLabel?: string;
}) {
  return (
    <div
      className={`relative flex min-h-56 w-full flex-col justify-between p-7 pt-10 text-2xl leading-snug text-ink shadow-[0_22px_40px_-16px_rgb(0_0_0/0.85)] sm:w-72 md:w-60 md:text-xl lg:w-72 lg:text-2xl ${paperClass[paper]}`}
    >
      {/* tape */}
      <span
        aria-hidden
        className={`absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 bg-accent/85 ${
          index % 2 ? "rotate-3" : "-rotate-2"
        }`}
      />
      {paper === "ruled" && (
        <span aria-hidden className="absolute inset-y-0 left-5 w-px bg-accent/60" />
      )}

      <p>{text}</p>

      <div className="mt-6 flex items-center justify-between font-mono text-xs not-italic text-ink-soft">
        <span>0{index + 1}</span>
        {draftLabel && (
          <span className="rotate-[-4deg] rounded border border-accent px-1.5 py-0.5 font-medium uppercase tracking-widest">
            {draftLabel}
          </span>
        )}
      </div>
    </div>
  );
}
