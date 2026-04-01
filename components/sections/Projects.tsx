import { PROJECTS } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'
import { FadeIn } from '@/components/ui/FadeIn'
import { ProjectThumb } from '@/components/ui/ProjectThumbnails'

export function Projects() {
  return (
    <section id="projects" className="mb-20 scroll-mt-20">
      <FadeIn>
        <SectionLabel>Projects</SectionLabel>
      </FadeIn>

      <div className="flex flex-col gap-[2px]">
        {PROJECTS.map((project) => (
          <FadeIn key={project.number}>
            <div
              className="bg-surface border border-border p-4 flex flex-col md:grid md:grid-cols-[120px_1fr] gap-4 md:gap-5 items-start hover:border-[rgba(0,255,136,0.3)] hover:bg-[rgba(0,255,136,0.03)] transition-[border-color,background] duration-200 cursor-pointer group"
              style={project.featured ? { borderColor: 'rgba(0,255,136,0.18)' } : undefined}
            >
              {/* Text — always first in DOM, reordered on desktop via grid */}
              <div className="md:order-2">
                <div className="font-mono text-[10px] text-muted tracking-[1px] mb-[6px]">{project.number}</div>
                <div className="text-[14px] font-semibold text-text mb-[5px] flex items-center gap-2 leading-[1.3] group-hover:text-accent transition-colors duration-200">
                  {project.name}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[13px] h-[13px] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </div>
                <p className="text-[12px] text-muted2 leading-[1.6] mb-[10px]">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>

              {/* Thumbnail — below text on mobile, left column on desktop */}
              <div className="relative w-full h-[180px] md:w-[120px] md:h-[72px] md:order-1 shrink-0 overflow-hidden border border-border group-hover:border-[rgba(0,255,136,0.3)] transition-[border-color] duration-200">
                <ProjectThumb src={project.thumbnail} />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
