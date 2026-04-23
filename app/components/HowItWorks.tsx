'use client'
import { useInView } from '../hooks/useInView'
import AnimateIn from './AnimateIn'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico gratuito',
    desc: 'Analizamos tus procesos actuales, identificamos el que tiene mayor ROI inmediato y te entregamos una propuesta clara con setup fee y retainer.',
    duration: '1 semana',
    color: '#9F67FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Construcción',
    desc: 'Construimos la automatización en n8n o Make, integramos la IA según el caso de uso y conectamos todos los canales necesarios.',
    duration: '4–5 semanas',
    color: '#06B6D4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Entrega y capacitación',
    desc: 'Demo en vivo, documentación simple y capacitación de 30–60 minutos para tu equipo. Sin tecnicismos, directo al grano.',
    duration: '1 día',
    color: '#9F67FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9,11 12,14 22,4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Retainer mensual',
    desc: 'Monitoreo continuo, ajustes, mejoras y reporte mensual de impacto: horas ahorradas, leads capturados, procesos optimizados.',
    duration: 'Ongoing',
    color: '#06B6D4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
        <polyline points="17,6 23,6 23,12" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const { ref: gridRef, isInView: gridInView } = useInView(0.2)

  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="section-divider mb-24" />

      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-cyan/4 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <AnimateIn animation="fade-in-up" className="text-center mb-16">
          <p className="label-overline text-brand-cyan mb-3">El proceso</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            De idea a resultados{' '}
            <span className="gradient-text">en 3–4 semanas</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Un proceso claro, sin sorpresas. Sabés exactamente qué pasa en cada
            etapa y qué podés esperar.
          </p>
        </AnimateIn>

        {/* 4-card grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <AnimateIn key={s.number} animation="fade-in-up" delay={i * 120} className="flex flex-col group">

              {/* Step indicator row */}
              <div className="flex items-center mb-5">
                {/* Icon circle */}
                <div
                  className="relative flex-shrink-0 w-12 h-12 rounded-full p-[1.5px] group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${i % 2 === 0 ? '#06B6D4' : '#9F67FF'})` }}
                >
                  <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center" style={{ color: s.color }}>
                    {s.icon}
                  </div>
                </div>

                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex flex-1 items-center ml-2">
                    <div
                      className={`connector-line flex-1 h-[1.5px] rounded-full ${gridInView ? 'connector-line-visible' : 'connector-line-hidden'}`}
                      style={{
                        background: `linear-gradient(to right, ${s.color}, ${s.color}40, transparent)`,
                      filter: `drop-shadow(0 0 4px ${s.color}80)`,
                        transitionDelay: `${i * 200 + 400}ms`,
                      }}
                    />
                    <svg
                      className={`-ml-1 flex-shrink-0 transition-opacity duration-500 ${gridInView ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${i * 200 + 900}ms` }}
                      width="7" height="10" viewBox="0 0 7 10" fill="none"
                    >
                      <path d="M1 1L6 5L1 9" stroke={s.color} strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Card */}
              <div className="flex-1 p-5 rounded-2xl border border-dark-border bg-dark-card relative overflow-hidden neon-card">
                {/* Top accent — always on, brighter on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
                />

                {/* Ghost number */}
                <span
                  className="absolute -top-2 -right-1 text-7xl font-black leading-none select-none pointer-events-none"
                  style={{ color: 'transparent', WebkitTextStroke: `1px ${s.color}10` }}
                >
                  {s.number}
                </span>

                <div className="flex items-center gap-2 mb-3 relative">
                  <span className="text-xs font-black tracking-widest" style={{ color: `${s.color}55` }}>
                    {s.number}
                  </span>
                  <span
                    className="inline-block text-xs px-2 py-0.5 rounded-full font-medium border"
                    style={{
                      background: `${s.color}12`,
                      color: s.color,
                      borderColor: `${s.color}25`,
                    }}
                  >
                    {s.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-200 relative tracking-tight text-sm sm:text-base">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed relative">{s.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Note */}
        <AnimateIn animation="fade-in" delay={600} className="text-center mt-10">
          <p className="text-gray-600 text-sm">
            La infraestructura siempre queda a nombre del cliente. Si terminamos la relación, todo es tuyo.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
