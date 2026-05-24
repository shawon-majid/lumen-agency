"use client";

import type { ReactNode } from "react";

/**
 * Ten fictional client wordmarks as inline SVG. Each uses a distinct
 * typographic treatment so the strip reads as a varied roster, not a
 * Photoshop file. Color comes from `currentColor` so the marquee
 * theme-switches without per-mark code changes.
 */

const SERIF_FAMILY =
  'var(--font-serif), "Charter", Georgia, serif';
const SANS_FAMILY =
  'var(--font-sans), "Helvetica Neue", system-ui, sans-serif';
const MONO_FAMILY =
  'var(--font-mono), "JetBrains Mono", ui-monospace, monospace';

interface MarkProps {
  label: string;
  width: number;
  children: ReactNode;
}

function Mark({ label, width, children }: MarkProps) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${width} 40`}
      height="36"
      width={(width * 36) / 40}
      style={{ color: "currentColor" }}
    >
      {children}
    </svg>
  );
}

function Aurora() {
  return (
    <Mark label="Aurora" width={150}>
      <text
        x="0"
        y="29"
        fill="currentColor"
        style={{
          fontFamily: SERIF_FAMILY,
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "28px",
          letterSpacing: "-0.01em",
        }}
      >
        Aurora
      </text>
    </Mark>
  );
}

function Meridian() {
  return (
    <Mark label="Meridian" width={220}>
      <text
        x="0"
        y="27"
        fill="currentColor"
        style={{
          fontFamily: SANS_FAMILY,
          fontWeight: 600,
          fontSize: "15px",
          letterSpacing: "0.38em",
          textTransform: "uppercase",
        }}
      >
        MERIDIAN
      </text>
    </Mark>
  );
}

function NorthProtocol() {
  return (
    <Mark label="North Protocol" width={210}>
      <text
        x="0"
        y="27"
        fill="currentColor"
        style={{
          fontFamily: MONO_FAMILY,
          fontWeight: 400,
          fontSize: "16px",
          letterSpacing: "-0.005em",
        }}
      >
        north/protocol
      </text>
    </Mark>
  );
}

function RippleLabs() {
  return (
    <Mark label="Ripple Labs" width={180}>
      {/* Ripple glyph: three concentric arcs */}
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <circle cx="14" cy="20" r="3" />
        <path d="M 6 20 A 8 8 0 0 1 22 20" />
        <path d="M 1 20 A 13 13 0 0 1 27 20" opacity="0.5" />
      </g>
      <text
        x="34"
        y="27"
        fill="currentColor"
        style={{
          fontFamily: SERIF_FAMILY,
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "22px",
          letterSpacing: "-0.005em",
        }}
      >
        Ripple Labs
      </text>
    </Mark>
  );
}

function TideAndCo() {
  return (
    <Mark label="Tide and Co." width={160}>
      <text
        x="0"
        y="29"
        fill="currentColor"
        style={{
          fontFamily: SERIF_FAMILY,
          fontWeight: 300,
          fontSize: "24px",
          letterSpacing: "-0.012em",
        }}
      >
        Tide
      </text>
      {/* Wave ampersand sub */}
      <path
        d="M 64 22 q 4 -7 8 0 q 4 7 8 0 q 4 -7 8 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="92"
        y="29"
        fill="currentColor"
        style={{
          fontFamily: SERIF_FAMILY,
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "24px",
          letterSpacing: "-0.012em",
        }}
      >
        Co.
      </text>
    </Mark>
  );
}

function Polaris() {
  return (
    <Mark label="Polaris" width={170}>
      {/* Six-point star, small */}
      <g
        transform="translate(11, 20)"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      >
        <line x1="0" y1="-8" x2="0" y2="8" />
        <line x1="-8" y1="0" x2="8" y2="0" />
        <line x1="-5.7" y1="-5.7" x2="5.7" y2="5.7" />
        <line x1="-5.7" y1="5.7" x2="5.7" y2="-5.7" />
      </g>
      <text
        x="30"
        y="27"
        fill="currentColor"
        style={{
          fontFamily: SANS_FAMILY,
          fontWeight: 400,
          fontSize: "20px",
          letterSpacing: "-0.005em",
        }}
      >
        Polaris
      </text>
    </Mark>
  );
}

function Influx() {
  return (
    <Mark label="Influx" width={120}>
      <text
        x="0"
        y="29"
        fill="currentColor"
        style={{
          fontFamily: SANS_FAMILY,
          fontWeight: 800,
          fontSize: "26px",
          fontStretch: "condensed",
          letterSpacing: "-0.025em",
          textTransform: "lowercase",
        }}
      >
        influx
      </text>
    </Mark>
  );
}

function Offshore() {
  return (
    <Mark label="Offshore" width={170}>
      <text
        x="0"
        y="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        style={{
          fontFamily: SANS_FAMILY,
          fontWeight: 700,
          fontSize: "22px",
          letterSpacing: "0.02em",
          textTransform: "uppercase",
        }}
      >
        OFFSHORE
      </text>
    </Mark>
  );
}

function Mirrored() {
  return (
    <Mark label="Mirrored" width={170}>
      {/* Mirrored-M glyph */}
      <g
        transform="translate(0, 8)"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="miter"
      >
        <path d="M 0 22 L 0 0 L 11 16 L 22 0 L 22 22" />
        <path d="M 22 22 L 22 0 L 33 16 L 44 0 L 44 22" opacity="0.55" />
      </g>
      <text
        x="58"
        y="28"
        fill="currentColor"
        style={{
          fontFamily: SERIF_FAMILY,
          fontWeight: 300,
          fontSize: "21px",
          letterSpacing: "-0.005em",
        }}
      >
        Mirrored
      </text>
    </Mark>
  );
}

function Conduit() {
  return (
    <Mark label="Conduit" width={170}>
      <text
        x="0"
        y="25"
        fill="currentColor"
        style={{
          fontFamily: SANS_FAMILY,
          fontWeight: 500,
          fontSize: "14px",
          letterSpacing: "0.30em",
          textTransform: "uppercase",
        }}
      >
        CONDUIT
      </text>
      {/* Hairline underline */}
      <line
        x1="0"
        y1="32"
        x2="155"
        y2="32"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </Mark>
  );
}

const MARKS: Array<{ key: string; render: () => ReactNode }> = [
  { key: "aurora", render: Aurora },
  { key: "meridian", render: Meridian },
  { key: "north-protocol", render: NorthProtocol },
  { key: "ripple-labs", render: RippleLabs },
  { key: "tide-and-co", render: TideAndCo },
  { key: "polaris", render: Polaris },
  { key: "influx", render: Influx },
  { key: "offshore", render: Offshore },
  { key: "mirrored", render: Mirrored },
  { key: "conduit", render: Conduit },
];

export function Marquee() {
  return (
    <section
      className="relative overflow-hidden py-8"
      style={{
        borderTop: "1px solid oklch(0.215 0.030 35 / 0.08)",
        borderBottom: "1px solid oklch(0.215 0.030 35 / 0.08)",
      }}
    >
      <p
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10 text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] hidden md:block bg-[var(--color-canvas)] px-4 py-1 rounded-full"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        ✺ — A few of the people who&apos;ve let us define things with them
      </p>
      <div
        className="flex w-max items-center gap-16 whitespace-nowrap animate-marquee will-change-transform text-[var(--color-ink-muted)]"
        style={{ paddingLeft: "min(50vw, 720px)" }}
      >
        {[...MARKS, ...MARKS, ...MARKS].map((m, i) => (
          <div key={`${m.key}-${i}`} className="flex items-center gap-3 shrink-0">
            <span className="text-[var(--color-peach)] text-[12px]">✺</span>
            {m.render()}
          </div>
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-canvas)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-canvas)] to-transparent" />
    </section>
  );
}
