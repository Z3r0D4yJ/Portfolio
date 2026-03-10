import { Section, SectionHeader } from './Section'

const expertiseData = [
  { icon: '🌐', title: 'Web App Security', desc: 'Comprehensive assessments covering OWASP Top 10, authentication bypass, business logic flaws, and deep API security testing across REST and GraphQL interfaces.', tags: ['Burp Suite Pro', 'OWASP', 'SQLi', 'XSS', 'API Security', 'JWT Attacks'] },
  { icon: '🔌', title: 'Network Pentesting', desc: 'Internal and external network assessments including Active Directory exploitation, lateral movement, privilege escalation, and domain compromise scenarios.', tags: ['BloodHound', 'Mimikatz', 'Active Directory', 'Kerberoasting', 'NTLM Relay'] },
  { icon: '☁️', title: 'Cloud Security', desc: 'Security reviews of AWS, Azure, and GCP environments. IAM misconfiguration analysis, storage exposure, container security, and serverless attack paths.', tags: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Pacu'] },
  { icon: '🔴', title: 'Red Team Ops', desc: 'Full-scope adversary simulations with realistic OPSEC. Physical intrusion, social engineering, phishing infrastructure, and C2 framework deployment and evasion.', tags: ['Cobalt Strike', 'Havoc', 'C2 Infra', 'OPSEC', 'Social Engineering'] },
  { icon: '📱', title: 'Mobile Security', desc: 'Static and dynamic analysis of iOS and Android apps. Certificate pinning bypass, reverse engineering, insecure data storage, and runtime manipulation.', tags: ['Frida', 'MobSF', 'Jadx', 'Objection', 'APK Analysis'] },
  { icon: '⚙️', title: 'Security Architecture', desc: 'Threat modeling, security design reviews, and SDLC integration. Identifying structural weaknesses before they reach production environments.', tags: ['STRIDE', 'MITRE ATT&CK', 'Zero Trust', 'NIST CSF', 'Threat Modeling'] },
]

function ExpertiseCard({ icon, title, desc, tags, delay = 0 }) {
  return (
    <div className="card-hover bg-bg rounded-sm p-7 reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="font-display text-xl text-bright tracking-wider mb-3">{title}</h3>
      <p className="text-xs leading-relaxed text-dim mb-5">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="font-mono text-xs px-2 py-1 border border-border text-dim rounded-sm hover:border-accent/40 hover:text-accent transition-colors duration-200">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Expertise() {
  return (
    <Section id="expertise" className="py-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="// 02" title="EXPERTISE" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border border border-border">
          {expertiseData.map((e, i) => (
            <ExpertiseCard key={e.title} {...e} delay={i * 80} />
          ))}
        </div>
      </div>
    </Section>
  )
}
