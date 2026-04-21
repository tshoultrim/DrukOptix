import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Linkedin, Twitter, Github } from "lucide-react";
import { C as Container } from "./container-6ETiMjfz.js";
import { F as FadeIn } from "./section-C-n_WYla.js";
import "clsx";
import "tailwind-merge";
import "framer-motion";
const members = [{
  name: "Tenzin Shoultrim",
  role: "Founder & CEO",
  img: "https://randomuser.me/api/portraits/men/32.jpg"
}, {
  name: "Karma Wangmo",
  role: "Head of AI Research",
  img: "https://randomuser.me/api/portraits/women/44.jpg"
}, {
  name: "Sonam Dorji",
  role: "Lead ML Engineer",
  img: "https://randomuser.me/api/portraits/men/76.jpg"
}, {
  name: "Pema Choden",
  role: "Product Designer",
  img: "https://randomuser.me/api/portraits/women/68.jpg"
}, {
  name: "Jigme Tshering",
  role: "Clinical Partnerships",
  img: "https://randomuser.me/api/portraits/men/45.jpg"
}, {
  name: "Dechen Yangzom",
  role: "Operations Manager",
  img: "https://randomuser.me/api/portraits/women/12.jpg"
}, {
  name: "Ugyen Rabten",
  role: "Software Engineer",
  img: "https://randomuser.me/api/portraits/men/22.jpg"
}, {
  name: "Tashi Lhamo",
  role: "Data Scientist",
  img: "https://randomuser.me/api/portraits/women/29.jpg"
}];
function TeamsPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsx(Container, { className: "text-center", children: /* @__PURE__ */ jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Our People" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 text-4xl font-bold sm:text-5xl", children: "Meet the team" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground", children: "A focused group of engineers, researchers, designers, and clinicians driving DrukOptix AI forward." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: members.map((m, i) => /* @__PURE__ */ jsx(FadeIn, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] transition-smooth hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto h-24 w-24", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full opacity-50 blur-md transition-smooth group-hover:opacity-80", style: {
          background: "var(--gradient-primary)"
        }, "aria-hidden": true }),
        /* @__PURE__ */ jsx("img", { src: m.img, alt: m.name, loading: "lazy", className: "relative h-24 w-24 rounded-full object-cover ring-2 ring-border" })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 font-semibold", children: m.name }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: m.role }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex justify-center gap-2 text-muted-foreground", children: [
        /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "LinkedIn", className: "rounded-md p-1.5 hover:bg-secondary hover:text-primary transition-smooth", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Twitter", className: "rounded-md p-1.5 hover:bg-secondary hover:text-primary transition-smooth", children: /* @__PURE__ */ jsx(Twitter, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "GitHub", className: "rounded-md p-1.5 hover:bg-secondary hover:text-primary transition-smooth", children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }) })
      ] })
    ] }) }, m.name)) }) }) })
  ] });
}
export {
  TeamsPage as component
};
