import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { C as Container } from "./container-6ETiMjfz.js";
import { s as supabase } from "./router-Di2UiWUM.js";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "@supabase/supabase-js";
const schema = z.object({
  email: z.string().trim().email().max(255),
  password: z.string().min(6, "At least 6 characters").max(72)
});
function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const onSubmit = async (v) => {
    setLoading(true);
    const {
      error
    } = await supabase.auth.signInWithPassword(v);
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Welcome back!");
    navigate({
      to: "/dashboard"
    });
  };
  const google = async () => {
    const {
      error
    } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });
    if (error) toast.error(error.message);
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", style: {
    background: "var(--gradient-hero)"
  }, children: /* @__PURE__ */ jsxs(Container, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Sign in" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Welcome back to DrukOptix." }),
      /* @__PURE__ */ jsxs("button", { onClick: google, className: "mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium hover:bg-secondary transition-smooth", children: [
        /* @__PURE__ */ jsx(GoogleIcon, {}),
        " Continue with Google"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-5 flex items-center gap-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" }),
        " or ",
        /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", noValidate: true, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-sm font-medium", children: "Email" }),
          /* @__PURE__ */ jsx("input", { ...form.register("email"), type: "email", className: "auth-input", maxLength: 255 }),
          form.formState.errors.email && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-destructive", children: form.formState.errors.email.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-sm font-medium", children: "Password" }),
          /* @__PURE__ */ jsx("input", { ...form.register("password"), type: "password", className: "auth-input", maxLength: 72 }),
          form.formState.errors.password && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-destructive", children: form.formState.errors.password.message })
        ] }),
        /* @__PURE__ */ jsx("button", { disabled: loading, className: "w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-smooth disabled:opacity-60", children: loading ? "Signing in…" : "Sign in" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: [
        "No account? ",
        /* @__PURE__ */ jsx(Link, { to: "/register", className: "font-medium text-primary hover:underline", children: "Create one" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `.auth-input{width:100%;border-radius:.625rem;border:1px solid var(--color-border);background:var(--color-background);padding:.625rem .875rem;font-size:.875rem;outline:none;transition:all .2s}.auth-input:focus{border-color:var(--color-primary);box-shadow:0 0 0 3px color-mix(in oklab,var(--color-primary) 18%,transparent)}` })
  ] }) });
}
function GoogleIcon() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 48 48", width: "18", height: "18", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx("path", { fill: "#FFC107", d: "M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z" }),
    /* @__PURE__ */ jsx("path", { fill: "#FF3D00", d: "M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z" }),
    /* @__PURE__ */ jsx("path", { fill: "#4CAF50", d: "M24 44c5.2 0 9.9-2 13.5-5.2l-6.2-5.2C29.2 35.6 26.7 36.5 24 36.5c-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.5 39.6 16.2 44 24 44z" }),
    /* @__PURE__ */ jsx("path", { fill: "#1976D2", d: "M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.6l6.2 5.2C40.9 35.6 44 30.3 44 24c0-1.2-.1-2.3-.4-3.5z" })
  ] });
}
export {
  LoginPage as component
};
