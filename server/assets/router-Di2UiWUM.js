import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useNavigate, Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { Toaster as Toaster$1, toast } from "sonner";
import { useState, useEffect } from "react";
import { Eye, X, Menu, Twitter, Linkedin, Github } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function createSupabaseClient() {
  const SUPABASE_URL = "https://vpmozcpawbnezidhqrwz.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwbW96Y3Bhd2JuZXppZGhxcnd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2OTkyMTQsImV4cCI6MjA5MjI3NTIxNH0.fyVufufs4ON1WLYJmO7Pr0lMZBvZBXGsVPR40Ct2QyM";
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
function useAuth() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
      setUser(sess?.user ?? null);
      if (sess?.user) {
        setTimeout(async () => {
          const { data } = await supabase.from("user_roles").select("role").eq("user_id", sess.user.id).eq("role", "admin").maybeSingle();
          setIsAdmin(!!data);
        }, 0);
      } else {
        setIsAdmin(false);
      }
    });
    supabase.auth.getSession().then(({ data: { session: sess } }) => {
      setSession(sess);
      setUser(sess?.user ?? null);
      setLoading(false);
      if (sess?.user) {
        supabase.from("user_roles").select("role").eq("user_id", sess.user.id).eq("role", "admin").maybeSingle().then(({ data }) => setIsAdmin(!!data));
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  return { session, user, isAdmin, loading };
}
const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/teams", label: "Teams" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/" });
  };
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 font-bold text-lg", children: [
        /* @__PURE__ */ jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("span", { children: "DrukOptix" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsx(
        Link,
        {
          to: l.to,
          className: "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground",
          activeProps: { className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary" },
          activeOptions: { exact: l.to === "/" },
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-2", children: user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        isAdmin && /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "rounded-md px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth", children: "Dashboard" }),
        /* @__PURE__ */ jsx("button", { onClick: handleLogout, className: "rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-border transition-smooth", children: "Logout" })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Link, { to: "/login", className: "rounded-md px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth", children: "Login" }),
        /* @__PURE__ */ jsx(Link, { to: "/register", className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-smooth", children: "Get Started" })
      ] }) }),
      /* @__PURE__ */ jsx("button", { className: "md:hidden", onClick: () => setOpen(!open), "aria-label": "Toggle menu", children: open ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" }) })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col px-4 py-3 gap-1", children: [
      links.map((l) => /* @__PURE__ */ jsx(Link, { to: l.to, onClick: () => setOpen(false), className: "rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary", children: l.label }, l.to)),
      /* @__PURE__ */ jsx("div", { className: "my-2 h-px bg-border" }),
      user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        isAdmin && /* @__PURE__ */ jsx(Link, { to: "/dashboard", onClick: () => setOpen(false), className: "rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary", children: "Dashboard" }),
        /* @__PURE__ */ jsx("button", { onClick: () => {
          setOpen(false);
          handleLogout();
        }, className: "rounded-md px-3 py-2 text-sm font-medium text-left hover:bg-secondary", children: "Logout" })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Link, { to: "/login", onClick: () => setOpen(false), className: "rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary", children: "Login" }),
        /* @__PURE__ */ jsx(Link, { to: "/register", onClick: () => setOpen(false), className: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground", children: "Get Started" })
      ] })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 font-bold text-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5" }) }),
          "DrukOptix"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md text-sm text-muted-foreground", children: "Bringing Artificial Intelligence to Vision Care. Helping optical practices deliver smarter, faster, and more accurate care." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Twitter", className: "rounded-md p-2 hover:bg-secondary transition-smooth", children: /* @__PURE__ */ jsx(Twitter, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "LinkedIn", className: "rounded-md p-2 hover:bg-secondary transition-smooth", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "GitHub", className: "rounded-md p-2 hover:bg-secondary transition-smooth", children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-primary", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:text-primary", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-primary", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold", children: "Legal" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "hover:text-primary", children: "Privacy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/terms", className: "hover:text-primary", children: "Terms" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " DrukOptix. All rights reserved."
    ] })
  ] }) });
}
const appCss = "/assets/styles-B8v8NZvX.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-[60vh] items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-primary", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-smooth", children: "Go home" })
  ] }) });
}
const Route$a = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DrukOptix — AI for Optical Excellence" },
      { name: "description", content: "Bringing artificial intelligence to vision care. AI diagnostics, workflow automation, and predictive analytics for the optical industry." },
      { property: "og:title", content: "DrukOptix — AI for Optical Excellence" },
      { property: "og:description", content: "Bringing artificial intelligence to vision care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-right" })
  ] });
}
const $$splitComponentImporter$9 = () => import("./terms-dHz-PM-L.js");
const Route$9 = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms of Service — DrukOptix"
    }, {
      name: "description",
      content: "DrukOptix terms of service."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./teams-BXwciFgP.js");
const Route$8 = createFileRoute("/teams")({
  head: () => ({
    meta: [{
      title: "Teams — DrukOptix AI"
    }, {
      name: "description",
      content: "Meet the people driving DrukOptix AI forward — engineers, researchers, designers, and clinicians."
    }, {
      property: "og:title",
      content: "Teams — DrukOptix AI"
    }, {
      property: "og:description",
      content: "The people behind DrukOptix AI."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./services-De8ESVN_.js");
const Route$7 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — DrukOptix"
    }, {
      name: "description",
      content: "AI Diagnostics, Workflow Automation, and Predictive Analytics for optical practices."
    }, {
      property: "og:title",
      content: "Services — DrukOptix"
    }, {
      property: "og:description",
      content: "AI Diagnostics, Workflow Automation, and Predictive Analytics."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./register-DGI7n05F.js");
z.object({
  fullName: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email().max(255),
  password: z.string().min(6, "At least 6 characters").max(72)
});
const Route$6 = createFileRoute("/register")({
  head: () => ({
    meta: [{
      title: "Create account — DrukOptix"
    }, {
      name: "description",
      content: "Create your DrukOptix account."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./privacy-sbORHh2y.js");
const Route$5 = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — DrukOptix"
    }, {
      name: "description",
      content: "DrukOptix privacy policy."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./login-BvqBgjTa.js");
z.object({
  email: z.string().trim().email().max(255),
  password: z.string().min(6, "At least 6 characters").max(72)
});
const Route$4 = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Sign in — DrukOptix"
    }, {
      name: "description",
      content: "Sign in to DrukOptix."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./dashboard-B0sAlC66.js");
const Route$3 = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard — DrukOptix"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-CeWUb9SI.js");
z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2e3)
});
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — DrukOptix"
    }, {
      name: "description",
      content: "Get in touch with the DrukOptix sales team."
    }, {
      property: "og:title",
      content: "Contact — DrukOptix"
    }, {
      property: "og:description",
      content: "Get in touch with the DrukOptix sales team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DwsIlpgB.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — DrukOptix"
    }, {
      name: "description",
      content: "DrukOptix combines clinical optometry expertise with applied AI to modernise vision care."
    }, {
      property: "og:title",
      content: "About — DrukOptix"
    }, {
      property: "og:description",
      content: "Combining clinical optometry expertise with applied AI."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const hero1 = "/assets/hero-1-COkFmFJC.jpg";
const $$splitComponentImporter = () => import("./index-DKXLspaC.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "DrukOptix AI — Innovation & Excellence"
    }, {
      name: "description",
      content: "DrukOptix AI is a Bhutan-based powerhouse pushing the boundaries of artificial intelligence — research, model training, and seamless deployment."
    }, {
      property: "og:title",
      content: "DrukOptix AI — Innovation & Excellence"
    }, {
      property: "og:description",
      content: "Building tomorrow's intelligent systems for vision care and beyond."
    }, {
      property: "og:image",
      content: hero1
    }, {
      name: "twitter:image",
      content: hero1
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsRoute = Route$9.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$a
});
const TeamsRoute = Route$8.update({
  id: "/teams",
  path: "/teams",
  getParentRoute: () => Route$a
});
const ServicesRoute = Route$7.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$a
});
const RegisterRoute = Route$6.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$a
});
const PrivacyRoute = Route$5.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$a
});
const LoginRoute = Route$4.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$a
});
const DashboardRoute = Route$3.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$a
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  DashboardRoute,
  LoginRoute,
  PrivacyRoute,
  RegisterRoute,
  ServicesRoute,
  TeamsRoute,
  TermsRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  hero1 as h,
  router as r,
  supabase as s,
  useAuth as u
};
