import { useState, useEffect, useRef, useCallback } from "react";

// ── Tailwind custom styles injected via style tag ──
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

    * { box-sizing: border-box; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #080b0f; }
    ::-webkit-scrollbar-thumb { background: #1c2733; border-radius: 2px; }
    ::-webkit-scrollbar-thumb:hover { background: #00e5b0; }

    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-display { font-family: 'Bebas Neue', sans-serif; }
    .font-sans { font-family: 'DM Sans', sans-serif; }

    .scanlines::before {
      content: '';
      position: fixed;
      inset: 0;
      background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 6px);
      pointer-events: none;
      z-index: 9999;
    }

    .grid-bg {
      background-image: linear-gradient(rgba(0,229,176,0.025) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,229,176,0.025) 1px, transparent 1px);
      background-size: 48px 48px;
    }

    @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
    .cursor-blink { animation: blink 1s step-end infinite; display:inline-block; width:10px; height:16px; background:#00e5b0; vertical-align:middle; margin-left:2px; }

    @keyframes skillFill { from { width: 0% } }
    .skill-bar-anim { animation: skillFill 1.6s cubic-bezier(0.22,1,0.36,1) forwards; }

    .card-hover {
      transition: all 0.25s ease;
      position: relative;
      overflow: hidden;
    }
    .card-hover::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(0,229,176,0.04) 0%, transparent 60%);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .card-hover:hover::before { opacity: 1; }
    .card-hover:hover { border-color: rgba(0,229,176,0.25) !important; transform: translateY(-2px); }

    .nav-link { position: relative; transition: color 0.2s; }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px; left: 0; right: 0;
      height: 1px;
      background: #00e5b0;
      transform: scaleX(0);
      transition: transform 0.2s;
    }
    .nav-link:hover::after, .nav-link.active::after { transform: scaleX(1); }

    @keyframes hexSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .hex-ring { animation: hexSpin 25s linear infinite; }
    .hex-ring-rev { animation: hexSpin 18s linear infinite reverse; }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-in-up { opacity: 0; animation: fadeInUp 0.8s ease forwards; }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }
    .delay-5 { animation-delay: 0.5s; }

    .glow-accent { text-shadow: 0 0 20px rgba(0,229,176,0.5); }
    .glow-box { box-shadow: 0 0 30px rgba(0,229,176,0.15), inset 0 1px 0 rgba(0,229,176,0.1); }
    .terminal-glow { box-shadow: 0 0 60px rgba(0,229,176,0.08), 0 32px 80px rgba(0,0,0,0.7); }

    .section-visible .reveal { opacity: 1 !important; transform: translateY(0) !important; }
    .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }

    @keyframes glitchSlice {
      0%   { clip-path: inset(0 0 85% 0); transform: translate(-4px, 0); }
      20%  { clip-path: inset(40% 0 40% 0); transform: translate(4px, 0); }
      40%  { clip-path: inset(70% 0 5% 0); transform: translate(-2px, 0); }
      60%  { clip-path: inset(20% 0 60% 0); transform: translate(3px, 0); }
      80%  { clip-path: inset(55% 0 20% 0); transform: translate(-3px, 0); }
      100% { clip-path: inset(0 0 85% 0); transform: translate(0, 0); }
    }

    @keyframes particle {
      0% { transform: translateY(0) translateX(0); opacity: 0.6; }
      100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
    }
    .particle { animation: particle linear infinite; }

    @keyframes hintArrow {
      0%, 100% { transform: translateY(0px); opacity: 0.6; }
      50%       { transform: translateY(-4px); opacity: 1; }
    }
    @keyframes hintDot {
      0%, 100% { transform: scale(1); opacity: 0.4; }
      50%       { transform: scale(1.5); opacity: 1; }
    }

    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  `}</style>
);

// ── Color constants ──
const colors = {
  bg: "#080b0f",
  surface: "#0d1117",
  surface2: "#131920",
  border: "#1c2733",
  accent: "#00e5b0",
  blue: "#2f88ff",
  warn: "#ff4757",
  dim: "#4a6274",
  muted: "#8ba3b5",
  bright: "#e8f4ff",
};

// ── Particle Background ──
function ParticleField() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            position: "absolute",
            left: `${p.left}%`,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: colors.accent,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// ── Hex Graphic ──
function HexGraphic() {
  return (
    <div className="relative hidden lg:flex items-center justify-center" style={{ width: 384, height: 384 }}>
      <svg className="hex-ring absolute inset-0 w-full h-full" viewBox="0 0 280 280" fill="none">
        <polygon points="140,10 260,75 260,205 140,270 20,205 20,75" stroke="rgba(0,229,176,0.15)" strokeWidth="1" strokeDasharray="8 4" />
      </svg>
      <svg className="hex-ring-rev absolute inset-0 w-full h-full" viewBox="0 0 280 280" fill="none" style={{ transform: "scale(0.75)" }}>
        <polygon points="140,10 260,75 260,205 140,270 20,205 20,75" stroke="rgba(47,136,255,0.12)" strokeWidth="1" strokeDasharray="4 8" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          style={{
            width: 210,
            height: 210,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(0,229,176,0.35)",
            boxShadow: "0 0 0 4px rgba(0,229,176,0.07), 0 0 32px rgba(0,229,176,0.18), 0 0 80px rgba(0,0,0,0.8)",
            filter: "brightness(0.92) contrast(1.05) saturate(0.85)",
            position: "relative",
            background: `linear-gradient(135deg, ${colors.surface2}, ${colors.bg})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 64, filter: "grayscale(0.3)" }}>🛡️</span>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(160deg, rgba(0,229,176,0.06) 0%, transparent 60%)",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: colors.accent,
            top: `${50 + 44 * Math.sin((deg * Math.PI) / 180)}%`,
            left: `${50 + 44 * Math.cos((deg * Math.PI) / 180)}%`,
            transform: "translate(-50%,-50%)",
            opacity: 0.6,
            boxShadow: "0 0 8px rgba(0,229,176,0.8)",
          }}
        />
      ))}
    </div>
  );
}

