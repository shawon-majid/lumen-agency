import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { WaterCanvas } from "@/components/water-canvas";
import { WORK, getCaseStudy, getAdjacent } from "@/lib/work";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.client} — ${study.title}`,
    description: study.tease,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const { next } = getAdjacent(slug);

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative px-6 md:px-10 pt-40 md:pt-48 pb-24 md:pb-36 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-60">
            <WaterCanvas intensity={0.55} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--color-canvas)] via-[var(--color-canvas)]/40 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-canvas)] to-transparent" />

          <div className="max-w-[1380px] mx-auto relative">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <Link
                  href="/work"
                  className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] hover:text-[var(--color-magenta)] transition-colors"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  ← Index
                </Link>
                <span
                  className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]/50"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  /
                </span>
                <span
                  className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {study.n} · {study.sector} · {study.year}
                </span>
              </div>

              <h1
                className="leading-[0.94] tracking-[-0.035em] text-[var(--color-ink)] max-w-5xl"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.6rem, 7.5vw, 6.4rem)",
                  fontWeight: 300,
                }}
              >
                <span style={{ fontStyle: "italic" }}>{study.client}</span>
                <br />
                {study.title}.
              </h1>
              <p className="mt-10 max-w-2xl text-[var(--color-ink-muted)] text-[16px] leading-[1.65]">
                {study.tease}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Cover image */}
        <section className="px-6 md:px-10 pb-24 md:pb-32">
          <Reveal className="max-w-[1380px] mx-auto">
            <div
              className="relative h-[44vh] md:h-[68vh] w-full overflow-hidden rounded-[22px]"
              style={{ background: study.swatch }}
            >
              <div className="absolute -top-[10%] left-[18%] h-[55%] w-[55%] rounded-full bg-white/55 blur-[100px]" />
              <div className="absolute bottom-[5%] right-[8%] h-[45%] w-[40%] rounded-full bg-white/35 blur-[120px]" />
              <div
                className="absolute inset-x-[6%] bottom-[6%] rounded-[14px] backdrop-blur-[16px] px-7 py-6"
                style={{
                  background: "oklch(1 0 0 / 0.36)",
                  border: "1px solid oklch(1 0 0 / 0.5)",
                  boxShadow: "0 30px 70px -30px oklch(0.215 0.030 35 / 0.3)",
                }}
              >
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <span
                    className="leading-[1.0] tracking-[-0.018em]"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                      fontWeight: 300,
                    }}
                  >
                    {study.client}
                  </span>
                  <span
                    className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {study.tags.join(" · ")}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Two-column: Problem + Sidebar */}
        <section className="px-6 md:px-10 pb-24 md:pb-32">
          <div className="max-w-[1380px] mx-auto grid grid-cols-12 gap-x-6 gap-y-12">
            <Reveal className="col-span-12 md:col-span-7">
              <p
                className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ✺ — The problem
              </p>
              <p
                className="leading-[1.32] tracking-[-0.012em] text-[var(--color-ink)]"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.25rem, 1.9vw, 1.75rem)",
                  fontWeight: 300,
                }}
              >
                {study.problem}
              </p>
            </Reveal>

            <Reveal className="col-span-12 md:col-span-4 md:col-start-9 space-y-7 md:pt-1">
              <Sidebar label="Sector" value={study.sector} />
              <Sidebar label="Year" value={study.year} />
              <Sidebar label="Duration" value={study.duration} />
              <Sidebar label="Team" value={study.team.join(" · ")} />
              <div>
                <p
                  className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-3"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Stack
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {study.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[12.5px] text-[var(--color-ink)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      — {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Approach */}
        <section className="px-6 md:px-10 pb-24 md:pb-32">
          <div className="max-w-[1380px] mx-auto">
            <Reveal>
              <p
                className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ✺ — Approach
              </p>
              <h2
                className="leading-[0.96] tracking-[-0.028em] mb-16 max-w-3xl"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  fontWeight: 300,
                }}
              >
                The same arc as every engagement —{" "}
                <span style={{ fontStyle: "italic" }}>tuned to this problem.</span>
              </h2>
            </Reveal>

            <div className="space-y-10 md:space-y-14">
              {study.approach.map((step, i) => (
                <Reveal key={step.heading}>
                  <div className="grid grid-cols-12 gap-x-6 gap-y-4 items-start pt-10 md:pt-12 border-t border-[var(--color-ink)]/10">
                    <div className="col-span-12 md:col-span-1">
                      <span
                        className="text-[11.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        0{i + 1}
                      </span>
                    </div>
                    <h3
                      className="col-span-12 md:col-span-4 leading-[1.05]"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.4rem, 2.2vw, 2.1rem)",
                        fontWeight: 300,
                        fontStyle: "italic",
                      }}
                    >
                      {step.heading}
                    </h3>
                    <p className="col-span-12 md:col-span-6 md:col-start-7 text-[var(--color-ink-muted)] text-[15.5px] leading-[1.7]">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="relative px-6 md:px-10 py-24 md:py-36 overflow-hidden bg-[var(--color-canvas-soft)]">
          <div className="max-w-[1380px] mx-auto">
            <Reveal>
              <p
                className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ✺ — Outcome
              </p>
              <h2
                className="leading-[0.96] tracking-[-0.028em] max-w-3xl mb-16"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  fontWeight: 300,
                }}
              >
                Three numbers we&rsquo;d <span style={{ fontStyle: "italic" }}>defend in public.</span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
              {study.outcome.map((row, i) => (
                <Reveal key={row.label} delay={i * 0.07}>
                  <div className="pt-8 border-t border-[var(--color-ink)]/15">
                    <p
                      className="leading-[0.92] tracking-[-0.035em] text-[var(--color-ink)] mb-4"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(3rem, 6vw, 5.5rem)",
                        fontWeight: 300,
                      }}
                    >
                      {row.metric}
                    </p>
                    <p className="text-[15px] text-[var(--color-ink-muted)] leading-[1.5] max-w-xs">
                      {row.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="relative px-6 md:px-10 py-32 md:py-44 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-50">
            <WaterCanvas intensity={0.45} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--color-canvas-soft)] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-canvas)] to-transparent" />
          <Reveal className="max-w-5xl mx-auto relative">
            <blockquote
              className="leading-[1.08] tracking-[-0.022em]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.7rem, 3.8vw, 3.5rem)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              &ldquo;{study.quote.body}&rdquo;
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-[var(--color-ink-muted)]" />
              <p
                className="text-[11.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {study.quote.attribution}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Next case study */}
        <section className="px-6 md:px-10 pb-32 md:pb-44">
          <div className="max-w-[1380px] mx-auto">
            <Link
              href={`/work/${next.slug}`}
              className="group block relative h-[36vh] md:h-[44vh] w-full overflow-hidden rounded-[22px]"
              style={{ background: next.swatch }}
              data-cursor="large"
            >
              <div className="absolute -top-[10%] left-[18%] h-[55%] w-[55%] rounded-full bg-white/55 blur-[100px] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-8 group-hover:-translate-y-3" />
              <div className="absolute bottom-[5%] right-[8%] h-[45%] w-[40%] rounded-full bg-white/35 blur-[120px] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-5 group-hover:translate-y-3" />

              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                <span
                  className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink)]/65"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Next case study →
                </span>
                <div>
                  <h3
                    className="leading-[1.0] tracking-[-0.022em] text-[var(--color-ink)] mb-3"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ fontStyle: "italic" }}>{next.client}</span>{" "}
                    <span className="text-[var(--color-ink-muted)]">
                      — {next.title}
                    </span>
                  </h3>
                  <p className="text-[14px] text-[var(--color-ink-muted)] leading-[1.6] max-w-xl">
                    {next.tease}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Sidebar({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-1.5"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </p>
      <p
        className="text-[var(--color-ink)]"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)",
          fontWeight: 300,
        }}
      >
        {value}
      </p>
    </div>
  );
}
