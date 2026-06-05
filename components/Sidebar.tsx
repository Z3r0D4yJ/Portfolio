import { GithubLogo, LinkedinLogo, PaperPlaneTiltIcon, BookOpenTextIcon } from '@phosphor-icons/react/dist/ssr'
import { Nav } from './Nav'
import { SOCIALS } from '@/data/portfolio'
import type { SocialLink } from '@/data/portfolio'

function SocialIcon({ type }: { type: SocialLink['type'] }) {
  const props = { size: 24, weight: 'fill' as const }
  switch (type) {
    case 'github':   return <GithubLogo {...props} />
    case 'linkedin': return <LinkedinLogo {...props} />
    case 'email':    return <PaperPlaneTiltIcon {...props} />
    case 'docs':     return <BookOpenTextIcon {...props} />
  }
}

export function Sidebar() {
  return (
    <aside className="
      w-full md:w-[380px] md:shrink-0
      md:sticky md:top-0 md:h-screen
      flex flex-col
      pt-12 pb-8 md:py-20
      gap-4 md:gap-0
    ">
      <div>
        <div className="animate-fade-up font-display text-[40px] md:text-[52px] tracking-[2px] leading-none text-white mb-2">
          1NSIDAE
        </div>
        <div className="animate-fade-up-d1 font-mono text-[12px] md:text-[13px] text-accent tracking-[0.5px] mb-4">
          Cybersecurity · Full Stack · CTF
        </div>
        <p className="animate-fade-up-d3 text-[14px] text-muted2 leading-[1.6] max-w-[320px] md:max-w-[260px]">
          I break things intentionally, build them carefully, and document everything.
        </p>

        {/* Nav - desktop only */}
        <div className="hidden md:block">
          <Nav />
        </div>
      </div>

      {/* Socials */}
      <div className="flex gap-4 items-center mt-auto md:mt-40">
        {SOCIALS.map((social) => (
          <a
            key={social.title}
            href={social.href}
            title={social.title}
            target={social.href.startsWith('http') ? '_blank' : undefined}
            rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-muted hover:text-accent transition-colors duration-200 flex items-center gap-[6px]"
          >
            <SocialIcon type={social.type} />
          </a>
        ))}
      </div>
    </aside>
  )
}
