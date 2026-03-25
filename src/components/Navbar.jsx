function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl font-manrope font-semibold tracking-tight rounded-full mt-6 mx-auto max-w-fit px-6 py-3 border border-white/20 dark:border-slate-700/30 shadow-[0_8px_32px_0_rgba(11,28,46,0.05)] flex items-center gap-8">
        <span className="text-xl font-bold text-slate-900 dark:text-slate-50 mr-4">DNAI</span>
        <div className="hidden md:flex gap-6">
          <a
            className="text-slate-900 dark:text-white font-bold border-b-2 border-slate-900 dark:border-slate-50 pb-1 hover:scale-105 transition-transform duration-300"
            href="#"
          >
            Ciência
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors hover:scale-105 transition-transform duration-300"
            href="#"
          >
            Funcionalidades
          </a>
          <a
            className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors hover:scale-105 transition-transform duration-300"
            href="#"
          >
            Parcerias
          </a>
        </div>
        <button className="bg-primary-container text-white px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300 active:scale-95 text-sm">
          Entrar em Contato
        </button>
      </div>
    </nav>
  )
}

export default Navbar
