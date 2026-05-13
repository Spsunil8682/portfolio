"use client";

import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import Section from "./Section";
import { education, personal, stats } from "@/data/portfolio";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A bit about me"
      subtitle="Frontend engineer with a product mindset. I care about polish, performance and the small UI details that make a site feel premium."
    >
      <div className="grid gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3"
        >
          <div className="glow-card rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold">
              I&apos;m {personal.name.split(" ")[0]},{" "}
              <span className="text-gradient">a frontend engineer</span> shipping fast e-commerce
              experiences.
            </h3>
            <p className="mt-4 text-[color:var(--muted)]">
              Currently at <span className="text-foreground">Primathon</span>, I build production-grade
              storefronts with Next.js, TypeScript and Tailwind — and connect them to Shopify
              Storefront, GoKwik and custom commerce APIs. I obsess over Lighthouse scores,
              accessibility and that the cart drawer just <em>feels</em> right.
            </p>
            <p className="mt-3 text-[color:var(--muted)]">
              Over the last year I&apos;ve shipped <span className="text-foreground">5+ live D2C
              storefronts</span> — Weryze, Plix Kids, Kilrr, BBlunt and GetElevate — owning
              everything from PDP and cart flows to SEO, analytics and checkout integrations
              with GoKwik and KwikPass. I love turning a Figma file into a fast, polished
              storefront that actually converts.
            </p>
            <p className="mt-3 text-[color:var(--muted)]">
              I think a lot about <span className="text-foreground">performance and DX</span> —
              breaking UIs into reusable component libraries, taming bundle size, fixing CLS,
              and making sure SSR/ISR is doing real work. I&apos;m comfortable owning a feature
              end-to-end: scoping, building, integrating APIs, writing the tests and pushing
              it through review on Git/Bitbucket.
            </p>
            <p className="mt-3 text-[color:var(--muted)]">
              Outside the storefront world I grind DSA — <span className="text-foreground">700+
              problems</span> across LeetCode (1700+ rating), GFG, Codeforces (Pupil) and
              CodeChef (3-Star). It keeps my problem-solving sharp and bleeds into how I design
              cleaner, more correct frontend code.
            </p>
            <p className="mt-3 text-[color:var(--muted)]">
              I&apos;m also fluent with <span className="text-foreground">AI-assisted workflows</span>
              — Claude Code, GitHub Copilot, Roo Code and prompt engineering — to ship faster
              without compromising quality. When I&apos;m not coding, I&apos;m usually reading
              about systems, exploring new tools, or sketching out side projects.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/60 p-3 text-center backdrop-blur"
                >
                  <div className="text-gradient text-2xl font-bold">{s.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-[color:var(--muted)]">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2"
        >
          <div className="glow-card rounded-2xl p-6 md:p-8">
            <h3 className="mb-6 text-xl font-bold">Education</h3>
            <ol className="relative space-y-6 border-l border-[color:var(--border)] pl-6">
              {education.map((e, i) => (
                <motion.li
                  key={e.school}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 rounded-full bg-[color:var(--accent)]/30" />
                    <span className="relative h-2 w-2 rounded-full bg-[color:var(--accent)] animate-pulse-ring" />
                  </span>
                  <div className="text-xs uppercase tracking-widest text-[color:var(--accent-2)]">
                    <FiCalendar size={11} className="mb-0.5 mr-1 inline" />
                    {e.period}
                  </div>
                  <div className="mt-1 font-semibold">{e.degree}</div>
                  <div className="text-sm text-[color:var(--muted)]">{e.school}</div>
                  <div className="mt-1 text-xs text-[color:var(--muted)]">{e.detail}</div>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
