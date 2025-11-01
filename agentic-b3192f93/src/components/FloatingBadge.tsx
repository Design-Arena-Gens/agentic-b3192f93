"use client";

import { motion } from "framer-motion";

type FloatingBadgeProps = {
  title: string;
  subtitle: string;
  position: "left" | "right";
};

export const FloatingBadge = ({ title, subtitle, position }: FloatingBadgeProps) => (
  <motion.div
    initial={{ opacity: 0, x: position === "left" ? -40 : 40, y: 10 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ delay: 0.8, type: "spring", damping: 12, stiffness: 140 }}
    className={`absolute top-28 hidden w-60 rounded-3xl border border-white/10 bg-white/[0.08] p-4 text-sm text-white/70 backdrop-blur-xl lg:block ${
      position === "left" ? "-left-16" : "-right-16"
    }`}
  >
    <p className="text-xs uppercase tracking-[0.35em] text-white/40">{subtitle}</p>
    <p className="mt-2 font-display text-lg text-white">{title}</p>
  </motion.div>
);
