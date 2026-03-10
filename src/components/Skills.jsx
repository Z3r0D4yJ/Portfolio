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

const offensiveSkills = [
  { name: 'Web Application Pentesting', pct: 96 },
  { name: 'Network Exploitation & AD Attacks', pct: 91 },
  { name: 'Red Team Operations', pct: 86 },
  { name: 'Cloud Security Assessment', pct: 82 },
  { name: 'Exploit Development', pct: 73 },
]

const toolingSkills = [
  { name: 'Python / Bash Scripting', pct: 93 },
  { name: 'Burp Suite Pro', pct: 97 },
  { name: 'Reporting & Communication', pct: 95 },
  { name: 'Reverse Engineering', pct: 75 },
  { name: 'Malware Analysis', pct: 70 },
]

const tools = ['Burp Suite Pro', 'Metasploit', 'Cobalt Strike', 'BloodHound', 'Nmap', 'Wireshark', 'Frida', 'IDA Pro', 'Ghidra', 'Volatility', 'Responder', 'CrackMapExec', 'Impacket', 'Shodan', 'Nuclei']

export default function Skills() {
  const [skillsVisible, setSkillsVisible] = useState(false)
  const skillsRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSkillsVisible(true) }, { threshold: 0.2 })
    if (skillsRef.current) obs.observe(skillsRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <Section id="skills" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6" ref={skillsRef}>
        <SectionHeader num="// 03" title="TECHNICAL SKILLS" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-8 pb-3 border-b border-border reveal">Offensive Security</div>
            {offensiveSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} visible={skillsVisible} delay={i * 100} />
            ))}
          </div>
          <div>
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-8 pb-3 border-b border-border reveal">Tools & Programming</div>
            {toolingSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} visible={skillsVisible} delay={i * 100} />
            ))}
          </div>
        </div>

        {/* Dev Skills */}
        <div className="mt-14 pt-10 border-t border-border reveal">
          <div className="font-mono text-xs text-accent tracking-widest uppercase mb-2">Development Background</div>
          <p className="font-mono text-xs text-dim leading-relaxed mb-6 max-w-2xl">
            As an Applied Computer Science student at HOGENT, I've built full applications from the ground up — giving me a practical understanding of how software works under the hood.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border mb-10">
            {[
              { icon: '☕', name: 'Java', desc: 'OOP, backend logic, application architecture' },
              { icon: '🔷', name: 'C#', desc: '.NET development, desktop & web apps' },
              { icon: '⚛️', name: 'React', desc: 'Component-based frontend development' },
              { icon: '🎨', name: 'Tailwind CSS', desc: 'Utility-first styling, responsive design' },
            ].map((s) => (
              <div key={s.name} className="card-hover bg-surface p-5">
                <div className="text-xl mb-3">{s.icon}</div>
                <div className="font-display text-lg text-bright tracking-wider mb-1">{s.name}</div>
                <div className="font-mono text-xs text-dim leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tool badges */}
        <div className="pt-10 border-t border-border reveal">
          <div className="font-mono text-xs text-dim tracking-widest uppercase mb-6">Primary Toolset</div>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="font-mono text-xs px-3 py-1.5 border border-border text-dim hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