// ── Interactive Terminal ──
const COMMANDS = {
  help: () => [
    { t: "accent", v: "Available commands:" },
    { t: "dim", v: "  whoami       — about Jasper" },
    { t: "dim", v: "  skills       — technical skill set" },
    { t: "dim", v: "  certs        — certifications list" },
    { t: "dim", v: "  contact      — get in touch" },
    { t: "dim", v: "  status       — current availability" },
    { t: "dim", v: "  clear        — clear terminal" },
    { t: "dim", v: "  help         — show this message" },
  ],
  whoami: () => [
    { t: "accent", v: "Jasper Van Zeir" },
    { t: "muted", v: "Cybersecurity Expert · Ethical Hacker · Red Teamer" },
    { t: "dim", v: "Student · Belgian Defence SGT" },
    { t: "dim", v: "Based in Belgium 🇧🇪" },
  ],
  skills: () => [
    { t: "accent", v: "Top skills:" },
    { t: "green", v: "  ████████████████████  96%  Web App Pentesting" },
    { t: "green", v: "  ███████████████████░  91%  Network / AD Attacks" },
    { t: "green", v: "  █████████████████░░░  86%  Red Team Ops" },
    { t: "green", v: "  ████████████████░░░░  82%  Cloud Security" },
    { t: "green", v: "  ██████████████░░░░░░  73%  Exploit Dev" },
  ],
  certs: () => [
    { t: "accent", v: "Certifications:" },
    { t: "blue", v: "  [—]  OSCP  — Offensive Security Certified Professional" },
    { t: "blue", v: "  [—]  CEH Master  — Certified Ethical Hacker" },
  ],
  contact: () => [
    { t: "accent", v: "Contact Jasper:" },
    { t: "muted", v: "  email    jasper@vzeir-sec.be" },
    { t: "muted", v: "  signal   +32 470 000 000" },
    { t: "muted", v: "  linkedin linkedin.com/in/jaspervanzeir" },
    { t: "muted", v: "  github   github.com/jasper-vzeir" },
  ],
  status: () => [
    { t: "green", v: "[+] Status: AVAILABLE" },
    { t: "dim", v: "    Accepting engagements from Q2 2025" },
    { t: "dim", v: "    Response time: < 24h" },
  ],
};

const colorClassMap = {
  accent: colors.accent,
  dim: colors.dim,
  muted: colors.muted,
  green: "#4ade80",
  blue: colors.blue,
  warn: colors.warn,
  bright: colors.bright,
};

