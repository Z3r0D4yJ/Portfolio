import { useState, useEffect } from 'react'
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
    <div className="relative scanlines noise font-sans bg-bg text-muted transition-colors">
      <MagneticCursor />
      <ScrollProgress />
      <ParticleField />
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
      <footer className="border-t border-border bg-surface/40 dark:bg-surface/20 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="font-mono text-xs text-dim">
            <span className="text-accent">jasper@vzeir</span>:~$ <span className="text-dim/60">echo "Authorized testing only."</span>
          </span>
          <span className="font-mono text-xs text-dim">© 2025 Jasper Van Zeir — All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
