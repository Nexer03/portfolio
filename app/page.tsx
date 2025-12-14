 import Header from "../components/Header";
import Section from "../components/Section";
import TerminalName from "../components/TerminalName";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <Header />
      <Section id="sobre-mi" title="">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
        <TerminalName text="Jesús Peña García" />
            <div className="mt-6 h-84 w-84 md:h-52 md:w-52 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src="/MeAndCat.jpg"
                alt="Fotografía de José de Jesús"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-5 font-mono text-2xl text-emerald-400">
              Ingeniero en Sistemas
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <p className="font-mono text-sm text-white/60 text-center">
              Acerca de mi...
            </p>

            <p className="text-base leading-relaxed text-white/80 md:text-left text-justify">
              Desarrollador web freelance, enfocado en backend con PHP. Desarrollo web
              full stack con un enfoque práctico, buena comunicación y trato
              profesional con clientes y compañeros. Busco seguir desarrollándome como
              profesional y aprender continuamente.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 justify-center">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">
                PHP
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">
                MySQL
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">
                JavaScript
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">
                Full Stack
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">
                Freelance
              </span>
            </div>
          </div>
        </div>
      </Section>


      <Section id="proyectos" title="Proyectos">
        <p>Ccards tipo terminal para cada proyecto....</p>
      </Section>

      <Section id="tecnologias" title="Tecnologias">
        <p> Next.js, Tailwind, Node, etc.....</p>
      </Section>

      <Section id="contacto" title="Contacto">
        <p>Email, GitHub, LinkedIn....</p>
      </Section>
    </div>
  );
}
