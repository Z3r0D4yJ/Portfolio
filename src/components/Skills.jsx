import { useState, useEffect, useRef } from 'react'
import { Section, SectionHeader } from './Section'
import { 
  CoffeeIcon, 
  FileCSharpIcon, 
  AtomIcon, 
  PaletteIcon,
  BracketsCurlyIcon,
  DatabaseIcon
} from "@phosphor-icons/react"

function SkillBar({ name, pct, visible, delay = 0 }) {
  return (
    <div className="mb-5 reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-2">
        <span className="font-mono text-xs text-muted">{name}</span>
        <span className="font-mono text-xs px-2 py-1 border border-accent/20 text-accent bg-accent/5">
          {pct}%
        </span>
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

const tools = [
  'Burp Suite',
  'Nmap',
  'Wireshark',
  'Metasploit',
  'Ghidra',
  'BloodHound',
  'Gobuster',
  'Hydra',
  'John the Ripper',
  'SQLMap',
  'Linux CLI',
  'Git',
  'Docker',
  'VS Code'
]

const stack = [
  { icon: CoffeeIcon, name: 'Java', desc: 'OOP, backend logic, architecture', type: 'Backend' },
  { icon: FileCSharpIcon, name: 'C# / .NET', desc: '.NET development, desktop & web', type: 'Backend' },
  { icon: BracketsCurlyIcon, name: 'JavaScript / TypeScript', desc: 'Modern web logic, APIs, async programming', type: 'Frontend' },
  { icon: AtomIcon, name: 'React', desc: 'Component-based frontend dev', type: 'Frontend' },
  { icon: DatabaseIcon, name: 'MySQL', desc: 'Relational databases, queries & schema design', type: 'Backend' },
  { icon: PaletteIcon, name: 'Tailwind CSS', desc: 'Utility-first styling & responsive UI', type: 'UI' },
]

const typeColors = {
  Backend:  { text: 'text-blue',   border: 'border-blue/20',   bg: 'bg-blue/5'   },
  Frontend: { text: 'text-accent', border: 'border-accent/20', bg: 'bg-accent/5' },
  UI:       { text: 'text-purple', border: 'border-purple/20', bg: 'bg-purple/5' },
}

function DevCard({ icon, name, desc, type }) {
  const Icon = icon
  const tc = typeColors[type]

  return (
    <div className="card-hover bg-bg p-5 flex gap-4 items-start">
      <div className="w-11 h-11 border border-border bg-surface rounded-sm flex items-center justify-center flex-shrink-0">
        <Icon size={22} weight="duotone" className="text-accent" />
      </div>

      <div>
        <div className="font-display text-bright tracking-wider mb-1">{name}</div>
        <div className="font-mono text-xs text-dim mb-2 leading-relaxed">{desc}</div>
        <span className={`font-mono text-xs px-2 py-1 border ${tc.text} ${tc.border} ${tc.bg}`}>
          {type}
        </span>
      </div>
    </div>
  )
}

export default function Skills() {
  const [skillsVisible, setSkillsVisible] = useState(false)
  const skillsRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setSkillsVisible(true)
    }, { threshold: 0.2 })

    if (skillsRef.current) obs.observe(skillsRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <Section id="skills" className="py-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6" ref={skillsRef}>

        <SectionHeader num="// 02" title="TECHNICAL SKILLS" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-8 pb-3 border-b border-border reveal">
              Development
            </div>
            {devSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} visible={skillsVisible} delay={i * 100} />
            ))}
          </div>

          <div>
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-8 pb-3 border-b border-border reveal">
              Security & CTF
            </div>
            {securitySkills.map((s, i) => (
              <SkillBar key={s.name} {...s} visible={skillsVisible} delay={i * 100} />
            ))}
          </div>
        </div>

        {/* Dev Background */}
        <div className="mt-14 pt-10 border-t border-border reveal">
          <div className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
            Why Full Stack First
          </div>

          <p className="font-mono text-xs text-dim leading-relaxed mb-6 max-w-2xl">
            I deliberately chose the Full Stack Development track at HOGENT before specializing in cybersecurity.
            Knowing vulnerabilities is important, but understanding the architecture, logic, and technologies
            behind applications is just as crucial when it comes to securing them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {stack.map((s) => (
              <DevCard key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="pt-10 border-t border-border reveal">
          <div className="font-mono text-xs text-dim tracking-widest uppercase mb-6">
            Tools I Work With
          </div>

          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2 py-1 border border-border text-dim hover:border-accent/30 hover:text-accent transition-all duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Section>
  )
}