import { Section, SectionHeader } from './Section'

function StatCard({ num, label, delay = 0 }) {
  return (
    <div className="card-hover bg-surface p-6 reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="font-display text-5xl text-accent glow-accent mb-2">{num}</div>
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
              I'm <span className="text-bright font-medium">Jasper Van Zeir</span>, a cybersecurity enthusiast and student currently studying Applied Computer Science at HOGENT, with a planned specialization in Cybersecurity at HOWEST starting 2026.
            </p>
            <p className="text-sm leading-relaxed">
              Alongside my studies, I serve at <span className="text-accent">Belgian Defence</span> as <span className="text-bright font-medium">Sergeant Onder-Officier</span> — a role that has sharpened my discipline, operational thinking, and ability to perform under pressure.
            </p>
            <p className="text-sm leading-relaxed">
              Passionate about offensive security, I continuously sharpen my skills through CTF competitions, hands-on labs, and self-study — driven by a genuine curiosity for how systems can be broken and hardened.
            </p>
            <p className="text-sm leading-relaxed">
              My background in Applied Computer Science also means I can <span className="text-bright font-medium">build applications</span> — Java, C#, React, Tailwind CSS — giving me a developer's perspective on security.
            </p>
            <div className="pt-4 font-mono text-xs border-t border-border">
              <span className="text-accent">~/focus</span>
              <span className="text-dim"> → </span>
              <span className="text-muted">Ethical hacking · Network security · Penetration testing</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border border border-border">
            <StatCard num="50+" label="CTF Challenges" delay={0} />
            <StatCard num="20+" label="Writeups Made" delay={100} />
            <StatCard num="SGT" label="Belgian Defence" delay={200} />
            <StatCard num="∞" label="Curiosity Level" delay={300} />
          </div>
        </div>
      </div>
    </Section>
  )
}
