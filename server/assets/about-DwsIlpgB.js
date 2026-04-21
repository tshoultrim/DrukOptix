import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { C as Container } from "./container-6ETiMjfz.js";
import { F as FadeIn } from "./section-C-n_WYla.js";
import "clsx";
import "tailwind-merge";
import "framer-motion";
const team = [{
  name: "Dr. A. Gurung",
  role: "Co-founder, Optometry Lead"
}, {
  name: "S. Wangchuk",
  role: "Co-founder, AI Engineering"
}, {
  name: "P. Dorji",
  role: "Head of Clinical Partnerships"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(FadeIn, { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "About DrukOptix" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-bold sm:text-5xl", children: "Vision care, reimagined with AI" }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-muted-foreground", children: "We're a focused team of optometrists, machine-learning engineers, and product designers building the next generation of tools for the optical industry." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs(Container, { className: "grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold sm:text-3xl", children: "Our mission" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Vision impairment affects more than 2.2 billion people worldwide, and a significant share of cases are preventable with early detection. DrukOptix exists to put clinical-grade AI into the hands of every practitioner — from urban hospitals to rural clinics — so that no patient slips through the cracks." })
      ] }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 0.1, children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold sm:text-3xl", children: "Project abstract" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "DrukOptix integrates deep-learning models for retinal image analysis with workflow automation tools that reduce administrative overhead. The platform also produces predictive analytics for clinic operations, enabling proactive patient outreach and better resource planning." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/40 py-16 md:py-24", children: /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold sm:text-3xl", children: "The team" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "A small, focused group with deep domain expertise." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: team.map((m, i) => /* @__PURE__ */ jsx(FadeIn, { delay: i * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/60", "aria-hidden": true }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: m.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: m.role })
      ] }) }, m.name)) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
