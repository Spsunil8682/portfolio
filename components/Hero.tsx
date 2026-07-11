"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import { personal } from "@/data/portfolio";

function useTyped(
  words: string[],
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1400,
) {
  const [text, setText] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wIdx % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWIdx((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () => {
          setText((cur) =>
            deleting ? cur.slice(0, -1) : word.slice(0, cur.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, wIdx, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyped(personal.taglines as unknown as string[]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden scroll-mt-24 px-6 pt-24 md:pt-0"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-3 py-1 text-xs text-[color:var(--muted)] backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </motion.div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Sunil Kumar</span>
            <br />
            <span className="text-foreground">Patidar.</span>
          </h1>

          <p className="mt-5 text-xl text-[color:var(--muted)] md:text-2xl">
            I&apos;m a{" "}
            <span className="cursor-blink font-semibold text-foreground">
              {typed}
            </span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
            {personal.bio}
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-[color:var(--muted)]">
            <FiMapPin size={14} /> {personal.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative">Hire me</span>
            </a>
            <a
              href="/resume/Sunil_Frontend_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-[color:var(--accent-2)] hover:text-[color:var(--accent-2)]"
            >
              <FiDownload size={14} /> Resume
            </a>
            <div className="ml-2 flex gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition hover:border-[color:var(--accent-2)] hover:text-foreground"
              >
                <FiGithub size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition hover:border-[color:var(--accent-2)] hover:text-foreground"
              >
                <FiLinkedin size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-[color:var(--accent)]/40 via-[color:var(--accent-2)]/30 to-[color:var(--accent-3)]/30 blur-3xl" />

          <div className="relative animate-float">
            <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-tr from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)] opacity-80 blur-[1px]" />
            <div className="relative h-[26rem] w-72 overflow-hidden rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] md:h-[30rem] md:w-80">
              <Image
                src="/sunil.webp"
                alt={personal.name}
                fill
                priority
                quality={95}
                sizes="(max-width: 768px) 576px, 640px"
                className="object-cover object-[center_62%]"
              />
              {/* subtle bottom fade + faint tint — keep photo crisp */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--background)]/40" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            {/* floating chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-6 top-10 hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/90 px-3 py-2 text-xs backdrop-blur md:block"
            >
              <div className="text-[10px] uppercase tracking-widest text-[color:var(--muted)]">
                Stack
              </div>
              <div className="font-semibold">Next.js · TS</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-8 bottom-8 hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/90 px-3 py-2 text-xs backdrop-blur md:block"
            >
              <div className="text-[10px] uppercase tracking-widest text-[color:var(--muted)]">
                Shipped
              </div>
              <div className="font-semibold">5+ stores</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-[color:var(--muted)] md:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)]"
        >
          <FiArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
