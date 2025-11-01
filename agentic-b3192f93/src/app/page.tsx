"use client";

import { HeroCanvas } from "@/components/ThreeScene";
import { NavBar } from "@/components/NavBar";
import { GlowButton } from "@/components/GlowButton";
import { FloatingBadge } from "@/components/FloatingBadge";
import { StatCard } from "@/components/StatCard";
import { FeatureCard } from "@/components/FeatureCard";
import { ReviewsMarquee } from "@/components/ReviewsMarquee";
import { SectionHeader } from "@/components/SectionHeader";
import { SneakerCard } from "@/components/SneakerCard";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Globe2, Layers, Sparkles, Zap } from "lucide-react";

const sneakers = [
  {
    name: "Puma Velocity Nitro 3",
    description: "Responsive cushioning tuned for urban runs with a carbon-infused plate for explosive toe-off.",
    price: "$160",
    cta: "View Affiliate Offer",
    image: "/images/velocity-nitro.svg"
  },
  {
    name: "Puma RS Dreamer Core",
    description: "Court-inspired streetwear silhouette designed with J. Cole for fearless creatives in motion.",
    price: "$140",
    cta: "Unlock Exclusive Bundle",
    image: "/images/rs-dreamer.svg"
  },
  {
    name: "Puma Fuse 2 Advanced",
    description: "Metcon-ready stability with dual-density foam and dynamic traction wraps for every lift.",
    price: "$120",
    cta: "Claim Gym Essentials Pack",
    image: "/images/fuse-2.svg"
  }
];

const stats = [
  {
    icon: Sparkles,
    title: "Conversion Boost",
    value: "+38%",
    description: "Customers engage longer with interactive 3D fit previews and pose animations.",
    delay: 0.1
  },
  {
    icon: Layers,
    title: "Sneaker Library",
    value: "120+",
    description: "Curated Puma drops with rotating hero scenes and deep-dive storytelling.",
    delay: 0.2
  },
  {
    icon: Globe2,
    title: "Global Reach",
    value: "27 Countries",
    description: "Localized affiliate links auto-serve the best Puma deal in your region.",
    delay: 0.3
  }
];

const features = [
  {
    icon: Zap,
    title: "Real-time Pose Switching",
    description:
      "Tap between power stance, sprint-ready and rebound poses to spotlight stability, flexibility and grip details.",
    accent: "from-neon via-white/80 to-accent",
    delay: 0.2
  },
  {
    icon: Clock,
    title: "Drop Countdown Automation",
    description: "Integrates live Puma release schedules so hype builds automatically with every sneaker launch.",
    accent: "from-accent via-transparent to-neon",
    delay: 0.3
  },
  {
    icon: Layers,
    title: "Affiliate Funnel Analytics",
    description:
      "Heatmaps + event streams show what pose seals the click so you can optimize commissions in real time.",
    accent: "from-[#4754FF] via-neon to-accent",
    delay: 0.4
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="shine absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2" />
      <NavBar />
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-24 pt-32"
      >
        <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/60"
            >
              Puma Affiliates
            </motion.div>
            <motion.h1
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl"
            >
              Elevate your sneaker story with an immersive 3D Puma universe.
            </motion.h1>
            <motion.p
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="max-w-xl text-base leading-relaxed text-white/70"
            >
              Showcase models in motion, highlight cushioning tech up close and drive affiliate conversions with a site
              built to mirror the energy of Puma&apos;s boldest drops.
            </motion.p>
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap items-center gap-5"
            >
              <GlowButton href="#shop">Explore The Collection</GlowButton>
              <a href="#affiliates" className="text-sm text-white/60 transition hover:text-white">
                Become An Affiliate Partner →
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="grid gap-4 md:grid-cols-3"
            >
              {stats.map((stat, index) => (
                <StatCard key={stat.title} {...stat} delay={stat.delay ?? index * 0.1} />
              ))}
            </motion.div>
          </div>
          <div className="relative h-[540px] w-full overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] shadow-[0_40px_120px_rgba(7,10,20,0.65)]">
            <HeroCanvas />
            <FloatingBadge title="Dynamic Athletes" subtitle="Model Poses" position="left" />
            <FloatingBadge title="Nitro Cushioning" subtitle="Tech Spotlight" position="right" />
          </div>
        </div>
      </section>

      <section id="collection" className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 pb-24 pt-12">
        <SectionHeader
          eyebrow="Hero Collection"
          title="Handpicked Puma sneakers that command the spotlight"
          description="Every release is staged with animated models to prove the fit, feel and vibe before your visitors click buy."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sneakers.map((sneaker, index) => (
            <SneakerCard key={sneaker.name} {...sneaker} delay={index * 0.15} />
          ))}
        </div>
      </section>

      <section id="tech" className="relative z-10 mx-auto w-full max-w-6xl space-y-12 py-24">
        <SectionHeader
          eyebrow="Immersive Tech"
          title="Bring every drop to life with cinematic storytelling"
          description="Our 3D canvas syncs hero poses, kinetic lighting and micro-interactions to keep sneakerheads scrolling."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section
        id="reviews"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-[36px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl"
      >
        <SectionHeader
          eyebrow="Affiliate Wins"
          title="Creators hitting new commission highs"
          description="Designed for sneaker storytellers—from YouTube reviewers to TikTok stylists—who want their Puma flow to feel premium."
        />
        <ReviewsMarquee />
      </section>

      <section
        id="affiliates"
        className="relative z-10 mx-auto mt-20 flex w-full max-w-6xl flex-col gap-10 rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.04] p-12 text-white backdrop-blur-xl"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">Affiliate Blueprint</p>
            <h3 className="font-display text-3xl">
              Plug into Puma Pulse and get affiliate assets that feel like a flagship launch.
            </h3>
            <p className="text-sm leading-relaxed text-white/65">
              We deliver conversion-ready storytelling modules: 3D hero canvases, kinetic stats, drop timers and social
              proof animations. Keep your audience inspired and your Puma revenue stream compounding.
            </p>
            <ul className="grid gap-3 text-sm text-white/70">
              <li>• Dynamic pose switching tied to every colorway</li>
              <li>• Affiliate link routing optimized by geo and device</li>
              <li>• Weekly analytics digest with pose-to-purchase data</li>
              <li>• Exportable assets for socials, newsletters and storefronts</li>
            </ul>
            <GlowButton href="https://www.puma.com/affiliates">Apply To Partner</GlowButton>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-6 shadow-glow"
          >
            <div className="relative h-full min-h-[360px]">
              <Image
                src="/images/velocity-nitro.svg"
                alt="Puma models"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05060a] to-transparent" />
            <div className="relative mt-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">Pose Packs</p>
                <p className="font-display text-xl">Weekly refreshes</p>
              </div>
              <GlowButton href="#shop">Download Samples</GlowButton>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto mt-24 w-full max-w-6xl rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-white/60 backdrop-blur-xl">
        <div className="flex flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Puma Pulse Affiliate Experiences. Built for high-conversion storytelling.</p>
          <div className="flex gap-5">
            <a href="#hero" className="hover:text-white">
              Back to top
            </a>
            <a href="mailto:hello@pumapulse.co" className="hover:text-white">
              hello@pumapulse.co
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
