import { useState, useEffect } from 'react'

export function GlitchLogo() {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setGlitch(true), 800)
    const t2 = setTimeout(() => setGlitch(false), 1300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <a href="#home" className="font-mono text-sm text-accent tracking-wide relative inline-block no-underline">
      <span style={{ visibility: glitch ? 'hidden' : 'visible' }}>
        <span className="text-dim">~/</span>jasper<span className="text-dim">@</span>vzeir
      </span>
      {glitch && (
        <span className="absolute inset-0 text-accent animate-glitch-slice-fast whitespace-nowrap"
          style={{ textShadow: '2px 0 #ff4757, -2px 0 #2f88ff' }}>
          ~/z3r0d4yj
        </span>
      )}
    </a>
  )
}

export function GlitchName() {
  const [hovered, setHovered] = useState(false)
  const [intro, setIntro] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 1200)
    return () => clearTimeout(t)
  }, [])

  const active = hovered || intro

  return (
    <h1
      className="font-display leading-none mb-4 fade-in-up delay-1 cursor-pointer select-none"
      style={{ fontSize: 'clamp(56px,8vw,110px)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="block relative" style={{ color: active ? 'transparent' : '#e8f4ff', transition: 'color 0.05s' }}>
        <span style={{ visibility: active ? 'hidden' : 'visible' }}>JASPER</span>
        {active && (
          <span className="absolute inset-0 text-accent animate-glitch-slice-fast"
            style={{ textShadow: '0 0 20px rgba(0,229,176,0.8)' }}>
            Z3R0D4Y
          </span>
        )}
      </span>
      <span className="block relative" style={{ color: active ? 'transparent' : '#00e5b0', transition: 'color 0.05s' }}>
        <span className="glow-accent" style={{ visibility: active ? 'hidden' : 'visible' }}>VAN ZEIR</span>
        {active && (
          <span className="absolute inset-0 text-bright animate-glitch-slice-slow"
            style={{ textShadow: '2px 0 #ff4757, -2px 0 #2f88ff', letterSpacing: '0.04em' }}>
            J&nbsp;&nbsp;&nbsp;VAN ZEIR
          </span>
        )}
      </span>
      <span className="block font-mono mt-1"
        style={{
          fontSize: 'clamp(13px,1.4vw,18px)',
          color: active ? '#00e5b0' : '#4a6274',
          transition: 'color 0.3s ease',
          textShadow: active ? '0 0 16px rgba(0,229,176,0.6)' : 'none',
          letterSpacing: '0.15em',
        }}>
        {active ? '// Z3r0D4yJ' : '// hover to reveal alias'}
      </span>
    </h1>
  )
}

export function TypingTag() {
  const full = 'CS Student · Ethical Hacking · Red Team'
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(full.slice(0, i))
      if (i >= full.length) { clearInterval(interval); setDone(true) }
    }, 38)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-3 mb-6 fade-in-up">
      <div className="h-px w-8 bg-accent flex-shrink-0" />
      <span className="font-mono text-xs text-accent tracking-widest uppercase">
        {displayed}
        {!done && <span className="inline-block w-2 h-3 bg-accent ml-0.5 align-middle animate-blink" />}
      </span>
    </div>
  )
}
