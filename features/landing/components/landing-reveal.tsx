"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function LandingReveal({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.02 }}
    >
      {children}
    </motion.div>
  );
}
