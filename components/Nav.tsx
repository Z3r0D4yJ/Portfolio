'use client'
import { useActiveSection } from '@/hooks/useActiveSection'
import { NAV_ITEMS } from '@/data/portfolio'

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace('#', ''))

export function Nav() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <nav className="mt-12 flex flex-col gap-1">
      {NAV_ITEMS.map(({ href, label }) => {
        const id = href.replace('#', '')
        const isActive = active === id
        return (
          <a
            key={href}
            href={href}
            className={`
              font-mono text-[11px] tracking-[2px] uppercase
              flex items-center gap-3 py-[6px]
              transition-colors duration-200
              group
              ${isActive ? 'text-text' : 'text-muted hover:text-text'}
            `}
          >
            <span
              className={`
                block h-px transition-all duration-200
                ${isActive ? 'w-12 bg-accent' : 'w-6 bg-muted group-hover:w-12 group-hover:bg-accent'}
              `}
            />
            {label}
          </a>
        )
      })}
    </nav>
  )
}
