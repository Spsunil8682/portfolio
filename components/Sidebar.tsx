"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiFolder,
  FiAward,
  FiMail,
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { navItems, personal } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const iconMap = {
  home: FiHome,
  user: FiUser,
  code: FiCode,
  briefcase: FiBriefcase,
  folder: FiFolder,
  trophy: FiAward,
  mail: FiMail,
} as const;

export default function Sidebar() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-[color:var(--border)] bg-[color:var(--background)]/80 px-5 py-4 backdrop-blur-md md:hidden">
        <button onClick={() => handleNav("home")} className="text-lg font-bold tracking-tight">
          <span className="text-gradient">SP.</span>
        </button>
        <div className="flex items-center gap-2">
          <ThemeToggle compact />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-lg border border-[color:var(--border)] p-2 text-[color:var(--foreground)] transition hover:border-[color:var(--accent)]"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-20 flex-col items-center justify-between border-r border-[color:var(--border)] bg-[color:var(--background)]/60 py-8 backdrop-blur-xl md:flex">
        <button
          onClick={() => handleNav("home")}
          className="relative flex h-12 w-12 items-center justify-center rounded-xl glow-card"
        >
          <span className="text-gradient text-lg font-bold">SP</span>
        </button>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="group relative flex h-11 w-11 items-center justify-center rounded-xl text-[color:var(--muted)] transition hover:text-foreground"
                aria-label={item.label}
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-2)] opacity-90"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={18} className={`relative z-10 ${isActive ? "text-white" : ""}`} />
                <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-2 py-1 text-xs opacity-0 transition group-hover:opacity-100">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="flex flex-col items-center gap-3 text-[color:var(--muted)]">
          <ThemeToggle />
          <a href={personal.github} target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--accent-2)]" aria-label="GitHub">
            <FiGithub size={16} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--accent-2)]" aria-label="LinkedIn">
            <FiLinkedin size={16} />
          </a>
        </div>
      </aside>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed left-4 right-4 top-[68px] z-40 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/95 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = iconMap[item.icon];
                const isActive = active === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                      isActive
                        ? "bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] text-white"
                        : "text-[color:var(--muted)] hover:text-foreground"
                    }`}
                  >
                    <Icon size={14} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
