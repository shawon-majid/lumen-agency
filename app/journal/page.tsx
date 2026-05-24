import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { WaterCanvas } from "@/components/water-canvas";
import { listPosts, supabaseConfigured } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Journal — Field notes from the studio.",
  description:
    "Writing from Define AI. Notes on shipping AI for real businesses — what works, what doesn't, and what's worth defending.",
};

export const revalidate = 60;

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function JournalPage() {
  const posts = supabaseConfigured() ? await listPosts({ publishedOnly: true }) : [];

  return (
    <>
      <Nav />
      <main>
        <section className="relative px-6 md:px-10 pt-40 md:pt-56 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-50">
            <WaterCanvas intensity={0.5} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--color-canvas)] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-canvas)] to-transparent" />

          <div className="max-w-[1380px] mx-auto relative">
            <Reveal>
              <p
                className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ✺ — Journal
              </p>
              <h1
                className="leading-[0.92] tracking-[-0.035em] text-[var(--color-ink)] max-w-5xl"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.8rem, 8vw, 7rem)",
                  fontWeight: 300,
                }}
              >
                Field notes,<br />
                <span style={{ fontStyle: "italic" }}>
                  from the studio.
                </span>
              </h1>
              <p className="mt-10 max-w-xl text-[var(--color-ink-muted)] text-[16px] leading-[1.65]">
                Short, occasional writing on what works and what doesn&rsquo;t
                when you ship AI into a real business. No subscriber count,
                no SEO play. Just the things we want a record of.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-6 md:px-10 pb-32 md:pb-44">
          <div className="max-w-3xl mx-auto">
            {posts.length === 0 ? (
              <Reveal>
                <div className="py-16 md:py-24 border-y border-[var(--color-ink)]/15 text-center">
                  <p
                    className="leading-[1.3] tracking-[-0.012em] text-[var(--color-ink)]"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)",
                      fontWeight: 300,
                    }}
                  >
                    New writing coming soon.
                  </p>
                  <p
                    className="mt-5 text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    — Shawon, Founder
                  </p>
                </div>
              </Reveal>
            ) : (
              <ul className="space-y-14 md:space-y-20">
                {posts.map((p, i) => (
                  <Reveal key={p.id} delay={i * 0.05}>
                    <li>
                      <Link href={`/journal/${p.slug}`} className="group block">
                        <p
                          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-4"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {formatDate(p.created_at)}
                        </p>
                        <h2
                          className="leading-[1.05] tracking-[-0.022em] text-[var(--color-ink)] mb-4 group-hover:text-[var(--color-magenta)] transition-colors"
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                            fontWeight: 300,
                          }}
                        >
                          {p.title}
                        </h2>
                        {p.excerpt && (
                          <p className="text-[var(--color-ink-muted)] text-[16px] leading-[1.65] max-w-xl">
                            {p.excerpt}
                          </p>
                        )}
                        <span
                          className="mt-5 inline-block text-[12px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          Read →
                        </span>
                      </Link>
                    </li>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
