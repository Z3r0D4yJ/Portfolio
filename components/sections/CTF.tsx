import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'
import { LinkArrow } from '@/components/ui/LinkArrow'

const ENTRIES = [
  {
    platform: 'Docs',
    title: '1nsidae · Writeups & Docs',
    meta: 'CTF writeups, exploit breakdowns, security research',
    href: '#',
  },
  {
    platform: 'Medium',
    title: '1nsidae · Blog',
    meta: 'medium.com · Articles, security write-ups and thoughts',
    href: 'https://medium.com/',
  },
]

export function CTF() {
  return (
    <section id="ctf" className="mb-20 scroll-mt-20">
      <FadeIn>
        <SectionLabel>Writeups & Blog</SectionLabel>
      </FadeIn>

      <div className="flex flex-col gap-[2px]">
        {ENTRIES.map((entry) => (
          <FadeIn key={entry.platform}>
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block no-underline text-inherit"
            >
              <div className="bg-surface border border-border px-[22px] py-[18px] flex items-center justify-between gap-4 hover:border-[rgba(0,255,136,0.3)] hover:bg-[rgba(0,255,136,0.03)] active:bg-[rgba(0,255,136,0.06)] transition-[border-color,background] duration-200">
                <div>
                  <div className="font-mono text-[10px] tracking-[2px] uppercase mb-[6px] text-accent">
                    {entry.platform}
                  </div>
                  <div className="text-[14px] font-medium text-text group-hover:text-accent transition-colors duration-200 flex items-center gap-1.5">
                    {entry.title}
                    <LinkArrow size={13} />
                  </div>
                  <div className="font-mono text-[11px] text-muted mt-1 tracking-[0.5px]">
                    {entry.meta}
                  </div>
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
