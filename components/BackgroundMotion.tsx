"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMotion() {
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;

        // movimiento suave (parallax)
        const t1 = Math.min(40, y * 0.03);  // hasta 40px
        const t2 = Math.min(60, y * 0.04);  // hasta 60px

        // micro-cambio de intensidad
        const o1 = Math.max(0.06, 0.12 - y * 0.00006);
        const o2 = Math.max(0.05, 0.10 - y * 0.00005);

        if (r1.current) {
          r1.current.style.transform = `translate3d(0, ${t1}px, 0)`;
          r1.current.style.opacity = String(o1);
        }
        if (r2.current) {
          r2.current.style.transform = `translate3d(0, ${-t2}px, 0)`;
          r2.current.style.opacity = String(o2);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

 return (
  <div className="fixed inset-0 -z-10 bg-[#0a0f18]">
    {/* Glow azul frío */}
    <div
      ref={r1}
      className="absolute inset-0 will-change-transform"
      style={{
        opacity: 0.07,
        background:
          "radial-gradient(circle at 20% 30%, rgba(14,165,233,1), transparent 45%)",
      }}
    />

    {/* Glow azul noche */}
    <div
      ref={r2}
      className="absolute inset-0 will-change-transform"
      style={{
        opacity: 0.06,
        background:
          "radial-gradient(circle at 80% 70%, rgba(30,58,138,1), transparent 50%)",
      }}
    />

    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.65)_70%,rgba(0,0,0,0.95)_100%)]" />
  </div>
);

}
