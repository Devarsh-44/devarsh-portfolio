"use client";

import { useEffect, useState } from "react";

/**
 * Live local time for the hero. Server-renders the static fallback (the UTC
 * offset) and swaps in the clock after hydration, so there is no mismatch.
 */
export function LocalTime({
  timeZone,
  fallback,
}: {
  timeZone: string;
  fallback: string;
}) {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 10_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return <span className="tabular-nums">{now ?? fallback}</span>;
}
