import { useState, useEffect } from 'react'
import { CaretUpIcon } from "@phosphor-icons/react"
import ParticleField from './components/ParticleField'
import MagneticCursor from './components/MagneticCursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Writeups from './components/Writeups'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'

function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => {
      const p = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setPct(Math.min(p, 100))
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div
      id="scroll-progress"
      style={{ width: `${pct}%` }}
    />
  )
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-10 h-10 border border-border bg-surface hover:border-accent/40 hover:text-accent flex items-center justify-center transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <CaretUpIcon size={18} weight="bold" className="text-dim" />
    </a>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { threshold: 0.3 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="relative scanlines noise font-sans text-muted">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:font-mono focus:text-xs"
      >
        Skip to content
      </a>
      <MagneticCursor />
      <ScrollProgress />
      <ParticleField />
      <BackToTop />
      <Nav activeSection={activeSection} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Writeups />
      <Certifications />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-border py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="font-mono text-xs text-dim">
            <span className="text-accent">jasper@vzeir</span>:~$ <span className="text-dim/60">echo "Authorized testing only."</span>
          </span>
          <span className="font-mono text-xs text-dim">© {new Date().getFullYear()} Jasper Van Zeir — All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
