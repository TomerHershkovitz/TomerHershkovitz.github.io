import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="section-shell" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Hands-on roles in fintech operations and digital transformation."
        description="A timeline of roles where data, execution, and system thinking came together."
      />

      <div className="mt-12 space-y-6">
        {experience.map((item, index) => (
          <article key={`${item.company}-${item.role}`} className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
            <div className="relative pt-1">
              <div className="absolute left-[9px] top-8 hidden h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-accent-400/50 to-transparent md:block" />
              <div className="flex items-center gap-3">
                <span className="h-[18px] w-[18px] rounded-full border-4 border-brand-900 bg-accent-300 shadow-[0_0_0_6px_rgba(56,189,248,0.12)]" />
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                  {item.dates}
                </p>
              </div>
            </div>

            <div className="surface p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="text-base text-accent-300">{item.company}</p>
                </div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                  {index === 0 ? "Current role" : "Previous role"}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-300/86 sm:text-[0.97rem]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
