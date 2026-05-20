"use client";

import { Reveal } from "./reveal";

interface WorkItem {
  n: string;
  client: string;
  title: string;
  year: string;
  tags: string[];
  swatch: string;
}

const WORK: WorkItem[] = [
  {
    n: "01",
    client: "Aurora",
    title: "Agent operations platform",
    year: "2026",
    tags: ["Agents", "Infra"],
    swatch:
      "linear-gradient(135deg, oklch(0.95 0.04 60), oklch(0.82 0.14 45) 50%, oklch(0.68 0.20 18))",
  },
  {
    n: "02",
    client: "Meridian",
    title: "Retrieval at fleet scale",
    year: "2025",
    tags: ["RAG", "Search"],
    swatch:
      "linear-gradient(135deg, oklch(0.93 0.04 25), oklch(0.78 0.16 8) 55%, oklch(0.60 0.22 350))",
  },
  {
    n: "03",
    client: "North Protocol",
    title: "A multimodal canvas",
    year: "2025",
    tags: ["Interfaces", "Streaming"],
    swatch:
      "linear-gradient(135deg, oklch(0.96 0.04 80), oklch(0.86 0.14 75) 55%, oklch(0.72 0.18 55))",
  },
  {
    n: "04",
    client: "Ripple Labs",
    title: "Evaluation harness",
    year: "2025",
    tags: ["Evals", "Infra"],
    swatch:
      "linear-gradient(135deg, oklch(0.93 0.04 20), oklch(0.78 0.17 12) 55%, oklch(0.62 0.21 0))",
  },
  {
    n: "05",
    client: "Tide & Co.",
    title: "Embedded copilots",
    year: "2024",
    tags: ["Agents", "Interfaces"],
    swatch:
      "linear-gradient(135deg, oklch(0.95 0.04 70), oklch(0.84 0.13 55) 55%, oklch(0.70 0.18 30))",
  },
  {
    n: "06",
    client: "Polaris",
    title: "Inference at the edge",
    year: "2024",
    tags: ["Infrastructure"],
    swatch:
      "linear-gradient(135deg, oklch(0.95 0.03 50), oklch(0.80 0.14 40) 55%, oklch(0.64 0.18 12))",
  },
];

const SIZES = [
  "md:col-span-7 aspect-[16/10]",
  "md:col-span-5 aspect-[4/5]",
  "md:col-span-8 aspect-[16/9]",
  "md:col-span-5 aspect-[5/6]",
  "md:col-span-7 aspect-[16/10]",
  "md:col-span-5 aspect-[4/5]",
];

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
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[14px] text-[var(--color-ink)] self-start"
            >
              <span className="border-b border-[var(--color-ink)]/30 pb-1 group-hover:border-[var(--color-magenta)] transition-colors">
                Index of all work
              </span>
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>
        </Reveal>

        <div className="space-y-16 md:space-y-28">
          {WORK.map((w, i) => (
            <Reveal key={w.n}>
              <WorkRow work={w} flip={i % 2 === 1} sizeClass={SIZES[i % SIZES.length]} />
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
  work: WorkItem;
  flip: boolean;
  sizeClass: string;
}) {
  const tile = (
    <div className={`col-span-12 ${sizeClass}`}>
      <WorkTile work={work} />
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

  // Asymmetric: meta on opposite side from where tile starts
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

function WorkMeta({ work, align }: { work: WorkItem; align: "left" | "right" }) {
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
      <div
        className={`flex gap-3 text-[12px] text-[var(--color-ink-muted)] mt-5 ${
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

function WorkTile({ work }: { work: WorkItem }) {
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
            View →
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
