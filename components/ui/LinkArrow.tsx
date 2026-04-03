import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

/**
 * Always-visible bold arrow used on every external link.
 * Animates up-right on parent hover via `group-hover:` classes.
 * Wrap the parent with `group` for the animation to fire.
 */
export function LinkArrow({ size = 14 }: { size?: number }) {
  return (
    <ArrowUpRight
      size={size}
      weight="bold"
      className="shrink-0 transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
    />
  )
}
