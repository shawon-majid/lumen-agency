import type { MetadataRoute } from "next";
import { WORK } from "@/lib/work";
import { listPosts, supabaseConfigured } from "@/lib/supabase-server";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://defineai.studio";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/studio`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const workRoutes: MetadataRoute.Sitemap = WORK.map((w) => ({
    url: `${BASE_URL}/work/${w.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  let journalRoutes: MetadataRoute.Sitemap = [];
  if (supabaseConfigured()) {
    try {
      const posts = await listPosts({ publishedOnly: true });
      journalRoutes = posts.map((p) => ({
        url: `${BASE_URL}/journal/${p.slug}`,
        lastModified: new Date(p.updated_at),
        changeFrequency: "monthly",
        priority: 0.6,
      }));
    } catch {
      journalRoutes = [];
    }
  }

  return [...staticRoutes, ...workRoutes, ...journalRoutes];
}
