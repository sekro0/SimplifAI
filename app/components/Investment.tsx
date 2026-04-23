'use client'
import { useState } from 'react'
import AnimateIn from './AnimateIn'

const factors = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 17.5h7M17.5 14v7" />
      </svg>
    ),
    title: 'Cantidad y complejidad de flujos',
    desc: 'Un bot de turnos por WhatsApp es diferente a un sistema completo con CRM, agendamiento, reportes y seguimiento. A más flujos interconectados, mayor alcance del proyecto.',
    color: '#7C3AED',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: 'Integraciones y APIs conectadas',
    desc: 'Cada plataforma que sumamos (WhatsApp Business, HubSpot, Google Calendar, Mercado Libre…) implica configuración, credenciales y mantenimiento. Las más exóticas suman tiempo.',
    color: '#06B6D4',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Volumen y escala del negocio',
    desc: 'Un consultorio con 50 turnos/mes tiene necesidades muy distintas a una inmobiliaria que recibe 500 leads. El volumen define la infraestructura necesaria y el retainer mensual.',
    color: '#10B981',
  },
]

const faqs = [
  {
    q: '¿Hay contrato de permanencia?',
    a: 'No. El retainer mensual se cancela con 30 días de aviso. Sin penalidades ni letras chicas.',
  },
  {
    q: '¿Cobran horas adicionales?',
    a: 'No. El setup tiene precio fijo acordado de antemano. Si algo tarda más de lo previsto, es nuestro problema, no el tuyo.',
  },
  {
    q: '¿Qué pasa si algo no funciona?',
    a: 'Garantía de 14 días: si en las primeras dos semanas no ves valor real, te devolvemos el 100% del setup fee.',
  },
  {
    q: '¿Puedo empezar con una sola automatización?',
    a: 'Sí, es lo que recomendamos. Arrancamos con el proceso que más duele, medimos el impacto y escalamos desde ahí.',
  },
  {
    q: '¿El retainer incluye soporte?',
    a: 'Sí. Incluye monitoreo, ajustes del flujo, actualizaciones de integraciones y soporte por WhatsApp en horario laboral.',
  },
  {
    q: '¿Puedo ver el trabajo antes de pagar?',
    a: 'El diagnóstico inicial es gratis. Antes de arrancar, te entregamos un mapa detallado de lo que vamos a automatizar y el precio exacto.',
  },
]

export default function Investment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="inversion" className="py-24 relative">
      <div className="section-divider mb-24" />

      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Header */}
        <AnimateIn animation="fade-in-up" className="mb-14">
          <p className="label-overline text-brand-purple-light mb-3">Inversión</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            ¿Cuánto cuesta?{' '}
            <span className="gradient-text">Depende de tu caso.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            No tenemos planes fijos porque cada negocio es distinto. Lo que sí tenemos es total transparencia sobre cómo armamos el presupuesto.
          </p>
        </AnimateIn>

        {/* Factors grid */}
        <AnimateIn animation="fade-in-up" delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {factors.map((f, i) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-dark-border bg-dark-card/50 flex flex-col gap-4 hover:border-white/15 transition-colors group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                  style={{ background: `${f.color}18`, color: f.color, border: `1px solid ${f.color}25` }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-[15px] mb-2 leading-snug">{f.title}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Price range visual */}
        <AnimateIn animation="fade-in-up" delay={160}>
          <div className="rounded-2xl border border-dark-border-light bg-gradient-to-br from-dark-card via-dark-card to-brand-purple/5 p-7 sm:p-8 mb-5 relative overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl" style={{ background: 'linear-gradient(90deg, transparent, #7C3AED60, #06B6D460, transparent)' }} />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mb-6">
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest mb-1.5">Setup único</p>
                <p className="font-display text-3xl sm:text-4xl font-bold text-white">
                  USD $800
                  <span className="text-lg text-gray-500 font-normal"> – </span>
                  $4.000
                </p>
                <p className="text-sm text-gray-500 mt-1">Pago único. Precio fijo cerrado antes de arrancar.</p>
              </div>

              <div className="hidden sm:block w-px h-16 bg-dark-border" />

              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest mb-1.5">Retainer mensual</p>
                <p className="font-display text-3xl sm:text-4xl font-bold gradient-text">
                  USD $250
                  <span className="text-lg text-gray-400 font-normal"> – </span>
                  $800
                  <span className="text-lg text-gray-400 font-normal">/mes</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">Incluye soporte, ajustes y monitoreo continuo.</p>
              </div>
            </div>

            {/* CTA inline */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-dark-border">
              <p className="text-[15px] text-gray-300 flex-1">
                <span className="text-white font-medium">El número exacto lo armamos juntos en 30 min.</span>
                {' '}En el diagnóstico gratuito analizamos tu caso y te damos el presupuesto cerrado.
              </p>
              <a
                href="#contacto"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold font-display text-sm bg-brand-purple hover:bg-brand-purple-light transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Agendar diagnóstico gratis
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Micro-FAQ */}
        <AnimateIn animation="fade-in-up" delay={240}>
          <div className="mt-12">
            <p className="font-display font-semibold text-white text-lg mb-5">Preguntas frecuentes sobre la inversión</p>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-dark-border bg-dark-card/40 overflow-hidden transition-colors hover:border-white/12"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                  >
                    <span className="text-sm font-medium text-gray-200">{faq.q}</span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                      className={`shrink-0 text-gray-500 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4">
                      <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  )
}
