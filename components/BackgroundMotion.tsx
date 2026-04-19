export default function BackgroundMotion() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.045),transparent_36%)] opacity-55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.025),transparent_44%)] opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.018)_0%,transparent_38%,rgba(255,255,255,0.012)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.96)_100%)]" />
    </div>
  );
}
