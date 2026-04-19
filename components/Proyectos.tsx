import type { Language } from "../lib/i18n";

type ProjectCardProps = {
  title: string;
  eyebrow: string;
  year: string;
  description: string;
  stack: readonly string[];
  preview?: string;
  github?: string;
  status?: string;
  codeLabel: string;
};

const copy = {
  es: {
    headerCommand: "$ ls ./projects --featured",
    title: "Proyectos & Experiencia",
    description:
      "Una selección corta de proyectos donde muestro backend, integraciones, automatización y desarrollo full-stack con enfoque práctico.",
    common: {
      code: "Código",
      preview: "Preview",
      confidential: "Confidencial",
      year2025: "2025",
      year2024: "2024",
      year2026: "2026",
      year2023: "2023",
    },
    featured: {
      command: "$ open ./featured/sin-beca-no-hay-renta",
      badge: "Proyecto destacado",
      title: "Plataforma Inmobiliaria Full Stack",
      description:
        "Sistema tipo Airbnb desarrollado con Laravel para gestionar propiedades, usuarios, roles, favoritos, chat, agenda de visitas, reportes y pagos con PayPal. El valor principal está en la lógica de negocio, el control de permisos y el flujo completo de reservaciones.",
      tags: ["Roles", "Chat", "Pagos", "Reportes", "CRUD completo"],
      stackLabel: "stack",
      stackValue: "Laravel / PHP / MySQL / Tailwind",
      typeLabel: "tipo",
      typeValue: "Full-stack",
      scopeLabel: "scope",
      scopeValue: "Universitario",
      talk: "Hablar del proyecto",
    },
    experience: {
      command: "$ work --backend",
      title: "Grupo Vidanta - Backend & Automatización",
      description:
        "Automatización de responsivas y soluciones internas para integrar sistemas empresariales, consultar usuarios y reducir trabajo manual mediante herramientas backend.",
      bullets: [
        "Desarrollo con C# y ASP.NET Razor Pages",
        "Integración con Active Directory y LDAP",
        "Generación automática de documentos responsivas",
        "Optimización de procesos y tiempos operativos",
      ],
      impactCommand: "$ impact --operativo",
      impact:
        "Proyecto enfocado en generar documentos de forma automática, validar información de usuarios con Active Directory y agilizar procesos internos.",
      roleLabel: "rol",
      roleValue: "Backend Jr.",
      areaLabel: "area",
      areaValue: "Automatización",
    },
    cards: [
      {
        title: "CreceDiseño",
        eyebrow: "Cliente / plataforma educativa",
        year: "2025",
        description:
          "Plataforma para gestión de cursos, contenido digital y pagos. El enfoque fue entregar una experiencia clara para usuarios y una base simple de administrar.",
        stack: ["JavaScript", "Bootstrap", "PHP", "MySQL", "PayPal"],
        preview: "https://crecediseño.site",
        github: "https://github.com/Nexer03/CreceDise-oContratos.git",
      },
      {
        title: "Grupo Vidanta - Integración API - OHIP",
        eyebrow: "Backend / integraciones",
        year: "2024",
        description:
          "Servicios backend en C# para integración con Oracle Hospitality, consumo de APIs REST y manejo de datos en JSON/XML.",
        stack: ["C#", "ASP.NET", "REST API", "JSON", "XML", "Postman"],
        status: "Confidencial",
      },
    ],
    infrastructure: {
      command: "$ server --lab",
      title: "Infraestructura & Servidores",
      description:
        "Configuración y administración de un servidor Ubuntu en Raspberry Pi para hosting de aplicaciones web, acceso remoto, servicios Apache/PHP y configuración básica de red.",
      stack: ["Ubuntu", "Linux", "SSH", "Apache", "Raspberry Pi"],
    },
  },
  en: {
    headerCommand: "$ ls ./projects --featured",
    title: "Projects & Experience",
    description:
      "A short selection of projects where I show backend work, integrations, automation, and full-stack development with a practical focus.",
    common: {
      code: "Code",
      preview: "Preview",
      confidential: "Confidential",
      year2025: "2025",
      year2024: "2024",
      year2026: "2026",
      year2023: "2023",
    },
    featured: {
      command: "$ open ./featured/real-estate-platform",
      badge: "Featured project",
      title: "Full Stack Real Estate Platform",
      description:
        "Airbnb-style platform built with Laravel to manage properties, users, roles, favorites, chat, visit scheduling, reports, and PayPal payments. Its main value is in the business logic, permission control, and full reservation flow.",
      tags: ["Roles", "Chat", "Payments", "Reports", "Full CRUD"],
      stackLabel: "stack",
      stackValue: "Laravel / PHP / MySQL / Tailwind",
      typeLabel: "type",
      typeValue: "Full-stack",
      scopeLabel: "scope",
      scopeValue: "University project",
      talk: "Discuss project",
    },
    experience: {
      command: "$ work --backend",
      title: "Grupo Vidanta - Backend & Automation",
      description:
        "Automation of internal responsibility documents and backend solutions to integrate business systems, query users, and reduce manual work.",
      bullets: [
        "Development with C# and ASP.NET Razor Pages",
        "Integration with Active Directory and LDAP",
        "Automatic generation of responsibility documents",
        "Process optimization and operational time reduction",
      ],
      impactCommand: "$ impact --operations",
      impact:
        "Project focused on generating documents automatically, validating user information through Active Directory, and speeding up internal processes.",
      roleLabel: "role",
      roleValue: "Backend Jr.",
      areaLabel: "area",
      areaValue: "Automation",
    },
    cards: [
      {
        title: "CreceDiseño",
        eyebrow: "Client / educational platform",
        year: "2025",
        description:
          "Platform for course management, digital content, and payments. The focus was to deliver a clear user experience and an easy-to-administer foundation.",
        stack: ["JavaScript", "Bootstrap", "PHP", "MySQL", "PayPal"],
        preview: "https://crecediseño.site",
        github: "https://github.com/Nexer03/CreceDise-oContratos.git",
      },
      {
        title: "Grupo Vidanta - OHIP API Integration",
        eyebrow: "Backend / integrations",
        year: "2024",
        description:
          "Backend services in C# for Oracle Hospitality integration, REST API consumption, and JSON/XML data handling.",
        stack: ["C#", "ASP.NET", "REST API", "JSON", "XML", "Postman"],
        status: "Confidential",
      },
    ],
    infrastructure: {
      command: "$ server --lab",
      title: "Infrastructure & Servers",
      description:
        "Configuration and administration of an Ubuntu server on Raspberry Pi for web application hosting, remote access, Apache/PHP services, and basic network configuration.",
      stack: ["Ubuntu", "Linux", "SSH", "Apache", "Raspberry Pi"],
    },
  },
} as const;

