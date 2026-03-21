import { HeroName, TypingTag } from './GlitchName'

function ProfilePhoto() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Decorative circle behind photo */}
      <div
        className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(0,229,176,0.15) 0%, rgba(47,136,255,0.08) 100%)',
        }}
      />
      {/* Offset accent ring */}
      <div
        className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full translate-x-3 translate-y-3"
        style={{
          border: '2px solid rgba(0,229,176,0.2)',
        }}
      />
      {/* Photo */}
      <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-accent/25"
        style={{
          boxShadow: '0 0 0 4px rgba(0,229,176,0.05), 0 20px 60px rgba(0,0,0,0.4)',
        }}>
        <img
          src="/ProfilePicture.jpg"
          alt="Jasper Van Zeir"
          className="w-full h-full object-cover object-[center_top]"
        />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 overflow-hidden">
      {/* Professional gradient background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,229,176,0.07) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(47,136,255,0.04) 0%, transparent 50%)',
      }} />
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: 'linear-gradient(to bottom, transparent, #080b0f)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">

          {/* Left — Text content */}
          <div className="max-w-xl">
            <TypingTag />
            <HeroName />
            <p className="font-sans text-muted mb-3 fade-in-up delay-2" style={{ fontSize: 'clamp(14px,1.5vw,18px)' }}>
              CS Student · Belgian Defence SGT · Aspiring Cybersecurity Specialist
            </p>
            <p className="font-mono text-xs text-dim leading-relaxed mb-10 max-w-lg fade-in-up delay-3">
              Studying Applied Computer Science at HOGENT with a Full Stack Development
              track, while serving as Sergeant at Belgian Defence. Building a strong
              foundation in both development and security, learning how systems are
              built so I can understand how they break.
            </p>
            <div className="flex flex-wrap gap-3 fade-in-up delay-4">
              <a href="#contact" className="font-mono text-xs uppercase tracking-widest px-7 py-3 bg-accent text-bg font-bold hover:bg-accent/90 transition-all duration-200">
                Get in Touch
              </a>
              <a href="#about" className="font-mono text-xs uppercase tracking-widest px-7 py-3 border border-border text-dim hover:border-accent/40 hover:text-muted transition-all duration-200">
                About Me
              </a>
            </div>
          </div>

          {/* Right — Profile photo with decorative circles */}
          <div className="flex justify-center lg:justify-end fade-in-up delay-1">
            <ProfilePhoto />
          </div>

        </div>
      </div>
    </section>
  )
}
