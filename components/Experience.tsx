"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import Section from "./Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      subtitle="Real-world e-commerce and product work."
    >
      <ol className="relative space-y-10 border-l border-[color:var(--border)] pl-8 md:pl-10">
        {experience.map((job, i) => (
          <motion.li
            key={job.role + job.period}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[42px] top-2 flex h-7 w-7 items-center justify-center md:-left-[52px]">
              <span className="absolute h-7 w-7 rounded-full bg-[color:var(--accent)]/15" />
              <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-2)] text-white">
                <FiBriefcase size={11} />
              </span>
            </span>

            <div className="glow-card rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[color:var(--accent)]/40 md:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                  <div className="mt-1 text-sm text-[color:var(--accent-2)]">{job.company}</div>
                </div>
                <div className="flex flex-col items-start gap-1 text-xs text-[color:var(--muted)] sm:items-end">
                  <span className="inline-flex items-center gap-1.5">
                    <FiCalendar size={12} /> {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FiMapPin size={12} /> {job.location}
                  </span>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
