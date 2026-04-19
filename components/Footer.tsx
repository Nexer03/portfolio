import type { Language } from "../lib/i18n";

const copy = {
  es: "$ construido con Next.js & Tailwind",
  en: "$ built with Next.js & Tailwind",
} as const;

export default function Footer({ language }: { language: Language }) {
  return (
    <footer className=" border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-10 text-center">
        <p className="font-mono text-sm text-white/50">
          {new Date().getFullYear()} · José de Jesús Peña
        </p>

        <p className="mt-4 font-mono text-[11px] text-white/40">
          {copy[language]}
        </p>

        <div className="mt-4 flex justify-center gap-4">
          <FooterLink href="https://mail.google.com/mail/?view=cm&fs=1&to=chuypg123%40gmail.com">Email</FooterLink>
          <FooterLink href="https://github.com/Nexer03">GitHub</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/josé-de-jesús-peña-garcía-464343262">LinkedIn</FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="font-mono text-xs text-white/60 transition hover:text-white/90"
    >
      {children}
    </a>
  );
}
