import { Section, SectionHeader } from './Section'

const projects = [
  {
    icon: '🔧',
    title: 'NetRecon',
    type: 'Tool',
    desc: 'Automated network reconnaissance tool built in Python. Combines Nmap, Whois, and DNS enumeration into a single streamlined workflow with clean HTML report output.',
    tags: ['Python', 'Nmap', 'Automation', 'Reconnaissance'],
    github: 'https://github.com/jasper-vzeir',
    status: 'Active',
  },
  {
    icon: '🏗️',
    title: 'AD Attack Lab',
    type: 'Lab Setup',
    desc: 'Fully automated Active Directory lab environment using Vagrant and Ansible. Deploys a vulnerable DC, workstations, and misconfigured GPOs for practicing AD attack chains.',
    tags: ['Active Directory', 'Vagrant', 'Ansible', 'Red Team'],
    github: 'https://github.com/jasper-vzeir',
    status: 'Active',
  },
  {
    icon: '🕷️',
    title: 'WebVulnScanner',
    type: 'Tool',
    desc: 'Lightweight web vulnerability scanner focusing on OWASP Top 10. Detects SQLi, XSS, SSRF, and insecure headers with minimal false positives. Built as a Burp Suite extension.',
    tags: ['Java', 'Burp Suite', 'OWASP', 'Scanner'],
    github: 'https://github.com/jasper-vzeir',
    status: 'In Development',
  },
  {
    icon: '📡',
    title: 'C2-Lite',
    type: 'Research',
    desc: 'Minimal command & control framework built for educational purposes. Demonstrates beacon callbacks, encrypted channels, and basic evasion techniques in a lab-safe environment.',
    tags: ['Python', 'C2', 'Encryption', 'OPSEC'],
    github: 'https://github.com/jasper-vzeir',
    status: 'Research',
  },
  {
    icon: '🛡️',
    title: 'SecureNotes',
    type: 'Application',
    desc: 'End-to-end encrypted note-taking app built with React and C#/.NET backend. Implements zero-knowledge architecture — the server never sees plaintext data.',
    tags: ['React', 'C#', '.NET', 'Encryption', 'Zero-Knowledge'],
    github: 'https://github.com/jasper-vzeir',
    status: 'Completed',
  },
  {
    icon: '📊',
    title: 'CTF Dashboard',
    type: 'Application',
    desc: 'Personal CTF progress tracker pulling stats from HackTheBox and TryHackMe APIs. Visualizes solve rates, category strengths, and ranking history over time.',
    tags: ['React', 'API', 'HackTheBox', 'Data Visualization'],
    github: 'https://github.com/jasper-vzeir',
    status: 'Active',
  },
]

const statusColors = {
  'Active': 'text-accent border-accent/30 bg-accent/5',
  'In Development': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  'Research': 'text-blue border-blue/30 bg-blue/5',
  'Completed': 'text-green-400 border-green-400/30 bg-green-400/5',
}

function ProjectCard({ icon, title, type, desc, tags, github, status, delay = 0 }) {
  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover bg-surface p-7 group block no-underline reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <span className="font-mono text-xs text-dim px-2 py-0.5 border border-border">{type}</span>
        </div>
        <span className={`font-mono text-xs px-2 py-1 border ${statusColors[status] || 'text-dim border-border'}`}>
          {status}
        </span>
      </div>

      <div className="font-display text-xl text-bright tracking-wider mb-2 group-hover:text-accent transition-colors">
        {title}
      </div>

      <p className="font-mono text-xs text-dim leading-relaxed mb-5">{desc}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="font-mono text-xs px-2 py-1 border border-border text-dim hover:border-accent/30 hover:text-accent transition-colors">
              {t}
            </span>
          ))}
        </div>
        <span className="font-mono text-xs text-dim opacity-0 group-hover:opacity-100 transition-opacity ml-4 flex-shrink-0">
          GitHub →
        </span>
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <Section id="projects" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="// 05" title="PROJECTS" />

        {/* GitHub banner */}
        <a
          href="https://github.com/jasper-vzeir"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal card-hover group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-border bg-surface p-8 mb-10 no-underline"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 border border-border bg-surface2 flex items-center justify-center text-2xl flex-shrink-0 group-hover:border-accent/40 transition-colors">
              ⌥
            </div>
            <div>
              <div className="font-display text-2xl text-bright tracking-wider mb-1">github.com/jasper-vzeir</div>
              <p className="font-mono text-xs text-dim/80 max-w-lg leading-relaxed">
                All projects are open source and available on GitHub. Tools, lab configurations, scripts, and applications — built to learn, break, and secure.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 font-mono text-xs px-5 py-2.5 border border-accent/40 text-accent group-hover:bg-accent group-hover:text-bg transition-all duration-200 whitespace-nowrap">
            View GitHub →
          </div>
        </a>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border border border-border">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border reveal" style={{ transitionDelay: '200ms' }}>
          {[
            { num: '6+', label: 'Open Source Projects' },
            { num: '3', label: 'Security Tools' },
            { num: '2', label: 'Full-Stack Apps' },
            { num: '1', label: 'Lab Environment' },
          ].map((s) => (
            <div key={s.label} className="bg-surface p-5 text-center">
              <div className="font-display text-3xl text-accent glow-accent mb-1">{s.num}</div>
              <div className="font-mono text-xs text-dim tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
