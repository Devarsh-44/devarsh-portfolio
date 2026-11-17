"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { icons, type IconName } from "@/components/ui/icons";
import { DoodlePop } from "./DoodlePop";
import { navLinkClass } from "./NavItem";

export type ConnectLink = {
  label: string;
  icon: IconName;
  /** null renders a labelled placeholder instead of a link */
  href: string | null;
};

const FAN = [-14, 0, 14];

/** "connect" nav item: hover, focus or tap fans out the contact links. */
export function ConnectFan({ links }: { links: ConnectLink[] }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    function onDown(e: PointerEvent) {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={root}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        className={`${navLinkClass} cursor-pointer`}
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen(true)}
      >
        <DoodlePop name="plane" active={open} tilt={10} />
        connect
      </button>

      <motion.ul
        id={listId}
        className="absolute left-1/2 top-full z-20 flex gap-3 pt-3"
        style={{ x: "-50%", pointerEvents: open ? "auto" : "none" }}
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { transition: { staggerChildren: reduce ? 0 : 0.06 } },
          closed: { transition: { staggerChildren: reduce ? 0 : 0.03, staggerDirection: -1 } },
        }}
      >
        {links.map((link, i) => {
          const Icon = icons[link.icon];
          const chip =
            "grid size-11 place-items-center rounded-full border-2 border-accent bg-paper text-ink shadow-[0_6px_0_rgb(0_0_0/0.35)]";
          return (
            <motion.li
              key={link.label}
              variants={{
                open: { opacity: 1, y: 0, scale: 1, rotate: reduce ? 0 : FAN[i] ?? 0 },
                closed: { opacity: 0, y: reduce ? 0 : -14, scale: reduce ? 1 : 0.5, rotate: 0 },
              }}
              transition={
                reduce ? { duration: 0.01 } : { type: "spring", stiffness: 480, damping: 16 }
              }
            >
              {link.href ? (
                <a
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  className={chip}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon />
                </a>
              ) : (
                <span
                  role="img"
                  aria-label={`[PLACEHOLDER: ${link.label} URL]`}
                  title={`[PLACEHOLDER: ${link.label} URL]`}
                  className={`${chip} border-dashed opacity-70`}
                >
                  <Icon />
                </span>
              )}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
