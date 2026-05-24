import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { deletePost, getPostById, updatePost } from "@/lib/supabase-server";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  const admin = await isAdmin();
  if (!post.published && !admin) {
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, post });
}

export async function PATCH(request: Request, { params }: Params) {
  if (!(await isAdmin())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  let body: { title?: string; slug?: string; bodyText?: string; excerpt?: string | null; published?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  try {
    const post = await updatePost(id, {
      ...(body.title !== undefined && { title: body.title }),
      ...(body.slug !== undefined && { slug: body.slug }),
      ...(body.bodyText !== undefined && { body: body.bodyText }),
      ...(body.excerpt !== undefined && { excerpt: body.excerpt }),
      ...(body.published !== undefined && { published: body.published }),
    });
    return NextResponse.json({ ok: true, post });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Update failed";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  if (!(await isAdmin())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  try {
    await deletePost(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Delete failed";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }
}
