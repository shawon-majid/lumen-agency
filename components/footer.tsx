"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

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
              <span style={{ fontStyle: "italic" }}>Define AI</span> — we figure out
              what AI should do, then build it.
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
              <li><Link href="/work" className="hover:text-[var(--color-magenta)] transition-colors">Work</Link></li>
              <li><Link href="/studio" className="hover:text-[var(--color-magenta)] transition-colors">Studio</Link></li>
              <li><Link href="/journal" className="hover:text-[var(--color-magenta)] transition-colors">Journal</Link></li>
              <li><a href="mailto:shawon.majid@gmail.com" className="hover:text-[var(--color-magenta)] transition-colors">Contact</a></li>
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
              <li>
                <a
                  href="https://github.com/shawon-majid"
                  className="hover:text-[var(--color-magenta)] transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:shawon.majid@gmail.com"
                  className="hover:text-[var(--color-magenta)] transition-colors"
                >
                  Email
                </a>
              </li>
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
              Remote · Worldwide
              <br />
              shawon.majid@gmail.com
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
            &copy; {year} Define AI Studio
          </p>
          <Link
            href="/v2"
            className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] hover:text-[var(--color-magenta)] transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Liquid · v2 design experiment →
          </Link>
        </div>
      </div>
    </footer>
  );
}
