import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WaterCanvas } from "@/components/water-canvas";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="relative min-h-[80vh] flex items-center px-6 md:px-10 py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-55">
          <WaterCanvas intensity={0.55} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--color-canvas)] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-canvas)] to-transparent" />

        <div className="relative max-w-[1380px] mx-auto">
          <p
            className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ✺ — 404
          </p>
          <h1
            className="leading-[0.94] tracking-[-0.035em] max-w-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.6rem, 7vw, 6rem)",
              fontWeight: 300,
            }}
          >
            The current pulled<br />
            <span style={{ fontStyle: "italic" }}>this page away.</span>
          </h1>
          <p className="mt-8 max-w-md text-[var(--color-ink-muted)] text-[15px] leading-[1.65]">
            Nothing here, but the studio is at full strength. Head back —
            there&rsquo;s probably something worth reading on the way home.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/"
              className="text-[14px] text-[var(--color-ink)] underline decoration-[var(--color-ink)]/30 underline-offset-4 hover:decoration-[var(--color-magenta)] hover:text-[var(--color-magenta)] transition-colors"
            >
              ← Home
            </Link>
            <Link
              href="/work"
              className="text-[14px] text-[var(--color-ink)] underline decoration-[var(--color-ink)]/30 underline-offset-4 hover:decoration-[var(--color-magenta)] hover:text-[var(--color-magenta)] transition-colors"
            >
              Selected work
            </Link>
            <Link
              href="/journal"
              className="text-[14px] text-[var(--color-ink)] underline decoration-[var(--color-ink)]/30 underline-offset-4 hover:decoration-[var(--color-magenta)] hover:text-[var(--color-magenta)] transition-colors"
            >
              Journal
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
