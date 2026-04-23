'use client'
import AnimateIn from './AnimateIn'

const integrations = [
  { name: 'n8n', label: 'n8n', color: '#FF6933', bg: '#FF693318', desc: 'Motor de flujos' },
  { name: 'Claude AI', label: 'AI', color: '#C49B6E', bg: '#C49B6E18', desc: 'Inteligencia artificial' },
  { name: 'WhatsApp', label: 'WA', color: '#25D366', bg: '#25D36618', desc: 'Mensajería' },
  { name: 'Google Calendar', label: 'GC', color: '#4285F4', bg: '#4285F418', desc: 'Agendamiento' },
  { name: 'Google Sheets', label: 'GS', color: '#34A853', bg: '#34A85318', desc: 'Planillas' },
  { name: 'HubSpot', label: 'HS', color: '#FF7A59', bg: '#FF7A5918', desc: 'CRM' },
  { name: 'Airtable', label: 'AT', color: '#FCB400', bg: '#FCB40018', desc: 'Base de datos' },
  { name: 'Supabase', label: 'SB', color: '#3ECF8E', bg: '#3ECF8E18', desc: 'Backend' },
  { name: 'Gmail', label: 'GM', color: '#EA4335', bg: '#EA433518', desc: 'Email' },
  { name: 'Slack', label: 'SL', color: '#E01E5A', bg: '#E01E5A18', desc: 'Notificaciones' },
  { name: 'Make', label: 'MK', color: '#9B5CF6', bg: '#9B5CF618', desc: 'Automatización visual' },
  { name: 'Mercado Libre', label: 'ML', color: '#FFE600', bg: '#FFE60018', desc: 'E-commerce' },
]

const industries = [
  {
    label: 'Clínicas', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <path d="M12 14v4M10 16h4" />
      </svg>
    ),
  },
  {
    label: 'Inmobiliarias', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2V10z" />
      </svg>
    ),
  },
  {
    label: 'Estudios contables', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    label: 'E-commerce', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" />
      </svg>
    ),
  },
  {
    label: 'Servicios B2B', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
      </svg>
    ),
  },
  {
    label: 'Marketing', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-7-7 18-2-8z" />
      </svg>
    ),
  },
]

export default function TechStack() {
  return (
    <section className="py-24 relative">
      <div className="section-divider mb-24" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Header */}
        <AnimateIn animation="fade-in-up" className="text-center mb-14">
          <p className="label-overline text-brand-cyan mb-3">Stack técnico</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Conectamos tu negocio con las{' '}
            <span className="gradient-text">mejores herramientas</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            No reinventamos la rueda. Usamos las plataformas líderes del mercado y las conectamos para que trabajen solas.
          </p>
        </AnimateIn>

        {/* Integrations grid */}
        <AnimateIn animation="fade-in-up" delay={80}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-10">
            {integrations.map((tool, i) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-dark-border hover:border-white/15 bg-dark-card/40 hover:bg-dark-card/70 transition-all duration-200 cursor-default"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {/* Logo badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-xs flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: tool.bg, color: tool.color, border: `1px solid ${tool.color}30` }}
                >
                  {tool.label}
                </div>
                {/* Name */}
                <p className="text-[11px] font-semibold text-gray-300 text-center leading-tight">{tool.name}</p>
                {/* Category */}
                <p className="text-[10px] text-gray-600 text-center leading-tight hidden sm:block">{tool.desc}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Callout: custom, not templates */}
        <AnimateIn animation="fade-in" delay={160}>
          <div className="flex items-center justify-center gap-3 mb-10 text-sm text-gray-500">
            <div className="h-px flex-1 bg-dark-border max-w-24" />
            <span className="px-3 py-1.5 rounded-full border border-dark-border bg-dark-card/50 text-xs font-medium">
              + integraciones custom a pedido
            </span>
            <div className="h-px flex-1 bg-dark-border max-w-24" />
          </div>
        </AnimateIn>

        {/* Industry strip */}
        <AnimateIn animation="fade-in" delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-5 px-4 mb-10 rounded-2xl border border-dark-border bg-dark-card/30">
            <span className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">
              Industrias que automatizamos
            </span>
            {industries.map((it) => (
              <div key={it.label} className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors cursor-default">
                <span className="text-brand-purple-light/70">{it.icon}</span>
                <span className="text-sm font-medium">{it.label}</span>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Guarantee row */}
        <AnimateIn animation="fade-in-up" delay={280}>
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
