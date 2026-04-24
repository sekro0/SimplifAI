'use client'
import { useInView } from '../hooks/useInView'

const animationMap = {
  'fade-in-up':    'fadeInUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) both',
  'fade-in-left':  'fadeInLeft 0.75s cubic-bezier(0.22, 1, 0.36, 1) both',
  'fade-in-right': 'fadeInRight 0.75s cubic-bezier(0.22, 1, 0.36, 1) both',
  'scale-in':      'scaleIn 0.65s cubic-bezier(0.34, 1.3, 0.64, 1) both',
  'fade-in':       'fadeIn 0.6s ease-out both',
}

interface Props {
  children: React.ReactNode
  animation?: keyof typeof animationMap
  delay?: number
  className?: string
}

export default function AnimateIn({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = '',
}: Props) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={
        isInView
          ? {
              animation: animationMap[animation],
              animationDelay: `${delay}ms`,
              willChange: 'auto',
            }
          : {
              opacity: 0,
              transform: getInitialTransform(animation),
              willChange: 'opacity, transform',
            }
      }
    >
      {children}
    </div>
  )
}

function getInitialTransform(animation: keyof typeof animationMap): string {
  switch (animation) {
    case 'fade-in-up':    return 'translateY(28px)'
    case 'fade-in-left':  return 'translateX(-28px)'
    case 'fade-in-right': return 'translateX(28px)'
    case 'scale-in':      return 'scale(0.9)'
    default:              return 'none'
  }
}
