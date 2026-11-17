"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { PaperNote, type PaperKind } from "./PaperNote";

type Note = { text: string; paper: PaperKind };

// Resting tilt, plus how far each note drifts as the section scrolls away.
const LAYOUT = [
  { rest: -5, dx: -150, dy: -30, spin: -11, offset: "md:mt-0" },
  { rest: 3, dx: 10, dy: 110, spin: 9, offset: "md:mt-20" },
  { rest: -2, dx: 160, dy: -50, spin: 13, offset: "md:mt-6" },
];

function DriftNote({
  progress,
  layout,
  drift,
  children,
}: {
  progress: MotionValue<number>;
  layout: (typeof LAYOUT)[number];
  drift: boolean;
  children: React.ReactNode;
}) {
  const k = drift ? 1 : 0;
  const x = useTransform(progress, [0, 1], [0, layout.dx * k]);
  const y = useTransform(progress, [0, 1], [0, layout.dy * k]);
  const rotate = useTransform(progress, [0, 1], [layout.rest, layout.rest + layout.spin * k]);

  return (
    <motion.li className={`md:-mx-3 ${layout.offset}`} style={{ x, y, rotate }}>
      {children}
    </motion.li>
  );
}

/**
 * Three belief notes sitting in a loose cluster. From `md` up they drift apart
 * and rotate as the section scrolls toward Work. Stacked and still on mobile
 * and under reduced motion.
 */
export function ScatterNotes({
  notes,
  draftLabel,
}: {
  notes: readonly Note[];
  draftLabel?: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // 0 while the cluster is centred in view, 1 once it has scrolled off the top.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.35", "end start"],
  });

  const drift = wide && !reduce;

  return (
    <ul
      ref={ref}
      className="mx-auto flex max-w-sm flex-col items-center gap-10 md:max-w-none md:flex-row md:items-start md:justify-center md:gap-0"
    >
      {notes.map((note, i) => (
        <DriftNote
          key={`${note.text}-${drift}`}
          progress={scrollYProgress}
          layout={LAYOUT[i % LAYOUT.length]}
          drift={drift}
        >
          <PaperNote text={note.text} paper={note.paper} index={i} draftLabel={draftLabel} />
        </DriftNote>
      ))}
    </ul>
  );
}
