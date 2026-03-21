import { HeroName, TypingTag } from './GlitchName'

function ProfilePhoto() {
  return (
    <div className="relative">
      {/* Gradient glow behind photo */}
      <div
        className="absolute -inset-6 rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,176,0.12) 0%, rgba(47,136,255,0.06) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent/20"
        style={{
          boxShadow: '0 0 0 4px rgba(0,229,176,0.04)',
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
      {/* Subtle bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: 'linear-gradient(to bottom, transparent, #080b0f)',
      }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 w-full text-center">
        {/* Profile photo */}
        <div className="flex justify-center mb-8 fade-in-up">
          <ProfilePhoto />
        </div>

        {/* Tag line */}
        <div className="flex justify-center fade-in-up">
          <TypingTag />
        </div>

        {/* Name */}
        <HeroName />

        {/* Subtitle */}
        <p className="font-sans text-muted mb-4 fade-in-up delay-2" style={{ fontSize: 'clamp(14px,1.5vw,18px)' }}>
          CS Student · Belgian Defence SGT · Aspiring Cybersecurity Specialist
        </p>

        {/* Description */}
        <p className="font-mono text-xs text-dim leading-relaxed mb-10 max-w-xl mx-auto fade-in-up delay-3">
          Studying Applied Computer Science at HOGENT with a Full Stack Development
          track, while serving as Sergeant at Belgian Defence. Building a strong
          foundation in both development and security, learning how systems are
          built so I can understand how they break.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3 fade-in-up delay-4">
          <a href="#contact" className="font-mono text-xs uppercase tracking-widest px-7 py-3 bg-accent text-bg font-bold hover:bg-accent/90 transition-all duration-200">
            Get in Touch
          </a>
          <a href="#about" className="font-mono text-xs uppercase tracking-widest px-7 py-3 border border-border text-dim hover:border-accent/40 hover:text-muted transition-all duration-200">
            About Me
          </a>
        </div>
      </div>
    </section>
  )
}
