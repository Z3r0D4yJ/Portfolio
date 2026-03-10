import { useState, useEffect, useRef } from 'react'
import { Section, SectionHeader } from './Section'

function SkillBar({ name, pct, visible, delay = 0 }) {
  return (
    <div className="mb-5 reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-2">
        <span className="font-mono text-xs text-muted">{name}</span>
        <span className="font-mono text-xs text-accent">{pct}%</span>
      </div>
      <div className="h-px bg-border relative overflow-hidden">
        <div
          className={visible ? 'animate-skill-fill h-full bg-gradient-to-r from-accent to-blue' : 'h-full'}
          style={{ width: visible ? `${pct}%` : '0%', animationDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )
}

const devSkills = [
  { name: 'Java', pct: 80 },
  { name: 'C# / .NET', pct: 75 },
  { name: 'JavaScript / TypeScript', pct: 85 },
  { name: 'React & TailwindCSS', pct: 80 },
  { name: 'MySQL / Databases', pct: 70 },
]

const securitySkills = [
  { name: 'Web Application Security', pct: 65 },
  { name: 'CTF Challenges', pct: 70 },
  { name: 'Linux & Networking', pct: 70 },
  { name: 'Reconnaissance & Enumeration', pct: 60 },
  { name: 'Python Scripting', pct: 65 },
]

const tools = ['Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'Ghidra', 'BloodHound', 'Gobuster', 'Hydra', 'John the Ripper', 'SQLMap', 'Linux CLI', 'Git', 'Docker', 'VS Code']

export default function Skills() {
  const [skillsVisible, setSkillsVisible] = useState(false)
  const skillsRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSkillsVisible(true) }, { threshold: 0.2 })
    if (skillsRef.current) obs.observe(skillsRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <Section id="skills" className="py-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6" ref={skillsRef}>
        <SectionHeader num="// 02" title="TECHNICAL SKILLS" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-8 pb-3 border-b border-border reveal">Development</div>
            {devSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} visible={skillsVisible} delay={i * 100} />
            ))}
          </div>
          <div>
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-8 pb-3 border-b border-border reveal">Security & CTF</div>
            {securitySkills.map((s, i) => (
              <SkillBar key={s.name} {...s} visible={skillsVisible} delay={i * 100} />
            ))}
          </div>
        </div>

        {/* Dev Background */}
        <div className="mt-14 pt-10 border-t border-border reveal">
          <div className="font-mono text-xs text-accent tracking-widest uppercase mb-2">Why Full Stack First</div>
          <p className="font-mono text-xs text-dim leading-relaxed mb-6 max-w-2xl">
            I deliberately chose the Full Stack Development track at HOGENT before specializing in cybersecurity.
            Knowing vulnerabilities is important, but understanding the architecture, logic, and technologies
            behind applications is just as crucial when it comes to securing them.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border mb-10">
            {[
              { icon: '☕', name: 'Java', desc: 'OOP, backend logic, architecture' },
              { icon: '🔷', name: 'C#', desc: '.NET development, desktop & web' },
              { icon: '⚛️', name: 'React', desc: 'Component-based frontend dev' },
              { icon: '🎨', name: 'Tailwind CSS', desc: 'Utility-first styling' },
            ].map((s) => (
              <div key={s.name} className="card-hover bg-bg p-5">
                <div className="text-xl mb-3">{s.icon}</div>
                <div className="font-display text-lg text-bright tracking-wider mb-1">{s.name}</div>
                <div className="font-mono text-xs text-dim leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tool badges */}
        <div className="pt-10 border-t border-border reveal">
          <div className="font-mono text-xs text-dim tracking-widest uppercase mb-6">Tools I Work With</div>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="font-mono text-xs px-3 py-1.5 border border-border text-dim hover:border-accent/30 hover:text-accent transition-all duration-200 cursor-default">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
