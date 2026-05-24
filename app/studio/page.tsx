import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { WaterCanvas } from "@/components/water-canvas";
import { PRINCIPLES, ENGAGEMENTS } from "@/lib/principles";

export const metadata: Metadata = {
  title: "Studio — Principles, engagement, and the founder.",
  description:
    "Define AI is a senior advisory studio for AI. Read what we believe, how we engage, and who you'd actually be working with.",
};

export default function StudioPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative px-6 md:px-10 pt-40 md:pt-56 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-60">
            <WaterCanvas intensity={0.6} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--color-canvas)] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-canvas)] to-transparent" />

          <div className="max-w-[1380px] mx-auto relative">
            <Reveal>
              <p
                className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ✺ — The studio
              </p>
              <h1
                className="leading-[0.92] tracking-[-0.035em] text-[var(--color-ink)] max-w-5xl"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.8rem, 8vw, 7rem)",
                  fontWeight: 300,
                }}
              >
                A senior studio<br />
                for the age of{" "}
                <span style={{ fontStyle: "italic" }}>intelligent software.</span>
              </h1>
              <p className="mt-10 max-w-2xl text-[var(--color-ink-muted)] text-[16px] leading-[1.65]">
                Define AI exists because most AI engagements start in the wrong
                place — with a model, a vendor, or a vibe. We start with what
                your business should be defining AI to do, and we don&rsquo;t
                touch a line of code until that answer is sharp.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Principles */}
        <section className="px-6 md:px-10 pb-32 md:pb-44">
          <div className="max-w-[1380px] mx-auto">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-24">
                <h2
                  className="leading-[0.96] tracking-[-0.028em] max-w-2xl"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-display)",
                    fontWeight: 300,
                  }}
                >
                  Six things <span style={{ fontStyle: "italic" }}>we believe</span>
                  <br />
                  enough to refuse work over.
                </h2>
                <p className="max-w-xs text-[var(--color-ink-muted)] text-[14px] leading-[1.65]">
                  These are not slogans. If they aren&rsquo;t the right fit for
                  your team, we&rsquo;ll point you somewhere better.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-12 gap-x-6 gap-y-14 md:gap-y-20">
              {PRINCIPLES.map((p, i) => (
                <Reveal
                  key={p.n}
                  delay={i * 0.04}
                  className={`col-span-12 md:col-span-6 ${
                    i % 2 === 1 ? "md:pl-10 md:pt-10" : "md:pr-10"
                  }`}
                >
                  <div className="flex items-baseline gap-5 mb-5">
                    <span
                      className="leading-[0.85]"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(3rem, 5vw, 5rem)",
                        fontWeight: 300,
                        color: "oklch(0.215 0.030 35 / 0.18)",
                      }}
                    >
                      {p.n}
                    </span>
                    <h3
                      className="leading-[1.05] tracking-[-0.018em]"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.4rem, 2.2vw, 2.1rem)",
                        fontWeight: 300,
                        fontStyle: "italic",
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-[var(--color-ink-muted)] text-[15.5px] leading-[1.7] max-w-md">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="relative px-6 md:px-10 py-32 md:py-44 bg-[var(--color-canvas-soft)] overflow-hidden">
          <div className="max-w-[1380px] mx-auto">
            <Reveal>
              <div className="mb-16 md:mb-20 max-w-3xl">
                <p
                  className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  ✺ — How we engage
                </p>
                <h2
                  className="leading-[0.96] tracking-[-0.028em]"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-display)",
                    fontWeight: 300,
                  }}
                >
                  Four shapes,<br />
                  <span style={{ fontStyle: "italic" }}>sized to the moment.</span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
              {ENGAGEMENTS.map((e, i) => (
                <Reveal key={e.shape} delay={i * 0.05}>
                  <div className="pt-8 border-t border-[var(--color-ink)]/15">
                    <div className="flex items-baseline justify-between mb-5">
                      <h3
                        className="leading-[1.0] tracking-[-0.022em]"
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)",
                          fontWeight: 300,
                        }}
                      >
                        <span style={{ fontStyle: "italic" }}>{e.shape}</span>
                      </h3>
                      <span
                        className="text-[11.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {e.cycle}
                      </span>
                    </div>
                    <p className="text-[var(--color-ink-muted)] text-[15px] leading-[1.65] mb-5 max-w-md">
                      {e.body}
                    </p>
                    <p className="text-[13px] text-[var(--color-ink)] max-w-md">
                      <span
                        className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mr-2"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        Best for
                      </span>
                      {e.bestFor}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="relative px-6 md:px-10 py-32 md:py-44 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-50">
            <WaterCanvas intensity={0.45} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-canvas)] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-canvas)] to-transparent" />

          <div className="max-w-[1380px] mx-auto relative">
            <div className="grid grid-cols-12 gap-x-6 gap-y-10">
              <Reveal className="col-span-12 md:col-span-5">
                <p
                  className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  ✺ — Founder
                </p>
                <h2
                  className="leading-[1.0] tracking-[-0.022em]"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2rem, 3.6vw, 3.2rem)",
                    fontWeight: 300,
                  }}
                >
                  <span style={{ fontStyle: "italic" }}>Shawon Majid</span>
                  <br />
                  <span className="text-[var(--color-ink-muted)]">
                    Principal &amp; Founder
                  </span>
                </h2>
              </Reveal>

              <Reveal className="col-span-12 md:col-span-6 md:col-start-7 space-y-6">
                <p className="text-[var(--color-ink-muted)] text-[16px] leading-[1.7] max-w-xl">
                  Engineer-operator. Spent the last decade shipping AI and
                  data systems for teams that needed something that worked on
                  Monday — not a thing that demo&rsquo;d well on Friday.
                </p>
                <p className="text-[var(--color-ink-muted)] text-[16px] leading-[1.7] max-w-xl">
                  Started Define AI in 2026 after one too many engagements
                  where the bottleneck wasn&rsquo;t the model — it was
                  agreeing on what the model should do. The studio is built
                  around fixing that part first, and only that part first.
                </p>
                <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2">
                  <a
                    href="mailto:shawon.majid@gmail.com"
                    className="text-[14px] underline decoration-[var(--color-ink)]/30 underline-offset-4 hover:decoration-[var(--color-magenta)] hover:text-[var(--color-magenta)] transition-colors"
                  >
                    shawon.majid@gmail.com
                  </a>
                  <a
                    href="https://github.com/shawon-majid"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] underline decoration-[var(--color-ink)]/30 underline-offset-4 hover:decoration-[var(--color-magenta)] hover:text-[var(--color-magenta)] transition-colors"
                  >
                    github.com/shawon-majid ↗
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="relative px-6 md:px-10 py-24 md:py-32 border-t border-[var(--color-ink)]/10">
          <div className="max-w-[1380px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <h2
              className="leading-[0.96] tracking-[-0.028em] max-w-2xl"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                fontWeight: 300,
              }}
            >
              Two slots open <span style={{ fontStyle: "italic" }}>this quarter.</span>
            </h2>
            <Link
              href="/work"
              className="text-[14px] text-[var(--color-ink)] inline-flex items-center gap-3 self-start"
            >
              <span className="block h-px w-10 bg-[var(--color-ink)]" />
              <span>Read the work first →</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
