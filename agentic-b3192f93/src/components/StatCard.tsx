"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  delay?: number;
};

export const StatCard = ({ icon: Icon, title, value, description, delay = 0 }: StatCardProps) => (
  <motion.div
    initial={{ y: 24, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col gap-3 rounded-3xl border border-white/5 bg-white/[0.04] p-6 backdrop-blur-xl"
  >
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08]">
      <Icon className="h-5 w-5 text-neon" strokeWidth={1.5} />
    </span>
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-white/50">{title}</p>
      <p className="mt-2 font-display text-3xl font-semibold text-white">{value}</p>
    </div>
    <p className="text-sm text-white/60">{description}</p>
  </motion.div>
);
