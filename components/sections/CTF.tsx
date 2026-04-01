import { ArrowUpRight, BookOpen } from '@phosphor-icons/react/dist/ssr'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

const GITBOOK_URL = 'https://z3r0d4yj.gitbook.io/z3r0d4yj-docs'

export function CTF() {
  return (
    <section id="ctf" className="mb-20 scroll-mt-20">
      <FadeIn>
        <SectionLabel>Writeups & Blog</SectionLabel>
      </FadeIn>
      <FadeIn>
        <a
          href={GITBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-6 bg-surface border border-border px-7 py-6 hover:border-[rgba(0,255,136,0.3)] hover:bg-[rgba(0,255,136,0.03)] transition-[border-color,background] duration-200 no-underline text-inherit"
        >
          <div className="flex items-center gap-5">
            <BookOpen size={32} weight="duotone" className="text-accent opacity-60 shrink-0" />
            <div>
              <div className="text-[15px] font-semibold text-text mb-1 group-hover:text-accent transition-colors duration-200">
                z3r0d4yj · GitBook
              </div>
              <p className="font-mono text-[12px] text-muted2 leading-[1.6]">
                CTF writeups, exploit breakdowns, and security research — all documented at z3r0d4yj.gitbook.io
              </p>
            </div>
          </div>
          <span className="text-muted group-hover:text-accent transition-colors duration-200 shrink-0">
            <ArrowUpRight size={18} weight="duotone" />
          </span>
        </a>
      </FadeIn>
    </section>
  )
}
