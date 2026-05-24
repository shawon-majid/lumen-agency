import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { WaterCanvas } from "@/components/water-canvas";
import { WORK } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work — Selected case studies",
  description:
    "Selected work from Define AI — six studies in defining, building, and operating AI systems for real businesses.",
};

const SIZES = [
  "md:col-span-7 aspect-[16/10]",
  "md:col-span-5 aspect-[4/5]",
  "md:col-span-8 aspect-[16/9]",
  "md:col-span-5 aspect-[5/6]",
  "md:col-span-7 aspect-[16/10]",
  "md:col-span-5 aspect-[4/5]",
];

export default function WorkIndexPage() {
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
                ✺ — Index of selected work · 2024 – 26
              </p>
              <h1
                className="leading-[0.92] tracking-[-0.035em] text-[var(--color-ink)] max-w-4xl"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.8rem, 8vw, 7rem)",
                  fontWeight: 300,
                }}
              >
                Six engagements.<br />
                <span style={{ fontStyle: "italic" }}>
                  One way of working.
                </span>
              </h1>
              <p className="mt-10 max-w-xl text-[var(--color-ink-muted)] text-[15.5px] leading-[1.65]">
                Every engagement runs the same arc — Define, Frame, Build,
                Operate. The clients, the stacks, and the outcomes differ.
                The rhythm doesn&rsquo;t.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Index grid */}
        <section className="px-6 md:px-10 pb-32 md:pb-44">
          <div className="max-w-[1380px] mx-auto">
            <div className="grid grid-cols-12 gap-6 md:gap-10">
              {WORK.map((w, i) => (
                <Reveal
                  key={w.slug}
                  className={`col-span-12 ${SIZES[i % SIZES.length]} relative`}
                >
                  <Link href={`/work/${w.slug}`} className="block h-full w-full group">
                    <div
                      className="relative h-full w-full overflow-hidden rounded-[18px]"
                      style={{ background: w.swatch }}
                      data-cursor="large"
                    >
                      <div className="absolute -top-[10%] left-[18%] h-[55%] w-[55%] rounded-full bg-white/55 blur-[80px] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-6 group-hover:-translate-y-2" />
                      <div className="absolute bottom-[5%] right-[8%] h-[45%] w-[40%] rounded-full bg-white/35 blur-[100px] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-4 group-hover:translate-y-2" />

                      {/* Top meta */}
                      <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                        <span
                          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink)]/60"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {w.n} / 06
                        </span>
                        <span
                          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink)]/60"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {w.sector} · {w.year}
                        </span>
                      </div>

                      {/* Bottom glass card */}
                      <div
                        className="absolute inset-x-[6%] bottom-[6%] top-[52%] rounded-[12px] backdrop-blur-[14px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 p-6 md:p-7 flex flex-col justify-between"
                        style={{
                          background: "oklch(1 0 0 / 0.34)",
                          border: "1px solid oklch(1 0 0 / 0.48)",
                          boxShadow: "0 30px 60px -30px oklch(0.215 0.030 35 / 0.30)",
                        }}
                      >
                        <h2
                          className="leading-[1.0] tracking-[-0.018em] text-[var(--color-ink)]"
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(1.4rem, 2.0vw, 1.95rem)",
                            fontWeight: 300,
                          }}
                        >
                          <span style={{ fontStyle: "italic" }}>{w.client}</span>{" "}
                          <span className="text-[var(--color-ink-muted)]">
                            — {w.title}
                          </span>
                        </h2>
                        <div className="flex items-end justify-between gap-4">
                          <p className="text-[13px] text-[var(--color-ink-muted)] leading-[1.55] max-w-md">
                            {w.tease}
                          </p>
                          <span
                            className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink)] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            Read →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
