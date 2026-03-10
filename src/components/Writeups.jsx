import { Section, SectionHeader } from './Section'

const categories = [
  { icon: '🎯', title: 'CTF Writeups', count: '20+', desc: 'Detailed walkthroughs of HackTheBox, BugForge, and other CTF challenges. Covering web, network, forensics, reverse engineering and more.', tags: ['HackTheBox', 'BugForge', 'Web', 'Network', 'Forensics', 'RE'] },
  { icon: '🎓', title: 'School Notes', count: 'HOGENT', desc: 'Structured notes and summaries from my Applied Computer Science curriculum — networking, OS fundamentals, programming, and security concepts.', tags: ['Networking', 'Linux', 'Programming', 'Security', 'Databases'] },
  { icon: '🔬', title: 'Research & Labs', count: 'Ongoing', desc: 'Personal research, tool documentation, lab setups, and self-study notes on offensive security topics and techniques.', tags: ['Pentesting', 'Tools', 'Lab Setup', 'Techniques'] },
]

export default function Writeups() {
  return (
    <Section id="writeups" className="py-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="// 04" title="WRITEUPS & DOCS" />

        {/* Gitbook banner */}
        <a href="https://z3r0d4yj.gitbook.io/z3r0d4yj-docs" target="_blank" rel="noopener noreferrer"
          className="reveal card-hover group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-border bg-bg p-8 mb-10 no-underline">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 border border-border bg-surface2 flex items-center justify-center text-2xl flex-shrink-0 group-hover:border-accent/40 transition-colors">📖</div>
            <div>
              <div className="font-display text-2xl text-bright tracking-wider mb-1">z3r0d4yj-docs</div>
              <div className="font-mono text-xs text-dim mb-2">z3r0d4yj.gitbook.io/z3r0d4yj-docs</div>
              <p className="font-mono text-xs text-dim/80 max-w-lg leading-relaxed">
                My personal knowledge base — 20+ CTF writeups from HackTheBox, BugForge & more, plus everything I've learned at HOGENT.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 font-mono text-xs px-5 py-2.5 border border-accent/40 text-accent group-hover:bg-accent group-hover:text-bg transition-all duration-200 whitespace-nowrap">
            Visit Docs →
          </div>
        </a>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border reveal">
          {categories.map((c, i) => (
            <a key={c.title}
              href="https://z3r0d4yj.gitbook.io/z3r0d4yj-docs"
              target="_blank" rel="noopener noreferrer"
              className="card-hover bg-bg p-7 group block"
              style={{ textDecoration: 'none', transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{c.icon}</span>
                <span className="font-mono text-xs px-2 py-1 border border-accent/20 text-accent bg-accent/5">{c.count}</span>
              </div>
              <div className="font-display text-xl text-bright tracking-wider mb-2">{c.title}</div>
              <p className="font-mono text-xs text-dim leading-relaxed mb-5">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="font-mono text-xs px-2 py-1 border border-border text-dim hover:border-accent/30 hover:text-accent transition-colors">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4 reveal" style={{ transitionDelay: '200ms' }}>
          <div className="h-px flex-1 bg-border max-w-xs" />
          <a href="https://z3r0d4yj.gitbook.io/z3r0d4yj-docs" target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-dim hover:text-accent transition-colors tracking-widest">
            VIEW ALL WRITEUPS →
          </a>
        </div>
      </div>
    </Section>
  )
}
