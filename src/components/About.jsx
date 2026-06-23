import { BarChart3, Bot, LayoutDashboard, Workflow } from "lucide-react";
import { focusAreas, profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const icons = [BarChart3, LayoutDashboard, Workflow, Bot];

export default function About() {
  return (
    <section className="section-shell" id="about">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="About"
            title="Analytical depth with an operational product lens."
            description={profile.summary}
          />
          <div className="surface p-6 sm:p-8">
            <p className="text-lg leading-8 text-slate-300/88">{profile.about}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((item, index) => {
            const Icon = icons[index];

            return (
              <article key={item.title} className="surface p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-400/20 bg-accent-400/10 text-accent-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300/82">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
