import { EXPERIENCE } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'
import { FadeIn } from '@/components/ui/FadeIn'
import { LinkArrow } from '@/components/ui/LinkArrow'

export function Experience() {
  return (
    <section id="experience" className="mb-20 scroll-mt-20">
      <FadeIn>
        <SectionLabel>Experience</SectionLabel>
      </FadeIn>

      {EXPERIENCE.map((entry) => {
        const inner = (
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-1 md:gap-6 py-5 pl-6 border-l border-border relative mb-1 group hover:bg-[rgba(0,255,136,0.03)] hover:border-l-accent active:bg-[rgba(0,255,136,0.06)] transition-colors duration-200">
            <span className="absolute -left-[5px] top-[26px] w-[9px] h-[9px] rounded-full bg-border group-hover:bg-accent transition-colors duration-200" />

            <div className="font-mono text-[11px] text-muted tracking-[0.5px] leading-[1.4] mb-1 md:mb-0 md:pt-1">
              {entry.date}
            </div>

            <div>
              <div className="text-[15px] font-semibold text-text mb-1 flex items-center gap-1.5 group-hover:text-accent transition-colors duration-200">
                {entry.title}
                {entry.href && <LinkArrow />}
              </div>
              <div className="font-mono text-[11px] text-accent mb-[10px] tracking-[0.5px]">{entry.org}</div>
              <p className="text-[13px] text-muted2 leading-[1.7] mb-[14px]">{entry.desc}</p>
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </div>
            </div>
          </div>
        )

        return (
          <FadeIn key={entry.title + entry.date}>
            {entry.href ? (
              <a href={entry.href} target="_blank" rel="noopener noreferrer" className="block no-underline text-inherit">
                {inner}
              </a>
            ) : inner}
          </FadeIn>
        )
      })}
    </section>
  )
}
