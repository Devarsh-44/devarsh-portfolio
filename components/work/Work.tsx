import { projects, work } from "@/content";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { FeaturedProject } from "./FeaturedProject";
import { DrawnUnderline } from "@/components/ui/DrawnUnderline";
import { ProjectCard } from "./ProjectCard";

const FEATURED_TILT = [-1.2, 1];
const SMALL_TILT = [-2, 1.6];

export function Work() {
  const featured = projects.filter((p) => p.tier === "featured");
  const small = projects.filter((p) => p.tier === "small");

  return (
    <section id="work" className="cutting-mat relative overflow-x-clip border-y border-chalk/15">
      <div className="ruler-x" aria-hidden />

      <div className="mx-auto max-w-5xl px-4 pb-28 pt-16 sm:px-8 sm:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <MonoLabel className="text-accent">{work.eyebrow}</MonoLabel>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{work.heading}</h2>
            <DrawnUnderline />
          </div>
          <p className="max-w-xs text-chalk-muted">{work.intro}</p>
        </div>

        <div className="mt-14 space-y-12 md:space-y-16">
          {featured.map((p, i) => (
            <FeaturedProject
              key={p.slug}
              project={p}
              index={i}
              tilt={FEATURED_TILT[i % 2]}
              flip={i % 2 === 1}
            />
          ))}

          <div className="grid gap-12 md:grid-cols-2 md:gap-10">
            {small.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                index={featured.length + i}
                tilt={SMALL_TILT[i % 2]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
