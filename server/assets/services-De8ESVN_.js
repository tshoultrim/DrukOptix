import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Brain, Workflow, LineChart, Check, ArrowRight } from "lucide-react";
import { C as Container } from "./container-6ETiMjfz.js";
import { F as FadeIn } from "./section-C-n_WYla.js";
import "clsx";
import "tailwind-merge";
import "framer-motion";
const services = [{
  icon: Brain,
  title: "AI Diagnostics",
  desc: "Deep-learning models that assist clinicians in detecting diabetic retinopathy, glaucoma, AMD and other ocular conditions from retinal imagery.",
  points: ["Retinal image analysis", "Triage suggestions", "Confidence scoring", "Audit trail for compliance"]
}, {
  icon: Workflow,
  title: "Workflow Automation",
  desc: "Cut admin overhead with smart scheduling, automated reminders, lens-order tracking, and integrated patient records.",
  points: ["Smart appointment routing", "Automated SMS / email reminders", "Lens & frame inventory sync", "EHR integration"]
}, {
  icon: LineChart,
  title: "Predictive Analytics",
  desc: "Understand demand, retention, and clinical risk with dashboards purpose-built for optometry practices.",
  points: ["Demand forecasting", "At-risk patient detection", "Marketing attribution", "Practice benchmarking"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(FadeIn, { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Services" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-bold sm:text-5xl", children: "Solutions for modern optical practices" }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-muted-foreground", children: "A modular platform designed to slot into your existing workflow — start with one module, expand at your own pace." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx(Container, { className: "space-y-16", children: services.map((s, i) => /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: `grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(s.icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 text-3xl font-bold", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-2", children: s.points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-primary" }),
          " ",
          p
        ] }, p)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-border bg-secondary/40 p-10 shadow-[var(--shadow-card)]", children: /* @__PURE__ */ jsx("div", { className: "aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-center justify-center", children: /* @__PURE__ */ jsx(s.icon, { className: "h-20 w-20 text-primary/40" }) }) })
    ] }) }, s.title)) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-primary py-16 text-primary-foreground", children: /* @__PURE__ */ jsxs(Container, { className: "flex flex-col items-center gap-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Ready to bring AI to your practice?" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-xl opacity-90", children: "Let's talk about what DrukOptix can do for your patients." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-2 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-secondary transition-smooth", children: [
        "Contact Sales ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
