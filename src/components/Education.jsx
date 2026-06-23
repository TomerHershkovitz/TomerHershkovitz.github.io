import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section className="section-shell" id="education">
      <SectionHeading
        eyebrow="Education"
        title="Industrial engineering with a specialization in information systems and analytics."
      />

      <div className="mt-12">
        <article className="surface p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-400/20 bg-accent-400/10 text-accent-300">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">{education.institution}</h3>
                <p className="text-base text-slate-300/86">{education.degree}</p>
                <p className="text-sm text-accent-200">
                  Specialization: {education.specialization}
                </p>
              </div>
            </div>

            <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
              {education.graduation}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
