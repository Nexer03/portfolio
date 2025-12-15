"use client";
import { useInView } from "../app/hooks/useInView";


type TechCardProps = {
  title: string;
  accentClassName: string;
  className?: string;
  glowClassName?: string;
  children: React.ReactNode;
};

export default function TechCard({
  title,
  accentClassName,
  className,
  glowClassName = "bg-white/10",
  children,
}: TechCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.35,
    rootMargin: "0px 0px -20% 0px",
  });

  return (
    <div
      ref={ref}
      data-active={inView ? "true" : "false"}
      className={[
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.60)]",
        "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        // PC hover
        "hover:-translate-y-1 hover:scale-[1.01] hover:border-white/20",
        "focus-within:-translate-y-1 focus-within:scale-[1.01] focus-within:border-white/20",
        // Móvil “scroll hover”
        "data-[active=true]:-translate-y-1 data-[active=true]:scale-[1.01] data-[active=true]:border-white/20",
        className ?? "",
      ].join(" ")}
    >
      {/* glow */}
      <div
        className={[
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
          // PC hover
          "group-hover:opacity-100 group-focus-within:opacity-100",
          // Scroll-trigger
          "group-data-[active=true]:opacity-100",
        ].join(" ")}
      >
        <div className={`absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl ${glowClassName}`} />
        <div className={`absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl ${glowClassName}`} />
      </div>

      <h3 className={`relative font-mono text-3xl tracking-tight ${accentClassName}`}>
        {title}
      </h3>

      <div className="relative mt-6">{children}</div>
    </div>
  );
}
