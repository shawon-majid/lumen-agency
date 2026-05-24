import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin-shell";
import { JournalEditor } from "@/components/journal-editor";
import { getPostById, supabaseConfigured } from "@/lib/supabase-server";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export default async function EditJournalPostPage({ params }: PageProps) {
  const { id } = await params;
  if (!supabaseConfigured()) notFound();
  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <AdminShell
      title="Edit post"
      subtitle={post.slug}
    >
      <JournalEditor
        initial={{
          id: post.id,
          slug: post.slug,
          title: post.title,
          body: post.body,
          excerpt: post.excerpt,
          published: post.published,
        }}
      />
    </AdminShell>
  );
}
