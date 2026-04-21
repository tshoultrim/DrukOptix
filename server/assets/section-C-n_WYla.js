import { jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { c as cn } from "./container-6ETiMjfz.js";
function FadeIn({ children, delay = 0, className }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
      className: cn(className),
      children
    }
  );
}
export {
  FadeIn as F
};
