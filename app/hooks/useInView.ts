'use client'
import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.06) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Use the scroll container as root so IntersectionObserver works correctly
    // when html/body have overflow:hidden and scrolling happens inside a div
    const scrollRoot = document.getElementById('scroll-container') ?? null
    const isMobile = window.innerWidth < 768
    const rootMargin = isMobile ? '0px 0px -20px 0px' : '0px 0px -40px 0px'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { root: scrollRoot, threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}
