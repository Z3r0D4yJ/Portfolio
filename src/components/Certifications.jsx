import { Section, SectionHeader } from './Section'

const certs = [
  { icon: '🔐', name: 'OSCP', issuer: 'Offensive Security Certified Professional', year: 'Planned', status: 'planned' },
  { icon: '🌐', name: 'eWPT', issuer: 'eLearnSecurity Web Application Penetration Tester', year: 'Planned', status: 'planned' },
  { icon: '📋', name: 'CEH', issuer: 'Certified Ethical Hacker — EC-Council', year: 'Planned', status: 'planned' },
  { icon: '☁️', name: 'CompTIA Security+', issuer: 'CompTIA Security Fundamentals', year: 'Considering', status: 'considering' },
]

const statusStyle = {
  planned: 'text-accent border-accent/30 bg-accent/5',
  considering: 'text-blue border-blue/30 bg-blue/5',
}

function CertCard({ icon, name, issuer, year, status, delay = 0 }) {
  return (
    <div className="card-hover border border-border bg-surface rounded-sm p-5 flex gap-4 items-start reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-11 h-11 border border-border bg-surface2 rounded-sm flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
      <div>
        <div className="font-display text-bright tracking-wider mb-1">{name}</div>
        <div className="font-mono text-xs text-dim mb-2">{issuer}</div>
        <span className={`font-mono text-xs px-2 py-0.5 border rounded-sm ${statusStyle[status]}`}>{year}</span>
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <Section id="certifications" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="// 05" title="CERTIFICATION ROADMAP" />
        <p className="font-mono text-xs text-dim leading-relaxed mb-8 max-w-2xl reveal">
          Certifications I'm planning to pursue alongside my cybersecurity studies at HOWEST. The goal is to
          validate my practical skills with industry-recognized credentials.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certs.map((c, i) => <CertCard key={c.name} {...c} delay={i * 70} />)}
        </div>
      </div>
    </Section>
  )
}
