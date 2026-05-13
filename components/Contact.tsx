"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiAlertCircle, FiCheck, FiGithub, FiLinkedin, FiLoader, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import Section from "./Section";
import { personal } from "@/data/portfolio";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot — silently drop bot submissions
    if (data.get("botcheck")) return;

    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    data.append("from_name", "Portfolio Contact Form");
    data.append("subject", String(data.get("subject") || "New message from your portfolio"));

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please email me directly.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email me directly.");
    }
  };

  const info = [
    { icon: FiPhone, label: "Call", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
    { icon: FiMail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: FiMapPin, label: "Location", value: personal.location },
    { icon: FiGithub, label: "GitHub", value: "@Spsunil8682", href: personal.github },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      subtitle="Open to frontend / full-stack opportunities and freelance work. Drop a message — I usually reply within a day."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          {info.map((c, i) => {
            const Icon = c.icon;
            const inner = (
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-2xl glow-card p-4 transition hover:border-[color:var(--accent)]/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-2)] text-white">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[color:var(--muted)]">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium text-foreground">{c.value}</div>
                </div>
              </motion.div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="block">
                {inner}
              </a>
            ) : (
              <div key={c.label}>{inner}</div>
            );
          })}
          <div className="flex gap-3 pt-2">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition hover:border-[color:var(--accent-2)] hover:text-foreground"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition hover:border-[color:var(--accent-2)] hover:text-foreground"
              aria-label="GitHub"
            >
              <FiGithub size={16} />
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glow-card relative space-y-4 rounded-2xl p-6 md:p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" required />
          <Field label="Message" name="message" textarea required />

          {/* honeypot — hidden from real users, bots fill it */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] px-6 py-3 text-sm font-semibold text-white transition disabled:opacity-70"
            >
              {status === "sending" && (
                <>
                  <FiLoader size={14} className="animate-spin" /> Sending…
                </>
              )}
              {status === "sent" && (
                <>
                  <FiCheck size={14} /> Message sent — I&apos;ll reply soon!
                </>
              )}
              {(status === "idle" || status === "error") && (
                <>
                  <FiSend size={14} /> Send message
                </>
              )}
            </motion.button>

            {status === "error" && (
              <span className="inline-flex items-center gap-1.5 text-xs text-[color:var(--accent-3)]">
                <FiAlertCircle size={13} /> {errorMsg}
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const common =
    "peer w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/40 px-4 pt-5 pb-2 text-sm text-foreground placeholder-transparent transition focus:border-[color:var(--accent-2)] focus:outline-none";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea name={name} placeholder={label} rows={4} required={required} className={common} />
      ) : (
        <input name={name} type={type} placeholder={label} required={required} className={common} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-[10px] uppercase tracking-widest text-[color:var(--muted)] transition peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[color:var(--accent-2)]">
        {label}
      </span>
    </label>
  );
}
