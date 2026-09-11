"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { skillProgress, skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My stack & tools"
      subtitle="The technologies I use day-to-day to ship production-grade web apps."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Categorized tags */}
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glow-card rounded-2xl p-5"
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[color:var(--accent-2)]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ y: -2, scale: 1.04 }}
                    className="cursor-default rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/60 px-3 py-1 text-xs font-medium text-foreground transition hover:border-[color:var(--accent)] hover:text-foreground"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress bars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glow-card rounded-2xl p-6 md:p-8 lg:sticky lg:top-24 lg:self-start"
        >
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[color:var(--accent-2)]">
            Proficiency
          </h3>
          <div className="space-y-5">
            {skillProgress.map((s, i) => (
              <div key={s.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-[color:var(--muted)]">{s.level}%</span>
                </div>
                <div className="relative h-2 overflow-hidden rounded-full bg-[color:var(--surface-2)]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--neon)] to-[color:var(--accent-2)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
