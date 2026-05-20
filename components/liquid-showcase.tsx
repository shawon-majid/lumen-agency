"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { WaterCanvas } from "./water-canvas";

export function LiquidShowcase() {
  return (
    <section
      id="showcase"
      className="relative px-6 md:px-10 py-32 md:py-44 overflow-hidden"
    >
      {/* The whole section sits over a single water canvas, so every glass
          piece refracts the same field. */}
      <div className="absolute inset-0">
        <WaterCanvas intensity={0.85} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-canvas)]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-canvas)]/40 to-transparent" />

      <div className="relative max-w-[1380px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <p
                className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ✺ — The liquid system
              </p>
              <h2
                className="leading-[0.96] tracking-[-0.028em]"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--text-display)",
                  fontWeight: 300,
                }}
              >
                Glass that<br />
                <span style={{ fontStyle: "italic" }}>knows what&rsquo;s</span> beneath it.
              </h2>
            </div>
            <p className="max-w-xs text-[var(--color-ink-muted)] text-[14px] leading-[1.65]">
              Eight reusable primitives — buttons, cards, badges, inputs, switches —
              all built from a single shared shader and two CSS classes
              (<code className="text-[var(--color-ink)]" style={{ fontFamily: "var(--font-mono)" }}>.liquid-glass</code>{" "}
              and{" "}
              <code className="text-[var(--color-ink)]" style={{ fontFamily: "var(--font-mono)" }}>.liquid-glass-strong</code>).
            </p>
          </div>
        </Reveal>

        {/* The component grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large feature card — top left */}
          <Reveal className="col-span-12 md:col-span-7">
            <FeatureCard />
          </Reveal>

          {/* Stat card stack — top right */}
          <Reveal className="col-span-12 md:col-span-5" delay={0.1}>
            <StatStack />
          </Reveal>

          {/* Buttons */}
          <Reveal className="col-span-12 md:col-span-5" delay={0.05}>
            <ButtonsCard />
          </Reveal>

          {/* Toggle / switch */}
          <Reveal className="col-span-12 md:col-span-4" delay={0.1}>
            <ToggleCard />
          </Reveal>

          {/* Badge row */}
          <Reveal className="col-span-12 md:col-span-3" delay={0.15}>
            <BadgesCard />
          </Reveal>

          {/* Input field */}
          <Reveal className="col-span-12 md:col-span-7" delay={0.05}>
            <InputCard />
          </Reveal>

          {/* Notification toast */}
          <Reveal className="col-span-12 md:col-span-5" delay={0.1}>
            <NotificationCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Individual liquid components ─────────────────────────────────── */

function FeatureCard() {
  return (
    <div className="liquid-glass-strong p-7 md:p-10 min-h-[280px] flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          01 — Panel
        </span>
        <span className="inline-flex items-center gap-2 text-[11px] text-[var(--color-ink)]"
              style={{ fontFamily: "var(--font-mono)" }}>
          <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-rose)]" />
          Live
        </span>
      </div>

      <div className="mt-8">
        <h3
          className="leading-[1.05] tracking-[-0.022em] text-[var(--color-ink)] mb-4"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)",
            fontWeight: 300,
          }}
        >
          A panel is just a window. <span style={{ fontStyle: "italic" }}>What you see through it</span> is the design.
        </h3>
        <p className="text-[var(--color-ink-muted)] text-[14px] leading-[1.6] max-w-md">
          Every Liquid panel composes two layers — a frosted base and a specular
          highlight — over whatever runs underneath. Move the canvas, the panel
          changes character. No new code required.
        </p>
      </div>
    </div>
  );
}

function StatStack() {
  const STATS = [
    { k: "92ms", v: "median shader frame" },
    { k: "0", v: "console errors at first paint" },
    { k: "1", v: "shader, two themes" },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 h-full">
      {STATS.map((s) => (
        <div key={s.k} className="liquid-glass p-5 flex items-baseline justify-between">
          <span
            className="leading-[1] text-[var(--color-ink)]"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              fontWeight: 300,
            }}
          >
            {s.k}
          </span>
          <span
            className="text-[11.5px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)] text-right max-w-[140px]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {s.v}
          </span>
        </div>
      ))}
    </div>
  );
}

