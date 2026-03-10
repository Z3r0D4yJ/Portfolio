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
  const [glitch, setGlitch] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          setGlitch(true)
          setTimeout(() => setGlitch(false), 600)
        }, 200)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex items-center gap-4 mb-14 reveal">
      <span className="font-mono text-xs text-accent tracking-widest">{num}</span>
      <h2 className="font-display text-4xl text-bright tracking-wider relative inline-block">
        <span style={{ visibility: glitch ? 'hidden' : 'visible' }}>{title}</span>
        {glitch && (
          <span className="absolute inset-0 text-accent animate-glitch-slice"
            style={{ textShadow: '2px 0 #ff4757, -2px 0 #2f88ff' }}>
            {title}
          </span>
        )}
      </h2>
      <div className="flex-1 h-px bg-border max-w-xs" />
    </div>
  )
}
