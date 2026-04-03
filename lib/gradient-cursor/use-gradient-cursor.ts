'use client'
import { useEffect, useRef } from 'react'

export interface GradientCursorOptions {
  color?: string
  size?: number
  opacity?: number
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

export function useGradientCursor({
  color = '#00ff88',
  size = 500,
  opacity = 0.08,
  spread = 100,
}: GradientCursorOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const [r, g, b] = hexToRgb(color)
    const el = ref.current
    if (!el) return

    // Start off-screen so there's no flash in the top-left corner on load
    let x = -9999
    let y = -9999

    function render() {
      if (!el) return
      el.style.background = `radial-gradient(${size}px at ${x}px ${y}px, rgba(${r},${g},${b},${opacity}), transparent ${spread}%)`
    }

    function onMouseMove(e: MouseEvent) {
      x = e.clientX
      y = e.clientY
      render()
    }

    function onTouch(e: TouchEvent) {
      const t = e.touches[0]
      if (!t) return
      x = t.clientX
      y = t.clientY
      render()
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchstart', onTouch, { passive: true })
    window.addEventListener('touchmove', onTouch, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchstart', onTouch)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [color, size, opacity, spread])

  return ref
}
