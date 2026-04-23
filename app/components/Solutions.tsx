'use client'
import { useState } from 'react'
import AnimateIn from './AnimateIn'

const niches = [
  {
    id: 'clinicas',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <line x1="12" y1="13" x2="12" y2="17" />
        <line x1="10" y1="15" x2="14" y2="15" />
      </svg>
    ),
    label: 'Clínicas y consultorios',
    tagline: 'Nunca más un turno perdido',
    pain: 'Agendamiento manual, recordatorios por teléfono, fichas en papel o Excel.',
    color: 'from-blue-500/10 to-cyan-500/5',
    accent: 'border-blue-500/25',
    accentColor: '#3B82F6',
    tag: 'Mayor potencial',
    tagColor: 'bg-blue-500/15 text-blue-300 border border-blue-500/20',
    automations: [
      'Bot de WhatsApp que agenda turnos consultando Google Calendar',
      'Recordatorio automático 24hs antes con opción confirmar/cancelar',
      'Si cancela: el slot se libera y se re-oferta automáticamente',
      'Seguimiento de pacientes que no volvieron en X días',
      'Envío de indicaciones post-consulta según el tipo de consulta',
      'Encuesta de satisfacción automática post-turno',
    ],
    setup: '$1.500 – $4.000',
    retainer: '$400 – $800 / mes',
  },
  {
    id: 'inmobiliarias',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="1" />
        <polyline points="16,7 16,3 8,3 8,7" />
        <line x1="12" y1="12" x2="12" y2="17" />
        <line x1="9.5" y1="14.5" x2="14.5" y2="14.5" />
      </svg>
    ),
    label: 'Inmobiliarias',
    tagline: 'Ningún lead sin responder',
    pain: 'Leads de portales que quedan sin respuesta rápida y se pierden con la competencia.',
    color: 'from-brand-purple/10 to-pink-500/5',
    accent: 'border-brand-purple/25',
    accentColor: '#7C3AED',
    tag: 'ROI directo',
    tagColor: 'bg-brand-purple/15 text-purple-300 border border-brand-purple/20',
    automations: [
      'Centralización de leads de todas las fuentes en un CRM',
      'Respuesta automática con IA en menos de 2 minutos',
      'Calificación del lead: zona, precio, urgencia',
      'Agendamiento automático de visitas en el calendario',
      'Notificación inmediata al asesor por WhatsApp',
      'Secuencia de seguimiento: día 1, día 3, día 7',
    ],
    setup: '$1.200 – $3.000',
    retainer: '$300 – $600 / mes',
  },
  {
    id: 'contables',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="7" y1="8" x2="10" y2="8" />
        <line x1="8.5" y1="6.5" x2="8.5" y2="9.5" />
        <line x1="14" y1="8" x2="17" y2="8" />
        <line x1="14" y1="11" x2="17" y2="11" />
      </svg>
    ),
    label: 'Estudios contables',
    tagline: 'Procesos mensuales en piloto automático',
    pain: 'Tareas idénticas que se repiten cada mes para cada cliente.',
    color: 'from-emerald-500/10 to-teal-500/5',
    accent: 'border-emerald-500/25',
    accentColor: '#10B981',
    tag: 'Fácil de automatizar',
    tagColor: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20',
    automations: [
      'Alertas de vencimientos fiscales 7 días antes por WhatsApp',
      'Recepción de facturas por foto → IA extrae datos → carga en planilla',
      'Generación automática de reportes mensuales por cliente',
      'Recordatorio de documentación pendiente',
      'Cruce de calendario fiscal con lista de clientes',
      'Envío automático de resúmenes y estados de cuenta',
    ],
    setup: '$800 – $2.500',
    retainer: '$250 – $500 / mes',
  },
  {
    id: 'ecommerce',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    label: 'E-commerce',
    tagline: 'Ventas y atención sin intervención humana',
    pain: 'Consultas repetitivas, gestión de pedidos y reclamos en múltiples canales.',
    color: 'from-orange-500/10 to-yellow-500/5',
    accent: 'border-orange-500/25',
    accentColor: '#F97316',
    tag: 'Alta escala',
    tagColor: 'bg-orange-500/15 text-orange-300 border border-orange-500/20',
    automations: [
      'Respuesta automática a consultas de stock, envíos y pedidos',
      'Recuperación de carritos abandonados con mensaje personalizado',
      'Alertas de stock bajo + orden de reposición automática al proveedor',
      'Gestión de reseñas y reclamos post-compra con IA',
      'Sincronización de pedidos entre tienda, planilla y facturación',
      'Notificaciones de estado de envío en tiempo real',
    ],
    setup: '$1.000 – $3.500',
    retainer: '$350 – $700 / mes',
  },
]

