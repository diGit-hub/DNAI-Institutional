function MetricCard({ icon, iconBg, iconColor, label, value, unit, status }) {
  return (
    <div className="glass rounded-2xl p-3 hover:translate-y-[-2px] transition-transform duration-200 flex flex-col justify-between min-h-[100px]">
      <div className="flex justify-between items-start">
        <div className={`p-2 rounded-lg w-fit ${iconBg}`}>
          <span className={`material-symbols-outlined ${iconColor} text-lg`}>
            {icon}
          </span>
        </div>
        {status && (
          <span className="text-[9px] font-label text-on-secondary-container bg-surface-container-high px-2 py-0.5 rounded">
            {status}
          </span>
        )}
      </div>
      <div>
        <p className="text-2xl font-headline font-bold text-on-primary-fixed">
          {value}
          {unit && <span className="text-xs font-medium text-on-secondary-container ml-0.5">{unit}</span>}
        </p>
        <p className="text-[10px] text-on-secondary-container uppercase tracking-wider font-semibold mt-0.5">
          {label}
        </p>
      </div>
    </div>
  )
}

function WideCard({ icon, iconBg, iconColor, title, subtitle, children }) {
  return (
    <div className="glass rounded-2xl p-3 hover:translate-y-[-2px] transition-transform duration-200 flex flex-col justify-between md:col-span-2">
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg w-fit ${iconBg}`}>
          <span className={`material-symbols-outlined ${iconColor} text-lg`}>
            {icon}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-headline font-bold text-on-primary-fixed">
            {title}
          </h3>
          <p className="text-xs text-on-secondary-container mt-0.5">
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
      subtitle="1,2M SNPs com atualização via PubMed"
    >
      <div className="mt-3 space-y-2">
        <div className="flex gap-2">
          <span className="bg-white/60 px-2 py-1 rounded-lg text-[9px] font-bold text-on-primary-fixed-variant">
            LONGEVIDADE: ALTA
          </span>
          <span className="bg-white/60 px-2 py-1 rounded-lg text-[9px] font-bold text-on-primary-fixed-variant">
            METABOLISMO: OTIMIZADO
          </span>
        </div>
        <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 w-[85%]"></div>
        </div>
        <p className="text-[8px] font-label text-on-secondary-container uppercase">
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
      <div className="mt-2">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 bg-red-100 rounded-full overflow-hidden">
            <div className="h-full bg-red-400 w-[60%]"></div>
          </div>
          <span className="text-[9px] font-label text-on-secondary-container">Sistólica</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex-1 h-1 bg-blue-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400 w-[50%]"></div>
          </div>
          <span className="text-[9px] font-label text-on-secondary-container">Diastólica</span>
        </div>
      </div>
    </WideCard>
  )
}

function CholesterolCard() {
  return (
    <div className="glass rounded-2xl p-3 hover:translate-y-[-2px] transition-transform duration-200 flex flex-col justify-between min-h-[100px]">
      <div className="flex justify-between items-start">
        <div className="p-2 rounded-lg w-fit bg-yellow-50">
          <span className="material-symbols-outlined text-yellow-600 text-lg">
            health_metrics
          </span>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-baseline">
          <span className="text-[9px] font-bold text-on-secondary-container uppercase">LDL</span>
          <span className="text-lg font-bold text-on-primary-fixed">95</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-[9px] font-bold text-on-secondary-container uppercase">HDL</span>
          <span className="text-lg font-bold text-on-primary-fixed">58</span>
        </div>
      </div>
    </div>
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
        <HeartRateCard />
        <IMCCard />
        <BloodTypeCard />
        <GlucoseCard />
        <GenomicCard />
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
