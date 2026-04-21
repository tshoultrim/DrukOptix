import { jsxs, jsx } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { C as Container } from "./container-6ETiMjfz.js";
import { F as FadeIn } from "./section-C-n_WYla.js";
import { s as supabase } from "./router-Di2UiWUM.js";
import "clsx";
import "tailwind-merge";
import "framer-motion";
import "@tanstack/react-router";
import "@supabase/supabase-js";
const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2e3)
});
function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });
  const onSubmit = async (values) => {
    setSubmitting(true);
    const {
      error
    } = await supabase.from("contact_submissions").insert({
      name: values.name,
      email: values.email,
      company: values.company || null,
      message: values.message
    });
    setSubmitting(false);
    if (error) {
      toast.error("Could not send message. Please try again.");
      return;
    }
    toast.success("Thanks! We'll be in touch shortly.");
    form.reset();
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-20 md:py-28", style: {
    background: "var(--gradient-hero)"
  }, children: [
    /* @__PURE__ */ jsxs(Container, { className: "grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Contact" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-bold sm:text-5xl", children: "Let's talk" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Whether you're an independent practice or a hospital network, we'd love to hear about your goals." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-primary" }),
            " sales@drukoptix.ai"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-primary" }),
            " +975 17 000 000"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-primary" }),
            " Thimphu, Bhutan"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsx("form", { onSubmit: form.handleSubmit(onSubmit), className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8", noValidate: true, children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ jsx(Field, { label: "Name", error: form.formState.errors.name?.message, children: /* @__PURE__ */ jsx("input", { ...form.register("name"), className: "input", placeholder: "Jane Doe", maxLength: 100 }) }),
        /* @__PURE__ */ jsx(Field, { label: "Email", error: form.formState.errors.email?.message, children: /* @__PURE__ */ jsx("input", { type: "email", ...form.register("email"), className: "input", placeholder: "jane@clinic.com", maxLength: 255 }) }),
        /* @__PURE__ */ jsx(Field, { label: "Company (optional)", error: form.formState.errors.company?.message, children: /* @__PURE__ */ jsx("input", { ...form.register("company"), className: "input", placeholder: "Acme Vision Care", maxLength: 100 }) }),
        /* @__PURE__ */ jsx(Field, { label: "Message", error: form.formState.errors.message?.message, children: /* @__PURE__ */ jsx("textarea", { ...form.register("message"), rows: 5, className: "input resize-none", placeholder: "Tell us a bit about what you're looking for…", maxLength: 2e3 }) }),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: submitting, className: "mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-primary-hover disabled:opacity-60", children: submitting ? "Sending…" : "Send message" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .input {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          transition: all 0.2s;
          outline: none;
        }
        .input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 18%, transparent);
        }
      ` })
  ] });
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "mb-1.5 block text-sm font-medium", children: label }),
    children,
    error && /* @__PURE__ */ jsx("span", { className: "mt-1 block text-xs text-destructive", children: error })
  ] });
}
export {
  ContactPage as component
};
