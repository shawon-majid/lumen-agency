import Link from "next/link";
import { AdminShell } from "@/components/admin-shell";
import { listPosts, supabaseConfigured } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function AdminJournalListPage() {
  const configured = supabaseConfigured();
  const posts = configured ? await listPosts({}) : [];

  return (
    <AdminShell
      title="Journal"
      subtitle="Write something worth reading. Save drafts, publish when ready."
      actions={
        <Link
          href="/admin/journal/new"
          className="inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] text-[var(--color-canvas)] pl-5 pr-4 py-3 text-[13px] hover:bg-[var(--color-magenta)] transition-colors duration-500"
        >
          New post <span>→</span>
        </Link>
      }
    >
      {!configured ? (
        <div className="py-16 text-center">
          <p className="text-[14px] text-[var(--color-ink-muted)]">
            Supabase isn&rsquo;t configured. Set <code className="font-mono text-[12px] bg-[oklch(0.215_0.030_35/0.06)] px-1.5 py-0.5 rounded">SUPABASE_URL</code>{" "}
            and{" "}
            <code className="font-mono text-[12px] bg-[oklch(0.215_0.030_35/0.06)] px-1.5 py-0.5 rounded">
              SUPABASE_SERVICE_ROLE_KEY
            </code>{" "}
            in your env, then redeploy.
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div className="py-16 text-center border-y border-[var(--color-ink)]/10">
          <p
            className="leading-[1.3] text-[var(--color-ink-muted)]"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", fontWeight: 300 }}
          >
            No posts yet. Start with one.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-[var(--color-ink)]/10 border-y border-[var(--color-ink)]/10">
          {posts.map((p) => (
            <li key={p.id}>
              <Link
                href={`/admin/journal/${p.id}`}
                className="flex items-center justify-between py-5 group"
              >
                <div className="flex items-baseline gap-4 min-w-0">
                  <span
                    className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] shrink-0 w-24"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatDate(p.created_at)}
                  </span>
                  <span
                    className="text-[18px] leading-[1.2] truncate group-hover:text-[var(--color-magenta)] transition-colors"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
                  >
                    {p.title}
                  </span>
                </div>
                <div className="flex items-center gap-4 shrink-0 ml-6">
                  <span
                    className="text-[10.5px] uppercase tracking-[0.22em]"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: p.published ? "var(--color-magenta)" : "var(--color-ink-muted)",
                    }}
                  >
                    {p.published ? "● Published" : "○ Draft"}
                  </span>
                  <span
                    className="text-[12px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Edit →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </AdminShell>
  );
}
