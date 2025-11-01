"use client";

import { GlowButton } from "@/components/GlowButton";
import { motion } from "framer-motion";

const navItems = [
  { label: "Collection", href: "#collection" },
  { label: "Tech", href: "#tech" },
  { label: "Reviews", href: "#reviews" },
  { label: "Affiliate", href: "#affiliates" }
];

export const NavBar = () => (
  <header className="fixed left-0 right-0 top-0 z-30 flex justify-center">
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-6 flex w-[min(960px,90vw)] items-center justify-between rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 backdrop-blur-xl"
    >
      <a href="#hero" className="flex items-center gap-2 font-display text-lg text-white">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-accent to-neon font-semibold">
          P
        </span>
        Puma Pulse
      </a>
      <div className="hidden items-center gap-5 text-sm text-white/70 sm:flex">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="transition hover:text-white">
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex">
        <GlowButton href="#shop">Shop The Drop</GlowButton>
      </div>
    </motion.nav>
  </header>
);
