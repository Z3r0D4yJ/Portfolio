import { Section, SectionHeader } from './Section'

function StatCard({ num, label, delay = 0 }) {
  return (
    <div className="card-hover bg-surface p-5 reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="font-display text-4xl text-accent glow-accent mb-2">{num}</div>
      <div className="font-mono text-xs text-dim tracking-widest uppercase">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="// 01" title="ABOUT ME" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-4 reveal">
            <p className="text-sm leading-relaxed">
              I'm <span className="text-bright font-medium">Jasper Van Zeir</span>, also known online as <span className="text-accent">Z3r0D4yJ</span>. From a young age I've been fascinated by computers, technology, and everything happening on the internet. Over time, this curiosity naturally evolved into a strong interest in cybersecurity and ethical hacking.
            </p>
            <p className="text-sm leading-relaxed">
              What fascinates me most about hackers is not only how they operate, but how their techniques can be understood and used to <span className="text-bright font-medium">protect systems and stop malicious actors</span>. The internet should be a safe place for everyone, yet today that's far from reality. That belief is what motivated me to pursue a career in cybersecurity.
            </p>
            <p className="text-sm leading-relaxed">
              Alongside my studies, I've been serving since August 2025 as a <span className="text-accent">Sergeant in the Belgian Armed Forces</span>, working within IT at Defence. This experience has taught me discipline, responsibility, and a professional mindset, while giving me the opportunity to gain practical experience.
            </p>
            <p className="text-sm leading-relaxed">
              My long-term goal is to work as a <span className="text-bright font-medium">Red Team specialist / penetration tester</span>, and ultimately contribute to <span className="text-accent">Belgian Defence Cyber Command</span>.
            </p>
            <div className="pt-4 font-mono text-xs border-t border-border">
              <span className="text-accent">~/mission</span>
              <span className="text-dim"> → </span>
              <span className="text-muted">Learn how systems are built, understand how they break, protect what matters.</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border border border-border">
            <StatCard num="50+" label="CTF Challenges" delay={0} />
            <StatCard num="20+" label="Writeups" delay={100} />
            <StatCard num="SGT" label="Belgian Defence" delay={200} />
            <StatCard num="2026" label="HOWEST Cyber" delay={300} />
          </div>
        </div>
      </div>
    </Section>
  )
}
