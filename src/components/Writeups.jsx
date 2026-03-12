import { Section, SectionHeader } from './Section'
import { TargetIcon, GraduationCapIcon, FlaskIcon, BookOpenIcon } from "@phosphor-icons/react"

const categories = [
  {
    icon: TargetIcon,
    title: 'CTF Writeups',
    count: '20+',
    desc: 'Detailed walkthroughs of challenges from HackTheBox, TryHackMe, and BugForge. Focused on web security, network exploitation, forensics, and more.',
    tags: ['HackTheBox', 'TryHackMe', 'BugForge', 'Web', 'Network']
  },
  {
    icon: GraduationCapIcon,
    title: 'School Notes',
    count: 'HOWEST',
    desc: 'Structured notes from my Applied Computer Science curriculum — networking, OS fundamentals, programming, databases, and security concepts.',
    tags: ['Networking', 'Linux', 'Java', 'C#', 'Databases']
  },
  {
    icon: FlaskIcon,
    title: 'Research & Labs',
    count: 'Ongoing',
    desc: 'Personal research, tool documentation, lab setups, and self-study notes on security topics. Eventually also bachelor thesis projects.',
    tags: ['Security Labs', 'Tools', 'Self-Study', 'Thesis']
  },
]

export default function Writeups() {
  return (
    <Section id="writeups" className="py-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="// 04" title="WRITEUPS & DOCS" />

        {/* Gitbook banner */}
        <a
          href="https://z3r0d4yj.gitbook.io/z3r0d4yj-docs"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal card-hover group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-border bg-bg p-8 mb-10 no-underline"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 border border-border bg-surface flex items-center justify-center flex-shrink-0">
              <BookOpenIcon size={28} weight="duotone" className="text-accent" />
            </div>

            <div>
              <div className="font-display text-2xl text-bright tracking-wider mb-1">
                z3r0d4yj-docs
              </div>

              <div className="font-mono text-xs text-dim mb-2">
                z3r0d4yj.gitbook.io/z3r0d4yj-docs
              </div>

              <p className="font-mono text-xs text-dim/80 max-w-lg leading-relaxed">
                My personal knowledge base, CTF writeups, school notes, lab documentation, and everything I learn along the way. All publicly available.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 font-mono text-xs px-5 py-2.5 border border-accent/40 text-accent group-hover:bg-accent group-hover:text-bg transition-all duration-200 whitespace-nowrap">
            Visit Docs →
          </div>
        </a>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border reveal">
          {categories.map((c, i) => {
            const Icon = c.icon

            return (
              <a
                key={c.title}
                href="https://z3r0d4yj.gitbook.io/z3r0d4yj-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover bg-bg p-7 group block"
                style={{ textDecoration: 'none', transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 border border-border bg-surface rounded-sm flex items-center justify-center flex-shrink-0">
                  <Icon size={22} weight="duotone" className="text-accent" />
                </div>

                  <span className="font-mono text-xs px-2 py-1 border border-accent/20 text-accent bg-accent/5">
                    {c.count}
                  </span>
                </div>

                <div className="font-display text-xl text-bright tracking-wider mb-2">
                  {c.title}
                </div>

                <p className="font-mono text-xs text-dim leading-relaxed mb-5">
                  {c.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-1 border border-border text-dim hover:border-accent/30 hover:text-accent transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            )
          })}
        </div>

        <div className="mt-8 flex items-center gap-4 reveal" style={{ transitionDelay: '200ms' }}>
          <div className="h-px flex-1 bg-border max-w-xs" />

          <a
            href="https://z3r0d4yj.gitbook.io/z3r0d4yj-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-dim hover:text-accent transition-colors tracking-widest"
          >
            VIEW ALL WRITEUPS →
          </a>
        </div>
      </div>
    </Section>
  )
}