"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function AdminShell({ title, subtitle, actions, children }: Props) {
  const router = useRouter();

  async function signOut() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen">
      <header
        className="px-6 md:px-10 py-5 flex items-center justify-between sticky top-0 z-40"
        style={{
          background: "oklch(0.972 0.014 80 / 0.78)",
          backdropFilter: "blur(14px) saturate(140%)",
          WebkitBackdropFilter: "blur(14px) saturate(140%)",
          borderBottom: "1px solid oklch(0.215 0.030 35 / 0.10)",
        }}
      >
        <div className="flex items-center gap-6">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="relative inline-block h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-[var(--color-peach)]" />
            </span>
            <span
              className="text-[15px]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
              Define <span style={{ fontStyle: "italic" }}>AI</span>
            </span>
          </Link>
          <span
            className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            /admin
          </span>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="/admin/journal"
            className="text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            Journal
          </Link>
          <button
            onClick={signOut}
            className="text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-magenta)] transition-colors"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="px-6 md:px-10 py-12 md:py-16 max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h1
              className="leading-[1.0] tracking-[-0.025em]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                fontWeight: 300,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-[14px] text-[var(--color-ink-muted)] max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
          {actions && <div>{actions}</div>}
        </div>
        {children}
      </main>
    </div>
  );
}
