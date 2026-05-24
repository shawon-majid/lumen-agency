"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

function LoginInner() {
  const router = useRouter();
  const params = useSearchParams();
  const nextPath = params.get("next") ?? "/admin/journal";
  const reason = params.get("reason");

  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Incorrect password");
        setSubmitting(false);
        return;
      }
      router.replace(nextPath);
    } catch {
      setError("Network error");
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-32">
      <div
        className="w-full max-w-md p-10 rounded-[16px]"
        style={{
          background: "oklch(1 0 0 / 0.6)",
          border: "1px solid oklch(0.215 0.030 35 / 0.10)",
          boxShadow: "0 30px 60px -30px oklch(0.215 0.030 35 / 0.25)",
        }}
      >
        <p
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-4"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          ✺ — Admin · journal
        </p>
        <h1
          className="leading-[1.05] tracking-[-0.022em] mb-8"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 300,
          }}
        >
          Sign in.
        </h1>

        {reason === "disabled" && (
          <p className="mb-6 text-[13.5px] leading-[1.6] text-[var(--color-ink)]">
            Admin is not configured. Set the <code className="font-mono text-[12px] bg-[oklch(0.215_0.030_35/0.06)] px-1.5 py-0.5 rounded">ADMIN_PASSWORD</code>{" "}
            env var and redeploy.
          </p>
        )}

        <form onSubmit={onSubmit} className="space-y-5">
          <label className="block">
            <span
              className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              autoComplete="current-password"
              className="mt-2 w-full bg-transparent border-b border-[var(--color-ink)]/30 py-3 text-[16px] outline-none focus:border-[var(--color-magenta)] transition-colors"
            />
          </label>

          {error && (
            <p className="text-[13px] text-[var(--color-magenta)]">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] text-[var(--color-canvas)] pl-5 pr-4 py-3 text-[13px] hover:bg-[var(--color-magenta)] transition-colors duration-500 disabled:opacity-50"
          >
            {submitting ? "Signing in…" : "Sign in"}
            <span>→</span>
          </button>
        </form>
      </div>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<main className="min-h-screen" />}>
      <LoginInner />
    </Suspense>
  );
}
