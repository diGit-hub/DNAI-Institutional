function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
          <span className="text-xs font-label uppercase tracking-widest text-on-primary-fixed font-bold">
            Em Breve
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-on-primary-fixed tracking-tight leading-[1.1]">
          Seu Futuro de <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-primary-fixed to-on-primary-fixed-variant">
            Saúde Universal
          </span>
        </h1>
        <p className="text-xl text-on-secondary-container max-w-lg leading-relaxed">
          Somos uma startup em desenvolvimento criando um santuário de IA personalizado
          para sintetizar sua existência médica. Estamos em busca de parceiros e
          colaboradores para moldar esta jornada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            className="px-8 py-4 bg-primary-container text-on-primary font-bold rounded-full shadow-lg shadow-primary-container/20 hover:scale-105 transition-transform py-3 px-6"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Entrar em Contato
          </button>
          <button 
            className="px-8 py-4 bg-surface-container-lowest text-on-primary-fixed font-bold rounded-full border border-outline-variant/10 hover:bg-surface-container-low transition-colors"
            onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}
          >
             Chat IA
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="glass rounded-[3rem] p-12 aspect-square flex items-center justify-center relative shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <img
            alt="DNAI Health AI Assistant"
            className="relative w-full h-full object-contain rounded-3xl z-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw9-WdUabHtmjV9wMjnUU5e915Nf19f6A5rtXp9JpW-jicsAy4l7lSyKxdBDLqUXvRlwgqY0r3O6PUIRrteVVcZkBZJFEg0ViK8Ny-IIfKmquiY3qxIvNycULZh4xQNodHwcCPZLMnvNPdrico0qLtjv-XreDaYUTFFS11VZpo7U6PePYvh0EHgXQyezsTydiiyQ2xxwPDFVwqSVul_Q3YZdbW3gQ9utO_xbVKvZe6WhsjWcnYyAx-KV001NWiwzy2nlskwPYWKqYx"
          />
        </div>
        <div className="absolute -bottom-6 right-12 glass px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-on-tertiary-container/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-tertiary-container text-sm">
              support_agent
            </span>
          </div>
          <div>
            <p className="text-[10px] font-label uppercase tracking-wider text-on-secondary-container">
              Powered by IA
            </p>
            <p className="font-bold text-on-primary-fixed">Assistente disponível 24h</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
