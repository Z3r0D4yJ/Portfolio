import { Section, SectionHeader } from './Section'

const contactLinks = [
  { icon: '✉', label: 'Email', val: 'contact@jaspervanzeir.com' },
  { icon: '🔒', label: 'Signal', val: '+32 490 19 85 84' },
  { icon: 'in', label: 'LinkedIn', val: 'linkedin.com/in/jaspervanzeir' },
  { icon: '⌥', label: 'GitHub', val: 'github.com/jasper-vzeir' },
]

const profileData = [
  { key: 'name', val: 'Jasper Van Zeir' },
  { key: 'alias', val: 'Z3r0D4yJ' },
  { key: 'role', val: 'Student · Belgian Defence SGT' },
  { key: 'location', val: 'Belgium 🇧🇪' },
  { key: 'education', val: 'HOGENT → HOWEST (2026)' },
  { key: 'focus', val: 'Ethical Hacking · Pentesting' },
  { key: 'languages', val: 'NL · EN · FR' },
]

export default function Contact() {
  return (
    <Section id="contact" className="py-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="// 08" title="GET IN TOUCH" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal">
            <p className="text-sm leading-relaxed mb-4">
              Available for freelance penetration testing, red team engagements, security consulting, and speaking. All work conducted under signed NDA with strict ethical boundaries.
            </p>
            <p className="text-sm leading-relaxed mb-8 text-dim">
              Response within 24 hours. For encrypted communication or incident reporting, use Signal or PGP email.
            </p>
            <div className="space-y-2">
              {contactLinks.map((l) => (
                <a key={l.label} href="#"
                  className="flex items-center gap-4 border border-border bg-bg p-4 hover:border-accent/30 hover:translate-x-1 transition-all duration-200 group no-underline">
                  <span className="w-8 text-center font-mono text-sm text-dim group-hover:text-accent transition-colors">{l.icon}</span>
                  <div>
                    <div className="font-mono text-xs text-dim mb-0.5">{l.label}</div>
                    <div className="font-mono text-xs text-muted group-hover:text-accent transition-colors">{l.val}</div>
                  </div>
                  <span className="ml-auto text-dim font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal space-y-4" style={{ transitionDelay: '100ms' }}>
            <div className="border border-border bg-bg p-5 font-mono text-xs leading-relaxed">
              <div className="text-accent mb-4 tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" style={{ boxShadow: '0 0 6px rgba(0,229,176,0.8)' }} />
                // OPERATOR PROFILE
              </div>
              <div className="space-y-2">
                {profileData.map(({ key, val }) => (
                  <div key={key} className="flex gap-3">
                    <span className="text-dim w-24 flex-shrink-0">{key}</span>
                    <span className="text-dim/40">→</span>
                    <span className="text-muted">{val}</span>
                  </div>
                ))}
                <div className="flex gap-3">
                  <span className="text-dim w-24 flex-shrink-0">status</span>
                  <span className="text-dim/40">→</span>
                  <span className="text-accent">● Available for engagements</span>
                </div>
              </div>
            </div>

            <div className="border border-border bg-bg p-5 font-mono text-xs">
              <div className="text-accent mb-3 tracking-widest">// RESPONSIBLE DISCLOSURE</div>
              <p className="text-dim leading-relaxed">
                Found a vulnerability? Use PGP-encrypted email to report it. All reports handled confidentially with standard 90-day disclosure timelines and coordinated CVE submission.
              </p>
            </div>

            <div className="border border-accent/20 bg-accent/5 p-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-accent">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" style={{ boxShadow: '0 0 6px rgba(0,229,176,0.8)', animation: 'pulse 2s infinite' }} />
                Currently accepting new engagements — Q2 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
