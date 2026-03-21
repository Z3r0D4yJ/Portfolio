import { HeroName, TypingTag } from './GlitchName'

function ProfilePhoto() {
  return (
    <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 border-accent/25 flex-shrink-0"
      style={{
        boxShadow: '0 0 0 4px rgba(0,229,176,0.05), 0 0 40px rgba(0,229,176,0.1)',
      }}>
      <img
        src="/ProfilePicture.jpg"
        alt="Jasper Van Zeir"
        className="w-full h-full object-cover object-[center_top]"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 overflow-hidden grid-bg">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(47,136,255,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(0,229,176,0.03) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:gap-16">
          {/* Profile photo */}
          <div className="mb-8 lg:mb-0 lg:order-last lg:flex-shrink-0 fade-in-up">
            <ProfilePhoto />
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <TypingTag />
            <HeroName />
            <p className="font-sans text-muted mb-3 fade-in-up delay-2" style={{ fontSize: 'clamp(14px,1.5vw,18px)' }}>
              CS Student · Belgian Defence SGT · Aspiring Cybersecurity Specialist
            </p>
            <p className="font-mono text-xs text-dim leading-relaxed mb-10 max-w-lg fade-in-up delay-3 mx-auto lg:mx-0">
              Studying Applied Computer Science at HOGENT with a Full Stack Development
              track, while serving as Sergeant at Belgian Defence. Building a strong
              foundation in both development and security, learning how systems are
              built so I can understand how they break.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 fade-in-up delay-4">
              <a href="#contact" className="font-mono text-xs uppercase tracking-widest px-7 py-3 bg-accent text-bg font-bold hover:bg-accent/90 transition-all duration-200">
                Get in Touch
              </a>
              <a href="#about" className="font-mono text-xs uppercase tracking-widest px-7 py-3 border border-border text-dim hover:border-accent/40 hover:text-muted transition-all duration-200">
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
