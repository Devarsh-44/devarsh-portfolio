import type { ReactNode } from "react";

/** Small uppercase mono label used for eyebrows and telemetry-style details. */
export function MonoLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-mono text-xs uppercase tracking-[0.18em] ${className}`}>
      {children}
    </span>
  );
}
