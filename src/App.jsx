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
      <main className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-primary-fixed rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-150 h-150 bg-secondary-fixed rounded-full blur-[150px]"></div>
        </div>
        <Hero />
        <BentoGrid />
        <AIChat />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