function Terminal() {
  const [history, setHistory] = useState([
    {
      type: "output",
      lines: [
        { t: "accent", v: "jasper@kali — interactive shell v1.0" },
        { t: "dim", v: 'Type "help" to see available commands.' },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const prompt = (
    <span>
      <span style={{ color: colors.accent }}>jasper@kali</span>
      <span style={{ color: colors.dim }}>:</span>
      <span style={{ color: colors.blue }}>~</span>
      <span style={{ color: colors.dim }}>$ </span>
    </span>
  );

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (cmd === "clear") {
      setHistory([]);
      setCmdHistory((p) => [raw, ...p]);
      setHistIdx(-1);
      return;
    }
    let outputLines;
    if (!cmd) outputLines = [];
    else if (COMMANDS[cmd]) outputLines = COMMANDS[cmd]();
    else outputLines = [
      { t: "warn", v: `bash: ${cmd}: command not found` },
      { t: "dim", v: 'Try "help" for available commands.' },
    ];
    setHistory((p) => [...p, { type: "input", cmd: raw }, { type: "output", lines: outputLines }]);
    setCmdHistory((p) => [raw, ...p]);
    setHistIdx(-1);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next] ?? "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = Object.keys(COMMANDS).find((k) => k.startsWith(input));
      if (match) setInput(match);
    }
  };

  const hasInteracted = cmdHistory.length > 0;

  return (
    <div style={{ width: "min(420px, 100%)" }}>
      <div
        className="terminal-glow font-mono"
        style={{
          border: `1px solid ${colors.border}`,
          borderRadius: 6,
          overflow: "hidden",
          background: colors.surface,
          fontSize: 12,
          cursor: "text",
        }}
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 16px",
            background: colors.surface2,
            borderBottom: `1px solid ${colors.border}`,
            userSelect: "none",
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: colors.warn, opacity: 0.8 }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308", opacity: 0.8 }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e", opacity: 0.8 }} />
          <span style={{ marginLeft: 8, color: colors.dim, fontSize: 12, letterSpacing: "0.05em", flex: 1 }}>jasper@kali — bash</span>
          <span style={{ color: "rgba(74,98,116,0.4)", fontSize: 12 }}>try: help</span>
        </div>

        <div ref={scrollRef} style={{ padding: 16, lineHeight: 1.6, overflowY: "auto", minHeight: 220, maxHeight: 280 }}>
          {history.map((entry, i) => (
            <div key={i}>
              {entry.type === "input" && (
                <div>
                  {prompt}
                  <span style={{ color: colors.bright }}>{entry.cmd}</span>
                </div>
              )}
              {entry.type === "output" &&
                entry.lines.map((l, j) => (
                  <div key={j} style={{ color: colorClassMap[l.t] || colors.muted, whiteSpace: "pre" }}>
                    {l.v}
                  </div>
                ))}
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center" }}>
            {prompt}
            <span style={{ position: "relative" }}>
              <span style={{ color: colors.bright }}>{input}</span>
              <span className="cursor-blink" />
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              autoComplete="off"
              spellCheck="false"
              aria-label="terminal input"
              style={{ position: "fixed", top: 0, left: 0, width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          transition: "opacity 0.6s ease, transform 0.6s ease",
          opacity: hasInteracted ? 0 : 1,
          pointerEvents: "none",
          transform: hasInteracted ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8, paddingLeft: 4 }}>
          <span style={{ display: "flex", gap: 3 }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: colors.accent,
                  opacity: 0.7,
                  animation: `hintDot 1.2s ease-in-out ${i * 0.18}s infinite`,
                }}
              />
            ))}
          </span>
          <span className="font-mono" style={{ fontSize: 11, color: colors.dim }}>
            interactive — click & type <span style={{ color: colors.accent }}>help</span>
          </span>
          <span className="font-mono" style={{ fontSize: 13, color: colors.accent, animation: "hintArrow 1.2s ease-in-out infinite" }}>
            ↑
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Nav ──
function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["about", "expertise", "skills", "writeups", "certifications", "education", "contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s",
        background: scrolled ? "rgba(8,11,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${colors.border}` : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <GlitchLogo />
        <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className={`nav-link font-mono ${activeSection === l ? "active" : ""}`}
              style={{
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: activeSection === l ? colors.accent : colors.dim,
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </div>
        <div className="font-mono" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: colors.dim }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: colors.accent,
              boxShadow: "0 0 8px rgba(0,229,176,0.8)",
              animation: "pulse 2s infinite",
            }}
          />
          Available
        </div>
      </div>
    </nav>
  );
}

// ── Scroll Progress ──
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const p = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setPct(Math.min(p, 100));
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 2,
        width: `${pct}%`,
        background: colors.accent,
        zIndex: 99998,
        transition: "width 0.1s linear",
        boxShadow: "0 0 6px rgba(0,229,176,0.5)",
      }}
    />
  );
}

// ── Section Wrapper ──
function Section({ id, children, className = "", style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`${visible ? "section-visible" : ""} ${className}`} style={style}>
      {children}
    </section>
  );
}

// ── Section Header ──
function SectionHeader({ num, title }) {
  const [glitch, setGlitch] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 600);
          }, 200);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
      <span className="font-mono" style={{ fontSize: 12, color: colors.accent, letterSpacing: "0.1em" }}>{num}</span>
      <h2 className="font-display" style={{ fontSize: 36, color: colors.bright, letterSpacing: "0.05em", position: "relative", display: "inline-block" }}>
        <span style={{ visibility: glitch ? "hidden" : "visible" }}>{title}</span>
        {glitch && (
          <span
            style={{
              position: "absolute",
              inset: 0,
              color: colors.accent,
              textShadow: `2px 0 ${colors.warn}, -2px 0 ${colors.blue}`,
              animation: "glitchSlice 0.07s steps(1) infinite",
            }}
          >
            {title}
          </span>
        )}
      </h2>
      <div style={{ flex: 1, height: 1, background: colors.border, maxWidth: 256 }} />
    </div>
  );
}

// ── Glitch Logo ──
function GlitchLogo() {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setGlitch(true), 800);
    const t2 = setTimeout(() => setGlitch(false), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <a href="#home" className="font-mono" style={{ fontSize: 14, color: colors.accent, letterSpacing: "0.05em", position: "relative", display: "inline-block", textDecoration: "none" }}>
      <span style={{ visibility: glitch ? "hidden" : "visible" }}>
        <span style={{ color: colors.dim }}>~/</span>jasper<span style={{ color: colors.dim }}>@</span>vzeir
      </span>
      {glitch && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            color: colors.accent,
            textShadow: `2px 0 ${colors.warn}, -2px 0 ${colors.blue}`,
            animation: "glitchSlice 0.08s steps(1) infinite",
            whiteSpace: "nowrap",
          }}
        >
          ~/z3r0d4yj
        </span>
      )}
    </a>
  );
}

