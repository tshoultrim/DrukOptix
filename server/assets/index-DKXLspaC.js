import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ArrowRight, Brain, Workflow, LineChart, Quote, Minus, Plus, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { C as Container } from "./container-6ETiMjfz.js";
import { F as FadeIn } from "./section-C-n_WYla.js";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { h as hero1 } from "./router-Di2UiWUM.js";
import "clsx";
import "tailwind-merge";
import "@supabase/supabase-js";
import "zod";
function HeroCarousel({ slides: slides2 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides2.length), 6e3);
    return () => clearInterval(t);
  }, [slides2.length]);
  const go = (dir) => setI((p) => (p + dir + slides2.length) % slides2.length);
  const s = slides2[i];
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[78vh] min-h-[520px] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "sync", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 1.05 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0 },
        transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
        className: "absolute inset-0",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: s.image,
              alt: s.title,
              className: "h-full w-full object-cover"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: { background: "var(--gradient-overlay)" } })
        ]
      },
      i
    ) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.7, delay: 0.2 },
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_24px_oklch(0_0_0/0.6)] sm:text-6xl lg:text-7xl", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-lg text-white/90 drop-shadow-[0_2px_12px_oklch(0_0_0/0.6)] sm:text-xl", children: s.subtitle })
        ]
      },
      i
    ) }) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": "Previous slide",
        onClick: () => go(-1),
        className: "absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-smooth hover:bg-white/20 sm:left-8 sm:p-3",
        children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-6 w-6" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": "Next slide",
        onClick: () => go(1),
        className: "absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-smooth hover:bg-white/20 sm:right-8 sm:p-3",
        children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-6 w-6" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2", children: slides2.map((_, idx) => /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": `Slide ${idx + 1}`,
        onClick: () => setI(idx),
        className: `h-2 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`
      },
      idx
    )) })
  ] });
}
const hero2 = "/assets/hero-2-KoYA2S6T.jpg";
const hero3 = "/assets/hero-3-CicTr7yJ.jpg";
const aboutImg = "/assets/about-team-8FIAKXJy.jpg";
const slides = [{
  image: hero1,
  title: "Welcome to DrukOptix AI",
  subtitle: "Innovation & Excellence"
}, {
  image: hero2,
  title: "Building Tomorrow",
  subtitle: "Where Bhutanese craftsmanship meets cutting-edge AI"
}, {
  image: hero3,
  title: "Intelligence, Reimagined",
  subtitle: "From research to deployment — at scale"
}];
const services = [{
  icon: Brain,
  title: "AI Research",
  desc: "Frontier research in computer vision, multimodal models, and clinical-grade diagnostics."
}, {
  icon: Workflow,
  title: "Model Training",
  desc: "Large-scale training pipelines tuned on domain-specific datasets, fully reproducible."
}, {
  icon: LineChart,
  title: "Deployment",
  desc: "Seamless edge and cloud deployment with monitoring, observability, and continuous learning."
}];
const stats = [{
  v: "98%",
  l: "Diagnostic accuracy"
}, {
  v: "3×",
  l: "Faster workflows"
}, {
  v: "50+",
  l: "Partner clinics"
}, {
  v: "24/7",
  l: "Cloud monitoring"
}];
const testimonials = [{
  quote: "DrukOptix transformed how we screen patients. The AI flags issues we'd otherwise miss.",
  name: "Dr. Karma Tenzin",
  role: "Senior Optometrist, Thimphu Eye Centre"
}, {
  quote: "The deployment was effortless. Their team genuinely cares about clinical outcomes.",
  name: "Pema Lhamo",
  role: "Operations Lead, Vision Plus"
}, {
  quote: "An ambitious team building world-class AI from Bhutan. Truly inspiring work.",
  name: "Dr. Sonam Rinchen",
  role: "Director, Mountain Health Initiative"
}];
const faqs = [{
  q: "What does DrukOptix AI do?",
  a: "We build AI systems for the optical and vision care industry — from retinal diagnostics to clinic workflow automation and predictive analytics."
}, {
  q: "Where are you based?",
  a: "We're proudly based in Bhutan, combining Himalayan craftsmanship with world-class AI engineering."
}, {
  q: "Can I integrate DrukOptix with my existing EMR?",
  a: "Yes. We provide REST APIs and partner integrations for the major EMR systems used in optical practices."
}, {
  q: "How is patient data protected?",
  a: "All processing follows HIPAA-aligned and ISO-27001 controls. Data stays encrypted at rest and in transit."
}];
function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [email, setEmail] = useState("");
  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thanks for subscribing!");
    setEmail("");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeroCarousel, { slides }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxs(Container, { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "About DrukOptix AI" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-bold sm:text-4xl", children: "A powerhouse of innovation" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "We are dedicated to pushing the boundaries of artificial intelligence. From cutting-edge research and large-scale model training to seamless deployment, we build the future of intelligent systems — with vision care as our home turf." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Our team blends clinical expertise, ML engineering, and product craft to ship tools that actually move the needle for practitioners and patients alike." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/about", className: "inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-smooth hover:bg-primary-hover", children: [
            "Learn More ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/teams", className: "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-smooth hover:bg-secondary", children: "View Teams" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 0.15, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 rounded-3xl blur-3xl", style: {
          background: "var(--gradient-primary)",
          opacity: 0.3
        }, "aria-hidden": true }),
        /* @__PURE__ */ jsx("img", { src: aboutImg, alt: "DrukOptix AI research lab", width: 1536, height: 1024, loading: "lazy", className: "relative w-full rounded-2xl shadow-[var(--shadow-elevated)]" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border/40 bg-card/40 py-20 md:py-28", children: /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "What we do" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-bold sm:text-4xl", children: "Three pillars of intelligent systems" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "From idea to production-grade AI." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: services.map((s, i) => /* @__PURE__ */ jsx(FadeIn, { delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "group h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-smooth hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground transition-smooth", style: {
          background: "var(--gradient-primary)"
        }, children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 text-xl font-semibold", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.desc })
      ] }) }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-24", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsx(FadeIn, { delay: i * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-clip-text text-4xl font-bold text-transparent", style: {
        backgroundImage: "var(--gradient-primary)"
      }, children: s.v }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: s.l })
    ] }) }, s.l)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border/40 bg-card/40 py-20 md:py-28", children: /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Voices of our partners" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-bold sm:text-4xl", children: "Trusted by clinics & researchers" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: testimonials.map((t, i) => /* @__PURE__ */ jsx(FadeIn, { delay: i * 0.1, children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]", children: [
        /* @__PURE__ */ jsx(Quote, { className: "h-7 w-7 text-primary/60" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm leading-relaxed text-foreground/90", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 border-t border-border/60 pt-4", children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold", children: t.name }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] }) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxs(Container, { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxs(FadeIn, { className: "text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "FAQ" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-bold sm:text-4xl", children: "Frequently asked questions" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 space-y-3", children: faqs.map((f, i) => {
        const open = openFaq === i;
        return /* @__PURE__ */ jsx(FadeIn, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-xl border border-border bg-card", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(open ? null : i), className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-smooth hover:bg-secondary/50", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: f.q }),
            open ? /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 text-primary" })
          ] }),
          open && /* @__PURE__ */ jsx("div", { className: "border-t border-border/60 px-5 py-4 text-sm text-muted-foreground", children: f.a })
        ] }) }, f.q);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border p-10 text-center shadow-[var(--shadow-elevated)] sm:p-16", style: {
      background: "var(--gradient-primary)"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20", style: {
        backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white sm:text-4xl", children: "Ready to join us?" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-xl text-white/85", children: "Get product updates, research notes, and clinical case studies delivered monthly." }),
        /* @__PURE__ */ jsxs("form", { onSubmit: subscribe, className: "mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsx(Mail, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@clinic.com", className: "w-full rounded-lg border-0 bg-white py-3 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white" })
          ] }),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-smooth hover:opacity-90", children: "Subscribe" })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  HomePage as component
};