export default function Proyectos({ language }: { language: Language }) {
  const t = copy[language];

  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="mb-10 text-center">
        <p className="font-mono text-sm text-white/45">{t.headerCommand}</p>
        <h2 className="mt-3 font-mono text-4xl text-white/90 tracking-tight">
          {t.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
          {t.description}
        </p>
      </div>

      <FeaturedProject language={language} />

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <ExperienceCard language={language} />
        <div className="grid gap-6">
          {t.cards.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              codeLabel={t.common.code}
            />
          ))}
        </div>
      </div>

      <InfrastructureCard language={language} />
    </div>
  );
}

function FeaturedProject({ language }: { language: Language }) {
  const t = copy[language].featured;
  const common = copy[language].common;

  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/45 p-7 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_32px_90px_rgba(0,0,0,0.55)] md:p-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      <p className="font-mono text-xs text-white/45">
        {t.command}
      </p>

      <div className="mt-5 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-white/55">
              {t.badge}
            </span>
            <YearBadge year={common.year2025} />
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">
            {t.title}
          </h3>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
            {t.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {t.tags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 font-mono text-xs text-white/58"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 font-mono">
          <p className="text-xs text-white/40">{t.stackLabel}</p>
          <p className="mt-2 text-sm text-white/75">{t.stackValue}</p>

          <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
            <Stat label={t.typeLabel} value={t.typeValue} />
            <Stat label={t.scopeLabel} value={t.scopeValue} />
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <ProjectAction href="https://github.com/Nexer03/BienesYRaices.git">
          {common.code}
        </ProjectAction>
        <ProjectAction secondary href="#contacto">
          {t.talk}
        </ProjectAction>
      </div>
    </article>
  );
}

function ExperienceCard({ language }: { language: Language }) {
  const t = copy[language].experience;
  const common = copy[language].common;

  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.045]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs text-white/45">{t.command}</p>
        <YearBadge year={common.year2026} />
      </div>

      <h3 className="mt-3 text-xl font-semibold text-white/90">
        {t.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-white/65">
        {t.description}
      </p>

      <ul className="mt-5 space-y-2">
        {t.bullets.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-white/62">
            <span className="mt-[0.35rem] h-1.5 w-1.5 rounded-full bg-white/35" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <ProjectAction secondary>{common.confidential}</ProjectAction>
      </div>

      <div className="mt-auto pt-8">
        <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
          <p className="font-mono text-xs text-white/40">{t.impactCommand}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            {t.impact}
          </p>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <MiniStat label={t.roleLabel} value={t.roleValue} />
          <MiniStat label={t.areaLabel} value={t.areaValue} />
        </div>
      </div>
    </article>
  );
}

function InfrastructureCard({ language }: { language: Language }) {
  const t = copy[language].infrastructure;
  const common = copy[language].common;

  return (
    <article className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.045]">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs text-white/45">{t.command}</p>
            <YearBadge year={common.year2023} />
          </div>

          <h3 className="mt-3 text-xl font-semibold text-white/90">
            {t.title}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/65">
            {t.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          {t.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/25 px-3 py-1 font-mono text-xs text-white/55"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({
  title,
  eyebrow,
  year,
  description,
  stack,
  preview,
  github,
  status,
  codeLabel,
}: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.045]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs text-white/45">{eyebrow}</p>
        <YearBadge year={year} />
      </div>

      <h3 className="mt-3 text-xl font-semibold text-white/90">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-white/65">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-black/25 px-3 py-1 font-mono text-xs text-white/55"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {preview && (
          <ProjectAction href={preview}>
            Preview
          </ProjectAction>
        )}

        {github && (
          <ProjectAction secondary href={github}>
            {codeLabel}
          </ProjectAction>
        )}

        {status && (
          <ProjectAction secondary>
            {status}
          </ProjectAction>
        )}
      </div>
    </article>
  );
}

function ProjectAction({
  href,
  secondary = false,
  children,
}: {
  href?: string;
  secondary?: boolean;
  children: React.ReactNode;
}) {
  const className = [
    "terminal-button",
    secondary ? "terminal-button-secondary" : "",
  ].join(" ");

  if (!href) {
    return (
      <span className={className} aria-disabled="true">
        <span className="text-white/45">$</span>
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={className}
    >
      <span className="text-white/45">$</span>
      {children}
    </a>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
      <p className="text-white/35">{label}</p>
      <p className="mt-1 text-white/75">{value}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 font-mono">
      <p className="text-xs text-white/35">{label}</p>
      <p className="mt-1 text-xs text-white/70">{value}</p>
    </div>
  );
}

function YearBadge({ year }: { year: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-xs text-white/55">
      {year}
    </span>
  );
}