// ── Glitch Name ──
function GlitchName() {
  const [hovered, setHovered] = useState(false);
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 1200);
    return () => clearTimeout(t);
  }, []);
  const active = hovered || intro;

  return (
    <h1
      className="font-display fade-in-up delay-1"
      style={{ lineHeight: 1, marginBottom: 16, cursor: "pointer", userSelect: "none", fontSize: "clamp(56px,8vw,110px)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ display: "block", position: "relative", color: active ? "transparent" : colors.bright, transition: "color 0.05s" }}>
        <span style={{ visibility: active ? "hidden" : "visible" }}>JASPER</span>
        {active && (
          <span style={{ position: "absolute", inset: 0, color: colors.accent, textShadow: "0 0 20px rgba(0,229,176,0.8)", animation: "glitchSlice 0.08s steps(1) infinite" }}>
            Z3R0D4Y
          </span>
        )}
      </span>
      <span style={{ display: "block", position: "relative", color: active ? "transparent" : colors.accent, transition: "color 0.05s" }}>
        <span className="glow-accent" style={{ visibility: active ? "hidden" : "visible" }}>VAN ZEIR</span>
        {active && (
          <span
            style={{
              position: "absolute",
              inset: 0,
              color: colors.bright,
              textShadow: `2px 0 ${colors.warn}, -2px 0 ${colors.blue}`,
              animation: "glitchSlice 0.1s steps(1) infinite",
              letterSpacing: "0.04em",
            }}
          >
            J&nbsp;&nbsp;&nbsp;VAN ZEIR
          </span>
        )}
      </span>
      <span
        className="font-mono"
        style={{
          display: "block",
          marginTop: 4,
          fontSize: "clamp(13px,1.4vw,18px)",
          color: active ? colors.accent : colors.dim,
          transition: "color 0.3s ease",
          textShadow: active ? "0 0 16px rgba(0,229,176,0.6)" : "none",
          letterSpacing: "0.15em",
        }}
      >
        {active ? "// Z3r0D4yJ" : "// hover to reveal alias"}
      </span>
    </h1>
  );
}

// ── Typing Tag ──
function TypingTag() {
  const full = "Ethical Hacker · Pentester · Red Teamer";
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(full.slice(0, i));
      if (i >= full.length) { clearInterval(interval); setDone(true); }
    }, 38);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-in-up" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
      <div style={{ height: 1, width: 32, background: colors.accent, flexShrink: 0 }} />
      <span className="font-mono" style={{ fontSize: 12, color: colors.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {displayed}
        {!done && <span style={{ display: "inline-block", width: 8, height: 12, background: colors.accent, marginLeft: 2, verticalAlign: "middle", animation: "blink 0.7s step-end infinite" }} />}
      </span>
    </div>
  );
}

