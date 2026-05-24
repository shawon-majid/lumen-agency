"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { WaterCanvas } from "./water-canvas";

const ease = [0.16, 1, 0.3, 1] as const;

const WORDS = [
  { text: "Define", italic: false },
  { text: "what AI", italic: true },
  { text: "does.", italic: false },
];

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <WaterCanvas intensity={1.0} />

      {/* Top vignette for nav legibility */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[var(--color-canvas)]/55 via-[var(--color-canvas)]/15 to-transparent" />
      {/* Bottom vignette to lift the headline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[var(--color-canvas)]/40 to-transparent" />

      {/* Meta — top right */}
      <motion.div
        className="absolute top-24 right-6 md:right-10 text-right"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease }}
      >
        <p
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Studio · est. 2026
        </p>
        <p
          className="mt-1 text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-magenta)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-magenta)] mr-1.5 align-[1px]" />
          Booking · Q3
        </p>
      </motion.div>

      {/* Meta — top left, opposite of CTA */}
      <motion.div
        className="absolute top-24 left-6 md:left-10 max-w-[16rem]"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8, ease }}
      >
        <p
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] leading-[1.6]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          [001] — a senior studio<br />for the age of intelligent<br />software
        </p>
      </motion.div>

      {/* Headline */}
      <div className="absolute bottom-12 left-6 md:bottom-20 md:left-10 right-6 md:right-10 max-w-[1180px]">
        <motion.h1
          className="leading-[0.92] tracking-[-0.035em] text-[var(--color-ink)]"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-mega)",
            fontWeight: 300,
          }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
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
                  visible: { y: "0%", transition: { duration: 1.1, ease } },
                }}
                style={w.italic ? { fontStyle: "italic", fontWeight: 300 } : undefined}
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <div className="mt-7 md:mt-9 flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
          <motion.p
            className="max-w-md text-[var(--color-ink-muted)] text-[15px] leading-[1.6]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.9, ease }}
          >
            We figure out what AI should actually do for your business — then
            design, build, and hand over the systems that ship it. Senior team.
            Real evaluations. Owned by you on day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.9 }}
            className="self-start"
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 text-[14px] text-[var(--color-ink)]"
            >
              <span className="block h-px w-10 bg-[var(--color-ink)] origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-150" />
              <span>See selected work</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <motion.div
        className="absolute bottom-12 right-10 hidden md:flex flex-col items-end gap-2 text-[var(--color-ink-muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
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
