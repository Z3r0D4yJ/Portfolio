'use client'
import { useEffect, useState } from 'react'

export interface GradientCursorOptions {
  /** Hex color string, e.g. "#00ff88" */
  color?: string
  /** Radial gradient radius in px (default: 700) */
  size?: number
  /** Center opacity (default: 0.07) */
  opacity?: number
  /** Spread stop as percentage (default: 75) */
  spread?: number
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  const full = clean.length === 3
    ? clean.split('').map((c) => c + c).join('')
    : clean
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ]
}

/**
 * Tracks the cursor position and returns a CSS `background` value for a
 * radial gradient that follows the mouse. Attach the returned style to any
 * `position: fixed; inset: 0` element to get a full-viewport cursor glow.
 *
 * @example
 * const { background } = useGradientCursor({ color: '#00ff88', size: 700 })
 */
export function useGradientCursor({
  color = '#00ff88',
  size = 700,
  opacity = 0.07,
  spread = 75,
}: GradientCursorOptions = {}) {
  const [background, setBackground] = useState<string>('transparent')

  useEffect(() => {
    const [r, g, b] = hexToRgb(color)

    function onMouseMove(e: MouseEvent) {
      setBackground(
        `radial-gradient(${size}px at ${e.clientX}px ${e.clientY}px, rgba(${r}, ${g}, ${b}, ${opacity}), transparent ${spread}%)`,
      )
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [color, size, opacity, spread])

  return { background }
}
