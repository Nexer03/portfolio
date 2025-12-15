type TechCardProps = {
  title: string;
  accentClassName: string;
  children: React.ReactNode;
};

export default function TechCard({ title, accentClassName, children }: TechCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.60)] backdrop-blur">
      <h3 className={`font-mono text-3xl tracking-tight ${accentClassName}`}>{title}</h3>
      <div className="mt-6">{children}</div>
    </div>
  );
}
