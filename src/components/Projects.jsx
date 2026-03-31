import { Section, SectionHeader } from './Section'
import { ShieldCheckIcon, GithubLogoIcon } from "@phosphor-icons/react"

const projects = [
  {
    icon: <ShieldCheckIcon size={24} weight="duotone" className="text-accent" />,
    status: 'In Development',
    title: 'Phishing URL Detector',
    description:
      'An AI-powered phishing URL detection tool that identifies potentially malicious websites based on URL structure. Uses a Random Forest classifier trained on 11,000+ labeled URLs to detect phishing patterns like suspicious keywords, subdomain count, and special characters.',
    tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Phishing Detection', 'URL Analysis'],
    link: null,
  },
  // To add a new project, copy this template:
  // {
  //   icon: <CodeIcon size={24} weight="duotone" className="text-accent" />,
  //   status: 'Completed',       // or 'In Development', 'In Progress', etc.
  //   title: 'Project Name',
  //   description: 'Short description of the project.',
  //   tags: ['Tag1', 'Tag2'],
  //   link: 'https://github.com/...',  // optional, set to null if none
  // },
]

function ProjectCard({ project }) {
  return (
    <div className="border border-border bg-surface p-4 sm:p-6 reveal card-hover flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 border border-border bg-surface2 rounded-sm flex items-center justify-center flex-shrink-0">
          {project.icon}
        </div>
        <span className="font-mono text-xs px-2 py-1 border border-accent/20 text-accent bg-accent/5">
          {project.status}
        </span>
      </div>

      <h3 className="font-display text-2xl text-bright tracking-wider mb-3">
        {project.title}
      </h3>

      <p className="text-sm leading-relaxed text-dim mb-6 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((t) => (
          <span key={t} className="font-mono text-xs px-2 py-1 border border-border text-dim hover:border-accent/30 hover:text-accent transition-colors">
            {t}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-accent mt-4 hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" className="py-14 sm:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader num="// 03" title="PROJECTS" />

        {/* GitHub repos banner */}
        <a
          href="https://z3r0d4yj.gitbook.io/z3r0d4yj-docs"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal card-hover group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 border border-border bg-surface p-4 sm:p-6 mb-8 sm:mb-10 no-underline"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="w-12 h-12 border border-border bg-surface2 rounded-sm flex items-center justify-center flex-shrink-0">
              <GithubLogoIcon size={24} weight="duotone" className="text-accent" />
            </div>
            <div>
              <div className="font-display text-2xl text-bright tracking-wider mb-1">
                z3r0d4yj-repos
              </div>
              <div className="font-mono text-xs text-dim mb-2 break-all">
                https://github.com/Z3r0D4yJ
              </div>
              <p className="font-mono text-xs text-dim/80 max-w-lg leading-relaxed">
                A collection of my projects, experiments, and development work. This includes school projects, personal builds, and technical explorations where I test ideas and learn new technologies.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 font-mono text-xs px-4 py-2 border border-accent/40 text-accent group-hover:bg-accent group-hover:text-bg transition-all duration-200 whitespace-nowrap">
            Visit Repos →
          </div>
        </a>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <p className="font-mono text-xs text-dim mt-6 reveal" style={{ transitionDelay: '100ms' }}>
          More projects coming soon as I continue building and learning. This section will grow over time.
        </p>

        <div className="mt-8 flex items-center gap-4 reveal" style={{ transitionDelay: '200ms' }}>
          <div className="h-px flex-1 bg-border max-w-xs" />
          <a
            href="https://github.com/Z3r0D4yJ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-dim hover:text-accent transition-colors tracking-widest"
          >
            VIEW ALL PROJECTS →
          </a>
        </div>
      </div>
    </Section>
  )
}
