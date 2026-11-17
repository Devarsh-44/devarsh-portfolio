"use client";

import { useState } from "react";
import { DoodlePop } from "./DoodlePop";
import type { DoodleName } from "./NavDoodle";

export const navLinkClass =
  "relative font-mono text-sm lowercase tracking-wide text-chalk underline-offset-8 decoration-accent decoration-2 hover:underline focus-visible:underline px-1 py-3";

export function NavItem({
  href,
  label,
  doodle,
  tilt,
}: {
  href: string;
  label: string;
  doodle: DoodleName;
  tilt?: number;
}) {
  const [active, setActive] = useState(false);

  return (
    <a
      href={href}
      className={navLinkClass}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <DoodlePop name={doodle} active={active} tilt={tilt} />
      {label}
    </a>
  );
}
