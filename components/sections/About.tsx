import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

export function About() {
  return (
    <section id="about" className="mb-20 scroll-mt-20">
      <FadeIn>
        <SectionLabel>About</SectionLabel>
        <p className="text-muted2 text-[15px] leading-[1.8] mb-7">
          I&apos;m <strong className="text-text font-medium">1nsidae</strong>, a Full Stack Development student at{' '}
          <strong className="text-text font-medium">HOGENT</strong>. In 2026 I&apos;m transitioning to{' '}
          <strong className="text-text font-medium">HOWEST</strong> for a dedicated Cybersecurity bachelor,
          focused on offensive security, ethical hacking, and secure software development.
        </p>
        <p className="text-muted2 text-[15px] leading-[1.8] mb-7">
          I deliberately started with full stack development - understanding how systems are{' '}
          <em className="not-italic text-text">built</em> is what makes understanding how they{' '}
          <em className="not-italic text-text">break</em> meaningful. I apply that in practice through{' '}
          <a
            href="#"
            className="text-accent no-underline border-b border-[rgba(0,255,136,0.2)] hover:border-accent transition-[border-color] duration-200"
          >
            CTF competitions
          </a>
          {' '}(50+ challenges, 20+ writeups) and hands-on security research - currently focusing on web exploitation,
          network security, and offensive tooling.
        </p>
        <p className="text-muted2 text-[15px] leading-[1.8] mb-7">
          Outside of that you&apos;ll find me training for triathlons, watching F1, or running{' '}
          <code className="font-mono text-[12px] text-accent bg-accent-dim px-[6px] py-[1px]">
            sqlmap --level=5
          </code>{' '}
          against something I&apos;m supposed to.
        </p>
        <div className="flex flex-wrap gap-[10px] mt-6">
          {['Full Stack Student', '50+ CTF Challenges', '20+ Writeups'].map((pill) => (
            <span
              key={pill}
              className="font-mono text-[11px] text-accent bg-accent-dim border border-[rgba(0,255,136,0.2)] px-[14px] py-[6px] tracking-[0.5px]"
            >
              {pill}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
