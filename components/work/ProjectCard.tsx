import type { Project } from "@/content";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ProjectVisual } from "./ProjectVisual";
import { TechTags } from "./TechTags";
import { TiltedCard } from "./TiltedCard";

/** Smaller project card for the supporting projects. */
export function ProjectCard({
  project,
  index,
  tilt,
}: {
  project: Project;
  index: number;
  tilt: number;
}) {
  return (
    <TiltedCard tilt={tilt} className="h-full">
      <div className="flex h-full flex-col gap-5 p-5 sm:p-7">
        <ProjectVisual project={project} className="min-h-44" />
        <div>
          <MonoLabel className="text-ink-soft">
            0{index + 1} · {project.kicker}
          </MonoLabel>
          <h3 className="mt-2 font-serif text-2xl leading-tight">{project.title}</h3>
          <div className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-ink-soft">
            {project.points.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="mt-auto space-y-4">
          <TechTags items={project.stack} />
          {project.link && (
            <div>
              <a
                href={project.link.href}
                className="inline-flex items-center gap-1.5 border-b border-accent pb-0.5 font-mono text-xs font-medium text-ink transition-colors hover:text-accent"
              >
                <span>{project.link.label}</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </TiltedCard>
  );
}
