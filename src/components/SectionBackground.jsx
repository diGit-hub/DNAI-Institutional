function SectionBackground({ variant = "blue" }) {
  const variants = {
    blue: (
      <>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-200/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-200/50 rounded-full blur-[100px]"></div>
      </>
    ),
    purple: (
      <>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-300/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-300/50 rounded-full blur-[80px]"></div>
      </>
    ),
    green: (
      <>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-200/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-200/50 rounded-full blur-[80px]"></div>
      </>
    ),
  }

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {variants[variant]}
    </div>
  )
}

export default SectionBackground
