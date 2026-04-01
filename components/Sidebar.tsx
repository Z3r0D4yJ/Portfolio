import Image from 'next/image'
import { GithubLogo, LinkedinLogo, EnvelopeSimple, BookOpen, FilePdf } from '@phosphor-icons/react/dist/ssr'
import { Nav } from './Nav'
import { SOCIALS } from '@/data/portfolio'
import type { SocialLink } from '@/data/portfolio'

function SocialIcon({ type }: { type: SocialLink['type'] }) {
  const props = { size: 18, weight: 'duotone' as const }
  switch (type) {
    case 'github':   return <GithubLogo {...props} />
    case 'linkedin': return <LinkedinLogo {...props} />
    case 'email':    return <EnvelopeSimple {...props} />
    case 'gitbook':  return <BookOpen {...props} />
    case 'cv':       return <FilePdf {...props} />
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
        {/* Profile photo */}
        <div
          className="animate-fade-up relative w-24 h-24 md:w-32 md:h-32 mb-5 md:mb-[22px] border border-[rgba(0,255,136,0.2)] overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(0,255,136,0.08), rgba(10,10,10,0.94))' }}
        >
          <Image
            src="/ProfilePicture.jpg"
            alt="Portrait of Jasper"
            fill
            priority
            className="object-cover object-[center_18%] saturate-[0.94] contrast-[1.02]"
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(0,255,136,0.06), transparent 45%, rgba(0,0,0,0.16))' }}
          />
        </div>

        <div className="animate-fade-up font-display text-[40px] md:text-[52px] tracking-[2px] leading-none text-white mb-2">
          JASPER VAN ZEIR
        </div>
        <div className="animate-fade-up-d1 font-mono text-[12px] md:text-[13px] text-accent tracking-[0.5px] mb-4">
          Cybersecurity Student · Sergeant · Red Teamer
        </div>
        <p className="animate-fade-up-d2 text-[14px] text-muted2 leading-[1.6] max-w-[320px] md:max-w-[260px]">
          I break things intentionally, defend them professionally, and document everything.
        </p>

        {/* Nav — desktop only */}
        <div className="hidden md:block">
          <Nav />
        </div>
      </div>

      {/* Socials */}
      <div className="flex gap-4 items-center mt-auto md:mt-16">
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