function ButtonsCard() {
  return (
    <div className="liquid-glass p-6 min-h-[200px] flex flex-col justify-between">
      <div className="flex items-center justify-between mb-6">
        <span
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          02 — Buttons
        </span>
      </div>
      <div className="flex flex-wrap gap-3 items-center">
        <button className="liquid-glass-strong px-5 py-2.5 text-[13.5px] text-[var(--color-ink)] hover:scale-[1.03] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          Primary
        </button>
        <button className="liquid-glass px-5 py-2.5 text-[13.5px] text-[var(--color-ink)] hover:scale-[1.03] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          Secondary
        </button>
        <button className="px-5 py-2.5 text-[13.5px] text-[var(--color-ink-muted)] hover:text-[var(--color-magenta)] transition-colors underline underline-offset-4 decoration-[var(--color-ink)]/30">
          Tertiary
        </button>
        <button
          className="liquid-glass-strong px-5 py-2.5 text-[13.5px] inline-flex items-center gap-2 hover:scale-[1.03] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ color: "var(--color-rose)" }}
        >
          <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-rose)]" />
          Destructive
        </button>
      </div>
    </div>
  );
}

function ToggleCard() {
  const [on, setOn] = useState(true);
  return (
    <div className="liquid-glass p-6 min-h-[200px] flex flex-col justify-between">
      <div>
        <span
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          03 — Switch
        </span>
        <p
          className="mt-4 leading-[1.15] text-[var(--color-ink)]"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)",
            fontWeight: 300,
          }}
        >
          Ripple <span style={{ fontStyle: "italic" }}>visibility</span>
        </p>
      </div>
      <button
        onClick={() => setOn((s) => !s)}
        className="liquid-glass relative inline-flex h-9 w-[68px] items-center rounded-full p-1 transition-colors duration-500"
        style={{ background: on ? "oklch(0.78 0.155 200 / 0.40)" : undefined }}
        aria-pressed={on}
      >
        <span
          className="liquid-glass-strong block h-7 w-7 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: on ? "translateX(30px)" : "translateX(0)" }}
        />
      </button>
    </div>
  );
}

function BadgesCard() {
  return (
    <div className="liquid-glass p-6 min-h-[200px] flex flex-col justify-between">
      <span
        className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        04 — Badges
      </span>
      <div className="flex flex-wrap gap-2 mt-4">
        {["Active", "Beta", "Draft", "Shipped", "Q3"].map((b) => (
          <span
            key={b}
            className="liquid-glass px-3 py-1 text-[11.5px] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

function InputCard() {
  return (
    <div className="liquid-glass p-6 md:p-8 min-h-[200px] flex flex-col justify-between">
      <div className="flex items-center justify-between mb-5">
        <span
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          05 — Input
        </span>
        <span
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Email
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="email"
          placeholder="hello@yourcompany.com"
          className="liquid-glass flex-1 px-5 py-3.5 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-subtle)] outline-none focus:ring-2 focus:ring-[var(--color-peach)]/40 transition-all"
        />
        <button className="liquid-glass-strong px-6 py-3.5 text-[13.5px] text-[var(--color-ink)] hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          Subscribe →
        </button>
      </div>
    </div>
  );
}

function NotificationCard() {
  return (
    <div className="liquid-glass-strong p-5 min-h-[200px] flex flex-col gap-4 justify-between">
      <div className="flex items-center justify-between">
        <span
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          06 — Toast
        </span>
        <span
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          just now
        </span>
      </div>
      <div className="flex items-start gap-4">
        <span className="liquid-glass mt-0.5 flex h-9 w-9 items-center justify-center rounded-full">
          <span className="block h-2 w-2 rounded-full bg-[var(--color-rose)]" />
        </span>
        <div className="flex-1">
          <p
            className="leading-[1.2] text-[var(--color-ink)] mb-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Aurora deployment shipped.
          </p>
          <p className="text-[13px] text-[var(--color-ink-muted)] leading-[1.55]">
            6.2k lines · 18 PR reviews · zero regressions in eval suite.
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <button className="px-3 py-1.5 text-[12px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors">
          Dismiss
        </button>
        <button className="liquid-glass px-3 py-1.5 text-[12px] text-[var(--color-ink)]">
          View →
        </button>
      </div>
    </div>
  );
}
