import { GlitchName, TypingTag } from './GlitchName'
import Terminal from './Terminal'

function HexGraphic() {
  return (
    <div className="relative w-96 h-96 hidden lg:flex items-center justify-center">
      <svg className="animate-hex-spin absolute inset-0 w-full h-full" viewBox="0 0 280 280" fill="none">
        <polygon points="140,10 260,75 260,205 140,270 20,205 20,75" stroke="rgba(0,229,176,0.15)" strokeWidth="1" strokeDasharray="8 4" />
      </svg>
      <svg className="animate-hex-spin-rev absolute inset-0 w-full h-full scale-75" viewBox="0 0 280 280" fill="none">
        <polygon points="140,10 260,75 260,205 140,270 20,205 20,75" stroke="rgba(47,136,255,0.12)" strokeWidth="1" strokeDasharray="4 8" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[210px] h-[210px] rounded-full overflow-hidden border-2 border-accent/35 flex items-center justify-center"
          style={{
            boxShadow: '0 0 0 4px rgba(0,229,176,0.07), 0 0 32px rgba(0,229,176,0.18), 0 0 80px rgba(0,0,0,0.8)',
            filter: 'brightness(0.92) contrast(1.05) saturate(0.85)',
            background: 'linear-gradient(135deg, #131920, #080b0f)',
          }}>
          <img 
            src="/ProfilePicture.jpg" 
            alt="Jasper Van Zeir"
            className="w-full h-full object-cover object-[center_top]"
          />
          <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(160deg, rgba(0,229,176,0.06) 0%, transparent 60%)' }} />
        </div>
      </div>
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div key={i} className="absolute w-2 h-2 rounded-full bg-accent"
          style={{
            top: `${50 + 44 * Math.sin(deg * Math.PI / 180)}%`,
            left: `${50 + 44 * Math.cos(deg * Math.PI / 180)}%`,
            transform: 'translate(-50%,-50%)',
            opacity: 0.6,
            boxShadow: '0 0 8px rgba(0,229,176,0.8)',
          }} />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-14 overflow-hidden grid-bg">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(47,136,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(0,229,176,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
          <div className="max-w-2xl">
            <TypingTag />
            <GlitchName />
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
              <a href="#contact" className="font-mono text-xs uppercase tracking-widest px-7 py-3 bg-accent text-bg font-bold hover:bg-accent/90 transition-all duration-200"
                style={{ boxShadow: '0 0 24px rgba(0,229,176,0.25)' }}>
                ▶ Get in Touch
              </a>
              <a href="#about" className="font-mono text-xs uppercase tracking-widest px-7 py-3 border border-border text-dim hover:border-accent/40 hover:text-muted transition-all duration-200">
                About Me
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 fade-in-up delay-5">
            <HexGraphic />
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  )
}
