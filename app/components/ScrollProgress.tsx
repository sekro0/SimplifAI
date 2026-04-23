'use client'
import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = document.getElementById('scroll-container')
    if (!container) return

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      const total = scrollHeight - clientHeight
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0)
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[99990] h-[2px] bg-transparent pointer-events-none">
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #7C3AED, #A78BFA, #06B6D4)',
          boxShadow: '0 0 8px rgba(124,58,237,0.7), 0 0 20px rgba(124,58,237,0.3)',
          transition: 'width 0.08s linear',
          borderRadius: '0 2px 2px 0',
        }}
      />
    </div>
  )
}
