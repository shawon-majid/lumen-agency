"use client";

import { motion } from "motion/react";
import { WaterCanvas } from "./water-canvas";

const ease = [0.16, 1, 0.3, 1] as const;

const WORDS = [
  { text: "Software", italic: false },
  { text: "that", italic: false },
  { text: "ripples.", italic: true },
];

export function HeroV2() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <WaterCanvas intensity={1.15} />

      {/* Top soft fade so the nav reads */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[var(--color-canvas)]/40 via-[var(--color-canvas)]/10 to-transparent" />

      {/* Floating liquid badges */}
      <motion.div
        className="absolute top-28 left-6 md:left-10 liquid-glass px-4 py-2.5 flex items-center gap-2.5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease }}
      >
        <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-rose)]" />
        <span
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Liquid · v2
        </span>
      </motion.div>

      <motion.div
        className="absolute top-28 right-6 md:right-10 liquid-glass px-4 py-2.5 text-right"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8, ease }}
      >
        <p
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Q3 — Booking open
        </p>
      </motion.div>

      {/* Central glass card holding the headline */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div
          className="liquid-glass-strong relative w-full max-w-[1080px] px-8 md:px-14 py-12 md:py-16"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 1.1, ease }}
        >
          {/* Meta line at top of card */}
          <div className="flex items-center justify-between mb-6 md:mb-10">
            <span
              className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ✺ — Lumen Studio
            </span>
            <span
              className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              [v2 · liquid]
            </span>
          </div>

          {/* Headline */}
          <motion.h1
            className="leading-[0.96] tracking-[-0.035em] text-[var(--color-ink)]"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.6rem, 7.5vw, 6.8rem)",
              fontWeight: 300,
            }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
            }}
          >
            {WORDS.map((w, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-baseline pr-[0.18em]"
              >
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: "0%", transition: { duration: 1.0, ease } },
                  }}
                  style={w.italic ? { fontStyle: "italic", fontWeight: 300 } : undefined}
                >
                  {w.text}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Body + CTA row */}
          <div className="mt-8 md:mt-10 grid grid-cols-12 gap-6 items-end">
            <motion.p
              className="col-span-12 md:col-span-6 text-[var(--color-ink-muted)] text-[15px] leading-[1.65]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.9, ease }}
            >
              Same studio, second skin. The Liquid theme is our showcase for glass-on-water UI —
              the same WebGL caustics shader, retuned for actual water tones, with frosted
              surfaces refracting what runs beneath.
            </motion.p>

            <motion.div
              className="col-span-12 md:col-span-6 flex flex-wrap gap-3 md:justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.9 }}
            >
              <a
                href="#showcase"
                className="liquid-glass px-5 py-3 text-[14px] text-[var(--color-ink)] hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                See the system →
              </a>
              <a
                href="/"
                className="px-5 py-3 text-[14px] text-[var(--color-ink-muted)] hover:text-[var(--color-magenta)] transition-colors"
              >
                ← Warm version
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-10 hidden md:flex flex-col items-end gap-2 text-[var(--color-ink-muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span
          className="text-[10px] uppercase tracking-[0.22em]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Scroll
        </span>
        <motion.span
          className="block h-12 w-px bg-[var(--color-ink-muted)]"
          animate={{ scaleY: [0.4, 1, 0.4], originY: 0 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
