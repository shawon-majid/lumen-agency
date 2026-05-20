"use client";

import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div
        className={
          "mx-auto flex items-center justify-between px-6 md:px-10 transition-all duration-500 " +
          (scrolled ? "py-3.5" : "py-6")
        }
        style={{
          backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          background: scrolled ? "oklch(0.972 0.014 80 / 0.62)" : "transparent",
          borderBottom: scrolled ? "1px solid oklch(0.215 0.030 35 / 0.06)" : "1px solid transparent",
        }}
      >
        <a href="#" className="group inline-flex items-center gap-2.5">
          <span className="relative inline-block h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-[var(--color-peach)]" />
            <span className="absolute -inset-1 rounded-full bg-[var(--color-magenta)] opacity-40 blur-[5px]" />
          </span>
          <span
            className="text-[1.05rem] tracking-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Lumen
          </span>
          <span
            className="ml-1 hidden md:inline text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            studio
          </span>
        </a>

        <div className="flex items-center gap-2 md:gap-7">
          <div className="hidden md:flex items-center gap-7 text-[13.5px] text-[var(--color-ink)]">
            <a href="#work" className="hover:text-[var(--color-magenta)] transition-colors">Work</a>
            <a href="#services" className="hover:text-[var(--color-magenta)] transition-colors">Services</a>
            <a href="#process" className="hover:text-[var(--color-magenta)] transition-colors">Studio</a>
          </div>
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-canvas)] pl-4 pr-3 py-2 text-[12.5px] hover:bg-[var(--color-magenta)] transition-colors duration-500"
          >
            Start a project
            <span className="inline-block">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
