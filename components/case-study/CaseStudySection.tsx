import { caseStudies, caseStudiesSection } from "@/content";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { DrawnUnderline } from "@/components/ui/DrawnUnderline";
import { TransitionLink } from "@/components/transition/TransitionLink";
import { StudyIndex } from "./StudyIndex";

/**
 * Home-page case studies: section header plus the study index.
 */
export function CaseStudySection() {
  return (
    <section
      id="case-studies"
      className="cutting-mat relative overflow-x-clip border-y border-chalk/15 py-20 sm:py-28"
    >
      <div className="ruler-x" aria-hidden />

      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <MonoLabel className="text-accent">{caseStudiesSection.eyebrow}</MonoLabel>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-chalk sm:text-5xl">
              {caseStudiesSection.heading}
            </h2>
            <DrawnUnderline />
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <p className="max-w-xs text-chalk-muted">{caseStudiesSection.intro}</p>
            <TransitionLink
              href="/case-studies"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
            >
              <span>
                {caseStudiesSection.viewAllLabel} ({caseStudies.length})
              </span>
              <span aria-hidden>→</span>
            </TransitionLink>
          </div>
        </div>

        <div className="mt-14">
          <StudyIndex studies={caseStudies} />
        </div>
      </div>
    </section>
  );
}
