type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 pt-5 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="font-mono text-xl text-white/90">{title}</h2>
        <div className="mt-6 text-white/70">{children}</div>
      </div>
    </section>
  );
}
