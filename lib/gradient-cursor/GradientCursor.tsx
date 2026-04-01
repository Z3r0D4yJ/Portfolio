'use client'
import { useGradientCursor, GradientCursorOptions } from './use-gradient-cursor'

export interface GradientCursorProps extends GradientCursorOptions {
  /** CSS z-index for the overlay element (default: 0) */
  zIndex?: number
  /** Optional extra className applied to the overlay div */
  className?: string
}

/**
 * Renders a fixed full-viewport overlay whose radial-gradient background
 * follows the cursor, creating a soft ambient glow effect.
 *
 * Drop it anywhere in your layout — it renders `pointer-events: none` so it
 * never blocks interaction.
 *
 * @example
 * <GradientCursor color="#00ff88" size={700} opacity={0.07} />
 */
export function GradientCursor({
  zIndex = 0,
  className,
  ...options
}: GradientCursorProps) {
  const { background } = useGradientCursor(options)

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex,
        transition: 'opacity 0.3s',
        background,
      }}
    />
  )
}
