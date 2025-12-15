 import Header from "../components/Header";
import Section from "../components/Section";
import TerminalName from "../components/TerminalName";
import TechCard from "../components/TechCard";
import TechItem from "../components/TechItem";




export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <Header />
      <Section id="sobre-mi" title="">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center">
        <TerminalName text="José de Jesús Peña" />
            <div className="mt-6 h-64 w-64 md:h-96 md:w-96 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src="/MeAndCat.jpg"
                alt="Fotografía de José de Jesús"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-5 font-mono text-2xl text-white/80">
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
              <div className="flex flex-wrap gap-2 pt-2 justify-center">
                <span className="chip chip-php" style={{ animationDelay: "0ms" }}>PHP</span>
                <span className="chip chip-mysql" style={{ animationDelay: "100ms" }}>MySQL</span>
                <span className="chip chip-js" style={{ animationDelay: "200ms" }}>JavaScript</span>
                <span className="chip chip-csharp" style={{ animationDelay: "300ms" }}>C#</span>
              </div>
            </div>
          </div>
        </div>
      </Section>


      <Section id="proyectos" title="Proyectos">
        <p>Cards tipo terminal para cada proyecto....</p>
        <p>Aqui va el proyecto de bienes y raices (mas importante de todos)</p>
        <p>Aqui va el proyecto de CreceDiseño</p>
        <p>Aqui va el proyecto de la señora en wix</p>
        <p>Aqui van a ir el proyecto de ElJuego de terror y el de 2D como plus</p>
      </Section>

      <Section id="tecnologias" title="Tecnologías">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6 md:grid-cols-2">

            <TechCard
              title="Frontend"
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
              title="Backend"
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
              title="Aprendiendo"
              accentClassName="text-orange-300"
              glowClassName="bg-orange-400/20"
            >
              <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 place-items-center">
                <TechItem label="Next.js" icon="/icons/nextdotjs.svg" />
                <TechItem label="TypeScript" icon="/icons/typescript.svg" />
                <TechItem label="Python" icon="/icons/python.svg" />
                <TechItem label="React.Js" icon="/icons/react.svg" />
                <TechItem label="Astro" icon="/icons/astro.svg" />
              </div>
            </TechCard>

            <TechCard
              title="Herramientas"
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

            <TechCard
              title="Plus"
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
      </Section>


      <Section id="contacto" title="Contacto">
        <p>Email, GitHub, LinkedIn....</p>
      </Section>
    </div>
  );
}
