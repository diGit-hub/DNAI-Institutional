function MetricCard({ icon, iconBg, iconColor, label, value, unit, status, className = "" }) {
  return (
    <div className={`glass rounded-2xl p-3 hover:translate-y-[-2px] transition-transform duration-200 flex flex-col justify-between min-h-[80px] ${className}`}>
      <div className="flex justify-between items-start">
        <div className={`p-1.5 rounded-lg w-fit ${iconBg}`}>
          <span className={`material-symbols-outlined ${iconColor} text-base`}>
            {icon}
          </span>
        </div>
        {status && (
          <span className="text-[8px] font-label text-on-secondary-container bg-surface-container-high px-1.5 py-0.5 rounded">
            {status}
          </span>
        )}
      </div>
      <div>
        <p className="text-xl font-headline font-bold text-on-primary-fixed">
          {value}
          {unit && <span className="text-xs font-medium text-on-secondary-container ml-0.5">{unit}</span>}
        </p>
        <p className="text-[9px] text-on-secondary-container uppercase tracking-wider font-semibold mt-0.5">
          {label}
        </p>
      </div>
    </div>
  )
}

function TallCard({ icon, iconBg, iconColor, title, subtitle, children, className = "" }) {
  return (
    <div className={`glass rounded-2xl p-3 hover:translate-y-[-2px] transition-transform duration-200 flex flex-col justify-between md:row-span-2 ${className}`}>
      <div className="flex items-start gap-2">
        <div className={`p-1.5 rounded-lg w-fit ${iconBg}`}>
          <span className={`material-symbols-outlined ${iconColor} text-base`}>
            {icon}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-headline font-bold text-on-primary-fixed">
            {title}
          </h3>
          <p className="text-[10px] text-on-secondary-container mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>
      {children}
    </div>
  )
}

function WideCard({ icon, iconBg, iconColor, title, subtitle, children, className = "" }) {
  return (
    <div className={`glass rounded-2xl p-3 hover:translate-y-[-2px] transition-transform duration-200 flex flex-col justify-between md:col-span-2 ${className}`}>
      <div className="flex items-start gap-2">
        <div className={`p-1.5 rounded-lg w-fit ${iconBg}`}>
          <span className={`material-symbols-outlined ${iconColor} text-base`}>
            {icon}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-headline font-bold text-on-primary-fixed">
            {title}
          </h3>
          <p className="text-[10px] text-on-secondary-container mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>
      {children}
    </div>
  )
}

function GenomicCard() {
  return (
    <WideCard
      icon="genetics"
      iconBg="bg-blue-50"
      iconColor="text-blue-600"
      title="Arquitetura Genômica"
      subtitle="1,2M SNPs"
    >
      <div className="mt-2 space-y-1.5">
        <div className="flex gap-1">
          <span className="bg-white/60 px-1.5 py-0.5 rounded text-[7px] font-bold text-on-primary-fixed-variant">
            LONGEVIDADE: ALTA
          </span>
          <span className="bg-white/60 px-1.5 py-0.5 rounded text-[7px] font-bold text-on-primary-fixed-variant">
            METABOLISMO: OTIMIZADO
          </span>
        </div>
        <div className="h-1 bg-surface-container rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 w-[85%]"></div>
        </div>
        <p className="text-[7px] font-label text-on-secondary-container uppercase">
          Precisão: 99.99%
        </p>
      </div>
    </WideCard>
  )
}

function BloodPressureCard() {
  return (
    <WideCard
      icon="blood_pressure"
      iconBg="bg-slate-100"
      iconColor="text-slate-700"
      title="Pressão Arterial"
      subtitle="118/76 mmHg"
    >
      <div className="mt-2 flex gap-4">
        <div className="flex-1">
          <div className="h-1 bg-red-100 rounded-full overflow-hidden">
            <div className="h-full bg-red-400 w-[60%]"></div>
          </div>
          <span className="text-[8px] font-label text-on-secondary-container">Sistólica</span>
        </div>
        <div className="flex-1">
          <div className="h-1 bg-blue-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400 w-[50%]"></div>
          </div>
          <span className="text-[8px] font-label text-on-secondary-container">Diastólica</span>
        </div>
      </div>
    </WideCard>
  )
}

function HeartRateCard() {
  return (
    <MetricCard
      icon="favorite"
      iconBg="bg-red-50"
      iconColor="text-red-500"
      label="Frequência Cardíaca"
      value="72"
      unit="bpm"
      status="Vivo"
    />
  )
}

function IMCCard() {
  return (
    <MetricCard
      icon="monitor_weight"
      iconBg="bg-green-50"
      iconColor="text-green-600"
      label="IMC"
      value="22.4"
      status="Ideal"
    />
  )
}

function BloodTypeCard() {
  return (
    <MetricCard
      icon="water_drop"
      iconBg="bg-red-50"
      iconColor="text-red-600"
      label="Tipo Sanguíneo"
      value="O+"
    />
  )
}

function GlucoseCard() {
  return (
    <MetricCard
      icon="science"
      iconBg="bg-orange-50"
      iconColor="text-orange-600"
      label="Glicose Jejum"
      value="92"
      unit="mg/dL"
    />
  )
}

function HydrationCard() {
  return (
    <MetricCard
      icon="opacity"
      iconBg="bg-blue-50"
      iconColor="text-blue-500"
      label="Hidratação"
      value="84"
      unit="%"
    />
  )
}

function SleepCard() {
  return (
    <MetricCard
      icon="bedtime"
      iconBg="bg-indigo-50"
      iconColor="text-indigo-600"
      label="Qualidade Sono"
      value="8.2"
      unit="h"
    />
  )
}

function CholesterolCard() {
  return (
    <MetricCard
      icon="health_metrics"
      iconBg="bg-yellow-50"
      iconColor="text-yellow-600"
      label="Colesterol"
      value="LDL 95 / HDL 58"
    />
  )
}

function SpO2Card() {
  return (
    <MetricCard
      icon="air"
      iconBg="bg-cyan-50"
      iconColor="text-cyan-600"
      label="Saturação O2"
      value="98"
      unit="%"
      status="Normal"
    />
  )
}

function BentoGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-headline font-bold text-on-primary-fixed mb-3">
          Histórico Universal de Dados
        </h2>
        <p className="text-on-secondary-container max-w-4xl mx-auto text-base">
          Nunca mais perca seus exames, resultados de laboratório ou históricos médicos.
          Tenha todos os seus dados de saúde organizados em um só lugar: de exames de sangue
          a mapeamentos genéticos, passando por sinais vitais e muito mais.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <GenomicCard />
        <HeartRateCard />
        <IMCCard />
        <BloodTypeCard />
        <GlucoseCard />
        <BloodPressureCard />
        <HydrationCard />
        <SleepCard />
        <CholesterolCard />
        <SpO2Card />
      </div>
    </section>
  )
}

export default BentoGrid
