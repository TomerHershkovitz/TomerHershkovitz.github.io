import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { navItems } from "./data/portfolio";

const trackedSectionIds = [...navItems.map((item) => item.id), "education"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = trackedSectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-brand-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:72px_72px] opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-accent-500/18 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] top-[30rem] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <Navbar activeSection={activeSection} />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
