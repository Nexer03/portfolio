type TechItemProps = {
  label: string;
  icon: string;
};

export default function TechItem({ label, icon }: TechItemProps) {
  return (
    <div className="group/item flex flex-col items-center gap-2 select-none">
      <div
        className="
          h-12 w-12 rounded-2xl border border-white/10 bg-white/5
          flex items-center justify-center
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover/item:-translate-y-0.5 group-hover/item:bg-white/10 group-hover/item:border-white/20
          active:scale-[0.96]
        "
      >
        <img
          src={icon}
          alt={label}
          className="
            h-6 w-6 opacity-75 invert
            transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover/item:opacity-100 group-hover/item:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]
          "
        />
      </div>

      <span
        className="
          font-mono text-xs text-white/70 text-center
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover/item:text-white/90
        "
      >
        {label}
      </span>
    </div>
  );
}
