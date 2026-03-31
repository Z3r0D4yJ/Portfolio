import { useEffect, useState, useRef } from 'react'

const TYPING_STRINGS = [
  'Ethical Hacking',
  'Red Team Operations',
  'Penetration Testing',
  'Cyber Defence',
]

function useTypingLoop(strings, typingSpeed = 60, pauseMs = 2400, deleteSpeed = 35) {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const state = useRef({ idx: 0, charIdx: 0, deleting: false })

  useEffect(() => {
    let timeout
    const s = state.current

    const tick = () => {
      const current = strings[s.idx]

      if (!s.deleting) {
        s.charIdx++
        setText(current.slice(0, s.charIdx))
        if (s.charIdx === current.length) {
          timeout = setTimeout(() => { s.deleting = true; tick() }, pauseMs)
          return
        }
        timeout = setTimeout(tick, typingSpeed)
      } else {
        s.charIdx--
        setText(current.slice(0, s.charIdx))
        if (s.charIdx === 0) {
          s.deleting = false
          s.idx = (s.idx + 1) % strings.length
          timeout = setTimeout(tick, 300)
          return
        }
        timeout = setTimeout(tick, deleteSpeed)
      }
    }

    tick()

    const cursorInterval = setInterval(() => setShowCursor(v => !v), 530)
    return () => { clearTimeout(timeout); clearInterval(cursorInterval) }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { text, showCursor }
}

function ProfileCard() {
  return (
    <div className="relative fade-in-up delay-3">
      {/* Decorative corner accents */}
      <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent/40" />
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent/40" />

      {/* Photo container */}
      <div className="relative border border-border bg-surface overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-surface2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent/60" />
            <span className="font-mono text-xs text-dim tracking-wider">profile.sys</span>
          </div>
          <span className="font-mono text-xs text-dim/50">ACTIVE</span>
        </div>

        {/* Photo */}
        <div className="w-60 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96">
          <img
            src="/ProfilePicture.jpg"
            alt="Jasper Van Zeir"
            className="w-full h-full object-cover object-[center_top]"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface/90 to-transparent" />
        </div>

        {/* Bottom data strip */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-accent">Available for opportunities</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { text, showCursor } = useTypingLoop(TYPING_STRINGS)

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 overflow-hidden grid-bg">
      {/* Ambient glows */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(47,136,255,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(0,229,176,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      {/* Vertical accent line */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">

          {/* Left — Content */}
          <div className="flex-1 max-w-2xl">
            {/* Mobile profile photo */}
            <div className="flex lg:hidden justify-center mb-10 fade-in-up">
              <ProfileCard />
            </div>

            {/* Breadcrumb tag */}
            <div className="flex items-center gap-3 mb-5 sm:mb-8 fade-in-up">
              <div className="h-px w-10 bg-accent" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                Cybersecurity Portfolio
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display leading-[0.9] mb-4 sm:mb-6 fade-in-up delay-1" style={{ fontSize: 'clamp(48px, 9vw, 120px)' }}>
              <span className="block text-bright">JASPER</span>
              <span className="block text-accent">VAN ZEIR</span>
            </h1>

            {/* Alias + typing role */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-6 fade-in-up delay-2">
              <span className="font-mono text-sm text-dim tracking-wider">// Z3r0D4yJ</span>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="font-mono text-sm text-muted">
                <span>{text}</span>
                <span className={`inline-block w-[2px] h-[14px] bg-accent ml-0.5 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-muted leading-relaxed mb-4 max-w-xl fade-in-up delay-3" style={{ fontSize: 'clamp(14px, 1.4vw, 17px)' }}>
              CS Student at HOGENT and Sergeant in the Belgian Armed Forces.
              Building expertise in offensive security — learning how systems
              are built to understand how they break.
            </p>

            {/* Quick stats row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8 sm:mb-10 fade-in-up delay-4">
              {[
                { label: 'CTF Challenges', value: '50+' },
                { label: 'Writeups', value: '20+' },
                { label: 'Belgian Defence', value: 'SGT' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="font-display text-lg text-accent">{value}</span>
                  <span className="font-mono text-xs text-dim">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 fade-in-up delay-5">
              <a
                href="#contact"
                className="font-mono text-xs uppercase tracking-widest px-7 py-3 bg-accent text-bg font-bold hover:bg-accent/90 transition-all duration-200"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="font-mono text-xs uppercase tracking-widest px-7 py-3 border border-border text-dim hover:border-accent/40 hover:text-muted transition-all duration-200"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right — Profile card (desktop) */}
          <div className="hidden lg:block flex-shrink-0">
            <ProfileCard />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in-up delay-6">
          <span className="font-mono text-xs text-dim/40 tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
