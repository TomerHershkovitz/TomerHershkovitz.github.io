import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="container pb-10">
      <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built for product, analytics, and operations opportunities.
        </p>
        <p>Designed as a premium, one-page portfolio for modern hiring flows.</p>
      </div>
    </footer>
  );
}
