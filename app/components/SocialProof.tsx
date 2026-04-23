'use client'
import AnimateIn from './AnimateIn'

const testimonials = [
  {
    quote: 'En dos semanas dejamos de perder turnos. El bot agenda solo y confirma por WhatsApp. Ahorramos 32h al mes.',
    name: 'María González',
    role: 'Dueña',
    company: 'Consultorio Salud+',
    initial: 'M',
    metric: '−40% no-shows',
    color: '#06B6D4',
  },
  {
    quote: 'Perdíamos 3 leads por día de portales inmobiliarios. Ahora se contactan solos en menos de 90 segundos. Cambió el negocio.',
    name: 'Julián Pérez',
    role: 'Broker',
    company: 'Pérez Propiedades',
    initial: 'J',
    metric: '+100% leads contactados',
    color: '#9F67FF',
  },
  {
    quote: 'Las alertas de vencimientos las hacíamos a mano para 45 clientes. Hoy son 0 minutos al mes. El retainer se paga solo.',
    name: 'Carolina Ruiz',
    role: 'Contadora',
    company: 'Ruiz & Asociados',
    initial: 'C',
    metric: '6h → 0 min/mes',
    color: '#10B981',
  },
]

const industries = [
  { label: 'Clínicas', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
      <path d="M12 14v4M10 16h4" />
    </svg>
  )},
  { label: 'Inmobiliarias', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2V10z" />
    </svg>
  )},
  { label: 'Estudios contables', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  )},
  { label: 'E-commerce', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" />
    </svg>
  )},
  { label: 'Servicios B2B', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 7h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
    </svg>
  )},
  { label: 'Marketing', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l18-7-7 18-2-8z" />
    </svg>
  )},
]

export default function SocialProof() {
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />

      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-cyan/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <AnimateIn animation="fade-in-up" className="text-center mb-14">
          <p className="label-overline text-brand-cyan mb-3">Confianza</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Negocios reales.{' '}
            <span className="gradient-text">Resultados reales.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            No vendemos tecnología de moda. Implementamos automatizaciones que ya funcionan hoy en PYMEs argentinas.
          </p>
        </AnimateIn>

        {/* Industry strip */}
        <AnimateIn animation="fade-in" delay={80}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-6 px-4 mb-12 rounded-2xl border border-dark-border bg-dark-card/40">
            <span className="text-[11px] font-bold tracking-widest text-gray-600 uppercase">
              Trabajamos con
            </span>
            {industries.map((it) => (
              <div key={it.label} className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors cursor-default">
                <span className="text-brand-purple-light/70">{it.icon}</span>
                <span className="text-sm font-medium">{it.label}</span>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} animation="fade-in-up" delay={i * 120}>
              <div className="relative h-full rounded-2xl border border-dark-border bg-dark-card p-6 flex flex-col neon-card overflow-hidden group">
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }}
                />

                {/* Quote mark */}
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="mb-4 opacity-30" style={{ color: t.color }}>
                  <path d="M0 22V13.2C0 9.73 0.76 6.7 2.3 4.1C3.83 1.5 6.3 0 9.7 0v4.5C8.2 4.5 7 4.9 6 5.7c-1 0.8-1.5 1.9-1.5 3.3H9.5V22H0zm16 0V13.2c0-3.47 0.77-6.5 2.3-9.1C19.83 1.5 22.3 0 25.7 0v4.5c-1.5 0-2.7 0.4-3.7 1.2-1 0.8-1.5 1.9-1.5 3.3h5V22h-9.5z" fill="currentColor"/>
                </svg>

                {/* Quote */}
                <p className="text-[15px] text-gray-200 leading-relaxed mb-6 flex-1">
                  {t.quote}
                </p>

                {/* Metric badge */}
                <div className="mb-5">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${t.color}18`, color: t.color, border: `1px solid ${t.color}35` }}
                  >
                    {t.metric}
                  </span>
                </div>

                {/* Person */}
                <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}40, ${t.color}15)`,
                      border: `1px solid ${t.color}40`,
                      color: t.color,
                    }}
                  >
                    {t.initial}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-tight truncate">{t.name}</p>
                    <p className="text-xs text-gray-500 truncate">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Guarantee row */}
        <AnimateIn animation="fade-in-up" delay={400} className="mt-10">
          <div className="rounded-2xl border border-brand-purple/20 bg-gradient-to-r from-brand-purple/8 via-dark-card to-brand-cyan/8 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl" style={{ background: 'linear-gradient(90deg, transparent, #7C3AED, #06B6D4, transparent)' }} />
            <div className="w-12 h-12 rounded-xl bg-brand-purple/15 border border-brand-purple/30 flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-display font-bold text-white text-base sm:text-lg mb-0.5">
                Garantía de satisfacción · 14 días
              </p>
              <p className="text-sm text-gray-400">
                Si en los primeros 14 días no ves valor, te devolvemos el setup fee. Sin preguntas.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
