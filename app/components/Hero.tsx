'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import type { ReactNode, CSSProperties } from 'react'

function MagneticButton({ children, className, href, style }: { children: ReactNode; className?: string; href?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3
    el.style.transform = `translate(${x}px, ${y}px)`
    el.style.transition = 'transform 0.1s ease'
  }, [])
  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0,0)'
    el.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1)'
  }, [])
  return (
    <a ref={ref} href={href} className={className} style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </a>
  )
}

const cycleWords = ['crecer', 'vender', 'escalar', 'liderar', 'innovar']

function CyclingWord() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setIdx(i => (i + 1) % cycleWords.length); setVisible(true) }, 260)
    }, 2500)
    return () => clearInterval(timer)
  }, [])
  return (
    <span style={{
      display: 'inline-block',
      position: 'relative',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(-8px)',
      transition: 'opacity 0.26s cubic-bezier(0.4,0,0.2,1), transform 0.26s cubic-bezier(0.4,0,0.2,1)',
    }}>
      <span className="gradient-text" style={{
        filter: 'drop-shadow(0 0 22px rgba(124,58,237,0.35))',
      }}>
        {cycleWords[idx]}
      </span>
      {/* Animated underline */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', left: '-2%', bottom: '-0.18em', width: '104%', height: '0.22em', overflow: 'visible' }}
        viewBox="0 0 100 10" preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cw-underline" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <path
          key={idx}
          d="M 0 5 Q 25 0 50 5 T 100 5"
          stroke="url(#cw-underline)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: 110,
            strokeDashoffset: visible ? 0 : 110,
            transition: 'stroke-dashoffset 0.6s cubic-bezier(0.4,0,0.2,1) 0.15s',
            filter: 'drop-shadow(0 0 6px rgba(124,58,237,0.6))',
          }}
        />
      </svg>
    </span>
  )
}

const inputNodes = [
  {
    label: 'WhatsApp',
    color: '#25D366',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.87 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013.77 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l.91-.91a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    color: '#06B6D4',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <polyline points="2,9 12,13 22,9"/>
      </svg>
    ),
  },
  {
    label: 'Formulario',
    color: '#9F67FF',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
  },
]

