import { Section, SectionHeader } from './Section'
import {
  ShieldCheck,      // Pre-Security  → foundational protection
  Eye,              // SOC Level 1   → monitoring / watching
  Bug,              // Jr Pen Tester → bugs / exploits
  Sword,            // CPTS          → offensive / attacking
} from "@phosphor-icons/react";

const certs = [
  {
    icon: ShieldCheck,
    firm: 'TryHackMe',
    name: 'Pre-Security',
    issuer: 'Learning Path Completion',
    year: '2024',
    status: 'planned'
  },
  {
    icon: Eye,
    firm: 'TryHackMe',
    name: 'SOC Level 1',
    issuer: 'Learning Path Completion',
    year: '2024',
    status: 'planned'
  },
  {
    icon: Bug,
    firm: 'TryHackMe',
    name: 'Jr Penetration Tester',
    issuer: 'Learning Path Completion',
    year: 'Planned',
    status: 'planned'
  },
  {
    icon: Sword,
    firm: 'Hack The Box',
    name: 'CPTS',
    issuer: 'HTB Certified Penetration Testing Specialist',
    year: 'Planned',
    status: 'planned'
  },
]

const statusStyle = {
  earned:  'border-green-400/20 text-green-400 bg-green-400/5',
  planned: 'border-accent/20 text-accent bg-accent/5',
}

const firmStyle = {
  'TryHackMe':    { badge: 'border-[#ff4655]/20 text-[#ff4655] bg-[#ff4655]/5', icon: 'text-accent' },
  'Hack The Box': { badge: 'border-[#9fef00]/20 text-[#9fef00] bg-[#9fef00]/5', icon: 'text-accent' },
}

const badge = 'font-mono text-xs px-2 py-1 border whitespace-nowrap'

function CertCard({ icon: Icon, firm, name, issuer, year, status, delay = 0 }) {
  const fs = firmStyle[firm]

  return (
    <div
      className="card-hover bg-surface p-5 flex gap-4 items-start reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 border border-border bg-surface2 rounded-sm flex items-center justify-center flex-shrink-0">
        <Icon size={20} weight="duotone" className={fs.icon} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="font-display text-bright tracking-wider">{name}</span>
          <span className={`${badge} ${fs.badge}`}>{firm}</span>
        </div>

        <div className="font-mono text-xs text-dim mb-2">{issuer}</div>

        <span className={`${badge} ${statusStyle[status]}`}>{year}</span>
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <Section id="certifications" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader num="// 05" title="CERTIFICATIONS" />

        <p className="font-mono text-xs text-dim leading-relaxed mb-8 max-w-2xl reveal">
          Planned certifications and learning path completions from hands-on platforms,
          targeted to validate the practical skills I'm developing during my
          cybersecurity studies at HOWEST.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {certs.map((c, i) => (
            <CertCard key={`${c.firm}-${c.name}`} {...c} delay={i * 70} />
          ))}
        </div>

      </div>
    </Section>
  )
}