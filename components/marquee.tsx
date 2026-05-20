"use client";

const ITEMS = [
  "Aurora",
  "Meridian",
  "North Protocol",
  "Ripple Labs",
  "Tide & Co.",
  "Polaris",
  "Influx",
  "Offshore",
  "Mirrored",
  "Conduit",
];

export function Marquee() {
  return (
    <section
      className="relative overflow-hidden py-7"
      style={{
        borderTop: "1px solid oklch(0.215 0.030 35 / 0.08)",
        borderBottom: "1px solid oklch(0.215 0.030 35 / 0.08)",
      }}
    >
      <div className="flex w-max gap-14 whitespace-nowrap animate-marquee will-change-transform">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-[var(--color-ink-muted)]"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.2rem", fontWeight: 300 }}
          >
            <span className="text-[var(--color-peach)] text-[0.85em]">✺</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-canvas)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-canvas)] to-transparent" />
    </section>
  );
}
