'use client'
import type { ReactNode, CSSProperties } from 'react'
import AnimateIn from './AnimateIn'
import { useTilt } from '../hooks/useTilt'

function TiltCard({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6)
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className} style={style}>
      {children}
    </div>
  )
}

const problems = [
  {
    number: '01',
    title: 'Perdés leads por no responder rápido',
    desc: 'El 78% de los leads cierra con el primero que responde. Si tardás más de 5 minutos, ya perdiste la oportunidad.',
    stat: '78% cierra con el primero',
    color: '#9F67FF',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.87 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013.77 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l.91-.91a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Tu equipo pierde horas en tareas repetitivas',
    desc: 'Recordatorios, carga de datos, seguimientos, reportes. Trabajo valioso que puede automatizarse hoy.',
    stat: '8–15 horas semanales recuperables',
    color: '#06B6D4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Procesos manuales que escalan mal',
    desc: 'Lo que funciona con 50 clientes colapsa con 200. Sin sistemas escalables, el crecimiento se convierte en caos.',
    stat: 'Sin sistemas = límite de crecimiento',
    color: '#9F67FF',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Información dispersa en múltiples canales',
    desc: 'WhatsApp, email, Instagram, formularios web. Todo por separado, sin visibilidad unificada ni trazabilidad.',
    stat: '4+ canales desconectados entre sí',
    color: '#06B6D4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Pagás por herramientas que no usás al máximo',
    desc: 'CRMs, plataformas y suscripciones sin integrar entre sí. Inversión que no rinde porque nada está conectado.',
    stat: '30–60% de herramientas subutilizadas',
    color: '#9F67FF',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Siempre estás apagando incendios',
    desc: 'Reactivo en vez de proactivo. El negocio depende demasiado de vos para funcionar. Eso no es escala, es dependencia.',
    stat: 'El negocio no puede funcionar sin vos',
    color: '#06B6D4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
      </svg>
    ),
  },
]

export default function Problems() {
  return (
    <section className="py-14 sm:py-24 relative">
      <div className="section-divider mb-14 sm:mb-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimateIn animation="fade-in-up" className="mb-10 sm:mb-16">
          <p className="label-overline text-brand-cyan mb-3">El problema real</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            ¿Te suena conocido?
          </h2>
          <p className="text-gray-400 max-w-xl text-base">
            Estos son los dolores que viven los negocios en crecimiento todos los días.
            Y todos tienen solución.
          </p>
        </AnimateIn>

        {/* Asymmetric bento grid — single col on mobile, 3-col on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {problems.map((p, i) => {
            // Zigzag: 0→col-2, 1→col-1, 2→col-1, 3→col-2, 4→col-2, 5→col-1
            const isWide = [0, 3, 4].includes(i)
            return (
              <AnimateIn
                key={p.number}
                animation="fade-in-up"
                delay={i * 70}
                className={isWide ? 'sm:col-span-2' : 'sm:col-span-1'}
              >
                <TiltCard
                  className="relative rounded-2xl p-6 border border-dark-border bg-dark-card group neon-card cursor-default h-full"
                  style={{ minHeight: '180px' }}
                >
                  {/* Top neon accent line — always visible */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
                  />

                  {/* Ghost number — larger, more dramatic */}
                  <span
                    className="absolute -bottom-4 -right-2 font-black leading-none select-none pointer-events-none"
                    style={{
                      fontSize: isWide ? '9rem' : '7rem',
                      color: 'transparent',
                      WebkitTextStroke: `1px ${p.color}14`,
                    }}
                  >
                    {p.number}
                  </span>

                  {/* Content layout: wide cards show icon+title+desc in row on sm+, stacked on mobile */}
                  {isWide ? (
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 relative z-10">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30`, boxShadow: `0 0 16px ${p.color}20` }}
                      >
                        {p.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-black tabular-nums" style={{ color: `${p.color}25`, WebkitTextStroke: `1px ${p.color}35` }}>{p.number}</span>
                          <h3 className="font-display font-bold text-white text-base tracking-tight leading-snug group-hover:text-gray-100 transition-colors duration-200">{p.title}</h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-3">{p.desc}</p>
                        <span
                          className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full"
                          style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25` }}
                        >
                          {p.stat}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30`, boxShadow: `0 0 16px ${p.color}20` }}
                        >
                          {p.icon}
                        </div>
                        <span className="text-3xl font-black tabular-nums" style={{ color: `${p.color}20`, WebkitTextStroke: `1px ${p.color}30` }}>{p.number}</span>
                      </div>
                      <h3 className="font-display font-bold text-white text-base mb-2 tracking-tight leading-snug group-hover:text-gray-100 transition-colors duration-200">{p.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                      <span
                        className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25` }}
                      >
                        {p.stat}
                      </span>
                    </div>
                  )}
                </TiltCard>
              </AnimateIn>
            )
          })}
        </div>

        {/* Bridge text */}
        <AnimateIn animation="fade-in-up" delay={200} className="mt-8 pt-6 sm:mt-10 sm:pt-8 border-t border-dark-border">
          <p className="text-base sm:text-lg text-gray-300">
            Cada uno de estos problemas{' '}
            <span className="text-white font-semibold">ya tiene solución automatizada</span>.
            El costo de no actuar es más alto que el de implementarla.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
