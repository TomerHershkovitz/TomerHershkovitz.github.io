import { ArrowUpRight, Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="section-shell pb-16" id="contact">
      <div className="surface overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="Interested in product, data, automation, and business operations roles."
              description="Feel free to reach out if you're hiring for product, analytics, operations, or business-facing roles."
            />
            <p className="max-w-2xl text-base leading-8 text-slate-300/85">
              I enjoy working in environments where data, cross-functional collaboration,
              and operational clarity drive meaningful business outcomes.
            </p>
          </div>

          <div className="space-y-4">
            <a className="contact-row" href={`mailto:${profile.email}`}>
              <div className="contact-row__label">
                <Mail className="h-4 w-4" />
                Email
              </div>
              <span>{profile.email}</span>
            </a>
            <a className="contact-row" href={`tel:${profile.phone}`}>
              <div className="contact-row__label">
                <Phone className="h-4 w-4" />
                Phone
              </div>
              <span>{profile.phoneLabel}</span>
            </a>
            <a className="contact-row" href={profile.linkedin} rel="noreferrer" target="_blank">
              <div className="contact-row__label">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </div>
              <span className="flex items-center gap-2">
                View profile
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <div className="contact-row">
              <div className="contact-row__label">
                <MapPin className="h-4 w-4" />
                Location
              </div>
              <span>{profile.location}</span>
            </div>

            <div className="pt-4">
              <a className="cta-primary w-full justify-center" href={profile.resumeHref} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
