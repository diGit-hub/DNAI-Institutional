function SectionDivider() {
  return (
    <div className="relative w-full h-32 -my-8 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full absolute">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-green-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-on-secondary-container/20"></div>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-on-secondary-container/10 to-transparent"></div>
        <div className="w-2 h-2 rounded-full bg-on-secondary-container/20"></div>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-on-secondary-container/10 to-transparent"></div>
        <div className="w-2 h-2 rounded-full bg-on-secondary-container/20"></div>
      </div>
    </div>
  )
}

export default SectionDivider
