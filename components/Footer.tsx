export default function Footer() {
  return (
    <footer className=" border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-10 text-center">
        <p className="font-mono text-sm text-white/50">
          © {new Date().getFullYear()} · José de Jesús Peña
        </p>

        <p className="mt-4 font-mono text-[11px] text-white/40">
          $ consruido con Next.js & Tailwind
        </p>

        <div className="mt-4 flex justify-center gap-4">
          <FooterLink href="mailto:chuypg123@gmail.com">Email</FooterLink>
          <FooterLink href="https://github.com/TU_USER">GitHub</FooterLink>
          <FooterLink href="https://linkedin.com/in/TU_USER">LinkedIn</FooterLink>
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
