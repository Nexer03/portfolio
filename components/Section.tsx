type SectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  const hasHeader = Boolean(title?.trim() || subtitle?.trim());
  const isSeparator = id.startsWith("separador");
  const sectionClassName = [
    "scroll-mt-20",
    isSeparator ? "py-6 md:py-8" : "py-12 md:py-14",
  ].join(" ");

  return (
    <section id={id} className={sectionClassName}>
      <div className="mx-auto max-w-5xl px-4">
        {hasHeader && (
          <div className="mb-10 text-center">
            {title?.trim() && (
              <h2 className="font-mono text-4xl text-white/90 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle?.trim() && (
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
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
