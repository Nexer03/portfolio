"use client";

import { useState } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import TerminalName from "../components/TerminalName";
import TechCard from "../components/TechCard";
import TechItem from "../components/TechItem";
import ContactSection from "../components/ContactSection";
import SeparadorContacto from "../components/SeparadorContacto";
import Proyectos from "../components/Proyectos";
import Footer from "../components/Footer";
import type { Language } from "../lib/i18n";

const copy = {
  es: {
    imageAlt: "Fotografía de José de Jesús",
    role: "Ingeniero en Sistemas",
    downloadCv: "Descargar CV",
    profileCommand: "$ cat perfil.md",
    profile:
      "Desarrollador de software Jr. enfocado en backend y soluciones full-stack. Trabajo con C#/.NET, Laravel y MySQL, creando APIs, integraciones y automatizaciones con una base clara, mantenible y orientada a resolver problemas reales.",
    profileCards: [
      { label: "focus", value: "Backend & APIs" },
      { label: "stack", value: "C# / Laravel / MySQL" },
      { label: "actual", value: "Ing. Entornos Virtuales" },
    ],
    mainTechTitle: "Tecnologías que más domino",
    softCommand: "$ habilidades --blandas",
    softSkills: [
      "Comunicación clara",
      "Trabajo en equipo",
      "Responsabilidad",
      "Aprendizaje continuo",
      "Resolución de problemas",
      "Organización",
    ],
    softDescription:
      "Me enfoco en mantener comunicación constante, dar seguimiento a tareas y entregar soluciones claras, tanto en equipo como con clientes.",
    languagesCommand: "$ habilidades --idiomas",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B2" },
    ],
    languagesDescription:
      "Puedo leer documentación y comunicarme a nivel intermedio o conversacional.",
    stackCommand: "$ stack --list",
    stackTitle: "Stack Técnico",
    stackDescription:
      "Este es el stack con el que me siento más cómodo para trabajar y desenvolverme.",
    techCards: {
      frontend: "Frontend",
      backend: "Backend",
      learning: "Aprendiendo",
      tools: "Herramientas",
      plus: "Plus",
    },
  },
  en: {
    imageAlt: "Photo of José de Jesús",
    role: "Systems Engineer",
    downloadCv: "Download Resume",
    profileCommand: "$ cat profile.md",
    profile:
      "Junior software developer focused on backend and full-stack solutions. I work with C#/.NET, Laravel, and MySQL, building APIs, integrations, and automations with a clear, maintainable foundation focused on solving real problems.",
    profileCards: [
      { label: "focus", value: "Backend & APIs" },
      { label: "stack", value: "C# / Laravel / MySQL" },
      { label: "current", value: "Virtual Environments Eng." },
    ],
    mainTechTitle: "Technologies I work with most",
    softCommand: "$ skills --soft",
    softSkills: [
      "Clear communication",
      "Teamwork",
      "Responsibility",
      "Continuous learning",
      "Problem solving",
      "Organization",
    ],
    softDescription:
      "I focus on clear communication, task follow-up, and delivering practical solutions both with teams and clients.",
    languagesCommand: "$ skills --languages",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "B2" },
    ],
    languagesDescription:
      "I can read technical documentation and communicate at an intermediate or conversational level.",
    stackCommand: "$ stack --list",
    stackTitle: "Tech Stack",
    stackDescription:
      "This is the stack I feel most comfortable using to build, maintain, and deliver real-world projects.",
    techCards: {
      frontend: "Frontend",
      backend: "Backend",
      learning: "Learning",
      tools: "Tools",
      plus: "Plus",
    },
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const t = copy[language];

  return (
    <div className="min-h-screen bg-transparent text-white pt-16">
      <Header language={language} onLanguageChange={setLanguage} />

      <Section id="sobre-mi" title="">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
            <TerminalName text="José de Jesús Peña" />
            <div className="mt-6 h-64 w-64 md:h-96 md:w-96 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src="/MeAndCat.jpg"
                alt={t.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-5 font-mono text-2xl text-white/80">
              {t.role}
            </p>

            <a
              href="/Jose-de-Jesus-Pena-Garcia-CV.pdf"
              download="Jose-de-Jesus-Pena-Garcia-CV.pdf"
              className="terminal-button terminal-button-secondary mt-6"
            >
              <span className="text-white/45">$</span>
              {t.downloadCv}
            </a>
          </div>

          <div className="mt-10 space-y-4">
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/35 p-6 text-left backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.45)]">
              <p className="font-mono text-xs text-white/45">
                {t.profileCommand}
              </p>

              <p className="mt-4 text-base leading-relaxed text-white/80">
                {t.profile}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {t.profileCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                  >
                    <p className="font-mono text-xs text-white/45">
                      {card.label}
                    </p>
                    <p className="mt-1 text-sm text-white/80">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center pt-6">
              <p className="mb-3 font-mono text-sm text-white/60 text-center">
                {t.mainTechTitle}
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                <span className="chip chip-php" style={{ animationDelay: "0ms" }}>
                  PHP
                </span>
                <span className="chip chip-mysql" style={{ animationDelay: "100ms" }}>
                  MySQL
                </span>
                <span className="chip chip-js" style={{ animationDelay: "200ms" }}>
                  JavaScript
                </span>
                <span className="chip chip-csharp" style={{ animationDelay: "300ms" }}>
                  C#
                </span>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                <p className="font-mono text-sm text-white/70">
                  {t.softCommand}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {t.softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-xs text-white/50 leading-relaxed">
                  {t.softDescription}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                <p className="font-mono text-sm text-white/70">
                  {t.languagesCommand}
                </p>

                <ul className="mt-4 space-y-2 font-mono text-xs text-white/70">
                  {t.languages.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2"
                    >
                      <span>{item.name}</span>
                      <span className="text-white/50">{item.level}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-white/50">
                  {t.languagesDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="separador-sobre-proyectos" title="">
        <SeparadorContacto />
      </Section>

      <Section id="proyectos" title="">
        <Proyectos language={language} />
      </Section>

      <Section id="separador-proyectos-tecnologias" title="">
        <SeparadorContacto />
      </Section>

      <Section id="tecnologias" title="">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <p className="font-mono text-sm text-white/45">{t.stackCommand}</p>
            <h2 className="mt-3 font-mono text-4xl text-white/90 tracking-tight">
              {t.stackTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
              {t.stackDescription}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <TechCard
              title={t.techCards.frontend}
              accentClassName="text-sky-300"
              glowClassName="bg-sky-400/20"
            >
              <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 place-items-center">
                <TechItem label="HTML5" icon="/icons/html5.svg" />
                <TechItem label="CSS3" icon="/icons/css.svg" />
                <TechItem label="JavaScript" icon="/icons/javascript.svg" />
                <TechItem label="Bootstrap" icon="/icons/bootstrap.svg" />
                <TechItem label="TailwindCSS" icon="/icons/tailwindcss.svg" />
              </div>
            </TechCard>

            <TechCard
              title={t.techCards.backend}
              accentClassName="text-white/80"
              glowClassName="bg-white/10"
            >
              <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 place-items-center">
                <TechItem label="PHP" icon="/icons/php.svg" />
                <TechItem label="Laravel" icon="/icons/laravel.svg" />
                <TechItem label="Node.js" icon="/icons/nodedotjs.svg" />
                <TechItem label="C# / .NET" icon="/icons/dotnet.svg" />
                <TechItem label="MySQL" icon="/icons/mysql.svg" />
                <TechItem label="MongoDB" icon="/icons/mongodb.svg" />
              </div>
            </TechCard>

            <TechCard
              title={t.techCards.learning}
              accentClassName="text-orange-300"
              glowClassName="bg-orange-400/20"
            >
              <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 place-items-center">
                <TechItem label="Next.js" icon="/icons/nextdotjs.svg" />
                <TechItem label="TypeScript" icon="/icons/typescript.svg" />
                <TechItem label="Python" icon="/icons/python.svg" />
                <TechItem label="React.js" icon="/icons/react.svg" />
                <TechItem label="Astro" icon="/icons/astro.svg" />
              </div>
            </TechCard>

            <TechCard
              title={t.techCards.tools}
              accentClassName="text-emerald-300"
              glowClassName="bg-emerald-400/20"
            >
              <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 place-items-center">
                <TechItem label="Git" icon="/icons/git.svg" />
                <TechItem label="GitHub" icon="/icons/github.svg" />
                <TechItem label="Docker" icon="/icons/docker.svg" />
                <TechItem label="Postman" icon="/icons/postman.svg" />
                <TechItem label="WordPress" icon="/icons/wordpress.svg" />
                <TechItem label="Wix" icon="/icons/wix.svg" />
              </div>
            </TechCard>

            <div className="md:col-span-2 md:flex md:justify-center">
              <div className="w-full md:max-w-[calc((100%-1.5rem)/2)]">
                <TechCard
                  title={t.techCards.plus}
                  accentClassName="text-violet-300"
                  glowClassName="bg-violet-400/20"
                >
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
                    <TechItem label="Unity" icon="/icons/unity.svg" />
                    <TechItem label="Cisco" icon="/icons/cisco.svg" />
                    <TechItem label="Linux" icon="/icons/linux.svg" />
                    <TechItem label="Ubuntu" icon="/icons/ubuntu.svg" />
                    <TechItem label="Kali Linux" icon="/icons/kalilinux.svg" />
                  </div>
                </TechCard>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="separador-tecnologias-contacto" title="">
        <SeparadorContacto />
      </Section>

      <Section id="contacto" title="">
        <ContactSection language={language} />
      </Section>

      <Section id="Footer" title="">
        <Footer language={language} />
      </Section>
    </div>
  );
}
