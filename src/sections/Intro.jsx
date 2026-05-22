const techStack = ['React', 'Vue', 'Next.js', 'JavaScript', 'Node.js', 'TypeScript', 'PostgreSQL'];

const logoMap = {
  React: '/assets/react.svg',
  Vue: '/assets/vue.svg',
  'Next.js': '/assets/nextjs.svg',
  JavaScript: '/assets/javascript.svg',
  'Node.js': '/assets/node.svg',
  TypeScript: '/assets/typescript.png',
  PostgreSQL: '/assets/postgres.svg',
};

const Intro = () => {
  return (
    <section id="intro" className="c-space pt-28 pb-16 min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
        <div className="rounded-3xl border border-black-300 bg-black-200/70 backdrop-blur-md p-8 sm:p-12 shadow-2xl shadow-black-200">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">Introdução</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Desenvolvedor focado em interfaces, produtos web e entregas que façam sentido para o usuário.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white-600 max-w-2xl">
Meu nome é Vinícius Nunes, sou Desenvolvedor Web em início de carreira, com experiência como freelancer em projetos reais. Tenho foco em aplicações web modernas e estou em constante evolução técnica. Busco uma oportunidade como desenvolvedor júnior para crescer profissionalmente, contribuir com a equipe e aprimorar minhas habilidades no desenvolvimento de software.
          </p>
        </div>

        <div className="rounded-3xl border border-black-300 bg-gradient-to-br from-black-200/80 to-black-300/80 p-8 sm:p-12 shadow-2xl shadow-black-200">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">Principais tecnologias</p>

          <div className="mt-6 flex flex-col gap-3">
            {techStack.map((tech) => {
              const logo = logoMap[tech];
              return (
                <div key={tech} className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 w-full">
                  {logo ? (
                    <img src={logo} alt={tech} className="w-10 h-10 rounded-md object-contain" />
                  ) : (
                    <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center text-sm font-semibold text-white">
                      {tech.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1">
                    <span className="text-white font-semibold">{tech}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
