"use client";

import { useMemo, useState } from "react";
import type { Language } from "../lib/i18n";

const copy = {
  es: {
    command: "$ contact --send-message",
    title: "Contacto & Redes",
    description:
      "Si tienes una oportunidad, colaboración o proyecto en mente, puedes escribirme directo por el formulario o revisar mis redes profesionales.",
    emailLabel: "Tu correo",
    emailPlaceholder: "usuario@mail.com",
    emailFormat: "Formato: nombre@dominio.com",
    emailInvalid: "Correo inválido",
    messageLabel: "Mensaje",
    messagePlaceholder: "Escribe tu mensaje...",
    messageMin: "Mínimo 10 caracteres",
    validationError: "Revisa tu correo y que el mensaje tenga 10+ caracteres.",
    send: "Enviar",
    sending: "Enviando...",
    success: "Mensaje enviado",
    fallbackError: "No se pudo enviar.",
  },
  en: {
    command: "$ contact --send-message",
    title: "Contact & Links",
    description:
      "If you have an opportunity, collaboration, or project in mind, you can reach me through the form or check my professional links.",
    emailLabel: "Your email",
    emailPlaceholder: "user@mail.com",
    emailFormat: "Format: name@domain.com",
    emailInvalid: "Invalid email",
    messageLabel: "Message",
    messagePlaceholder: "Write your message...",
    messageMin: "Minimum 10 characters",
    validationError: "Check your email and make sure the message has 10+ characters.",
    send: "Send",
    sending: "Sending...",
    success: "Message sent",
    fallbackError: "Could not send.",
  },
} as const;

export default function ContactSection({ language }: { language: Language }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorText, setErrorText] = useState("");
  const t = copy[language];

  const emailOk = useMemo(() => {
    const e = email.trim();
    return e.length >= 6 && e.length <= 120 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
  }, [email]);

  const msgOk = useMemo(() => {
    const m = message.trim();
    return m.length >= 10 && m.length <= 2000;
  }, [message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    setErrorText("");

    if (!emailOk || !msgOk) {
      setStatus("error");
      setErrorText(t.validationError);
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), message: message.trim() }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data?.error ?? "Error");

      setStatus("ok");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorText(err instanceof Error ? err.message : t.fallbackError);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pt-2 pb-14">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.60)]">
        <p className="text-center font-mono text-sm text-white/45">
          {t.command}
        </p>

        <h2 className="mt-3 font-mono text-4xl text-white/90 tracking-tight text-center">
          {t.title}
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-white/60">
          {t.description}
        </p>

        <form onSubmit={onSubmit} className="mt-7 space-y-4">
          <div>
            <label className="block font-mono text-sm text-white/70 mb-2">
              {t.emailLabel}
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className={[
                "w-full rounded-2xl border bg-black/20 px-4 py-3 font-mono text-sm text-white/90",
                "border-white/10 focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20",
                !emailOk && email.length > 0 ? "border-red-400/30" : "",
              ].join(" ")}
              autoComplete="email"
              inputMode="email"
            />
            <div className="mt-2 font-mono text-[11px] text-white/45">
              {email.length === 0
                ? t.emailFormat
                : emailOk
                ? "✓ OK"
                : t.emailInvalid}
            </div>
          </div>

          <div>
            <label className="block font-mono text-sm text-white/70 mb-2">
              {t.messageLabel}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              rows={5}
              className={[
                "w-full rounded-2xl border bg-black/20 px-4 py-3 font-mono text-sm text-white/90",
                "border-white/10 focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20",
                !msgOk && message.length > 0 ? "border-red-400/30" : "",
              ].join(" ")}
            />
            <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-white/45">
              <span>
                {message.trim().length < 10 ? t.messageMin : "✓ OK"}
              </span>
              <span>{message.length}/2000</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="terminal-button w-full sm:order-last sm:ml-auto sm:w-auto"
            >
              {status === "sending" ? t.sending : t.send}
            </button>

            {status === "ok" && (
              <span className="font-mono text-sm text-emerald-300/90">
                ✓ {t.success}
              </span>
            )}

            {status === "error" && (
              <span className="font-mono text-sm text-red-300/90">
                {errorText || "Error"}
              </span>
            )}
          </div>
        </form>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <SocialIcon
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chuypg123%40gmail.com"
              label="Email"
              icon={<img src="/icons/gmail.svg" alt="Email" className="h-5 w-5 invert-75" />}
            />
            <SocialIcon
              href="https://github.com/Nexer03"
              label="GitHub"
              icon={<img src="/icons/github.svg" alt="GitHub" className="h-5 w-5 invert-75" />}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/josé-de-jesús-peña-garcía-464343262"
              label="LinkedIn"
              icon={<img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5 invert-75 " />}
            />
          </div>

          <p className="mt-4 font-mono text-[11px] text-white/40">
            $ curl -X POST /api/contact
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="terminal-button terminal-button-secondary group"
      aria-label={label}
    >
      <span className="h-5 w-5 opacity-80 group-hover:opacity-100">{icon}</span>
      <span className="text-xs">{label}</span>
    </a>
  );
}
