import { useState, useEffect, useRef } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio')
  const sectionsRef = useRef(['inicio', 'dados', 'chat', 'contato'])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
      }
    )

    sectionsRef.current.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'dados', label: 'Dados' },
    { id: 'chat', label: 'Chat IA' },
    { id: 'contato', label: 'Contato' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl font-manrope font-semibold tracking-tight rounded-full mt-6 mx-auto max-w-fit px-6 py-3 border border-white/20 dark:border-slate-700/30 shadow-[0_8px_32px_0_rgba(11,28,46,0.05)] flex items-center gap-8">
        <span className="text-xl font-bold text-slate-900 dark:text-slate-50 mr-4">DNAI</span>
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`text-sm font-medium transition-all duration-150 cursor-pointer ${
                activeSection === item.id
                  ? 'text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-50 pb-1'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              onClick={scrollTo(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
