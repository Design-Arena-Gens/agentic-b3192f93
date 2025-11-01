"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jordan K.",
    quote: "The 3D fit preview sold me instantly. I ordered the Puma Velocity Nitro within minutes."
  },
  {
    name: "Maya A.",
    quote: "Immersive, futuristic and fast. Affiliate links that actually feel premium."
  },
  {
    name: "Devon S.",
    quote: "Seeing the sneakers on models in motion lets me trust the comfort, not just the look."
  },
  {
    name: "Lena P.",
    quote: "Love the vibe. That neon glow with responsive cards make Puma feel next-gen."
  }
];

export const ReviewsMarquee = () => (
  <div className="overflow-hidden">
    <motion.div
      className="flex gap-8"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {[...reviews, ...reviews].map((review, index) => (
        <div
          key={`${review.name}-${index}`}
          className="min-w-[320px] rounded-3xl border border-white/5 bg-white/[0.05] p-6 backdrop-blur-lg"
        >
          <p className="text-sm text-white/70">&ldquo;{review.quote}&rdquo;</p>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/40">{review.name}</p>
        </div>
      ))}
    </motion.div>
  </div>
);
