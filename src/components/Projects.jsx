import { BarChart3, Bot, BriefcaseBusiness, Workflow } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const icons = [Bot, BarChart3, Workflow, BriefcaseBusiness];

export default function Projects() {
  return (
    <section className="section-shell" id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected work across automation, analytics, and business impact."
        description="Each project reflects a blend of operational thinking, data fluency, and practical execution."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = icons[index];

          return (
            <article
              key={project.title}
              className="surface group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-400/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="tag">{project.category}</span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-400/20 bg-accent-400/10 text-accent-300 transition duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-5 text-base leading-7 text-slate-300/85">{project.description}</p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-200">
                  Impact
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200/92">{project.impact}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-muted">
                    {tag}
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
