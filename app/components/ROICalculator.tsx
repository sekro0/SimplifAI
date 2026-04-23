'use client'
import { useState, useMemo } from 'react'

function Slider({
  label, value, min, max, step = 1, format, onChange,
  color = '#7C3AED'
}: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  format: (v: number) => string
  onChange: (v: number) => void
  color?: string
}) {
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">{label}</span>
        <span
          className="text-base font-black font-display"
          style={{ color, textShadow: `0 0 20px ${color}60` }}
        >
          {format(value)}
        </span>
      </div>
      <div className="relative">
        {/* Track */}
        <div className="w-full h-1.5 rounded-full bg-white/8 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full rounded-full transition-all duration-100"
            style={{
              width: `${pct}%`,
              background: `linear-gradient(90deg, ${color}80, ${color})`,
              boxShadow: `0 0 8px ${color}60`,
            }}
          />
        </div>
        {/* Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
          style={{ WebkitAppearance: 'none' }}
        />
        {/* Thumb visual */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-dark-bg transition-all duration-100 pointer-events-none"
          style={{
            left: `calc(${pct}% - 8px)`,
            background: color,
            boxShadow: `0 0 12px ${color}80, 0 0 24px ${color}40`,
          }}
        />
      </div>
    </div>
  )
}

export default function ROICalculator() {
  const [hours, setHours] = useState(15)
  const [rate, setRate] = useState(20)

  const monthly = useMemo(() => hours * rate * 4, [hours, rate])
  const annual = useMemo(() => monthly * 12, [monthly])
  const setupMid = 2000
  const recoveryMonths = useMemo(() => Math.ceil(setupMid / monthly), [monthly])

  const fmt = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(1)}k` : `$${n}`

  return (
    <div
      className="rounded-2xl border relative overflow-hidden"
      style={{
        borderColor: 'rgba(124,58,237,0.4)',
        background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(13,13,26,0.95) 60%, rgba(6,182,212,0.05) 100%)',
        boxShadow: '0 0 30px rgba(124,58,237,0.12), 0 0 80px rgba(124,58,237,0.05)',
      }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{ background: 'linear-gradient(90deg, transparent, #7C3AED, #06B6D4, transparent)' }}
      />

      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', boxShadow: '0 0 16px rgba(124,58,237,0.3)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-base tracking-tight">Calculadora de ROI</h3>
            <p className="text-xs text-gray-500">Cuánto podés ahorrar automatizando</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: sliders */}
          <div>
            <Slider
              label="Horas semanales en tareas repetitivas"
              value={hours}
              min={5}
              max={50}
              format={(v) => `${v}h`}
              onChange={setHours}
              color="#9F67FF"
            />
            <Slider
              label="Costo promedio/hora de tu equipo (USD)"
              value={rate}
              min={5}
              max={100}
              step={5}
              format={(v) => `$${v}`}
              onChange={setRate}
              color="#06B6D4"
            />
          </div>

          {/* Right: results */}
          <div className="flex flex-col justify-between gap-4">
            {/* Big result */}
            <div
              className="rounded-xl p-4 flex-1 flex flex-col justify-center relative overflow-hidden"
              style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)' }}
            >
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Ahorro mensual estimado</p>
              <div
                className="font-display font-black leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', background: 'linear-gradient(135deg, #A56BFF, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: 'none', filter: 'drop-shadow(0 0 20px rgba(124,58,237,0.5))' }}
              >
                {fmt(monthly)}
              </div>
              <p className="text-xs text-gray-500 mt-1">{fmt(annual)} por año</p>
            </div>

            {/* Recovery badge */}
            <div
              className="rounded-xl p-3 flex items-center gap-3"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(16,185,129,0.15)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9,11 12,14 22,4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-emerald-400 font-semibold">Setup recuperado en {recoveryMonths} {recoveryMonths === 1 ? 'mes' : 'meses'}</p>
                <p className="text-xs text-gray-600">Setup típico: ~$2.000</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="block text-center py-3.5 rounded-xl font-display font-bold text-sm text-white cursor-pointer transition-all hover:scale-[1.03] active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                boxShadow: '0 0 20px rgba(124,58,237,0.4), 0 0 50px rgba(124,58,237,0.15)',
              }}
            >
              Quiero ahorrar {fmt(monthly)}/mes →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
