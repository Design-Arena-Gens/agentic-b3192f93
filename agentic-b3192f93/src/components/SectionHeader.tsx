"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.6 }}
    className="mx-auto max-w-2xl text-center"
  >
    <p className="text-xs uppercase tracking-[0.35em] text-white/40">{eyebrow}</p>
    <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">{title}</h2>
    <p className="mt-4 text-sm leading-relaxed text-white/65">{description}</p>
  </motion.div>
);
