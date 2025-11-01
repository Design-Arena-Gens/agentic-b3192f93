"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: string;
  delay?: number;
};

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  accent = "from-accent via-neon to-accent",
  delay = 0
}: FeatureCardProps) => (
  <motion.div
    initial={{ y: 24, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.5, delay }}
    className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.04] p-8 backdrop-blur-xl"
  >
    <span
      className={`absolute inset-x-14 -top-24 h-48 rounded-full bg-gradient-to-r ${accent} opacity-40 blur-3xl transition group-hover:opacity-70`}
    />
    <div className="relative flex flex-col gap-5">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08] text-neon">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <h3 className="font-display text-xl text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/65">{description}</p>
    </div>
  </motion.div>
);
