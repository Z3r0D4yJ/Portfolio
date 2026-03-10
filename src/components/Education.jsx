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
    <Section id="education" className="py-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="// 06" title="EDUCATION & EXPERIENCE" />
        <div className="relative pl-6 border-l border-border">
          <TimelineItem
            year="2026 — 2029"
            degree="Bachelor Cybersecurity"
            school="HOWEST — Belgium"
            desc="Upcoming specialization fully focused on cybersecurity, offensive security, ethical hacking, digital forensics, and secure software development. The next step after building a solid development foundation."
            delay={0}
          />
          <TimelineItem
            year="Aug 2025 — Present"
            degree="Sergeant — IT at Belgian Defence"
            school="Belgian Armed Forces"
            desc="Serving as Sergeant within IT at Defence. Gaining practical experience in discipline, responsibility, and professional operations while continuing to grow academically. Planning to combine this role with cybersecurity studies."
            delay={100}
          />
          <TimelineItem
            year="2023 — 2026"
            degree="Bachelor Applied Computer Science"
            school="Hogeschool Gent (HOGENT) — Belgium"
            desc="Full Stack Development track, deliberately chosen to build a deep understanding of how modern applications are designed, built, and deployed before specializing in security. Technologies: Java, C#, JavaScript, TypeScript, React, MySQL."
            delay={200}
          />
          <TimelineItem
            year="2019 — Present"
            degree="Self-Study & CTF Competitions"
            school="HackTheBox · TryHackMe · BugForge"
            desc="Actively building cybersecurity knowledge through CTF challenges (50+ completed), security labs, and hands-on practice. Documenting everything in writeups (20+) and personal GitBook. Particular interest in web security."
            delay={300}
          />
        </div>
      </div>
    </Section>
  )
}
