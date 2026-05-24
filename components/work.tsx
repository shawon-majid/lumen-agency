"use client";

import Link from "next/link";
import { Reveal } from "./reveal";
import { WORK, HOMEPAGE_SIZES, type CaseStudy } from "@/lib/work";

export function Work() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-10 py-32 md:py-44 bg-[var(--color-canvas-soft)]"
    >
      <div className="max-w-[1380px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-28">
            <div>
              <p
                className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ✺ — Selected work · 2024 — 26
              </p>
              <h2
                className="leading-[0.96] tracking-[-0.028em]"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--text-display)",
                  fontWeight: 300,
                }}
              >
                Six recent<br />
                <span style={{ fontStyle: "italic" }}>case studies.</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-[14px] text-[var(--color-ink)] self-start"
            >
              <span className="border-b border-[var(--color-ink)]/30 pb-1 group-hover:border-[var(--color-magenta)] transition-colors">
                Index of all work
              </span>
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="space-y-16 md:space-y-28">
          {WORK.map((w, i) => (
            <Reveal key={w.slug}>
              <WorkRow work={w} flip={i % 2 === 1} sizeClass={HOMEPAGE_SIZES[i % HOMEPAGE_SIZES.length]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkRow({
  work,
  flip,
  sizeClass,
}: {
  work: CaseStudy;
  flip: boolean;
  sizeClass: string;
}) {
  // When flipped (meta on the left), anchor the tile to the right edge of
  // the row so the trailing gap sits between meta and tile — matching the
  // shape of non-flipped rows where the meta is flush-right.
  const tile = (
    <div className={`col-span-12 ${sizeClass} ${flip ? "md:col-end-13" : ""}`}>
      <Link href={`/work/${work.slug}`} className="block h-full w-full">
        <WorkTile work={work} />
      </Link>
    </div>
  );

  const meta = (
    <div
      className={
        flip
          ? "col-span-12 md:col-span-3 md:order-first text-left md:text-right"
          : "col-span-12 md:col-span-3 md:col-start-10"
      }
    >
      <WorkMeta work={work} align={flip ? "right" : "left"} />
    </div>
  );

  return (
    <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
      {flip ? (
        <>
          {meta}
          {tile}
        </>
      ) : (
        <>
          {tile}
          {meta}
        </>
      )}
    </div>
  );
}

function WorkMeta({ work, align }: { work: CaseStudy; align: "left" | "right" }) {
  return (
    <div className={align === "right" ? "md:text-right" : ""}>
      <p
        className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-3"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {work.n} · {work.year}
      </p>
      <h3
        className="leading-[1.05] tracking-[-0.022em] mb-4"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)",
          fontWeight: 300,
        }}
      >
        <span style={{ fontStyle: "italic" }}>{work.client}</span>
        <br />
        <span className="text-[var(--color-ink-muted)]">{work.title}</span>
      </h3>
      <p
        className={`text-[var(--color-ink-muted)] text-[14px] leading-[1.6] max-w-sm mb-5 ${
          align === "right" ? "md:ml-auto" : ""
        }`}
      >
        {work.tease}
      </p>
      <div
        className={`flex gap-3 text-[12px] text-[var(--color-ink-muted)] ${
          align === "right" ? "md:justify-end" : ""
        }`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {work.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function WorkTile({ work }: { work: CaseStudy }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-[16px] group cursor-none"
      style={{ background: work.swatch }}
      data-cursor="large"
    >
      {/* Caustic light spots */}
      <div className="absolute -top-[10%] left-[18%] h-[55%] w-[55%] rounded-full bg-white/55 blur-[80px] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-6 group-hover:-translate-y-2" />
      <div className="absolute bottom-[5%] right-[8%] h-[45%] w-[40%] rounded-full bg-white/35 blur-[100px] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-4 group-hover:translate-y-2" />

      {/* Glass pane that lifts on hover */}
      <div
        className="absolute inset-x-[8%] bottom-[8%] top-[58%] rounded-[10px] backdrop-blur-[14px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2"
        style={{
          background: "oklch(1 0 0 / 0.32)",
          border: "1px solid oklch(1 0 0 / 0.45)",
          boxShadow: "0 30px 60px -30px oklch(0.215 0.030 35 / 0.30)",
        }}
      >
        <div className="flex h-full items-end justify-between p-5">
          <span
            className="text-[var(--color-ink)] leading-[1.05]"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.15rem, 1.6vw, 1.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            {work.client}
          </span>
          <span
            className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink)]/70"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Read →
          </span>
        </div>
      </div>

      {/* Tiny meta in top-left */}
      <div className="absolute top-5 left-5">
        <span
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink)]/55"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {work.n}
        </span>
      </div>
    </div>
  );
}
