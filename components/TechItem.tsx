type TechItemProps = {
  label: string;
  icon: string;
};

export default function TechItem({ label, icon }: TechItemProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center transition-colors hover:bg-white/10">
        <img
          src={icon}
          alt={label}
          className="h-6 w-6 invert opacity-80"  
        />
      </div>
      <span className="font-mono text-xs text-white/70 text-center">
        {label}
      </span>
    </div>
  );
}
