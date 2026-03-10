import { useState, useEffect } from 'react'
import { GlitchLogo } from './GlitchName'

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const links = ['about', 'skills', 'projects', 'writeups', 'certifications', 'education', 'contact']

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,backdrop-filter] duration-300 ${scrolled ? 'bg-bg/95 backdrop-blur-md border-border' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <GlitchLogo />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                className={`nav-link font-mono text-xs tracking-widest uppercase ${activeSection === l ? 'text-accent active' : 'text-dim hover:text-muted'}`}
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Status indicator */}
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-dim">
              <div className="w-2 h-2 rounded-full bg-accent" style={{ boxShadow: '0 0 8px rgba(0,229,176,0.8)', animation: 'pulse 2s infinite' }} />
              Available
            </div>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-muted transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
              <span className={`block w-5 h-px bg-muted transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-muted transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile sidebar — slides in from right */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface border-l border-border transition-transform duration-300 ease-out md:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 h-14 border-b border-border">
          <span className="font-mono text-xs text-accent tracking-widest">// NAVIGATE</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-dim hover:text-accent transition-colors"
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* Sidebar links */}
        <div className="px-6 py-6 flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${l}`}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-sm font-mono text-sm tracking-widest uppercase transition-all duration-200 ${
                activeSection === l
                  ? 'text-accent bg-accent/5 border-l-2 border-accent'
                  : 'text-dim hover:text-muted hover:bg-surface2 border-l-2 border-transparent'
              }`}
            >
              <span className="text-dim/40 text-xs font-mono w-6">{String(i + 1).padStart(2, '0')}</span>
              {l}
            </a>
          ))}
        </div>

        {/* Sidebar footer */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-5 border-t border-border">
          <div className="flex items-center gap-2 font-mono text-xs text-dim mb-3">
            <div className="w-2 h-2 rounded-full bg-accent" style={{ boxShadow: '0 0 8px rgba(0,229,176,0.8)', animation: 'pulse 2s infinite' }} />
            Available for engagements
          </div>
          <div className="font-mono text-xs text-dim/40">
            <span className="text-accent">jasper@vzeir</span>:~$ _
          </div>
        </div>
      </div>
    </>
  )
}
