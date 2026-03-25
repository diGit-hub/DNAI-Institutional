import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import BentoGrid from "./components/BentoGrid"
import AIChat from "./components/AIChat"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[40%] h-[50%] bg-gradient-to-br from-blue-300/60 to-sky-200/40 rounded-[100%] blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-[35%] h-[45%] bg-gradient-to-bl from-cyan-200/50 to-sky-100/30 rounded-[80%] blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50%] h-[60%] bg-gradient-to-r from-blue-200/50 to-cyan-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[45%] h-[50%] bg-gradient-to-tr from-indigo-200/50 to-sky-100/30 rounded-[80%] blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-0 w-[40%] h-[50%] bg-gradient-to-t from-cyan-300/50 to-blue-200/30 rounded-[100%] blur-3xl"></div>
      </div>
      <div className="fixed inset-0 -z-20 pointer-events-none translate-y-[100vh]">
        <div className="absolute -top-20 -left-20 w-[40%] h-[50%] bg-gradient-to-br from-violet-300/50 to-purple-200/30 rounded-[100%] blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-[35%] h-[45%] bg-gradient-to-bl from-fuchsia-200/50 to-pink-100/30 rounded-[80%] blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50%] h-[60%] bg-gradient-to-r from-violet-200/50 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[45%] h-[50%] bg-gradient-to-tr from-purple-200/50 to-violet-100/30 rounded-[80%] blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-0 w-[40%] h-[50%] bg-gradient-to-t from-violet-400/50 to-fuchsia-200/30 rounded-[100%] blur-3xl"></div>
      </div>
      <main className="relative pt-32 pb-24">
        <section id="inicio">
          <Hero />
        </section>
        <section id="dados">
          <BentoGrid />
        </section>
        <section id="chat">
          <AIChat />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
