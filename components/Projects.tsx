"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Section from "./Section";
import { projects, type Project } from "@/data/portfolio";

const tags = ["All", "E-commerce", "Product", "Open Source"] as const;
type Tag = (typeof tags)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Tag>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A snapshot of the e-commerce storefronts and personal projects I've shipped."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`relative rounded-full border px-4 py-1.5 text-xs font-medium transition ${
              filter === t
                ? "border-transparent text-white"
                : "border-[color:var(--border)] text-[color:var(--muted)] hover:text-foreground"
            }`}
          >
            {filter === t && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{t}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.link ?? "#"}
      target={project.link ? "_blank" : undefined}
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl glow-card transition hover:border-[color:var(--accent)]/40"
    >
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}>
        <div className="absolute inset-0 opacity-20 grid-bg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-black tracking-tight text-white/90 drop-shadow-lg md:text-4xl">
            {project.title}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
          {project.tag}
        </span>
        <motion.span
          whileHover={{ rotate: 0 }}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-white/25"
        >
          {project.link ? <FiArrowUpRight size={16} /> : <FiGithub size={14} />}
        </motion.span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
        <p className="mt-1.5 line-clamp-3 text-sm text-[color:var(--muted)]">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/60 px-2 py-0.5 text-[10px] font-medium text-[color:var(--muted)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
