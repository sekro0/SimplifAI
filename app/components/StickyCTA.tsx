'use client'
import { useEffect, useState } from 'react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const container = document.getElementById('scroll-container')
    const target = container || window

    const onScroll = () => {
      const scrollTop = container ? container.scrollTop : window.scrollY
      const viewportH = window.innerHeight
      // Show after passing the hero (roughly 1 viewport), hide near the bottom
      const scrollHeight = container ? container.scrollHeight : document.body.scrollHeight
      const distanceFromBottom = scrollHeight - (scrollTop + viewportH)
      setVisible(scrollTop > viewportH * 0.9 && distanceFromBottom > viewportH * 0.6)
    }

    target.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => target.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className="fixed left-1/2 z-[60] pointer-events-none"
      style={{
        bottom: '1.25rem',
        transform: `translateX(-50%) translateY(${visible ? '0' : '140%'})`,
        transition: 'transform 0.45s cubic-bezier(0.23,1,0.32,1), opacity 0.3s ease',
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="pointer-events-auto flex items-center gap-3 px-4 py-2.5 rounded-full border border-brand-purple/40 backdrop-blur-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(19,19,31,0.92), rgba(13,13,26,0.92))',
          boxShadow: '0 0 20px rgba(124,58,237,0.25), 0 10px 40px rgba(0,0,0,0.45)',
        }}
      >
        <span className="flex items-center gap-2 text-xs text-gray-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Respondemos en &lt; 2h
        </span>
        <span className="hidden sm:inline-block w-px h-4 bg-white/10" />
        <a
          href="#contacto"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-purple hover:bg-brand-purple-light transition-colors font-display font-semibold text-xs text-white cursor-pointer"
        >
          Agendar diagnóstico gratis
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}
