'use client'
import { useGradientCursor, GradientCursorOptions } from './use-gradient-cursor'

export interface GradientCursorProps extends GradientCursorOptions {
  zIndex?: number
  className?: string
}

export function GradientCursor({ zIndex = 0, className, ...options }: GradientCursorProps) {
  const ref = useGradientCursor(options)

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex,
      }}
    />
  )
}
