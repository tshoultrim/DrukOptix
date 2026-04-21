import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Building2, Calendar, ShieldAlert } from "lucide-react";
import { Container } from "@/components/site/container";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

type Submission = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  created_at: string;
};

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — DrukOptix" }, { name: "robots", content: "noindex" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<Submission[] | null>(null);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!isAdmin) return;
    supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50)
      .then(({ data }) => setSubmissions(data ?? []));
  }, [isAdmin]);

  if (loading || !user) {
    return <Container className="py-20"><div className="text-muted-foreground">Loading…</div></Container>;
  }

  return (
    <Container className="py-12 md:py-16">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Welcome, {user.email}</h1>
        <p className="text-muted-foreground">
          {isAdmin ? "Admin dashboard — recent contact submissions." : "Your account dashboard."}
        </p>
      </div>

      {!isAdmin ? (
        <div className="mt-8 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-primary" />
            <div>
              <h2 className="font-semibold">Restricted area</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Contact submissions are only visible to administrators. If you need access,
                please contact your DrukOptix administrator.
              </p>
              <Link to="/" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">← Back to site</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {submissions === null ? (
            <div className="text-muted-foreground">Loading submissions…</div>
          ) : submissions.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground shadow-[var(--shadow-card)]">
              No submissions yet.
            </div>
          ) : (
            submissions.map((s) => (
              <div key={s.id} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">{s.name}</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {new Date(s.created_at).toLocaleString()}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> {s.email}</span>
                  {s.company && <span className="inline-flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5" /> {s.company}</span>}
                </div>
                <p className="mt-3 whitespace-pre-wrap text-sm">{s.message}</p>
              </div>
            ))
          )}
        </div>
      )}
    </Container>
  );
}
