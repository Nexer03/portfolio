"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#sobre-mi", label: "Sobre_Mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
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
          JesúsPeña@Portafolio:~$
        </p>

        <nav className="hidden md:flex ml-auto items-center gap-6 font-mono text-sm text-white/70">

          {links.map((l) => (
            <a
              key={l.href}
              className="transition-colors duration-200 hover:text-white"
              href={l.href}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
  type="button"
  className="md:hidden ml-auto font-mono text-sm text-white/70 transition-colors duration-200 hover:text-white"
  aria-expanded={open}
  aria-controls="mobile-menu"
  onClick={() => setOpen((v) => !v)}
>
  menu
</button>

      </div>

      <div
        id="mobile-menu"
        className={[
          "md:hidden border-t border-white/10",
          "overflow-hidden transition-all duration-300 ease-out",
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-5xl px-4 py-3 flex flex-col items-center gap-2 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="w-full max-w-xs text-center rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
