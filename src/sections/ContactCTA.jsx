const ContactCTA = () => {
  return (
    <section id="contact" className="c-space pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto rounded-3xl border border-black-300 bg-black-200/70 backdrop-blur-md p-8 sm:p-10 shadow-2xl shadow-black-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/45">Contato</p>
          <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-white">
            Quer me contratar ou pedir um orçamento?
          </h2>
          <p className="mt-4 text-white-600 text-sm sm:text-base lg:text-lg">
            Entre em contato comigo através do WhatsApp ou por e-mail. Estou aberto a discutir projetos, ideias ou oportunidades de trabalho. Será um prazer conversar com você!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="https://wa.me/5516993225524"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-6 py-4 text-white font-semibold transition-transform hover:scale-[1.02] w-full sm:w-auto text-center">
            (16) 99322-5524
          </a>
          <a
            href="mailto:viniciusnunesdito@gmail.com"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-white font-semibold transition-colors hover:bg-white/10 w-full sm:w-auto text-center">
            viniciusnunesdito@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;