/**
 * gradient-cursor
 *
 * A tiny React library for a radial-gradient cursor glow effect.
 *
 * Usage - component:
 *   import { GradientCursor } from '@/lib/gradient-cursor'
 *   <GradientCursor color="#00ff88" size={700} opacity={0.07} />
 *
 * Usage - hook (bring your own element):
 *   import { useGradientCursor } from '@/lib/gradient-cursor'
 *   const ref = useGradientCursor({ color: '#00ff88' })
 *   <div ref={ref} style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }} />
 */
export { GradientCursor } from './GradientCursor'
export { useGradientCursor } from './use-gradient-cursor'
export type { GradientCursorOptions } from './use-gradient-cursor'
export type { GradientCursorProps } from './GradientCursor'
