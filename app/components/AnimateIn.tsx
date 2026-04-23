'use client'
import { useInView } from '../hooks/useInView'

const animationMap = {
  'fade-in-up':    'fadeInUp 0.7s ease-out both',
  'fade-in-left':  'fadeInLeft 0.7s ease-out both',
  'fade-in-right': 'fadeInRight 0.7s ease-out both',
  'scale-in':      'scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both',
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
            }
          : {
              opacity: 0,
              transform: getExitTransform(animation),
              transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
            }
      }
    >
      {children}
    </div>
  )
}

function getExitTransform(animation: keyof typeof animationMap): string {
  switch (animation) {
    case 'fade-in-up':    return 'translateY(40px)'
    case 'fade-in-left':  return 'translateX(-40px)'
    case 'fade-in-right': return 'translateX(40px)'
    case 'scale-in':      return 'scale(0.85)'
    default:              return 'none'
  }
}