const CheckIcon = ({ color }: { color: string }) => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
    <path d="M1 4l3 3 5-6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(0)
  const n = niches[activeTab]

  return (
    <section id="servicios" className="py-14 sm:py-24 relative">
      <div className="section-divider mb-14 sm:mb-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimateIn animation="fade-in-up" className="mb-10 sm:mb-14">
          <p className="label-overline text-brand-purple-light mb-3">
            Soluciones por industria
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Automatizaciones que{' '}
            <span className="gradient-text">generan resultados reales</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-base">
            No vendemos tecnología. Vendemos horas recuperadas, leads capturados
            y procesos que antes dependían de una persona.
          </p>
        </AnimateIn>

        <AnimateIn animation="fade-in-up" delay={100}>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">

            {/* Tab sidebar */}
            <div className="flex flex-row lg:flex-col gap-2 lg:w-56 shrink-0 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {niches.map((niche, i) => (
                <button
                  key={niche.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-200 shrink-0 lg:shrink border cursor-pointer min-h-[44px] ${
                    activeTab === i
                      ? 'bg-dark-card border-dark-border-light text-white'
                      : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/4'
                  }`}
                  style={activeTab === i ? {
                    boxShadow: `0 0 20px ${niche.accentColor}15`,
                    borderColor: `${niche.accentColor}30`,
                  } : {}}
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: activeTab === i ? `${niche.accentColor}18` : 'rgba(255,255,255,0.04)',
                      color: activeTab === i ? niche.accentColor : 'currentColor',
                      border: activeTab === i ? `1px solid ${niche.accentColor}25` : '1px solid transparent',
                    }}
                  >
                    {niche.icon}
                  </span>
                  <span className="text-sm font-medium">{niche.label}</span>
                  {activeTab === i && (
                    <span
                      className="hidden lg:block ml-auto w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: niche.accentColor }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content panel */}
            <div
              key={activeTab}
              className={`flex-1 p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${n.color} border ${n.accent} overflow-hidden`}
              style={{ animation: 'fadeIn 0.3s ease-out both' }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${n.tagColor} mb-3 inline-block`}>
                    {n.tag}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">{n.label}</h3>
                  <p className="text-sm font-medium text-white/60 mt-0.5">"{n.tagline}"</p>
                </div>
                <div
                  className="hidden sm:flex w-12 h-12 rounded-xl items-center justify-center flex-shrink-0"
                  style={{ background: `${n.accentColor}18`, color: n.accentColor, border: `1px solid ${n.accentColor}25` }}
                >
                  {n.icon}
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-5 pb-5 border-b border-white/8">{n.pain}</p>

              {/* Automations list */}
              <ul className="space-y-2.5 mb-7">
                {n.automations.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-gray-300">
                    <span
                      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${n.accentColor}18`, border: `1px solid ${n.accentColor}30` }}
                    >
                      <CheckIcon color={n.accentColor} />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>

              {/* Pricing + CTA */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4 sm:contents">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Setup</p>
                    <p className="text-sm font-semibold text-white">{n.setup}</p>
                  </div>
                  <div className="w-px h-7 bg-white/10 sm:hidden" />
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Retainer mensual</p>
                    <p className="text-sm font-semibold text-brand-cyan">{n.retainer}</p>
                  </div>
                </div>
                <a
                  href="#contacto"
                  className="sm:ml-auto text-sm px-5 py-3 sm:py-2.5 rounded-xl font-medium text-white transition-all border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 cursor-pointer text-center min-h-[44px] flex items-center justify-center"
                >
                  Agendar diagnóstico →
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
