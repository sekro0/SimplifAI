'use client'
import { useEffect, useRef, useState } from 'react'

export function useInView(_threshold = 0.06) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const scrollContainer = document.getElementById('scroll-container')
    const offset = window.innerWidth < 768 ? 20 : 40

    const check = () => {
      const elRect = el.getBoundingClientRect()
      // containerBottom: how far from viewport top the scroll area ends
      const containerBottom = scrollContainer
        ? scrollContainer.getBoundingClientRect().bottom
        : window.innerHeight

      // Fire when element top enters the visible area (minus a small offset)
      if (elRect.top < containerBottom - offset && elRect.bottom > 0) {
        setIsInView(true)
        const target: EventTarget = scrollContainer ?? window
        target.removeEventListener('scroll', check)
      }
    }

    // Check immediately — handles elements already visible on mount
    check()

    const target: EventTarget = scrollContainer ?? window
    target.addEventListener('scroll', check, { passive: true } as AddEventListenerOptions)
    return () => target.removeEventListener('scroll', check)
  }, [])

  return { ref, isInView }
}
