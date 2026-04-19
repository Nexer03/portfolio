"use client";

import { useEffect, useRef, useState } from "react";
import type { Language } from "../lib/i18n";

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const links = {
  es: [
    { href: "#sobre-mi", label: "Sobre_Mí" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#tecnologias", label: "Tecnologías" },
    { href: "#contacto", label: "Contacto" },
  ],
  en: [
    { href: "#sobre-mi", label: "About_Me" },
    { href: "#proyectos", label: "Projects" },
    { href: "#tecnologias", label: "Tech_Stack" },
    { href: "#contacto", label: "Contact" },
  ],
};

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < 24) {
        setVisible(true);
      } else if (delta > 8) {
        setVisible(false);
        setOpen(false);
      } else if (delta < -8) {
        setVisible(true);
      }

      lastY.current = y;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const handleLanguageChange = (nextLanguage: Language) => {
    onLanguageChange(nextLanguage);
    setOpen(false);
  };

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50",
        "border-b border-white/10 bg-black/40 backdrop-blur",
        "transition-all duration-300 ease-out",
        visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0",
      ].join(" ")}
    >
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center">
        <p className="justify-self-start font-mono text-sm text-white/90">
          JesúsPeña@{language === "es" ? "Portafolio" : "Portfolio"}:~$
        </p>

        <nav className="hidden md:flex ml-auto items-center gap-6 font-mono text-sm text-white/70">
          {links[language].map((link) => (
            <a
              key={link.href}
              className="transition-colors duration-200 hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <LanguageSwitch
          language={language}
          label={language === "es" ? "Idioma" : "Language"}
          onLanguageChange={handleLanguageChange}
          className="hidden md:flex ml-5"
        />

        <button
          type="button"
          className="md:hidden ml-auto font-mono text-sm text-white/70 transition-colors duration-200 hover:text-white"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          menu
        </button>
      </div>

      <div
        id="mobile-menu"
        className={[
          "md:hidden border-t border-white/10",
          "overflow-hidden transition-all duration-300 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-5xl px-4 py-3 flex flex-col items-center gap-2 font-mono text-sm">
          {links[language].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-full max-w-xs text-center rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <LanguageSwitch
            language={language}
            label={language === "es" ? "Idioma" : "Language"}
            onLanguageChange={handleLanguageChange}
            className="mt-2 flex w-full max-w-xs justify-center"
          />
        </div>
      </div>
    </header>
  );
}

function LanguageSwitch({
  language,
  label,
  onLanguageChange,
  className,
}: {
  language: Language;
  label: string;
  onLanguageChange: (language: Language) => void;
  className?: string;
}) {
  return (
    <div
      className={[
        "items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] px-2 py-1 font-mono text-xs text-white/55",
        className ?? "",
      ].join(" ")}
      aria-label={label}
    >
      <span className="px-1">{label}</span>
      <button
        type="button"
        aria-pressed={language === "es"}
        onClick={() => onLanguageChange("es")}
        className={[
          "rounded-xl px-2.5 py-1 transition",
          language === "es"
            ? "bg-white/[0.12] text-white"
            : "text-white/55 hover:bg-white/[0.08] hover:text-white/85",
        ].join(" ")}
      >
        ES
      </button>
      <button
        type="button"
        aria-pressed={language === "en"}
        onClick={() => onLanguageChange("en")}
        className={[
          "rounded-xl px-2.5 py-1 transition",
          language === "en"
            ? "bg-white/[0.12] text-white"
            : "text-white/55 hover:bg-white/[0.08] hover:text-white/85",
        ].join(" ")}
      >
        EN
      </button>
    </div>
  );
}
