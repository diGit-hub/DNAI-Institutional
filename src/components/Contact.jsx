function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 mt-40">
      <div className="glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <span className="material-symbols-outlined text-[120px]">handshake</span>
        </div>
        <h2 className="text-4xl font-headline font-bold text-on-primary-fixed mb-6">
          Vamos Conversar?
        </h2>
        <p className="text-on-secondary-container mb-10 text-lg">
          Estamos buscando investidores, parceiros de saúde e entusiastas da tecnologia
          para co-criar a DNAI. Envie seu contato e vamos construir o futuro juntos.
        </p>
        <form className="max-w-md mx-auto relative">
          <div className="relative group">
            <input
              className="w-full pl-6 pr-24 py-5 rounded-full bg-white/80 border border-white/20 focus:ring-2 focus:ring-on-tertiary-container/20 text-on-primary-fixed placeholder:text-on-secondary-container/50 font-medium transition-all"
              placeholder="Seu e-mail corporativo ou pessoal"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
            />
            <button
              className="absolute right-3 top-3 bottom-3 px-5 rounded-full bg-primary-container text-on-primary font-bold text-sm hover:scale-105 active:scale-95 transition-all"
              type="submit"
            >
              Enviar
            </button>
          </div>
          <p className="text-[10px] font-label uppercase tracking-[0.2em] text-on-secondary-container mt-6 opacity-60">
            Sua mensagem será direcionada diretamente ao nosso time de fundadores.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
