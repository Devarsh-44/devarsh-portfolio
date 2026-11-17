import { beliefs } from "@/content";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { DrawnUnderline } from "@/components/ui/DrawnUnderline";
import { ScatterNotes } from "./ScatterNotes";

export function Beliefs() {
  return (
    <section id="beliefs" className="overflow-x-clip px-4 pb-44 pt-20 sm:px-8 sm:pt-28">
      <div className="mx-auto max-w-5xl text-center">
        <MonoLabel className="text-accent">{beliefs.eyebrow}</MonoLabel>
        <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{beliefs.heading}</h2>
          <DrawnUnderline className="mx-auto" />
      </div>

      <div className="mt-16">
        <ScatterNotes notes={beliefs.notes} />
      </div>
    </section>
  );
}
