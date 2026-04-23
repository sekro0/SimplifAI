'use client'
import { useState, useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const [isClicking, setIsClicking] = useState(false)
  const pos = useRef({ x: -200, y: -200 })
  const ringPos = useRef({ x: -200, y: -200 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      setIsHidden(false)

      // Check if cursor is over a clickable element
      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (el) {
        const style = window.getComputedStyle(el)
        const tag = el.tagName.toLowerCase()
        setIsPointer(
          style.cursor === 'pointer' ||
          tag === 'a' || tag === 'button' ||
          el.closest('a') !== null || el.closest('button') !== null
        )
      }
    }

    const onLeave = () => setIsHidden(true)
    const onEnter = () => setIsHidden(false)
    const onDown = () => setIsClicking(true)
    const onUp = () => setIsClicking(false)

    // Smooth ring follow via rAF
    const animate = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12)
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12)

      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`
        dotRef.current.style.top = `${pos.current.y}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`
        ringRef.current.style.top = `${ringPos.current.y}px`
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${ringPos.current.x}px`
        glowRef.current.style.top = `${ringPos.current.y}px`
      }

      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    // Hide default cursor
    document.documentElement.style.cursor = 'none'

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.documentElement.style.cursor = ''
    }
  }, [])

  if (isHidden && pos.current.x === -200) return null

  const size = isPointer ? 44 : isClicking ? 8 : 10
  const ringSize = isPointer ? 16 : 36

  return (
    <>
      {/* Main dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[99999]"
        style={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          borderRadius: '50%',
          background: isPointer
            ? 'transparent'
            : 'rgba(167, 139, 250, 0.95)',
          border: isPointer ? '1.5px solid rgba(124,58,237,0.9)' : 'none',
          boxShadow: isPointer
            ? '0 0 16px rgba(124,58,237,0.7), 0 0 32px rgba(124,58,237,0.3)'
            : '0 0 8px rgba(167,139,250,0.8)',
          transition: 'width 0.15s ease, height 0.15s ease, background 0.15s ease, border 0.15s ease',
          opacity: isHidden ? 0 : 1,
        }}
      />

      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[99998]"
        style={{
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          borderRadius: '50%',
          border: `1px solid rgba(124,58,237,${isPointer ? '0.6' : '0.35'})`,
          boxShadow: `0 0 12px rgba(124,58,237,${isPointer ? '0.3' : '0.15'})`,
          transition: 'width 0.2s ease, height 0.2s ease, border 0.2s ease',
          opacity: isHidden ? 0 : 0.8,
        }}
      />

      {/* Outer glow blob */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[99997]"
        style={{
          width: 80,
          height: 80,
          marginLeft: -40,
          marginTop: -40,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          opacity: isHidden ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  )
}
