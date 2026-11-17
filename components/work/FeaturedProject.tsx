import type { Project } from "@/content";
import { work } from "@/content";
import { icons } from "@/components/ui/icons";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { ProjectVisual } from "./ProjectVisual";
import { TechTags } from "./TechTags";
import { TiltedCard } from "./TiltedCard";

/** Large case-study card: copy on one side, image on the other. */
export function FeaturedProject({
  project,
  index,
  tilt,
  flip = false,
}: {
  project: Project;
  index: number;
  tilt: number;
  flip?: boolean;
}) {
  const Arrow = icons.arrowUpRight;

  return (
    <TiltedCard tilt={tilt}>
      <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-2 md:gap-10 md:p-10">
        <div className={flip ? "md:order-2" : ""}>
          <MonoLabel className="text-ink-soft">
            0{index + 1} · {project.kicker}
          </MonoLabel>
          <h3 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{project.title}</h3>

          <ul className="mt-5 space-y-3 leading-relaxed text-ink-soft">
            {project.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {project.note && (
            <p className="mt-5 border-l-2 border-accent pl-4 font-serif text-lg italic leading-snug">
              {project.note}
            </p>
          )}

          <div className="mt-6">
            <TechTags items={project.stack} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.study && (
              <TransitionLink
                href={project.study}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 font-mono text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-ink"
              >
                {work.studyLabel} <span aria-hidden>→</span>
              </TransitionLink>
            )}
            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border-b-2 border-accent pb-0.5 font-mono text-sm font-medium text-ink hover:bg-accent/15"
              >
                {project.link.cta ?? (project.link.href.includes("github.com") ? work.repoLabel : work.demoLabel)}
                <span className="sr-only">: {project.link.label}</span>
                <Arrow width={15} height={15} />
              </a>
            )}
          </div>
        </div>

        <ProjectVisual project={project} className="min-h-56 md:min-h-72" />
      </div>
    </TiltedCard>
  );
}
