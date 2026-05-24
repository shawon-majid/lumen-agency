import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { WaterCanvas } from "@/components/water-canvas";
import { getPost, readingTime, supabaseConfigured } from "@/lib/supabase-server";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!supabaseConfigured()) return { title: "Post" };
  const post = await getPost(slug);
  if (!post || !post.published) return {};
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  if (!supabaseConfigured()) notFound();
  const post = await getPost(slug);
  if (!post || !post.published) notFound();

  return (
    <>
      <Nav />
      <main>
        <section className="relative px-6 md:px-10 pt-40 md:pt-48 pb-12 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-45">
            <WaterCanvas intensity={0.45} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--color-canvas)] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-canvas)] to-transparent" />

          <div className="max-w-3xl mx-auto relative">
            <Reveal>
              <Link
                href="/journal"
                className="inline-block mb-10 text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] hover:text-[var(--color-magenta)] transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ← Journal
              </Link>
              <p
                className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {formatDate(post.created_at)} · {readingTime(post.body)}
              </p>
              <h1
                className="leading-[1.05] tracking-[-0.028em] text-[var(--color-ink)]"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.2rem, 5vw, 4.4rem)",
                  fontWeight: 300,
                }}
              >
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="mt-8 text-[var(--color-ink-muted)] text-[17px] leading-[1.65]">
                  {post.excerpt}
                </p>
              )}
            </Reveal>
          </div>
        </section>

        <article className="px-6 md:px-10 pb-32 md:pb-44">
          <Reveal className="max-w-3xl mx-auto prose-editorial">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
