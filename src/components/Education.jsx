import { Section, SectionHeader } from './Section'

function TimelineItem({ year, degree, school, desc, delay = 0 }) {
  return (
    <div className="relative pl-10 mb-12 reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-accent" style={{ boxShadow: '0 0 12px rgba(0,229,176,0.6)' }} />
      <div className="absolute left-1 top-4 bottom-0 w-px bg-border -mb-12" />
      <div className="font-mono text-xs text-accent tracking-widest mb-2">{year}</div>
      <div className="font-display text-2xl text-bright tracking-wider mb-1">{degree}</div>
      <div className="font-mono text-xs text-dim mb-3">{school}</div>
      <p className="text-xs leading-relaxed text-dim max-w-lg">{desc}</p>
    </div>
  )
}

export default function Education() {
  return (
    <Section id="education" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="// 07" title="EDUCATION" />
        <div className="relative pl-6 border-l border-border">
          <TimelineItem
            year="2026 — 2028"
            degree="Bachelor Cybersecurity"
            school="HOWEST — Belgium"
            desc="Upcoming specialization in cybersecurity — offensive security, ethical hacking, digital forensics, and secure software development."
            delay={0}
          />
          <TimelineItem
            year="2023 — 2026"
            degree="Bachelor Applied Computer Science"
            school="Hogeschool Gent (HOGENT) — Belgium"
            desc="Currently studying applied computer science with a focus on software development, networking, and system administration. Expected graduation 2026."
            delay={100}
          />
          <TimelineItem
            year="2019 — Present"
            degree="Continuous Training & CTF Competition"
            school="HackTheBox · TryHackMe · SANS Institute"
            desc="Active CTF participation and HTB Pro Labs. Self-taught offensive security practitioner continuously sharpening skills through hands-on labs and competitions."
            delay={200}
          />
        </div>
      </div>
    </Section>
  )
}
