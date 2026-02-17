type SectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  const hasHeader = Boolean(title?.trim() || subtitle?.trim());

  return (
    <section id={id} className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-5xl px-4">
        {hasHeader && (
          <div className="mb-14 text-center">
            {title?.trim() && (
              <h2 className="font-mono text-4xl text-white/90 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle?.trim() && (
              <p className="mt-2 font-mono text-sm text-white/60">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={hasHeader ? "text-white/70" : ""}>{children}</div>
      </div>
    </section>
  );
}
