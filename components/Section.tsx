"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Section({ id, eyebrow, title, subtitle, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="mb-14 max-w-2xl"
        >
          {eyebrow && (
            <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--accent-2)]">
              <span className="h-px w-8 bg-[color:var(--accent-2)]" />
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && <p className="mt-4 text-base text-[color:var(--muted)] md:text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
