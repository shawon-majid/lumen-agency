import { AdminShell } from "@/components/admin-shell";
import { JournalEditor } from "@/components/journal-editor";

export default function NewJournalPostPage() {
  return (
    <AdminShell
      title="New post"
      subtitle="Markdown body. Publish toggle lives in the sidebar."
    >
      <JournalEditor />
    </AdminShell>
  );
}
