import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "../data/portfolio";

function navLinkClass(isActive) {
  return isActive
    ? "nav-pill border-accent-400/45 bg-white/12 text-white"
    : "nav-pill border-transparent text-slate-300 hover:border-white/10 hover:text-white";
}

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="surface flex items-center justify-between gap-4 rounded-full px-4 py-3 md:px-6">
          <a className="flex items-center gap-3" href="#home" onClick={handleNavigate}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-400/35 bg-accent-400/10 font-display text-sm font-semibold tracking-[0.24em] text-accent-300">
              TH
            </span>
            <div className="hidden sm:block">
              <p className="font-display text-sm font-semibold text-white">{profile.name}</p>
              <p className="text-xs text-slate-400">Product &amp; Data Portfolio</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                className={navLinkClass(activeSection === item.id)}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a className="cta-secondary px-4 py-2.5 text-sm" href={profile.resumeHref} download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent-400/40 hover:bg-white/10 lg:hidden"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="surface mt-3 rounded-3xl p-4 lg:hidden">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  className={navLinkClass(activeSection === item.id)}
                  href={`#${item.id}`}
                  onClick={handleNavigate}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="cta-secondary mt-2 w-full justify-center px-4 py-3 text-sm"
                href={profile.resumeHref}
                download
                onClick={handleNavigate}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