// ── Stat Card ──
function StatCard({ num, label, delay = 0 }) {
  return (
    <div className="card-hover reveal" style={{ border: `1px solid ${colors.border}`, background: colors.surface, padding: 24, transitionDelay: `${delay}ms` }}>
      <div className="font-display glow-accent" style={{ fontSize: 48, color: colors.accent, marginBottom: 8 }}>{num}</div>
      <div className="font-mono" style={{ fontSize: 12, color: colors.dim, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}

// ── Expertise Card ──
function ExpertiseCard({ icon, title, desc, tags, delay = 0 }) {
  return (
    <div className="card-hover reveal" style={{ border: `1px solid ${colors.border}`, background: colors.surface, borderRadius: 2, padding: 28, transitionDelay: `${delay}ms` }}>
      <div style={{ fontSize: 24, marginBottom: 16 }}>{icon}</div>
      <h3 className="font-display" style={{ fontSize: 20, color: colors.bright, letterSpacing: "0.05em", marginBottom: 12 }}>{title}</h3>
      <p style={{ fontSize: 12, lineHeight: 1.6, color: colors.dim, marginBottom: 20 }}>{desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {tags.map((t) => (
          <span
            key={t}
            className="font-mono"
            style={{ fontSize: 12, padding: "4px 8px", border: `1px solid ${colors.border}`, color: colors.dim, borderRadius: 2 }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Skill Bar ──
function SkillBar({ name, pct, visible, delay = 0 }) {
  return (
    <div className="reveal" style={{ marginBottom: 20, transitionDelay: `${delay}ms` }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span className="font-mono" style={{ fontSize: 12, color: colors.muted }}>{name}</span>
        <span className="font-mono" style={{ fontSize: 12, color: colors.accent }}>{pct}%</span>
      </div>
      <div style={{ height: 1, background: colors.border, position: "relative", overflow: "hidden" }}>
        <div
          className={visible ? "skill-bar-anim" : ""}
          style={{ height: "100%", background: `linear-gradient(to right, ${colors.accent}, ${colors.blue})`, width: visible ? `${pct}%` : "0%", animationDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

// ── Cert Card ──
function CertCard({ icon, name, issuer, year, delay = 0 }) {
  return (
    <div
      className="card-hover reveal"
      style={{ border: `1px solid ${colors.border}`, background: colors.surface, borderRadius: 2, padding: 20, display: "flex", gap: 16, alignItems: "flex-start", transitionDelay: `${delay}ms` }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          border: `1px solid ${colors.border}`,
          background: colors.surface2,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div className="font-display" style={{ color: colors.bright, letterSpacing: "0.05em", marginBottom: 4 }}>{name}</div>
        <div className="font-mono" style={{ fontSize: 12, color: colors.dim, marginBottom: 8 }}>{issuer}</div>
        <span className="font-mono" style={{ fontSize: 12, padding: "2px 8px", border: `1px solid rgba(47,136,255,0.3)`, color: colors.blue, background: "rgba(47,136,255,0.05)", borderRadius: 2 }}>
          {year}
        </span>
      </div>
    </div>
  );
}

// ── Timeline Item ──
function TimelineItem({ year, degree, school, desc, delay = 0 }) {
  return (
    <div className="reveal" style={{ position: "relative", paddingLeft: 40, marginBottom: 48, transitionDelay: `${delay}ms` }}>
      <div style={{ position: "absolute", left: 0, top: 6, width: 10, height: 10, borderRadius: "50%", background: colors.accent, boxShadow: "0 0 12px rgba(0,229,176,0.6)" }} />
      <div className="font-mono" style={{ fontSize: 12, color: colors.accent, letterSpacing: "0.1em", marginBottom: 8 }}>{year}</div>
      <div className="font-display" style={{ fontSize: 24, color: colors.bright, letterSpacing: "0.05em", marginBottom: 4 }}>{degree}</div>
      <div className="font-mono" style={{ fontSize: 12, color: colors.dim, marginBottom: 12 }}>{school}</div>
      <p style={{ fontSize: 12, lineHeight: 1.6, color: colors.dim, maxWidth: 512 }}>{desc}</p>
    </div>
  );
}

// ── Main App ──
export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSkillsVisible(true); }, { threshold: 0.2 });
    if (skillsRef.current) obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, []);

  const expertiseData = [
    { icon: "🌐", title: "Web App Security", desc: "Comprehensive assessments covering OWASP Top 10, authentication bypass, business logic flaws, and deep API security testing.", tags: ["Burp Suite Pro", "OWASP", "SQLi", "XSS", "API Security"] },
    { icon: "🔌", title: "Network Pentesting", desc: "Internal and external network assessments including Active Directory exploitation, lateral movement, and domain compromise.", tags: ["BloodHound", "Mimikatz", "Active Directory", "Kerberoasting"] },
    { icon: "☁️", title: "Cloud Security", desc: "Security reviews of AWS, Azure, and GCP environments. IAM misconfiguration analysis, storage exposure, and container security.", tags: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"] },
    { icon: "🔴", title: "Red Team Ops", desc: "Full-scope adversary simulations with realistic OPSEC. Social engineering, phishing infrastructure, and C2 framework deployment.", tags: ["Cobalt Strike", "Havoc", "C2 Infra", "OPSEC"] },
    { icon: "📱", title: "Mobile Security", desc: "Static and dynamic analysis of iOS and Android apps. Certificate pinning bypass, reverse engineering, and runtime manipulation.", tags: ["Frida", "MobSF", "Jadx", "Objection"] },
    { icon: "⚙️", title: "Security Architecture", desc: "Threat modeling, security design reviews, and SDLC integration. Identifying structural weaknesses before production.", tags: ["STRIDE", "MITRE ATT&CK", "Zero Trust", "NIST CSF"] },
  ];

  const offensiveSkills = [
    { name: "Web Application Pentesting", pct: 96 },
    { name: "Network Exploitation & AD Attacks", pct: 91 },
    { name: "Red Team Operations", pct: 86 },
    { name: "Cloud Security Assessment", pct: 82 },
    { name: "Exploit Development", pct: 73 },
  ];

  const toolingSkills = [
    { name: "Python / Bash Scripting", pct: 93 },
    { name: "Burp Suite Pro", pct: 97 },
    { name: "Reporting & Communication", pct: 95 },
    { name: "Reverse Engineering", pct: 75 },
    { name: "Malware Analysis", pct: 70 },
  ];

  const certs = [
    { icon: "🔐", name: "OSCP", issuer: "Offensive Security Certified Professional", year: "Placeholder" },
    { icon: "📋", name: "CEH Master", issuer: "Certified Ethical Hacker — EC-Council", year: "Placeholder" },
  ];

  const containerStyle = { maxWidth: 1280, margin: "0 auto", padding: "0 24px" };

  return (
    <div className="scanlines font-sans" style={{ position: "relative", background: colors.bg, color: colors.muted, minHeight: "100vh" }}>
      <GlobalStyles />
      <ParticleField />
      <ScrollProgress />
      <Nav activeSection={activeSection} />

      {/* ── HERO ── */}
      <section id="home" className="grid-bg" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 56, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "25%", right: "25%", width: 384, height: 384, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(47,136,255,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "33%", left: "25%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,229,176,0.05) 0%, transparent 70%)", filter: "blur(40px)" }} />

        <div style={{ ...containerStyle, position: "relative", zIndex: 10, padding: "80px 24px", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 64 }}>
              <div style={{ maxWidth: 640 }}>
                <TypingTag />
                <GlitchName />
                <p className="font-sans fade-in-up delay-2" style={{ color: colors.muted, marginBottom: 12, fontSize: "clamp(14px,1.5vw,18px)" }}>
                  Applied CS Student · Belgian Defence SGT · Aspiring Cybersecurity Expert
                </p>
                <p className="font-mono fade-in-up delay-3" style={{ fontSize: 12, color: colors.dim, lineHeight: 1.6, marginBottom: 40, maxWidth: 512 }}>
                  Student, soldier, and self-taught hacker. Studying Applied Computer Science at HOGENT while serving as Sergeant at Belgian Defence — building the technical and operational foundation for a career in offensive security.
                </p>
                <div className="fade-in-up delay-4" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  <a
                    href="#contact"
                    className="font-mono"
                    style={{
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      padding: "12px 28px",
                      background: colors.accent,
                      color: colors.bg,
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 0 24px rgba(0,229,176,0.25)",
                    }}
                  >
                    ▶ Get in Touch
                  </a>
                  <a
                    href="#expertise"
                    className="font-mono"
                    style={{
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      padding: "12px 28px",
                      border: `1px solid ${colors.border}`,
                      color: colors.dim,
                      textDecoration: "none",
                    }}
                  >
                    View Expertise
                  </a>
                </div>
              </div>
              <div className="fade-in-up delay-5" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
                <HexGraphic />
                <Terminal />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <Section id="about" style={{ padding: "96px 0", borderTop: `1px solid ${colors.border}` }}>
        <div style={containerStyle}>
          <SectionHeader num="// 01" title="ABOUT ME" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64, alignItems: "start" }}>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                I'm <span style={{ color: colors.bright, fontWeight: 500 }}>Jasper Van Zeir</span>, a cybersecurity enthusiast and student currently studying Applied Computer Science at HOGENT, with a planned specialization in Cybersecurity at HOWEST starting 2026.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                Alongside my studies, I serve at <span style={{ color: colors.accent }}>Belgian Defence</span> as <span style={{ color: colors.bright, fontWeight: 500 }}>Sergeant Onder-Officier</span> — a role that has sharpened my discipline, operational thinking, and ability to perform under pressure.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                Passionate about offensive security, I continuously sharpen my skills through CTF competitions, hands-on labs, and self-study — driven by a genuine curiosity for how systems can be broken and hardened.
              </p>
              <div className="font-mono" style={{ paddingTop: 16, fontSize: 12, borderTop: `1px solid ${colors.border}` }}>
                <span style={{ color: colors.accent }}>~/focus</span>
                <span style={{ color: colors.dim }}> → </span>
                <span style={{ color: colors.muted }}>Ethical hacking · Network security · Penetration testing</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: colors.border }}>
              <StatCard num="50+" label="CTF Challenges" delay={0} />
              <StatCard num="20+" label="Writeups Made" delay={100} />
              <StatCard num="SGT" label="Belgian Defence" delay={200} />
              <StatCard num="∞" label="Curiosity Level" delay={300} />
            </div>
          </div>
        </div>
      </Section>

      {/* ── EXPERTISE ── */}
      <Section id="expertise" style={{ padding: "96px 0", borderTop: `1px solid ${colors.border}`, background: colors.surface }}>
        <div style={containerStyle}>
          <SectionHeader num="// 02" title="EXPERTISE" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 1, background: colors.border }}>
            {expertiseData.map((e, i) => (
              <ExpertiseCard key={e.title} {...e} delay={i * 80} />
            ))}
          </div>
        </div>
      </Section>

      {/* ── SKILLS ── */}
      <Section id="skills" style={{ padding: "96px 0", borderTop: `1px solid ${colors.border}` }}>
        <div style={containerStyle} ref={skillsRef}>
          <SectionHeader num="// 03" title="TECHNICAL SKILLS" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64 }}>
            <div>
              <div className="font-mono reveal" style={{ fontSize: 12, color: colors.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 32, paddingBottom: 12, borderBottom: `1px solid ${colors.border}` }}>
                Offensive Security
              </div>
              {offensiveSkills.map((s, i) => (
                <SkillBar key={s.name} {...s} visible={skillsVisible} delay={i * 100} />
              ))}
            </div>
            <div>
              <div className="font-mono reveal" style={{ fontSize: 12, color: colors.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 32, paddingBottom: 12, borderBottom: `1px solid ${colors.border}` }}>
                Tools & Programming
              </div>
              {toolingSkills.map((s, i) => (
                <SkillBar key={s.name} {...s} visible={skillsVisible} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Dev Skills */}
          <div className="reveal" style={{ marginTop: 56, paddingTop: 40, borderTop: `1px solid ${colors.border}` }}>
            <div className="font-mono" style={{ fontSize: 12, color: colors.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Development Background</div>
            <p className="font-mono" style={{ fontSize: 12, color: colors.dim, lineHeight: 1.6, marginBottom: 24, maxWidth: 640 }}>
              As an Applied Computer Science student at HOGENT, I've built full applications from the ground up — giving me a practical understanding of how software works under the hood.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 1, background: colors.border, marginBottom: 40 }}>
              {[
                { icon: "☕", name: "Java", desc: "OOP, backend logic, architecture" },
                { icon: "🔷", name: "C#", desc: ".NET development, desktop & web" },
                { icon: "⚛️", name: "React", desc: "Component-based frontend dev" },
                { icon: "🎨", name: "Tailwind CSS", desc: "Utility-first styling" },
              ].map((s) => (
                <div key={s.name} className="card-hover" style={{ border: `1px solid ${colors.border}`, background: colors.bg, padding: 20 }}>
                  <div style={{ fontSize: 20, marginBottom: 12 }}>{s.icon}</div>
                  <div className="font-display" style={{ fontSize: 18, color: colors.bright, letterSpacing: "0.05em", marginBottom: 4 }}>{s.name}</div>
                  <div className="font-mono" style={{ fontSize: 12, color: colors.dim, lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tool badges */}
          <div className="reveal" style={{ paddingTop: 40, borderTop: `1px solid ${colors.border}` }}>
            <div className="font-mono" style={{ fontSize: 12, color: colors.dim, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>Primary Toolset</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Burp Suite Pro", "Metasploit", "Cobalt Strike", "BloodHound", "Nmap", "Wireshark", "Frida", "IDA Pro", "Ghidra", "Volatility", "Responder", "CrackMapExec", "Impacket", "Shodan", "Nuclei"].map((t) => (
                <span key={t} className="font-mono" style={{ fontSize: 12, padding: "6px 12px", border: `1px solid ${colors.border}`, color: colors.dim, cursor: "default" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── WRITEUPS ── */}
      <Section id="writeups" style={{ padding: "96px 0", borderTop: `1px solid ${colors.border}`, background: colors.surface }}>
        <div style={containerStyle}>
          <SectionHeader num="// 04" title="WRITEUPS & DOCS" />
          <a
            href="https://z3r0d4yj.gitbook.io/z3r0d4yj-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal card-hover"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              border: `1px solid ${colors.border}`,
              background: colors.bg,
              padding: 32,
              marginBottom: 40,
              textDecoration: "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 56, height: 56, border: `1px solid ${colors.border}`, background: colors.surface2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                📖
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 24, color: colors.bright, letterSpacing: "0.05em", marginBottom: 4 }}>z3r0d4yj-docs</div>
                <div className="font-mono" style={{ fontSize: 12, color: colors.dim }}>z3r0d4yj.gitbook.io/z3r0d4yj-docs</div>
              </div>
            </div>
            <div className="font-mono" style={{ fontSize: 12, padding: "10px 20px", border: `1px solid rgba(0,229,176,0.4)`, color: colors.accent, whiteSpace: "nowrap" }}>
              Visit Docs →
            </div>
          </a>

          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 1, background: colors.border }}>
            {[
              { icon: "🎯", title: "CTF Writeups", count: "20+", desc: "Detailed walkthroughs of HackTheBox, BugForge, and other CTF challenges.", tags: ["HackTheBox", "BugForge", "Web", "Network", "Forensics"] },
              { icon: "🎓", title: "School Notes", count: "HOGENT", desc: "Structured notes from Applied Computer Science curriculum.", tags: ["Networking", "Linux", "Programming", "Security"] },
              { icon: "🔬", title: "Research & Labs", count: "Ongoing", desc: "Personal research, tool docs, lab setups, and self-study notes.", tags: ["Pentesting", "Tools", "Lab Setup", "Techniques"] },
            ].map((c, i) => (
              <a
                key={c.title}
                href="https://z3r0d4yj.gitbook.io/z3r0d4yj-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover"
                style={{ border: `1px solid ${colors.border}`, background: colors.bg, padding: 28, display: "block", textDecoration: "none", transitionDelay: `${i * 80}ms` }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <span style={{ fontSize: 24 }}>{c.icon}</span>
                  <span className="font-mono" style={{ fontSize: 12, padding: "4px 8px", border: `1px solid rgba(0,229,176,0.2)`, color: colors.accent, background: "rgba(0,229,176,0.05)" }}>
                    {c.count}
                  </span>
                </div>
                <div className="font-display" style={{ fontSize: 20, color: colors.bright, letterSpacing: "0.05em", marginBottom: 8 }}>{c.title}</div>
                <p className="font-mono" style={{ fontSize: 12, color: colors.dim, lineHeight: 1.6, marginBottom: 20 }}>{c.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {c.tags.map((t) => (
                    <span key={t} className="font-mono" style={{ fontSize: 12, padding: "4px 8px", border: `1px solid ${colors.border}`, color: colors.dim }}>
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CERTIFICATIONS ── */}
      <Section id="certifications" style={{ padding: "96px 0", borderTop: `1px solid ${colors.border}`, background: colors.surface }}>
        <div style={containerStyle}>
          <SectionHeader num="// 05" title="CERTIFICATIONS" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {certs.map((c, i) => (
              <CertCard key={c.name} {...c} delay={i * 70} />
            ))}
          </div>
        </div>
      </Section>

      {/* ── EDUCATION ── */}
      <Section id="education" style={{ padding: "96px 0", borderTop: `1px solid ${colors.border}` }}>
        <div style={containerStyle}>
          <SectionHeader num="// 06" title="EDUCATION" />
          <div style={{ position: "relative", paddingLeft: 24, borderLeft: `1px solid ${colors.border}` }}>
            <TimelineItem year="2026 — 2028" degree="Bachelor Cybersecurity" school="HOWEST — Belgium" desc="Upcoming specialization in cybersecurity — offensive security, ethical hacking, digital forensics, and secure software development." delay={0} />
            <TimelineItem year="2023 — 2026" degree="Bachelor Applied Computer Science" school="Hogeschool Gent (HOGENT) — Belgium" desc="Currently studying applied computer science with a focus on software development, networking, and system administration." delay={100} />
            <TimelineItem year="2019 — Present" degree="Continuous Training & CTF Competition" school="HackTheBox · TryHackMe · SANS Institute" desc="Active CTF participation and HTB Pro Labs. Self-taught offensive security practitioner." delay={200} />
          </div>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" style={{ padding: "96px 0", borderTop: `1px solid ${colors.border}`, background: colors.surface }}>
        <div style={containerStyle}>
          <SectionHeader num="// 07" title="GET IN TOUCH" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64 }}>
            <div className="reveal">
              <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                Available for freelance penetration testing, red team engagements, security consulting, and speaking.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 32, color: colors.dim }}>
                Response within 24 hours. For encrypted communication or incident reporting, use Signal or PGP email.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { icon: "✉", label: "Email", val: "jasper@vzeir-sec.be" },
                  { icon: "🔒", label: "Signal", val: "+32 470 000 000" },
                  { icon: "in", label: "LinkedIn", val: "linkedin.com/in/jaspervanzeir" },
                  { icon: "⌥", label: "GitHub", val: "github.com/jasper-vzeir" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      border: `1px solid ${colors.border}`,
                      background: colors.bg,
                      padding: 16,
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    <span className="font-mono" style={{ width: 32, textAlign: "center", fontSize: 14, color: colors.dim }}>{l.icon}</span>
                    <div>
                      <div className="font-mono" style={{ fontSize: 12, color: colors.dim, marginBottom: 2 }}>{l.label}</div>
                      <div className="font-mono" style={{ fontSize: 12, color: colors.muted }}>{l.val}</div>
                    </div>
                    <span className="font-mono" style={{ marginLeft: "auto", color: colors.dim, fontSize: 12 }}>→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 16, transitionDelay: "100ms" }}>
              <div className="font-mono" style={{ border: `1px solid ${colors.border}`, background: colors.bg, padding: 20, fontSize: 12, lineHeight: 1.6 }}>
                <div style={{ color: colors.accent, marginBottom: 16, letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.accent, display: "inline-block", boxShadow: "0 0 6px rgba(0,229,176,0.8)" }} />
                  // OPERATOR PROFILE
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { key: "name", val: "Jasper Van Zeir" },
                    { key: "alias", val: "Z3r0D4yJ" },
                    { key: "role", val: "Student · Belgian Defence SGT" },
                    { key: "location", val: "Belgium 🇧🇪" },
                    { key: "education", val: "HOGENT → HOWEST (2026)" },
                    { key: "focus", val: "Ethical Hacking · Pentesting" },
                    { key: "languages", val: "NL · EN · FR" },
                  ].map(({ key, val }) => (
                    <div key={key} style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: colors.dim, width: 96, flexShrink: 0 }}>{key}</span>
                      <span style={{ color: "rgba(74,98,116,0.4)" }}>→</span>
                      <span style={{ color: colors.muted }}>{val}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: 12 }}>
                    <span style={{ color: colors.dim, width: 96, flexShrink: 0 }}>status</span>
                    <span style={{ color: "rgba(74,98,116,0.4)" }}>→</span>
                    <span style={{ color: colors.accent }}>● Available for engagements</span>
                  </div>
                </div>
              </div>

              <div className="font-mono" style={{ border: `1px solid ${colors.border}`, background: colors.bg, padding: 20, fontSize: 12 }}>
                <div style={{ color: colors.accent, marginBottom: 12, letterSpacing: "0.1em" }}>// RESPONSIBLE DISCLOSURE</div>
                <p style={{ color: colors.dim, lineHeight: 1.6 }}>
                  Found a vulnerability? Use PGP-encrypted email to report it. All reports handled confidentially with standard 90-day disclosure timelines.
                </p>
              </div>

              <div className="font-mono" style={{ border: `1px solid rgba(0,229,176,0.2)`, background: "rgba(0,229,176,0.05)", padding: 16, fontSize: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: colors.accent }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: colors.accent, boxShadow: "0 0 6px rgba(0,229,176,0.8)", animation: "pulse 2s infinite" }} />
                  Currently accepting new engagements — Q2 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${colors.border}`, padding: "24px 0" }}>
        <div style={{ ...containerStyle, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <span className="font-mono" style={{ fontSize: 12, color: colors.dim }}>
            <span style={{ color: colors.accent }}>jasper@vzeir</span>:~$ <span style={{ opacity: 0.6 }}>echo "Authorized testing only."</span>
          </span>
          <span className="font-mono" style={{ fontSize: 12, color: colors.dim }}>© 2025 Jasper Van Zeir — All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
