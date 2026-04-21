import { jsx } from "react/jsx-runtime";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Container({ children, className }) {
  return /* @__PURE__ */ jsx("div", { className: cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className), children });
}
export {
  Container as C,
  cn as c
};
