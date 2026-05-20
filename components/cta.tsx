"use client";

import { Reveal } from "./reveal";
import { WaterCanvas } from "./water-canvas";

export function CTA() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <WaterCanvas intensity={1.4} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-canvas)]/55 to-transparent" />

      <div className="relative max-w-[1380px] mx-auto">
        <Reveal>
          <p
            className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-10"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ✺ — Booking · Q3 2026
          </p>
          <h2
            className="leading-[0.94] tracking-[-0.035em] text-[var(--color-ink)] max-w-5xl"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 9vw, 8rem)",
              fontWeight: 300,
            }}
          >
            Have something{" "}
            <span style={{ fontStyle: "italic" }}>unreasonable</span>
            <br />
            in mind?
          </h2>

          <div className="mt-14 md:mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <p className="text-[var(--color-ink-muted)] text-[15px] leading-[1.65] max-w-md">
              We take on three to four engagements a quarter. If you&rsquo;re thinking about
              the next twelve months of your AI roadmap — let&rsquo;s talk early.
            </p>
            <a
              href="mailto:hello@lumen.studio"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] pl-7 pr-5 py-4 text-[var(--color-canvas)] hover:bg-[var(--color-magenta)] transition-colors duration-500 self-start"
              data-cursor="large"
            >
              <span className="text-[14px]">hello@lumen.studio</span>
              <span className="text-[14px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
