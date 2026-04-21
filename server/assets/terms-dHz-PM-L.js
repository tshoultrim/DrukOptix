import { jsxs, jsx } from "react/jsx-runtime";
import { C as Container } from "./container-6ETiMjfz.js";
import "clsx";
import "tailwind-merge";
const SplitComponent = () => /* @__PURE__ */ jsxs(Container, { className: "prose prose-slate max-w-3xl py-16", children: [
  /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "Terms of Service" }),
  /* @__PURE__ */ jsxs("p", { className: "mt-4 text-muted-foreground", children: [
    "Last updated: ",
    (/* @__PURE__ */ new Date()).toLocaleDateString()
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-4 text-muted-foreground leading-relaxed", children: [
    /* @__PURE__ */ jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero." }),
    /* @__PURE__ */ jsx("p", { children: "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet." })
  ] })
] });
export {
  SplitComponent as component
};
