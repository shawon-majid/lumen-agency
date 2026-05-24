import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { createPost, listPosts, slugify } from "@/lib/supabase-server";

export async function GET() {
  const admin = await isAdmin();
  const posts = await listPosts({ publishedOnly: !admin });
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let body: { title?: string; slug?: string; bodyText?: string; excerpt?: string; published?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const title = (body.title ?? "").trim();
  if (!title) {
    return NextResponse.json({ ok: false, error: "Title required" }, { status: 400 });
  }

  const slug = (body.slug?.trim() || slugify(title));
  if (!slug) {
    return NextResponse.json({ ok: false, error: "Could not derive slug" }, { status: 400 });
  }

  try {
    const post = await createPost({
      title,
      slug,
      body: body.bodyText ?? "",
      excerpt: body.excerpt?.trim() || null,
      published: body.published ?? false,
    });
    return NextResponse.json({ ok: true, post }, { status: 201 });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Insert failed";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }
}
