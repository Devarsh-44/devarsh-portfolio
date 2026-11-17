export type DoodleName = "spark" | "layers" | "plane";

/** Small original line doodles that pop above nav items. Decorative only. */
export function NavDoodle({ name, className = "size-11" }: { name: DoodleName; className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
      width={44}
      height={44}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {name === "spark" && (
        <>
          {/* a desk lamp throwing a little light */}
          <path d="M14 48h20" />
          <path d="M24 48V34l12-12" />
          <path d="M30 14l14 14-7 5-12-12z" className="text-accent" stroke="currentColor" />
          <path d="M44 38l3 4M38 41l1 5M49 33l4 2" className="text-accent" stroke="currentColor" />
        </>
      )}
      {name === "layers" && (
        <>
          {/* a stack of sheets with a pencil across */}
          <path d="M10 22 28 13l18 9-18 9z" />
          <path d="m10 30 18 9 18-9" />
          <path d="m10 38 18 9 18-9" />
          <path d="M40 6l7 7-4 4-7-7z" className="text-accent" stroke="currentColor" />
          <path d="m36 10-2 6 6-2" className="text-accent" stroke="currentColor" />
        </>
      )}
      {name === "plane" && (
        <>
          {/* a folded paper plane with a dashed trail */}
          <path d="M48 10 8 26l14 6 4 14 8-10 10 5z" />
          <path d="M48 10 22 32" />
          <path d="M6 44c4-1 7-3 9-6" strokeDasharray="2 5" className="text-accent" stroke="currentColor" />
        </>
      )}
    </svg>
  );
}
