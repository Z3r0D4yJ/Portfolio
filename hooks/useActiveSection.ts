'use client'
import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    function onScroll() {
      // At the bottom of the page, force the last section active
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 4
      if (atBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1] ?? '')
        return
      }

      // Otherwise pick the section whose top is closest to 40% down the viewport
      const trigger = window.scrollY + window.innerHeight * 0.4
      let closest = sectionIds[0] ?? ''
      let closestDist = Infinity

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= trigger) {
          const dist = trigger - top
          if (dist < closestDist) {
            closestDist = dist
            closest = id
          }
        }
      }

      setActiveSection(closest)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return activeSection
}
