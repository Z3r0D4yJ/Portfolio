import { CERTIFICATIONS } from '@/data/portfolio'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/ui/FadeIn'

const ISSUER_COLORS: Record<string, string> = {
  'Hack The Box': '#9fef00',
  'TryHackMe': '#c11111',
  'Cisco': '#049fd9',
}

export function Certifications() {
  return (
    <section id="certifications" className="mb-20 scroll-mt-20">
      <FadeIn>
        <SectionLabel>Certifications</SectionLabel>
      </FadeIn>

      <div className="flex flex-col gap-[2px]">
        {CERTIFICATIONS.map((cert) => {
          const accentColor = ISSUER_COLORS[cert.issuer] ?? '#00ff88'
          const inner = (
            <div className="bg-surface border border-border px-[22px] py-[18px] flex items-center justify-between gap-4 hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-200 group">
              <div>
                <div
                  className="font-mono text-[10px] tracking-[2px] uppercase mb-[6px]"
                  style={{ color: accentColor }}
                >
                  {cert.issuer}
                </div>
                <div className="text-[14px] font-medium text-text group-hover:text-white transition-colors duration-200">
                  {cert.name}
                </div>
                {cert.date && (
                  <div className="font-mono text-[11px] text-muted mt-1 tracking-[0.5px]">{cert.date}</div>
                )}
              </div>

              <div className="shrink-0">
                {cert.inProgress ? (
                  <span className="font-mono text-[10px] tracking-[1px] uppercase px-[10px] py-1 border border-[rgba(255,255,255,0.08)] text-muted2">
                    In Progress
                  </span>
                ) : (
                  <span
                    className="font-mono text-[10px] tracking-[1px] uppercase px-[10px] py-1 border"
                    style={{ color: accentColor, borderColor: `${accentColor}33`, backgroundColor: `${accentColor}0d` }}
                  >
                    Verified
                  </span>
                )}
              </div>
            </div>
          )

          return (
            <FadeIn key={cert.issuer + cert.name}>
              {cert.href ? (
                <a href={cert.href} target="_blank" rel="noopener noreferrer" className="block no-underline text-inherit hover:border-[rgba(255,255,255,0.08)]">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