const outputNodes = [
  {
    label: 'CRM',
    color: '#9F67FF',
    stat: '247 leads/mes',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    label: 'Agenda',
    color: '#06B6D4',
    stat: '0 no-shows',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    label: 'Reportes',
    color: '#10B981',
    stat: '6h → 0 min',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
]

function AutomationFlow() {
  const [activeLine, setActiveLine] = useState(0)
  const [hovered, setHovered] = useState<{ side: 'in' | 'out'; idx: number } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputNodeRefs = useRef<(HTMLDivElement | null)[]>([null, null, null])
  const outputNodeRefs = useRef<(HTMLDivElement | null)[]>([null, null, null])
  const centerNodeRef = useRef<HTMLDivElement>(null)
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 })
  const [inputPaths, setInputPaths] = useState<{ d: string; color: string }[]>([])
  const [outputPaths, setOutputPaths] = useState<{ d: string; color: string }[]>([])

  useEffect(() => {
    if (hovered) return
    const t = setInterval(() => setActiveLine(l => (l + 1) % 3), 1800)
    return () => clearInterval(t)
  }, [hovered])

  const buildPaths = useCallback(() => {
    const container = containerRef.current
    const center = centerNodeRef.current
    if (!container || !center) return
    const cRect = container.getBoundingClientRect()
    const ccRect = center.getBoundingClientRect()
    const clx = ccRect.left - cRect.left
    const crx = ccRect.right - cRect.left
    const cy = ccRect.top - cRect.top + ccRect.height / 2
    const iP: { d: string; color: string }[] = []
    inputNodeRefs.current.forEach((ref, i) => {
      if (!ref) return
      const r = ref.getBoundingClientRect()
      const x1 = r.right - cRect.left
      const y1 = r.top - cRect.top + r.height / 2
      const mx = (clx - x1) * 0.55
      iP.push({ d: `M ${x1} ${y1} C ${x1 + mx} ${y1}, ${clx - mx} ${cy}, ${clx} ${cy}`, color: inputNodes[i].color })
    })
    const oP: { d: string; color: string }[] = []
    outputNodeRefs.current.forEach((ref, i) => {
      if (!ref) return
      const r = ref.getBoundingClientRect()
      const x2 = r.left - cRect.left
      const y2 = r.top - cRect.top + r.height / 2
      const mx = (x2 - crx) * 0.55
      oP.push({ d: `M ${crx} ${cy} C ${crx + mx} ${cy}, ${x2 - mx} ${y2}, ${x2} ${y2}`, color: outputNodes[i].color })
    })
    setSvgSize({ w: cRect.width, h: cRect.height })
    setInputPaths(iP)
    setOutputPaths(oP)
  }, [])

  useEffect(() => {
    const id = setTimeout(buildPaths, 60)
    window.addEventListener('resize', buildPaths)
    return () => { clearTimeout(id); window.removeEventListener('resize', buildPaths) }
  }, [buildPaths])

  return (
    <div className="rounded-2xl overflow-hidden" style={{
      background: 'linear-gradient(160deg, rgba(19,19,31,0.97) 0%, rgba(13,13,26,0.99) 100%)',
      border: '1px solid rgba(124,58,237,0.35)',
      boxShadow: '0 0 15px rgba(124,58,237,0.25), 0 0 50px rgba(124,58,237,0.1), 0 24px 64px rgba(0,0,0,0.5)',
    }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-glow-pulse" />
          <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase">Flujo activo</span>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium bg-emerald-400/8 border border-emerald-400/20 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          En vivo
        </span>
      </div>

      {/* Flow diagram */}
      <div className="p-5">
        <div
          ref={containerRef}
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr 80px 1fr',
            gridTemplateRows: 'repeat(3, auto)',
            rowGap: '10px',
            alignItems: 'center',
          }}
        >
          {/* SVG overlay — bezier curves connecting every node to the center hub */}
          {svgSize.w > 0 && (
            <svg style={{ position: 'absolute', top: 0, left: 0, width: svgSize.w, height: svgSize.h, pointerEvents: 'none', overflow: 'visible', zIndex: 1 }}>
              {inputPaths.map(({ d, color }, i) => {
                const isAuto = !hovered && activeLine === i
                const isHoverIn = hovered?.side === 'in' && hovered.idx === i
                const isHighlighted = isAuto || isHoverIn
                const isDimmed = !!hovered && !isHoverIn
                return (
                  <path key={`in-${i}`} d={d} fill="none"
                    stroke={isHighlighted ? color : 'rgba(255,255,255,0.1)'}
                    strokeWidth={isHighlighted ? 2 : 1.5}
                    strokeDasharray="5 4" strokeLinecap="round"
                    opacity={isDimmed ? 0.2 : 1}
                    style={{ transition: 'stroke 0.3s ease, opacity 0.3s ease, stroke-width 0.3s ease' }}>
                    {isHighlighted && <animate attributeName="stroke-dashoffset" values="18;0" dur="0.8s" repeatCount="indefinite" />}
                  </path>
                )
              })}
              {outputPaths.map(({ d, color }, i) => {
                const pairingMap = [2, 1, 0] // output[0]=CRM↔Formulario, output[1]=Agenda↔Email, output[2]=Reportes↔WhatsApp
                const pairedInput = pairingMap[i]
                const isAuto = !hovered && activeLine === pairedInput
                const isHoverOut = hovered?.side === 'out' && hovered.idx === i
                const isHoverInPair = hovered?.side === 'in' && hovered.idx === pairedInput
                const isHighlighted = isAuto || isHoverOut || isHoverInPair
                const isDimmed = !!hovered && !isHighlighted
                return (
                  <path key={`out-${i}`} d={d} fill="none"
                    stroke={isHighlighted ? color : 'rgba(255,255,255,0.1)'}
                    strokeWidth={isHighlighted ? 2 : 1.5}
                    strokeDasharray="5 4" strokeLinecap="round"
                    opacity={isDimmed ? 0.15 : isHighlighted ? 1 : 0.65}
                    style={{ transition: 'stroke 0.3s ease, opacity 0.3s ease, stroke-width 0.3s ease' }}>
                    <animate attributeName="stroke-dashoffset" values="18;0" dur="0.8s" repeatCount="indefinite" begin={`${i * 0.25}s`} />
                  </path>
                )
              })}
            </svg>
          )}

          {/* Input nodes — col 1 */}
          {inputNodes.map((n, i) => {
            const isAuto = !hovered && activeLine === i
            const isHovered = hovered?.side === 'in' && hovered.idx === i
            const isActive = isAuto || isHovered
            const isDimmed = !!hovered && !isHovered
            return (
              <div key={n.label} style={{ gridColumn: 1, gridRow: i + 1, position: 'relative', zIndex: 2 }}>
                <div
                  ref={el => { inputNodeRefs.current[i] = el }}
                  onMouseEnter={() => setHovered({ side: 'in', idx: i })}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-300 w-fit cursor-pointer"
                  style={{
                    background: isActive ? `${n.color}18` : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${isActive ? n.color + '55' : 'rgba(255,255,255,0.06)'}`,
                    opacity: isDimmed ? 0.35 : 1,
                    transform: isHovered ? 'translateX(2px)' : 'translateX(0)',
                    boxShadow: isActive ? `0 0 20px ${n.color}30` : 'none',
                  }}
                >
                  <span className="w-[26px] h-[26px] rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${n.color}22`, color: n.color }}>
                    {n.icon}
                  </span>
                  <span className="text-xs font-medium text-gray-300 whitespace-nowrap">{n.label}</span>
                </div>
              </div>
            )
          })}

          {/* AI center node — col 2, spans all 3 rows */}
          <div style={{ gridColumn: 2, gridRow: '1 / 4', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
            <div className="relative">
              <div
                ref={centerNodeRef}
                className="w-[56px] h-[56px] rounded-2xl flex items-center justify-center relative z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.45) 0%, rgba(6,182,212,0.28) 100%)',
                  border: '1.5px solid rgba(124,58,237,0.65)',
                  boxShadow: '0 0 32px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.12)',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#A78BFA" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M2 17l10 5 10-5" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
                </svg>
              </div>
              <div
                className="absolute inset-0 rounded-2xl animate-ping opacity-20"
                style={{ background: 'rgba(124,58,237,0.4)', animationDuration: '2.5s', margin: '2px' }}
              />
            </div>
          </div>

          {/* Output nodes — col 3 */}
          {outputNodes.map((n, i) => {
            const pairingMap = [2, 1, 0]
            const pairedInput = pairingMap[i]
            const isAuto = !hovered && activeLine === pairedInput
            const isHoveredOut = hovered?.side === 'out' && hovered.idx === i
            const isHoveredInPair = hovered?.side === 'in' && hovered.idx === pairedInput
            const isActive = isAuto || isHoveredOut || isHoveredInPair
            const isDimmed = !!hovered && !isActive
            return (
            <div key={n.label} style={{ gridColumn: 3, gridRow: i + 1, display: 'flex', justifyContent: 'flex-end', position: 'relative', zIndex: 2 }}>
              <div
                ref={el => { outputNodeRefs.current[i] = el }}
                onMouseEnter={() => setHovered({ side: 'out', idx: i })}
                onMouseLeave={() => setHovered(null)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl flex-shrink-0 transition-all duration-300 cursor-pointer"
                style={{
                  background: isActive ? `${n.color}18` : `${n.color}10`,
                  border: `1px solid ${isActive ? n.color + '55' : n.color + '30'}`,
                  opacity: isDimmed ? 0.35 : 1,
                  transform: isHoveredOut ? 'translateX(-2px)' : 'translateX(0)',
                  boxShadow: isActive ? `0 0 20px ${n.color}30` : 'none',
                }}
              >
                <span className="w-[26px] h-[26px] rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${n.color}22`, color: n.color }}>
                  {n.icon}
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-gray-200 leading-tight whitespace-nowrap">{n.label}</div>
                  <div className="text-[10px] text-gray-600 mt-0.5 whitespace-nowrap">{n.stat}</div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>

      {/* Bottom stats */}
      <div className="flex" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        {[
          { v: '24/7', l: 'Siempre activo' },
          { v: '< 2 min', l: 'Respuesta' },
          { v: '−80%', l: 'Trabajo manual' },
        ].map((s, i) => (
          <div key={s.l} className={`flex-1 px-3 py-3 text-center ${i > 0 ? 'border-l border-white/5' : ''}`}>
            <div className="text-xs font-bold gradient-text leading-none">{s.v}</div>
            <div className="text-[10px] text-gray-600 mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hasMouse, setHasMouse] = useState(false)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      setHasMouse(true)
    }
    const onLeave = () => setHasMouse(false)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-purple/7 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[110px] pointer-events-none animate-float-slow" />

      {/* Mouse spotlight */}
      {hasMouse && (
        <div className="absolute pointer-events-none" style={{
          width: '600px', height: '600px',
          left: mouse.x - 300, top: mouse.y - 300,
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)',
          borderRadius: '50%',
        }} />
      )}

      {/* ── Floating animated objects ─────────────────────────────── */}
      {/* Hexagon top-right */}
      <div className="absolute pointer-events-none" style={{ top: '12%', right: '6%', animation: 'float-a 9s ease-in-out infinite', opacity: 0.18 }}>
        <svg width="52" height="60" viewBox="0 0 52 60" fill="none">
          <polygon points="26,2 50,15 50,45 26,58 2,45 2,15" stroke="#9F67FF" strokeWidth="1.2" fill="none" />
          <polygon points="26,10 42,19 42,41 26,50 10,41 10,19" stroke="#06B6D4" strokeWidth="0.6" fill="none" opacity="0.5" />
        </svg>
      </div>
      {/* Hexagon bottom-left */}
      <div className="absolute pointer-events-none" style={{ bottom: '18%', left: '3%', animation: 'float-c 12s ease-in-out infinite 2s', opacity: 0.12 }}>
        <svg width="38" height="44" viewBox="0 0 52 60" fill="none">
          <polygon points="26,2 50,15 50,45 26,58 2,45 2,15" stroke="#06B6D4" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      {/* Small hexagon mid-left */}
      <div className="absolute pointer-events-none" style={{ top: '45%', left: '7%', animation: 'float-b 7s ease-in-out infinite 1s', opacity: 0.14 }}>
        <svg width="24" height="28" viewBox="0 0 52 60" fill="none">
          <polygon points="26,2 50,15 50,45 26,58 2,45 2,15" stroke="#9F67FF" strokeWidth="2" fill="rgba(159,103,255,0.04)" />
        </svg>
      </div>
      {/* Spinning ring top-left */}
      <div className="absolute pointer-events-none" style={{ top: '20%', left: '12%', animation: 'spin-slow 14s linear infinite', opacity: 0.13 }}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" stroke="#7C3AED" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="22" cy="22" r="13" stroke="#06B6D4" strokeWidth="0.6" strokeDasharray="3 5" />
        </svg>
      </div>
      {/* Spinning ring bottom-right */}
      <div className="absolute pointer-events-none" style={{ bottom: '25%', right: '10%', animation: 'spin-reverse 18s linear infinite', opacity: 0.11 }}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="#9F67FF" strokeWidth="0.8" strokeDasharray="8 5" />
        </svg>
      </div>
      {/* Glowing dot cluster top-center */}
      <div className="absolute pointer-events-none" style={{ top: '8%', left: '42%', animation: 'float-d 11s ease-in-out infinite 0.5s', opacity: 0.55 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#9F67FF', boxShadow: '0 0 10px 3px rgba(159,103,255,0.5)' }} />
      </div>
      <div className="absolute pointer-events-none" style={{ top: '15%', left: '38%', animation: 'drift-x 8s ease-in-out infinite 1.5s', opacity: 0.4 }}>
        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#06B6D4', boxShadow: '0 0 8px 2px rgba(6,182,212,0.5)' }} />
      </div>
      {/* Glowing dot bottom area */}
      <div className="absolute pointer-events-none" style={{ bottom: '30%', left: '28%', animation: 'float-b 10s ease-in-out infinite 3s', opacity: 0.45 }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#06B6D4', boxShadow: '0 0 12px 3px rgba(6,182,212,0.45)' }} />
      </div>
      {/* Pulsing ring — large, center-right */}
      <div className="absolute pointer-events-none" style={{ top: '30%', right: '18%', opacity: 0.12 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', border: '1px solid #7C3AED', animation: 'pulse-out 3.5s ease-out infinite' }} />
      </div>
      <div className="absolute pointer-events-none" style={{ top: '30%', right: '18%', opacity: 0.08 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', border: '1px solid #06B6D4', animation: 'pulse-out 3.5s ease-out infinite 1.75s' }} />
      </div>
      {/* Cross / plus shape */}
      <div className="absolute pointer-events-none" style={{ top: '65%', right: '4%', animation: 'float-a 13s ease-in-out infinite 4s', opacity: 0.16 }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <line x1="9" y1="0" x2="9" y2="18" stroke="#06B6D4" strokeWidth="1" />
          <line x1="0" y1="9" x2="18" y2="9" stroke="#06B6D4" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute pointer-events-none" style={{ top: '78%', left: '18%', animation: 'float-c 15s ease-in-out infinite 2s', opacity: 0.13 }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <line x1="7" y1="0" x2="7" y2="14" stroke="#9F67FF" strokeWidth="1" />
          <line x1="0" y1="7" x2="14" y2="7" stroke="#9F67FF" strokeWidth="1" />
        </svg>
      </div>

      {/* Grid lines — cyberpunk style */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:
          'linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 10%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 10%, transparent 100%)',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-dark-border bg-dark-card/80 text-sm mb-8 animate-fade-in-up"
              style={{ animationDelay: '0ms' }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
              </span>
              <span className="text-gray-400 font-medium">
                Automatización con IA para negocios que quieren escalar
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold tracking-tight mb-6 animate-fade-in-up"
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                lineHeight: 1.08,
                animationDelay: '80ms',
              }}
            >
              <span className="block text-white">Automatizamos</span>
              <span className="block text-white/25">tu negocio.</span>
              <span className="block text-white">Vos te enfocás</span>
              <span className="block">
                <span className="text-white/25">en </span>
                <CyclingWord />.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-xl animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              Dejá de perder leads, de gastar horas en tareas repetitivas y de
              depender de procesos manuales. Implementamos automatizaciones con IA
              que trabajan{' '}
              <strong className="text-gray-200 font-semibold">24/7 por vos</strong>.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-8 mb-12 animate-fade-in-up"
              style={{ animationDelay: '320ms' }}
            >
              <MagneticButton
                href="#contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-purple hover:bg-brand-purple-light transition-colors font-display font-semibold text-sm glow-purple cursor-pointer"
              >
                Agendar diagnóstico gratis
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MagneticButton>
              <MagneticButton
                href="#como-funciona"
                className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-xl border border-dark-border hover:border-brand-purple/40 transition-colors font-medium text-sm text-gray-400 hover:text-white cursor-pointer"
              >
                ¿Cómo funciona? →
              </MagneticButton>
            </div>

            {/* Trust badges */}
            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 text-[12px] text-gray-500 animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              {[
                'Sin tarjeta de crédito',
                'Diagnóstico 100% gratis',
                'Respuesta en < 2h',
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="text-brand-cyan">
                    <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>

            {/* Stats bar */}
            <div
              className="animate-fade-in-up flex items-center gap-0 border border-dark-border rounded-2xl overflow-hidden bg-dark-card/60 max-w-sm"
              style={{ animationDelay: '440ms' }}
            >
              {[
                { value: '24/7', label: 'Siempre activo' },
                { value: '−80%', label: 'Trabajo manual' },
                { value: '< 2 min', label: 'Resp. a leads' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`flex-1 text-center py-3.5 px-2 group cursor-default ${i === 1 ? 'border-x border-dark-border' : ''}`}
                >
                  <div className="font-display text-xl sm:text-2xl font-bold gradient-text leading-none mb-0.5 group-hover:scale-110 transition-transform duration-200">
                    {s.value}
                  </div>
                  <div className="text-[10px] text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Automation visual */}
          <div className="animate-fade-in-right" style={{ animationDelay: '200ms' }}>
            {/* Floating label */}
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-purple/20" />
              <span className="text-[11px] text-gray-600 font-medium tracking-wide">
                Así trabaja tu negocio 24/7
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-purple/20" />
            </div>
            <AutomationFlow />
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  )
}
