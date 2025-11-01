"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type SneakerCardProps = {
  name: string;
  description: string;
  price: string;
  cta: string;
  image: string;
  delay?: number;
};

export const SneakerCard = ({ name, description, price, cta, image, delay = 0 }: SneakerCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay }}
    className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white backdrop-blur-xl"
  >
    <span className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0 opacity-0 transition group-hover:opacity-100" />
    <div className="relative flex justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-white/40">{price}</p>
        <h3 className="mt-3 font-display text-2xl">{name}</h3>
      </div>
      <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:text-white" />
    </div>
    <p className="text-sm text-white/65">{description}</p>
    <div className="relative aspect-[3/2] w-full">
      <Image
        src={image}
        alt={`${name} hero`}
        fill
        className="object-contain transition duration-700 group-hover:scale-105"
        sizes="(min-width: 1024px) 320px, 45vw"
        priority={false}
      />
    </div>
    <a
      href="#shop"
      className="inline-flex items-center gap-2 text-sm font-semibold text-neon transition hover:text-white"
    >
      {cta}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  </motion.article>
);
