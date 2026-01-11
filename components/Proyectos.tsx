export default function Proyectos() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-4 py-24">
      {/* Header */}
      <div className="mb-14 text-center">
        <h2 className="font-mono text-4xl text-white/90 tracking-tight">
          Mis Proyectos
        </h2>
        <p className="mt-2 font-mono text-sm text-white/60">
          $ ls ./projects
        </p>
      </div>

      {/* FEATURED */}
      <FeaturedProject />

      {/* CLIENTES */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="CreceDiseño"
          description="Gestor de cursos desarrollado para cliente."
          stack="JavaScript · Bootstrap · Trabajo freelance"
        />

        <ProjectCard
          title="Landing Page (Wix)"
          description="Landing page informativa desarrollada para cliente."
          stack="Wix · Diseño · Trabajo freelance"
        />
      </div>

      {/* UNITY */}
      <div className="mt-12">
        <ProjectCard
          title="Unity Projects"
          description="Videojuegos desarrollados en Unity que demuestran habilidades en lógica y gameplay."
          stack="Unity · C# · 2D · 3D · MayaAutoDesk"
          extra={[
            "Juego de Terror (3D)",
            "Juego 2D",
          ]}
        />
      </div>
      {/* EXPERIENCIA EN INFRAESTRUCTURA */}
        <div className="mt-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 font-mono">
            <p className="text-sm text-white/80">
              Infraestructura & Servidores
            </p>

            <p className="mt-2 text-xs text-white/60">
              Configuración y administración de un servidor Ubuntu montado desde cero en Raspberry Pi
              para hosting de aplicaciones web.
            </p>

            <ul className="mt-3 list-disc list-inside text-[11px] text-white/55">
              <li>Instalación y configuración de Ubuntu Server</li>
              <li>Acceso remoto y administración vía SSH</li>
              <li>Hosting de sitios web (Apache / PHP)</li>
              <li>Configuración básica de red</li>
              <li>Nociones de cableado estructurado</li>
            </ul>

            <p className="mt-3 text-[11px] text-white/45">
              Ubuntu Server · Linux · Raspberry Pi · SSH · Apache · Redes
            </p>

            <p className="mt-4 text-[11px] text-white/40">
              *Experiencia práctica no productiva (laboratorio personal).
            </p>
          </div>
        </div>

    </section>

     
  );
}


function FeaturedProject() {
  return (
    <div className="rounded-3xl border border-white/30 bg-white/[0.06] p-8 font-mono">
      
      <h3 className="text-2xl text-white/90">
        SIN BECA NO HAY RENTA
      </h3>

      <p className="mt-3 text-sm text-white/70 max-w-3xl">
        Plataforma inmobiliaria tipo AirBnB desarrollada en Laravel (proyecto final universitario).
        Maneja roles (cliente, agente, admin), catálogo de propiedades, favoritos, chat y agenda de visitas,
        estadisticas, reportes, pagos con paypal sandbox y control de comisiones.
      </p>

      <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/70">
          Filtrado por ubicación / precio
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/70">
          Favoritos + alertas 
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/70">
          Chat cliente ↔ agente
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/70">
          Visitas y reservaciones
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/70">
          Reportes + export a Excel
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/70">
          Pagos con PayPal
        </span>
       
      </div>

      <p className="mt-5 text-xs text-white/50">
        Laravel · PHP · MySQL · Tailwind · Fullstack
      </p>

      <div className="mt-6 flex gap-4 text-sm">
        {/* luego conectamos links reales */}
        <span className="cursor-pointer text-white/70 hover:text-white">
          [ Ver proyecto ]
        </span>
        <span className="cursor-pointer text-white/70 hover:text-white">
          [ Código ]
        </span>
      </div>
    </div>
  );
}


function ProjectCard({
  title,
  description,
  stack,
  extra,
}: {
  title: string;
  description: string;
  stack: string;
  extra?: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 font-mono transition hover:border-white/20">
      <p className="text-sm text-white/80">
        📁 {title}
      </p>

      <p className="mt-2 text-xs text-white/60">
        {description}
      </p>

      {extra && (
        <ul className="mt-3 list-disc list-inside text-[11px] text-white/55">
          {extra.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <p className="mt-3 text-[11px] text-white/45">
        {stack}
      </p>

      <div className="mt-4 flex gap-4 text-xs">
        <span className="cursor-pointer text-white/60 hover:text-white">
          [ Ver ]
        </span>
        <span className="cursor-pointer text-white/60 hover:text-white">
          [ Código ]
        </span>
      </div>
    </div>
  );
}
