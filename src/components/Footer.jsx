function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
        <div className="space-y-2">
          <span className="text-lg font-bold text-slate-900 dark:text-slate-50">DNAI</span>
          <p className="text-slate-600 dark:text-slate-400 font-manrope text-sm tracking-wide">
            © 2026 DNAI. Startup em desenvolvimento tecnológico para saúde.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="text-slate-500 dark:text-slate-400 font-manrope text-sm tracking-wide hover:text-slate-900 dark:hover:text-slate-50 underline-offset-4 hover:underline transition-all"
            href="#"
          >
            Parcerias
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 font-manrope text-sm tracking-wide hover:text-slate-900 dark:hover:text-slate-50 underline-offset-4 hover:underline transition-all"
            href="#"
          >
            Ética e Privacidade
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 font-manrope text-sm tracking-wide hover:text-slate-900 dark:hover:text-slate-50 underline-offset-4 hover:underline transition-all"
            href="#"
          >
            Investidores
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 font-manrope text-sm tracking-wide hover:text-slate-900 dark:hover:text-slate-50 underline-offset-4 hover:underline transition-all"
            href="#"
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
