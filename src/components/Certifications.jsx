import { Section, SectionHeader } from './Section'

const certs = [
  { icon: '🔐', name: 'OSCP', issuer: 'Offensive Security Certified Professional', year: 'Placeholder' },
  { icon: '📋', name: 'CEH Master', issuer: 'Certified Ethical Hacker — EC-Council', year: 'Placeholder' },
]

function CertCard({ icon, name, issuer, year, delay = 0 }) {
  return (
    <div className="card-hover border border-border bg-bg rounded-sm p-5 flex gap-4 items-start reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="w-11 h-11 border border-border bg-surface2 rounded-sm flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
      <div>
        <div className="font-display text-bright tracking-wider mb-1">{name}</div>
        <div className="font-mono text-xs text-dim mb-2">{issuer}</div>
        <span className="font-mono text-xs px-2 py-0.5 border border-blue/30 text-blue bg-blue/5 rounded-sm">{year}</span>
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <Section id="certifications" className="py-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="// 06" title="CERTIFICATIONS" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certs.map((c, i) => <CertCard key={c.name} {...c} delay={i * 70} />)}
        </div>
      </div>
    </Section>
  )
}
