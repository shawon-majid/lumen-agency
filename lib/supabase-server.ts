import "server-only";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  body: string;
  excerpt: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

let cached: SupabaseClient | null = null;

function client(): SupabaseClient {
  if (cached) return cached;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Supabase env vars missing — set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local"
    );
  }
  cached = createClient(url, key, { auth: { persistSession: false } });
  return cached;
}

export function supabaseConfigured(): boolean {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function listPosts(opts: { publishedOnly?: boolean } = {}): Promise<JournalPost[]> {
  if (!supabaseConfigured()) return [];
  let q = client()
    .from("journal_posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (opts.publishedOnly) q = q.eq("published", true);
  const { data, error } = await q;
  if (error) {
    console.error("listPosts:", error);
    return [];
  }
  return (data ?? []) as JournalPost[];
}

export async function getPost(slug: string): Promise<JournalPost | null> {
  if (!supabaseConfigured()) return null;
  const { data, error } = await client()
    .from("journal_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error) {
    console.error("getPost:", error);
    return null;
  }
  return (data ?? null) as JournalPost | null;
}

export async function getPostById(id: string): Promise<JournalPost | null> {
  if (!supabaseConfigured()) return null;
  const { data, error } = await client()
    .from("journal_posts")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) {
    console.error("getPostById:", error);
    return null;
  }
  return (data ?? null) as JournalPost | null;
}

export interface CreatePostInput {
  slug: string;
  title: string;
  body: string;
  excerpt?: string | null;
  published?: boolean;
}

export async function createPost(input: CreatePostInput): Promise<JournalPost> {
  const { data, error } = await client()
    .from("journal_posts")
    .insert({
      slug: input.slug,
      title: input.title,
      body: input.body,
      excerpt: input.excerpt ?? null,
      published: input.published ?? false,
    })
    .select("*")
    .single();
  if (error) throw error;
  return data as JournalPost;
}

export type UpdatePostInput = Partial<CreatePostInput>;

export async function updatePost(id: string, input: UpdatePostInput): Promise<JournalPost> {
  const { data, error } = await client()
    .from("journal_posts")
    .update({
      ...(input.slug !== undefined && { slug: input.slug }),
      ...(input.title !== undefined && { title: input.title }),
      ...(input.body !== undefined && { body: input.body }),
      ...(input.excerpt !== undefined && { excerpt: input.excerpt }),
      ...(input.published !== undefined && { published: input.published }),
    })
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw error;
  return data as JournalPost;
}

export async function deletePost(id: string): Promise<void> {
  const { error } = await client()
    .from("journal_posts")
    .delete()
    .eq("id", id);
  if (error) throw error;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export function readingTime(body: string): string {
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 230));
  return `${minutes} min read`;
}
