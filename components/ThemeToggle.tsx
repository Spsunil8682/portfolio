"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

type Theme = "dark" | "light";

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const Icon = theme === "dark" ? FiSun : FiMoon;
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  if (compact) {
    return (
      <button
        onClick={toggle}
        aria-label={label}
        className="rounded-lg border border-[color:var(--border)] p-2 text-[color:var(--foreground)] transition hover:border-[color:var(--accent)]"
      >
        {mounted ? <Icon size={16} /> : <FiMoon size={16} />}
      </button>
    );
  }

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.92 }}
      aria-label={label}
      className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--border)] text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent-2)]"
    >
      {mounted ? <Icon size={15} /> : <FiMoon size={15} />}
      <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-2 py-1 text-xs opacity-0 transition group-hover:opacity-100">
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </span>
    </motion.button>
  );
}
