import { useState, useEffect, useRef } from 'react'

export function Section({ id, children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className={`${visible ? 'section-visible' : ''} ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeader({ num, title }) {
  return (
    <div className="flex items-center gap-4 mb-14 reveal">
      <span className="font-mono text-xs text-accent tracking-widest">{num}</span>
      <h2 className="font-display text-4xl text-bright tracking-wider">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border max-w-xs" />
    </div>
  )
}
