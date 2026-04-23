'use client'
import { useState } from 'react'
import AnimateIn from './AnimateIn'

type Plan = {
  name: string
  setupRange: string
  retainerMonthly: string
  retainerAnnual: string
  desc: string
  features: string[]
  highlight: boolean
  cta: string
  accentColor: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    setupRange: '$800 – $1.500',
    retainerMonthly: '$250 – $350 / mes',
    retainerAnnual: '$200 – $280 / mes',
    desc: 'Ideal para estudios contables o negocios con un proceso clave a automatizar.',
    features: [
      '1 flujo de automatización principal',
      'Integración con WhatsApp o email',
      'Panel de monitoreo básico',
      'Soporte por WhatsApp',
      '1 ajuste mensual incluido',
      'Reporte mensual de impacto',
    ],
    highlight: false,
    cta: 'Empezar con Starter',
    accentColor: '#9F67FF',
  },
  {
    name: 'Growth',
    setupRange: '$1.500 – $3.000',
    retainerMonthly: '$400 – $550 / mes',
    retainerAnnual: '$320 – $440 / mes',
    desc: 'Para clínicas, inmobiliarias o e-commerce con múltiples puntos de contacto.',
    features: [
      'Hasta 3 flujos de automatización',
      'WhatsApp + email + calendario',
      'Bot de respuestas con IA',
      'Integración con CRM o Airtable',
      'Hasta 3 ajustes mensuales',
      'Reporte detallado + reunión mensual',
    ],
    highlight: true,
    cta: 'Empezar con Growth',
    accentColor: '#7C3AED',
  },
  {
    name: 'Enterprise',
    setupRange: '$3.000 – $4.000+',
    retainerMonthly: '$600 – $800 / mes',
    retainerAnnual: '$480 – $640 / mes',
    desc: 'Para negocios con operaciones complejas, múltiples canales y equipo a bordo.',
    features: [
      'Flujos ilimitados',
      'Todos los canales disponibles',
      'RAG personalizado con documentos propios',
      'Integración con sistemas propios (ERP, CRM)',
      'Ajustes ilimitados',
      'Soporte prioritario + reuniones semanales',
    ],
    highlight: false,
    cta: 'Hablar de Enterprise',
    accentColor: '#06B6D4',
  },
]

const CheckIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="flex-shrink-0 mt-0.5">
    <path d="M1 5l3.5 3.5L11 1" stroke="#06B6D4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  return (
    <section id="precios" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimateIn animation="fade-in-up" className="text-center mb-10">
          <p className="label-overline text-brand-cyan mb-3">Inversión</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Precios claros,{' '}
            <span className="gradient-text">sin sorpresas</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Un único pago de setup para construir la automatización + un retainer mensual para mantenerla, mejorarla y monitorizarla.
          </p>
        </AnimateIn>

        {/* Billing toggle */}
        <AnimateIn animation="fade-in-up" delay={80} className="flex justify-center mb-12">
          <div className="relative inline-flex items-center p-1 rounded-full border border-dark-border bg-dark-card/60">
            {/* Sliding indicator */}
            <span
              className="absolute top-1 bottom-1 rounded-full bg-brand-purple shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 ease-out"
              style={{
                left: billing === 'monthly' ? '4px' : 'calc(50% + 0px)',
                right: billing === 'monthly' ? 'calc(50% + 0px)' : '4px',
              }}
            />
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${billing === 'monthly' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setBilling('annual')}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${billing === 'annual' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
            >
              Anual
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-colors ${billing === 'annual' ? 'bg-white/15 text-white' : 'bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30'}`}
              >
                −20%
              </span>
            </button>
          </div>
        </AnimateIn>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((p, i) => (
            <AnimateIn key={p.name} animation="scale-in" delay={i * 120}>
              <div
                className={`relative rounded-2xl border h-full flex flex-col group ${
                  p.highlight
                    ? 'bg-gradient-to-b from-brand-purple/18 to-dark-card scale-[1.02] neon-featured'
                    : 'bg-dark-card border-dark-border neon-card'
                }`}
              >
                {/* Accent top line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl transition-opacity duration-300 ${p.highlight ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`}
                  style={{ background: p.highlight
                    ? 'linear-gradient(90deg, transparent, #7C3AED, #06B6D4, transparent)'
                    : `linear-gradient(90deg, transparent, ${p.accentColor}, transparent)` }}
                />

                {/* Shimmer on highlighted */}
                {p.highlight && (
                  <div className="absolute inset-0 rounded-2xl shimmer-bg pointer-events-none opacity-30" />
                )}

                {/* Badge */}
                {p.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 rounded-full text-xs font-bold bg-brand-purple text-white border border-brand-purple-light/30">
                      Más elegido
                    </span>
                  </div>
                )}

                <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                  {/* Name */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.accentColor }} />
                      <h3 className="font-display text-xl font-bold text-white tracking-tight">{p.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{p.desc}</p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-dark-border">
                    <div className="mb-3">
                      <span className="text-[11px] text-gray-600 uppercase tracking-wider font-medium">Setup único</span>
                      <div className="font-display text-2xl font-bold text-white mt-0.5">{p.setupRange}</div>
                    </div>
                    <div>
                      <span className="text-[11px] text-gray-600 uppercase tracking-wider font-medium">
                        {billing === 'annual' ? 'Retainer (pagando anual)' : 'Retainer mensual'}
                      </span>
                      <div className="font-display text-xl font-bold mt-0.5" style={{ color: p.accentColor }}>
                        {billing === 'annual' ? p.retainerAnnual : p.retainerMonthly}
                      </div>
                      {billing === 'annual' && (
                        <div className="text-[10px] text-gray-600 mt-1 line-through">{p.retainerMonthly}</div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckIcon />
                        <span className="text-gray-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer ${
                      p.highlight
                        ? 'bg-brand-purple hover:bg-brand-purple-light text-white glow-purple'
                        : 'border border-dark-border-light hover:border-brand-purple/50 text-gray-300 hover:text-white hover:bg-white/4'
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Note */}
        <AnimateIn animation="fade-in" delay={400} className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            ¿No sabés cuál es el tuyo? En el diagnóstico gratuito lo definimos juntos.{' '}
            <a href="#contacto" className="text-brand-purple-light hover:underline cursor-pointer">
              Agendar diagnóstico →
            </a>
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
