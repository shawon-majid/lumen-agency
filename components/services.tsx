"use client";

import { Reveal } from "./reveal";

type Layout = "wide" | "narrow" | "full";

interface Service {
  n: string;
  name: string;
  blurb: string;
  capabilities: string[];
  layout: Layout;
  swatch: string;
  engagement: { shape: string; cycle: string; team: string };
}

const SERVICES: Service[] = [
  {
    n: "01",
    name: "AI Agents",
    blurb:
      "Long-running autonomous systems that hold context, plan, and execute. Built with the runtime safety, observability, and human-in-the-loop seams real businesses require.",
    capabilities: ["Tool use", "Memory", "Orchestration", "Eval harnesses"],
    layout: "wide",
    swatch:
      "linear-gradient(135deg, oklch(0.95 0.04 70), oklch(0.82 0.14 45) 55%, oklch(0.68 0.20 18))",
    engagement: { shape: "Discovery → prototype → ship", cycle: "8 – 16 weeks", team: "2 – 4 engineers" },
  },
  {
    n: "02",
    name: "Retrieval Systems",
    blurb:
      "RAG pipelines that actually retrieve. Hybrid search, reranking, structured + unstructured fusion, and evaluation suites that catch silent drift before your users do.",
    capabilities: ["Embeddings", "Hybrid search", "Reranking", "Drift evals"],
    layout: "narrow",
    swatch:
      "linear-gradient(135deg, oklch(0.93 0.04 30), oklch(0.76 0.18 8) 60%, oklch(0.60 0.22 355))",
    engagement: { shape: "Audit → re-architect → ship", cycle: "6 – 10 weeks", team: "1 – 3 engineers" },
  },
  {
    n: "03",
    name: "AI-Native Interfaces",
    blurb:
      "Interfaces designed around generative systems — streaming, partial state, optimistic UI, and the texture that makes a tool feel like a thinking partner instead of a chat box.",
    capabilities: ["Streaming UI", "Multimodal", "Editorial design", "Motion"],
    layout: "full",
    swatch:
      "linear-gradient(135deg, oklch(0.96 0.04 80), oklch(0.86 0.14 75) 55%, oklch(0.74 0.18 60))",
    engagement: { shape: "Concept → design → build", cycle: "4 – 12 weeks", team: "Design + 1 – 2 eng" },
  },
  {
    n: "04",
    name: "ML Infrastructure",
    blurb:
      "Training, evaluation, inference, observability. The boring foundation that decides whether your AI product can ship a Friday change without flinching on Monday.",
    capabilities: ["Inference", "Training", "Observability", "CI/CD"],
    layout: "narrow",
    swatch:
      "linear-gradient(135deg, oklch(0.94 0.03 45), oklch(0.80 0.15 30) 55%, oklch(0.66 0.19 12))",
    engagement: { shape: "Embed → harden → hand off", cycle: "8 – 20 weeks", team: "2 – 5 engineers" },
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 md:px-10 py-32 md:py-44">
      <div className="max-w-[1380px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
            <div className="max-w-2xl">
              <p
                className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ✺ — What we build
              </p>
              <h2
                className="leading-[0.96] tracking-[-0.028em]"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--text-display)",
                  fontWeight: 300,
                }}
              >
                Four ways<br />
                <span style={{ fontStyle: "italic" }}>we ship</span> intelligence<br />
                into your product.
              </h2>
            </div>
            <p className="max-w-xs text-[var(--color-ink-muted)] text-[14px] leading-[1.65]">
              Each engagement is sized to the moment — from a five-day prototype to a
              year-long platform build. We embed alongside your team, or run an
              end-to-end engagement from the studio.
            </p>
          </div>
        </Reveal>

        <div className="space-y-28 md:space-y-36">
          {SERVICES.map((s) => (
            <Reveal key={s.n}>
              <ServiceRow service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service }: { service: Service }) {
  const counter = (
    <span
      className="text-[11.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {service.n} / 04
    </span>
  );

  const title = (
    <h3
      className="leading-[1.0] tracking-[-0.022em]"
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "var(--text-h1)",
        fontWeight: 300,
      }}
    >
      {service.name}
    </h3>
  );

  const capabilities = (
    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5">
      {service.capabilities.map((c) => (
        <span
          key={c}
          className="text-[12px] text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          — {c}
        </span>
      ))}
    </div>
  );

  const engagementBlock = (
    <div className="space-y-5">
      <div>
        <p
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-2"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Shape
        </p>
        <p
          className="text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(0.98rem, 1.2vw, 1.15rem)", fontWeight: 300 }}
        >
          {service.engagement.shape}
        </p>
      </div>
      <div className="flex gap-8">
        <div>
          <p
            className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-1.5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Cycle
          </p>
          <p className="text-[13.5px] text-[var(--color-ink)]" style={{ fontFamily: "var(--font-mono)" }}>
            {service.engagement.cycle}
          </p>
        </div>
        <div>
          <p
            className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-1.5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Team
          </p>
          <p className="text-[13.5px] text-[var(--color-ink)]" style={{ fontFamily: "var(--font-mono)" }}>
            {service.engagement.team}
          </p>
        </div>
      </div>
    </div>
  );

  if (service.layout === "wide") {
    return (
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 md:col-span-1 mb-2 md:mb-0">{counter}</div>
        <div className="col-span-12 md:col-span-5">{title}</div>
        <div className="col-span-12 md:col-span-3">
          <p className="text-[var(--color-ink-muted)] text-[15px] leading-[1.65] max-w-md">
            {service.blurb}
          </p>
          {capabilities}
        </div>
        <div className="col-span-12 md:col-span-3">{engagementBlock}</div>
      </div>
    );
  }

  if (service.layout === "narrow") {
    return (
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 md:col-span-1 mb-2 md:mb-0">{counter}</div>
        <div className="col-span-12 md:col-start-3 md:col-span-5 max-w-xl">
          {title}
          <p className="mt-5 text-[var(--color-ink-muted)] text-[15px] leading-[1.65] max-w-md">
            {service.blurb}
          </p>
          {capabilities}
        </div>
        <div className="col-span-12 md:col-start-9 md:col-span-4">{engagementBlock}</div>
      </div>
    );
  }

  // full — title + blurb on top row, then a wide glass-over-water preview
  return (
    <div className="grid grid-cols-12 gap-6 items-start">
      <div className="col-span-12 md:col-span-1 mb-2 md:mb-0">{counter}</div>
      <div className="col-span-12 md:col-span-11">
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10 mb-10">
          {title}
          <p className="text-[var(--color-ink-muted)] text-[15px] leading-[1.65] max-w-md md:ml-auto">
            {service.blurb}
          </p>
        </div>
        <div
          className="relative h-[300px] md:h-[420px] w-full overflow-hidden rounded-[14px]"
          style={{ background: service.swatch }}
        >
          {/* Bright caustic spots */}
          <div className="absolute top-[18%] left-[22%] h-[40%] w-[42%] rounded-full bg-white/55 blur-[80px]" />
          <div className="absolute bottom-[10%] right-[14%] h-[36%] w-[32%] rounded-full bg-white/40 blur-[100px]" />
          {/* Glass panes */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-3 p-3">
            {service.capabilities.map((c) => (
              <div
                key={c}
                className="rounded-[10px] backdrop-blur-[10px] flex flex-col justify-between p-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
                style={{
                  background: "oklch(1 0 0 / 0.30)",
                  border: "1px solid oklch(1 0 0 / 0.45)",
                  boxShadow: "0 10px 40px -10px oklch(0.215 0.030 35 / 0.10)",
                }}
              >
                <span
                  className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink)]/65"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  capability
                </span>
                <span
                  className="text-[var(--color-ink)] leading-[1.05]"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.05rem, 1.5vw, 1.4rem)",
                    fontWeight: 300,
                  }}
                >
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
