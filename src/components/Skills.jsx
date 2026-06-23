import { Activity, BarChart3, BriefcaseBusiness, Code2, Workflow } from "lucide-react";
import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const icons = [BarChart3, Activity, BriefcaseBusiness, Code2, Workflow];

export default function Skills() {
  return (
    <section className="section-shell" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit built for monitoring, analysis, and execution."
        description="Grouped capabilities that support product decisions, operational visibility, and delivery."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[index];

          return (
            <article key={group.title} className="surface p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-400/20 bg-accent-400/10 text-accent-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
