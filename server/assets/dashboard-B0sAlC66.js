import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ShieldAlert, Calendar, Mail, Building2 } from "lucide-react";
import { C as Container } from "./container-6ETiMjfz.js";
import { u as useAuth, s as supabase } from "./router-Di2UiWUM.js";
import "clsx";
import "tailwind-merge";
import "sonner";
import "@supabase/supabase-js";
import "zod";
function DashboardPage() {
  const {
    user,
    isAdmin,
    loading
  } = useAuth();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState(null);
  useEffect(() => {
    if (!loading && !user) navigate({
      to: "/login"
    });
  }, [loading, user, navigate]);
  useEffect(() => {
    if (!isAdmin) return;
    supabase.from("contact_submissions").select("*").order("created_at", {
      ascending: false
    }).limit(50).then(({
      data
    }) => setSubmissions(data ?? []));
  }, [isAdmin]);
  if (loading || !user) {
    return /* @__PURE__ */ jsx(Container, { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Loading…" }) });
  }
  return /* @__PURE__ */ jsxs(Container, { className: "py-12 md:py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold", children: [
        "Welcome, ",
        user.email
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: isAdmin ? "Admin dashboard — recent contact submissions." : "Your account dashboard." })
    ] }),
    !isAdmin ? /* @__PURE__ */ jsx("div", { className: "mt-8 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(ShieldAlert, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-semibold", children: "Restricted area" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Contact submissions are only visible to administrators. If you need access, please contact your DrukOptix administrator." }),
        /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-4 inline-block text-sm font-medium text-primary hover:underline", children: "← Back to site" })
      ] })
    ] }) }) : /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-4", children: submissions === null ? /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Loading submissions…" }) : submissions.length === 0 ? /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground shadow-[var(--shadow-card)]", children: "No submissions yet." }) : submissions.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: s.name }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
          " ",
          new Date(s.created_at).toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" }),
          " ",
          s.email
        ] }),
        s.company && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Building2, { className: "h-3.5 w-3.5" }),
          " ",
          s.company
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 whitespace-pre-wrap text-sm", children: s.message })
    ] }, s.id)) })
  ] });
}
export {
  DashboardPage as component
};
