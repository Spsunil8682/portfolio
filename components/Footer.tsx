"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)]/60 py-8 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-[color:var(--muted)] sm:flex-row">
        <div>
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Sunil Kumar Patidar</span>. Built with
          Next.js, Tailwind & Framer Motion.
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${personal.email}`} className="transition hover:text-foreground" aria-label="Email">
            <FiMail size={16} />
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="transition hover:text-foreground" aria-label="GitHub">
            <FiGithub size={16} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-foreground" aria-label="LinkedIn">
            <FiLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
