"use client";

import { Reveal } from "./reveal";
import { WaterCanvas } from "./water-canvas";

export function Quote() {
  return (
    <section className="relative px-6 md:px-10 py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <WaterCanvas intensity={0.55} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-canvas-soft)]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-canvas)]/70 to-transparent" />

      <div className="max-w-5xl mx-auto relative">
        <Reveal>
          <p
            className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-12"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ✺ — A note from the studio
          </p>
          <blockquote
            className="leading-[1.05] tracking-[-0.022em] text-[var(--color-ink)]"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.95rem, 4.5vw, 4.2rem)",
              fontWeight: 300,
            }}
          >
            Most teams ask, &ldquo;how should we use AI?&rdquo;{" "}
            <span style={{ fontStyle: "italic" }}>
              The better question is &mdash; what should we define AI to do that
              nothing else can?
            </span>{" "}
            That&rsquo;s the conversation we&rsquo;re here for.
          </blockquote>
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-12 bg-[var(--color-ink-muted)]" />
            <p
              className="text-[11.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Define AI &middot; Founder&rsquo;s note
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
