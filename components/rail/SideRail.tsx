"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { rail } from "@/content";
import { icons } from "@/components/ui/icons";
import { Magnetic } from "@/components/ui/Magnetic";

/**
 * Section jump rail. A vertical strip on the left edge from `lg` up, and a
 * bottom bar on smaller screens (tooltips are desktop only).
 */
export function SideRail() {
  const [hovered, setHovered] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-canvas-grid bg-canvas/95 backdrop-blur-sm lg:inset-x-auto lg:inset-y-0 lg:left-0 lg:w-14 lg:border-r lg:border-t-0"
    >
      <ul className="flex h-14 items-center justify-around px-1 sm:px-2 overflow-x-auto no-scrollbar lg:overflow-visible lg:h-full lg:flex-col lg:justify-center lg:gap-3 lg:px-0">
        {rail.map((item) => {
          const Icon = icons[item.icon];
          const show = hovered === item.id;
          return (
            <li key={item.id} className="relative shrink-0">
              <Magnetic strength={0.35}>
                <a
                  href={`#${item.id}`}
                  aria-label={item.label}
                  className="grid size-11 lg:size-10 place-items-center rounded-lg text-chalk-muted transition-colors hover:bg-accent hover:text-ink focus-visible:bg-accent focus-visible:text-ink"
                  onPointerEnter={() => setHovered(item.id)}
                  onPointerLeave={() => setHovered(null)}
                  onFocus={() => setHovered(item.id)}
                  onBlur={() => setHovered(null)}
                >
                  <Icon />
                </a>
              </Magnetic>
              <motion.span
                aria-hidden
                className="pointer-events-none absolute left-full top-1/2 ml-3 hidden origin-left whitespace-nowrap rounded-md bg-paper px-2.5 py-1 font-mono text-xs text-ink shadow-[3px_3px_0_var(--color-accent)] lg:block"
                style={{ y: "-50%" }}
                initial={false}
                animate={
                  show
                    ? { opacity: 1, x: 0, scale: 1, rotate: reduce ? 0 : -3 }
                    : { opacity: 0, x: reduce ? 0 : -8, scale: reduce ? 1 : 0.7, rotate: 0 }
                }
                transition={
                  reduce ? { duration: 0.01 } : { type: "spring", stiffness: 500, damping: 18 }
                }
              >
                {item.label}
              </motion.span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
