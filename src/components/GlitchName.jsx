export function Logo() {
  return (
    <a href="#home" className="font-mono text-sm text-accent tracking-wide no-underline">
      <span className="text-dim">~/</span>jasper<span className="text-dim">@</span>vzeir
    </a>
  )
}

export function HeroName() {
  return (
    <h1
      className="font-display leading-none mb-4 fade-in-up delay-1"
      style={{ fontSize: 'clamp(56px,8vw,110px)' }}
    >
      <span className="block text-bright">JASPER</span>
      <span className="block text-accent">VAN ZEIR</span>
      <span className="block font-mono mt-2 text-dim"
        style={{
          fontSize: 'clamp(13px,1.4vw,18px)',
          letterSpacing: '0.15em',
        }}>
        // Z3r0D4yJ
      </span>
    </h1>
  )
}

export function TypingTag() {
  return (
    <div className="flex items-center gap-3 mb-6 fade-in-up">
      <div className="h-px w-8 bg-accent flex-shrink-0" />
      <span className="font-mono text-xs text-accent tracking-widest uppercase">
        CS Student · Ethical Hacking · Red Team
      </span>
    </div>
  )
}
