"use client";

import { Reveal } from "./reveal";

interface Step {
  n: string;
  name: string;
  body: string;
  duration: string;
  deliverables: string[];
}

const STEPS: Step[] = [
  {
    n: "01",
    name: "Listen",
    body:
      "We start by understanding what you're actually trying to ship — not the technology you think you need. One week, deeply.",
    duration: "~ 1 week",
    deliverables: ["Discovery doc", "Stakeholder map", "Decision log"],
  },
  {
    n: "02",
    name: "Frame",
    body:
      "We translate ambition into an executable plan. Architecture, evaluation strategy, milestones, risk register. Read it in thirty minutes.",
    duration: "~ 1 week",
    deliverables: ["PRD", "Architecture", "Eval plan", "Milestones"],
  },
  {
    n: "03",
    name: "Build",
    body:
      "Small teams, short cycles. Working software on day five, production by the second sprint. You're in the loop daily, not weekly.",
    duration: "6 – 12 weeks",
    deliverables: ["Production system", "Eval harness", "Weekly demos"],
  },
  {
    n: "04",
    name: "Hand off",
    body:
      "We leave behind running systems, evaluation harnesses, runbooks, and a team that can extend everything we wrote.",
    duration: "~ 2 weeks",
    deliverables: ["Runbooks", "Onboarding", "Sample code", "30-day support"],
  },
];

export function Process() {
  return (
    <section id="process" className="relative px-6 md:px-10 py-32 md:py-44">
      <div className="max-w-[1380px] mx-auto">
        <Reveal>
          <div className="mb-20 md:mb-28 max-w-3xl">
            <p
              className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ✺ — How we work
            </p>
            <h2
              className="leading-[0.96] tracking-[-0.028em]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-display)",
                fontWeight: 300,
              }}
            >
              A studio rhythm.<br />
              <span style={{ fontStyle: "italic" }}>Four movements,</span> repeated.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-14 md:space-y-20">
          {STEPS.map((s, i) => (
            <Reveal key={s.n}>
              <div
                className="grid grid-cols-12 gap-x-6 gap-y-8 items-start pt-10 md:pt-14"
                style={{
                  borderTop: "1px solid oklch(0.215 0.030 35 / 0.12)",
                }}
              >
                {/* Big numeral — left, takes 5 cols */}
                <div className="col-span-12 md:col-span-5">
                  <span
                    className="block leading-[0.82] tracking-[-0.04em]"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 300,
                      fontSize: "clamp(6.5rem, 17vw, 14rem)",
                      color: "oklch(0.215 0.030 35 / 0.17)",
                    }}
                  >
                    {s.n}
                  </span>
                </div>

                {/* Step name + body — middle, 4 cols */}
                <div className="col-span-12 md:col-span-4 md:pt-10">
                  <h3
                    className="mb-5 leading-[1.0]"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "var(--text-h2)",
                      fontStyle: "italic",
                      fontWeight: 300,
                    }}
                  >
                    {s.name}
                  </h3>
                  <p className="text-[var(--color-ink-muted)] text-[15px] leading-[1.65] max-w-md">
                    {s.body}
                  </p>
                </div>

                {/* Deliverables + duration — right, 3 cols */}
                <div className="col-span-12 md:col-span-3 md:pt-10">
                  <p
                    className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-3"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Duration
                  </p>
                  <p
                    className="text-[var(--color-ink)] mb-8"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                      fontWeight: 300,
                    }}
                  >
                    {s.duration}
                  </p>

                  <p
                    className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-3"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Deliverables
                  </p>
                  <ul className="space-y-1.5">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-baseline gap-2 text-[13.5px] text-[var(--color-ink)]"
                      >
                        <span className="text-[var(--color-peach)] text-[0.85em]">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
