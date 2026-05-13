"use client";

import { motion } from "framer-motion";
import { FiAward, FiCode, FiStar, FiTrendingUp, FiZap } from "react-icons/fi";
import Section from "./Section";
import { achievements } from "@/data/portfolio";

const iconMap = {
  code: FiCode,
  trophy: FiAward,
  star: FiStar,
  medal: FiTrendingUp,
  rocket: FiZap,
} as const;

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Numbers I'm proud of"
      subtitle="Consistent practice in DSA and competitive programming."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => {
          const Icon = iconMap[a.icon as keyof typeof iconMap] ?? FiAward;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glow-card p-6"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[color:var(--accent)]/30 to-[color:var(--accent-2)]/10 opacity-50 blur-2xl transition group-hover:opacity-80" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-2)] text-white">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{a.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
