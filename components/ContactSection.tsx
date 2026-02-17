"use client";

import { useMemo, useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorText, setErrorText] = useState("");

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
      setErrorText("Revisa tu correo y que el mensaje tenga 10+ caracteres.");
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
    } catch (err: any) {
      setStatus("error");
      setErrorText(err?.message ?? "No se pudo enviar.");
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-5xl px-4 pt-6 pb-20">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur
                      shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.60)]">
        <h2 className="font-mono text-4xl text-white/90 tracking-tight text-center">
          Contacto
        </h2>

        <p className="mt-2 font-mono text-sm text-white/60 text-center ">
          $ echo "¿Te gustaría comunicarte conmigo? enviame un correo o consulta mis redes sociales" && Enter
        </p>

        {/* Formulario */}
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block font-mono text-sm text-white/70 mb-2">
              Tu correo
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@mail.com"
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
                ? "Formato: nombre@dominio.com"
                : emailOk
                ? "✓ OK"
                : "Correo inválido"}
            </div>
          </div>

          <div>
            <label className="block font-mono text-sm text-white/70 mb-2">
              Mensaje
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              rows={5}
              className={[
                "w-full rounded-2xl border bg-black/20 px-4 py-3 font-mono text-sm text-white/90",
                "border-white/10 focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20",
                !msgOk && message.length > 0 ? "border-red-400/30" : "",
              ].join(" ")}
            />
            <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-white/45">
              <span>
                {message.trim().length < 10 ? "Mínimo 10 caracteres" : "✓ OK"}
              </span>
              <span>{message.length}/2000</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-2.5
                         font-mono text-sm text-white/85 transition
                         hover:bg-white/[0.10] hover:border-white/20
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Enviando..." : "Enviar"}
            </button>

            {status === "ok" && (
              <span className="font-mono text-sm text-emerald-300/90">
                ✓ Mensaje enviado
              </span>
            )}

            {status === "error" && (
              <span className="font-mono text-sm text-red-300/90">
                {errorText || "Error"}
              </span>
            )}
          </div>
        </form>

        {/* Social */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-3">

            <SocialIcon
              href="mailto:TU_CORREO@MAIL.COM"
              label="Email"
              icon={<img src="/icons/gmail.svg" alt="Email" className="h-5 w-5 invert-75" />}
            />
            <SocialIcon
              href="https://github.com/Nexer03"
              label="GitHub"
              icon={<img src="/icons/github.svg" alt="GitHub" className="h-5 w-5 invert-75" />}
            />
            <SocialIcon
              href="https://linkedin.com/in/Chuy P"
              label="LinkedIn"
              icon={<img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5 invert-75 " />}
            />
          </div>

          <p className="mt-4 font-mono text-[11px] text-white/40">
            $ curl -X POST /api/contact
          </p>
        </div>
      </div>
    </section>
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
      className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04]
                 px-3 py-2 font-mono text-sm text-white/70
                 transition hover:bg-white/[0.08] hover:border-white/20"
      aria-label={label}
    >
      <span className="h-5 w-5 opacity-80 group-hover:opacity-100">{icon}</span>
      <span className="text-xs">{label}</span>
    </a>
  );
}



