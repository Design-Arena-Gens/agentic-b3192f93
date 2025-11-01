"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type GlowButtonProps = {
  href: string;
  children: React.ReactNode;
};

export const GlowButton = ({ href, children }: GlowButtonProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="relative inline-flex"
    initial={false}
  >
    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-neon to-accent opacity-70 blur-xl" />
    <Link
      href={href}
      className="relative rounded-full border border-white/10 bg-white/10 px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-glow backdrop-blur transition hover:border-white/30"
    >
      {children}
    </Link>
  </motion.div>
);
