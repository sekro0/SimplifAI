'use client'
import { useInView } from '../hooks/useInView'

type AnimationType = 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'fade-in'

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

function getHiddenTransform(animation: AnimationType): string {
  switch (animation) {
    case 'fade-in-up':    return 'translateY(30px)'
    case 'fade-in-left':  return 'translateX(-30px)'
    case 'fade-in-right': return 'translateX(30px)'
    case 'scale-in':      return 'scale(0.92)'
    default:              return 'translateY(0px)'
  }
}

function getVisibleTransform(animation: AnimationType): string {
  switch (animation) {
    case 'fade-in-left':
    case 'fade-in-right': return 'translateX(0px)'
    case 'scale-in':      return 'scale(1)'
    default:              return 'translateY(0px)'
  }
}

interface Props {
  children: React.ReactNode
  animation?: AnimationType
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
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? getVisibleTransform(animation) : getHiddenTransform(animation),
        transition: `opacity 0.7s ${EASE} ${delay}ms, transform 0.7s ${EASE} ${delay}ms`,
        willChange: isInView ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
