"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

export interface EditorPost {
  id?: string;
  slug?: string;
  title?: string;
  body?: string;
  excerpt?: string | null;
  published?: boolean;
}

interface Props {
  initial?: EditorPost;
}

function slugifyClient(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export function JournalEditor({ initial }: Props) {
  const router = useRouter();
  const isEdit = Boolean(initial?.id);

  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(initial?.slug));
  const [body, setBody] = useState(initial?.body ?? "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [published, setPublished] = useState(initial?.published ?? false);
  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  useEffect(() => {
    if (!slugTouched) {
      setSlug(slugifyClient(title));
    }
  }, [title, slugTouched]);

  async function save() {
    if (!title.trim()) {
      setError("Title required");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const url = isEdit ? `/api/journal/${initial!.id}` : "/api/journal";
      const method = isEdit ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          bodyText: body,
          excerpt: excerpt || null,
          published,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Save failed");
        setSaving(false);
        return;
      }
      setSavedAt(new Date().toLocaleTimeString());
      setSaving(false);
      if (!isEdit && data.post?.id) {
        router.replace(`/admin/journal/${data.post.id}`);
      } else {
        router.refresh();
      }
    } catch {
      setError("Network error");
      setSaving(false);
    }
  }

  async function remove() {
    if (!isEdit || !initial?.id) return;
    if (!confirm(`Delete "${title}"? This can't be undone.`)) return;
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/journal/${initial.id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Delete failed");
        setSaving(false);
        return;
      }
      router.replace("/admin/journal");
      router.refresh();
    } catch {
      setError("Network error");
      setSaving(false);
    }
  }

  return (
    <div className="grid grid-cols-12 gap-6 md:gap-8">
      {/* Editor column */}
      <div className="col-span-12 md:col-span-7 space-y-5">
        <Field label="Title">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="A title that earns the reader's attention"
            className="w-full bg-transparent border-b border-[var(--color-ink)]/25 py-3 text-[22px] outline-none focus:border-[var(--color-magenta)] transition-colors"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          />
        </Field>

        <Field label="Slug">
          <input
            value={slug}
            onChange={(e) => {
              setSlug(slugifyClient(e.target.value));
              setSlugTouched(true);
            }}
            placeholder="auto-derived from title"
            className="w-full bg-transparent border-b border-[var(--color-ink)]/25 py-2 text-[14px] outline-none focus:border-[var(--color-magenta)] transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          />
        </Field>

        <Field label="Excerpt (optional)">
          <textarea
            value={excerpt ?? ""}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="A one or two sentence preview for the index page."
            rows={2}
            className="w-full bg-transparent border-b border-[var(--color-ink)]/25 py-2 text-[14px] outline-none focus:border-[var(--color-magenta)] transition-colors resize-y leading-[1.55]"
          />
        </Field>

        <Field
          label="Body — markdown"
          right={
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] hover:text-[var(--color-magenta)] transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {showPreview ? "Edit ←" : "Preview →"}
            </button>
          }
        >
          {showPreview ? (
            <div className="min-h-[400px] py-4 prose-editorial">
              <ReactMarkdown>{body || "*Preview is empty.*"}</ReactMarkdown>
            </div>
          ) : (
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write in markdown. Headings (##), italics, links, lists, code blocks all supported."
              rows={18}
              className="w-full bg-transparent border border-[var(--color-ink)]/15 rounded-[10px] p-4 text-[14.5px] leading-[1.65] outline-none focus:border-[var(--color-magenta)] transition-colors resize-y"
              style={{ fontFamily: "var(--font-mono)" }}
            />
          )}
        </Field>
      </div>

      {/* Sidebar */}
      <aside className="col-span-12 md:col-span-4 md:col-start-9 space-y-6 md:sticky md:top-24 md:self-start">
        <div
          className="p-6 rounded-[14px]"
          style={{
            background: "oklch(1 0 0 / 0.55)",
            border: "1px solid oklch(0.215 0.030 35 / 0.10)",
          }}
        >
          <p
            className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Status
          </p>
          <label className="flex items-center gap-3 text-[14px] cursor-pointer">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="h-4 w-4 accent-[var(--color-magenta)]"
            />
            <span>Published</span>
          </label>
          <p className="mt-2 text-[12px] text-[var(--color-ink-muted)] leading-[1.5]">
            Unpublished posts are saved but won&rsquo;t appear in the public Journal.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={save}
            disabled={saving}
            className="inline-flex items-center justify-between gap-3 rounded-full bg-[var(--color-ink)] text-[var(--color-canvas)] pl-5 pr-4 py-3 text-[13px] hover:bg-[var(--color-magenta)] transition-colors duration-500 disabled:opacity-50"
          >
            <span>{saving ? "Saving…" : isEdit ? "Save changes" : "Create post"}</span>
            <span>→</span>
          </button>
          {isEdit && (
            <button
              onClick={remove}
              disabled={saving}
              className="text-[12.5px] text-[var(--color-ink-muted)] hover:text-[var(--color-magenta)] transition-colors self-start"
            >
              Delete post
            </button>
          )}
          {error && <p className="text-[12.5px] text-[var(--color-magenta)]">{error}</p>}
          {savedAt && !error && (
            <p
              className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Saved · {savedAt}
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  right,
  children,
}: {
  label: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span
          className="text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {label}
        </span>
        {right}
      </div>
      {children}
    </div>
  );
}
