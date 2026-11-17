import { BeamSweep } from "@/components/ui/BeamSweep";

/** Clearly labelled stand-in for an image that has not been supplied yet. */
export function Placeholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative grid place-items-center overflow-hidden rounded-lg border-2 border-dashed border-ink-soft/45 bg-paper-grid p-6 text-center font-mono text-xs leading-relaxed text-ink-soft ${className}`}
    >
      {label}
      <BeamSweep tone="warm" delay={0.5} />
    </div>
  );
}
