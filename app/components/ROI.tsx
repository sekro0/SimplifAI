'use client'
import AnimateIn from './AnimateIn'
import CountUp from './CountUp'

const cases = [
  {
    niche: "Consultorio médico",
    result: "Redujo no-shows en un 40% con recordatorios automáticos por WhatsApp. El bot agenda el 80% de los turnos sin intervención humana.",
    metric: "−40% no-shows",
    color: '#06B6D4',
  },
  {
    niche: "Inmobiliaria",
    result: "Centralización de leads de múltiples portales. Respuesta automática en 90 segundos. Pasó de perder 3 leads diarios a capturarlos todos.",
    metric: "+100% leads",
    color: '#9F67FF',
  },
  {
    niche: "Estudio contable",
    result: "Automatizaron los alertas de vencimientos para 45 clientes. 6 horas de trabajo manual al mes se convirtieron en 0 minutos.",
    metric: "−6h/mes",
    color: '#10B981',
  },
]

export default function ROI() {
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />

      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-brand-purple/6 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <AnimateIn animation="fade-in-up" className="mb-14">
          <p className="label-overline text-brand-purple-light mb-3">
            Resultados reales
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
            No vendemos promesas.{' '}
            <span className="gradient-text">Vendemos números.</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            El ROI más fácil de calcular: horas semanales ahorradas × costo hora × 4 semanas.
          </p>
        </AnimateIn>

        {/* BENTO GRID */}
        <AnimateIn animation="fade-in-up" delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-3 mb-6">

            {/* Big stat 1 — spans 2 cols, neon purple */}
            <div
              className="col-span-2 row-span-1 lg:col-span-2 lg:row-span-2 rounded-2xl border border-dark-border bg-dark-card p-7 flex flex-col justify-between relative overflow-hidden group neon-card"
              style={{ minHeight: '200px' }}
            >
              {/* Neon top accent */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, transparent, #9F67FF, #06B6D4, transparent)' }} />
              {/* Ghost text */}
              <span className="absolute -bottom-4 -right-4 text-[9rem] font-black leading-none select-none pointer-events-none"
                style={{ color: 'transparent', WebkitTextStroke: '1px rgba(159,103,255,0.08)' }}>
                h
              </span>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Tiempo ahorrado</p>
                <div className="font-display font-black gradient-text leading-none mb-2" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', textShadow: '0 0 40px rgba(124,58,237,0.4)' }}>8–15h</div>
                <div className="text-base font-medium text-gray-300">por semana, por cliente</div>
              </div>
              <p className="text-sm text-gray-600 mt-4">En promedio, automatizando solo el proceso principal del negocio.</p>
            </div>

            {/* Stat 2 — neon cyan */}
            <div className="col-span-1 rounded-2xl border border-dark-border bg-dark-card p-5 flex flex-col justify-between relative overflow-hidden neon-card neon-card-cyan group">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, transparent, #06B6D4, transparent)' }} />
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Respuesta leads</p>
              <CountUp
                to={60}
                prefix="+"
                suffix="%"
                className="font-display text-4xl sm:text-5xl font-black text-brand-cyan leading-none"
                style={{ textShadow: '0 0 30px rgba(6,182,212,0.5)' }}
              />
              <p className="text-xs text-gray-600 mt-2">tasa de contacto</p>
            </div>

            {/* Stat 3 */}
            <div className="col-span-1 rounded-2xl border border-dark-border bg-dark-card p-5 flex flex-col justify-between relative overflow-hidden neon-card group">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(90deg, transparent, #9F67FF, transparent)' }} />
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">Tiempo respuesta</p>
              <div className="font-display text-4xl sm:text-5xl font-black gradient-text leading-none" style={{ textShadow: '0 0 30px rgba(124,58,237,0.4)' }}>&lt;2 min</div>
              <p className="text-xs text-gray-600 mt-2">vs 2–4h manual</p>
            </div>

            {/* Stat 4 — ROI, neon featured */}
            <div className="col-span-2 rounded-2xl border border-brand-purple/40 bg-gradient-to-br from-brand-purple/12 to-dark-card p-5 flex items-center gap-5 relative overflow-hidden neon-card group"
              style={{ boxShadow: '0 0 20px rgba(124,58,237,0.15), 0 0 50px rgba(124,58,237,0.06)' }}>
              <div className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl opacity-80"
                style={{ background: 'linear-gradient(90deg, transparent, #7C3AED, #06B6D4, transparent)' }} />
              <CountUp
                to={3}
                suffix="×"
                className="font-display font-black gradient-text leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', textShadow: '0 0 40px rgba(124,58,237,0.5)' }}
              />
              <div>
                <p className="font-display text-base font-bold text-white tracking-tight">ROI en los primeros 90 días</p>
                <p className="text-sm text-gray-500 mt-1">Setup recuperado en un trimestre</p>
              </div>
              {/* Shimmer */}
              <div className="absolute inset-0 rounded-2xl shimmer-bg opacity-40 pointer-events-none" />
            </div>

          </div>
        </AnimateIn>

        {/* Case studies */}
        <AnimateIn animation="fade-in-up" delay={200} className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Casos de uso reales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {cases.map((c, i) => (
              <AnimateIn
                key={c.niche}
                animation="fade-in-up"
                delay={i * 80}
                className="p-5 rounded-2xl bg-dark-card border border-dark-border relative overflow-hidden group neon-card"
              >
                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }}
                />
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-white text-sm">{c.niche}</p>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}25` }}
                  >
                    {c.metric}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{c.result}</p>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>

        {/* CTA */}
        <AnimateIn animation="fade-in-up" delay={300}>
          <div className="rounded-2xl border border-brand-purple/20 bg-gradient-to-r from-brand-purple/8 via-dark-card to-brand-cyan/8 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl" style={{ background: 'linear-gradient(90deg, transparent, #7C3AED, #06B6D4, transparent)' }} />
            <div>
              <p className="font-display font-bold text-white text-lg sm:text-xl mb-1">¿Cuánto estás perdiendo cada semana?</p>
              <p className="text-sm text-gray-500">Hablemos y calculamos el ROI real para tu negocio puntual.</p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-purple hover:bg-brand-purple-light transition-colors font-display font-semibold text-sm whitespace-nowrap glow-purple cursor-pointer flex-shrink-0"
            >
              Agendar diagnóstico gratis
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
