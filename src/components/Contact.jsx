import { Section, SectionHeader } from './Section'
import { EnvelopeSimpleIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react"

const contactLinks = [
  {
    icon: EnvelopeSimpleIcon,
    label: 'Email',
    val: 'jaspervanzeir1@gmail.com',
    href: 'mailto:jaspervanzeir1@gmail.com'
  },
  {
    icon: LinkedinLogoIcon,
    label: 'LinkedIn',
    val: 'linkedin.com/in/jaspervanzeir',
    href: 'https://linkedin.com/in/jaspervanzeir'
  },
  {
    icon: GithubLogoIcon,
    label: 'GitHub',
    val: 'github.com/jasper-vzeir',
    href: 'https://github.com/jasper-vzeir'
  },
]

const profileData = [
  { key: 'name', val: 'Jasper Van Zeir' },
  { key: 'alias', val: 'Z3r0D4yJ' },
  { key: 'role', val: 'CS Student · Belgian Defence SGT' },
  { key: 'location', val: 'Belgium 🇧🇪' },
  { key: 'education', val: 'HOGENT → HOWEST (2026)' },
  { key: 'focus', val: 'Red Team · Web Security · CTF' },
  { key: 'languages', val: 'NL · EN' },
]

export default function Contact() {
  return (
    <Section id="contact" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader num="// 07" title="GET IN TOUCH" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className="reveal">

            <p className="text-sm leading-relaxed mb-4">
              Interested in collaborating, discussing cybersecurity, or just want to say hi?
              Feel free to reach out. I'm always open to connecting with like-minded people
              in the security community.
            </p>

            <p className="text-sm leading-relaxed mb-8 text-dim">
              Whether it's about CTF challenges, security research, or opportunities,
              I'd love to hear from you.
            </p>

            <div className="space-y-2">
              {contactLinks.map((l) => {
                const Icon = l.icon

                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border border-border bg-surface p-4 hover:border-accent/30 transition-all duration-200 group no-underline"
                  >

                    <span className="w-8 flex justify-center">
                      <Icon
                        size={20}
                        weight="duotone"
                        className="text-dim group-hover:text-accent transition-colors"
                      />
                    </span>

                    <div>
                      <div className="font-mono text-xs text-dim mb-0.5">
                        {l.label}
                      </div>

                      <div className="font-mono text-xs text-muted group-hover:text-accent transition-colors">
                        {l.val}
                      </div>
                    </div>

                    <span className="ml-auto text-dim font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>

                  </a>
                )
              })}
            </div>

          </div>

          <div className="reveal space-y-4" style={{ transitionDelay: '100ms' }}>

            <div className="border border-border bg-surface p-5 font-mono text-xs leading-relaxed">

              <div className="text-accent mb-4 tracking-widest flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent inline-block"
                  style={{ boxShadow: '0 0 6px rgba(0,229,176,0.8)' }}
                />
                // OPERATOR PROFILE
              </div>

              <div className="space-y-2">
                {profileData.map(({ key, val }) => (
                  <div key={key} className="flex gap-3">
                    <span className="text-dim w-24 flex-shrink-0">
                      {key}
                    </span>

                    <span className="text-dim/40">
                      →
                    </span>

                    <span className="text-muted">
                      {val}
                    </span>
                  </div>
                ))}

                <div className="flex gap-3">
                  <span className="text-dim w-24 flex-shrink-0">
                    goal
                  </span>

                  <span className="text-dim/40">
                    →
                  </span>

                  <span className="text-accent">
                    Defence Cyber Command
                  </span>
                </div>

              </div>

            </div>

            <div className="border border-border bg-surface p-5 font-mono text-xs">

              <div className="text-accent mb-3 tracking-widest">
                // ABOUT THIS SITE
              </div>

              <p className="text-dim leading-relaxed">
                This website serves as a personal space to document my journey
                in cybersecurity, share the projects and challenges I work on,
                and provide insight into how I learn, think, and grow within
                this field.
              </p>

            </div>

          </div>

        </div>

      </div>
    </Section>
  )
}