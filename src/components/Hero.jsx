import { ArrowUpRight, Download, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { heroHighlights, heroMetrics, profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="section-shell pt-36 md:pt-40" id="home">
      <div className="grid items-end gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        <div className="animate-appear space-y-8">
          <div className="space-y-5">
            <p className="eyebrow">Product, data, and operations</p>
            <div className="space-y-4">
              <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-7xl">
                {profile.name}
              </h1>
              <div className="space-y-3">
                <p className="text-xl font-semibold text-accent-300 sm:text-2xl">{profile.title}</p>
                <p className="max-w-2xl text-base text-slate-300/90 sm:text-lg">{profile.subtitle}</p>
              </div>
            </div>
            <p className="max-w-3xl text-balance text-lg leading-8 text-slate-300/90 sm:text-xl">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a className="cta-primary" href="#projects">
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a className="cta-secondary" href={profile.resumeHref} download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              className="cta-secondary"
              href={profile.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <a className="tag-muted" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a className="tag-muted" href={`tel:${profile.phone}`}>
              <Phone className="h-4 w-4" />
              {profile.phoneLabel}
            </a>
            <span className="tag-muted">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </div>
        </div>

        <aside className="surface animate-float overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/60 to-transparent" />
          <div className="relative space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-400/25 bg-accent-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-200">
              <Sparkles className="h-3.5 w-3.5" />
              Core Highlights
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <h2 className="text-base font-semibold text-white">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300/82">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 border-t border-white/10 pt-6">
              {heroMetrics.map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-6">
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="max-w-[14rem] text-right text-sm font-medium text-slate-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
