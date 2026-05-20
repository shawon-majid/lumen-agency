"use client";

export function Footer() {
  return (
    <footer
      className="relative px-6 md:px-10 pt-24 pb-10"
      style={{ borderTop: "1px solid oklch(0.215 0.030 35 / 0.10)" }}
    >
      <div className="max-w-[1380px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-6">
            <p
              className="leading-[1.05] tracking-[-0.022em] max-w-xl"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.95rem, 4vw, 3.5rem)",
                fontWeight: 300,
              }}
            >
              <span style={{ fontStyle: "italic" }}>Lumen</span> — a studio
              for software that thinks.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <p
              className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Studio
            </p>
            <ul className="space-y-2.5 text-[14px]">
              <li><a href="#work" className="hover:text-[var(--color-magenta)] transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-[var(--color-magenta)] transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-[var(--color-magenta)] transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-magenta)] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <p
              className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Elsewhere
            </p>
            <ul className="space-y-2.5 text-[14px]">
              <li><a href="#" className="hover:text-[var(--color-magenta)] transition-colors">Github</a></li>
              <li><a href="#" className="hover:text-[var(--color-magenta)] transition-colors">Read.cv</a></li>
              <li><a href="#" className="hover:text-[var(--color-magenta)] transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-[var(--color-magenta)] transition-colors">Substack</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <p
              className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Where
            </p>
            <p className="text-[14px] leading-[1.65]">
              Brooklyn / Remote
              <br />
              hello@lumen.studio
            </p>
          </div>
        </div>

        <div
          className="pt-7 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          style={{ borderTop: "1px solid oklch(0.215 0.030 35 / 0.10)" }}
        >
          <p
            className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            &copy; 2026 Lumen Studio
          </p>
          <p
            className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Software, intelligently rendered.
          </p>
        </div>
      </div>
    </footer>
  );
}
