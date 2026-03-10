import { useState, useEffect, useRef } from 'react'

const COMMANDS = {
  help: () => [
    { t: 'accent', v: 'Available commands:' },
    { t: 'dim', v: '  whoami       — about Jasper' },
    { t: 'dim', v: '  skills       — technical skill set' },
    { t: 'dim', v: '  projects     — open source projects' },
    { t: 'dim', v: '  ctf          — CTF rankings & stats' },
    { t: 'dim', v: '  certs        — certifications list' },
    { t: 'dim', v: '  contact      — get in touch' },
    { t: 'dim', v: '  status       — current availability' },
    { t: 'dim', v: '  clear        — clear terminal' },
    { t: 'dim', v: '  help         — show this message' },
  ],
  whoami: () => [
    { t: 'accent', v: 'Jasper Van Zeir' },
    { t: 'muted', v: 'Cybersecurity Expert · Ethical Hacker · Red Teamer' },
    { t: 'dim', v: 'Student · Belgian Defence SGT' },
    { t: 'dim', v: 'Based in Belgium 🇧🇪' },
  ],
  skills: () => [
    { t: 'accent', v: 'Top skills:' },
    { t: 'green', v: '  ████████████████████  96%  Web App Pentesting' },
    { t: 'green', v: '  ███████████████████░  91%  Network / AD Attacks' },
    { t: 'green', v: '  █████████████████░░░  86%  Red Team Ops' },
    { t: 'green', v: '  ████████████████░░░░  82%  Cloud Security' },
    { t: 'green', v: '  ██████████████░░░░░░  73%  Exploit Dev' },
  ],
  projects: () => [
    { t: 'accent', v: 'Open Source Projects:' },
    { t: 'bright', v: '' },
    { t: 'green', v: '  [TOOL]     NetRecon' },
    { t: 'dim',   v: '             Automated network recon — Nmap + Whois + DNS' },
    { t: 'bright', v: '' },
    { t: 'green', v: '  [LAB]      AD Attack Lab' },
    { t: 'dim',   v: '             Vagrant + Ansible vulnerable AD environment' },
    { t: 'bright', v: '' },
    { t: 'green', v: '  [TOOL]     WebVulnScanner' },
    { t: 'dim',   v: '             OWASP Top 10 scanner — Burp Suite extension' },
    { t: 'bright', v: '' },
    { t: 'blue',  v: '  [RESEARCH] C2-Lite' },
    { t: 'dim',   v: '             Educational C2 framework — encrypted channels' },
    { t: 'bright', v: '' },
    { t: 'green', v: '  [APP]      SecureNotes' },
    { t: 'dim',   v: '             E2E encrypted notes — React + C#/.NET' },
    { t: 'bright', v: '' },
    { t: 'green', v: '  [APP]      CTF Dashboard' },
    { t: 'dim',   v: '             HTB + THM stats tracker & visualizer' },
    { t: 'bright', v: '' },
    { t: 'muted', v: '  → github.com/jasper-vzeir' },
  ],
  ctf: () => [
    { t: 'accent', v: 'CTF Stats & Rankings:' },
    { t: 'bright', v: '' },
    { t: 'green', v: '  ┌─────────────────────────────────────┐' },
    { t: 'green', v: '  │  HackTheBox                         │' },
    { t: 'green', v: '  │  Rank: Hacker · Top 15%             │' },
    { t: 'green', v: '  │  Machines owned: 30+                │' },
    { t: 'green', v: '  │  Challenges solved: 50+             │' },
    { t: 'green', v: '  └─────────────────────────────────────┘' },
    { t: 'bright', v: '' },
    { t: 'blue',  v: '  ┌─────────────────────────────────────┐' },
    { t: 'blue',  v: '  │  TryHackMe                          │' },
    { t: 'blue',  v: '  │  Rank: 0x8 [Hacker] · Top 5%       │' },
    { t: 'blue',  v: '  │  Rooms completed: 80+               │' },
    { t: 'blue',  v: '  │  Streak: 30 days                    │' },
    { t: 'blue',  v: '  └─────────────────────────────────────┘' },
    { t: 'bright', v: '' },
    { t: 'muted', v: '  Categories: Web | Network | Forensics | RE | Crypto' },
    { t: 'dim',   v: '  Active CTF team member since 2019' },
  ],
  certs: () => [
    { t: 'accent', v: 'Certifications:' },
    { t: 'blue', v: '  [—]  OSCP  — Offensive Security Certified Professional' },
    { t: 'blue', v: '  [—]  CEH Master  — Certified Ethical Hacker' },
  ],
  contact: () => [
    { t: 'accent', v: 'Contact Jasper:' },
    { t: 'muted', v: '  email    jasper@vzeir-sec.be' },
    { t: 'muted', v: '  signal   +32 470 000 000' },
    { t: 'muted', v: '  linkedin linkedin.com/in/jaspervanzeir' },
    { t: 'muted', v: '  github   github.com/jasper-vzeir' },
  ],
  status: () => [
    { t: 'green', v: '[+] Status: AVAILABLE' },
    { t: 'dim', v: '    Accepting engagements from Q2 2025' },
    { t: 'dim', v: '    Response time: < 24h' },
  ],
}

const colorMap = {
  accent: 'text-accent',
  dim: 'text-dim',
  muted: 'text-muted',
  green: 'text-green-400',
  blue: 'text-blue',
  warn: 'text-warn',
  bright: 'text-bright',
}

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', lines: [
      { t: 'accent', v: 'jasper@kali — interactive shell v1.0' },
      { t: 'dim', v: 'Type "help" to see available commands.' },
    ]},
  ])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [history])

  const prompt = (
    <span>
      <span className="text-accent">jasper@kali</span>
      <span className="text-dim">:</span>
      <span className="text-blue">~</span>
      <span className="text-dim">$ </span>
    </span>
  )

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase()
    if (cmd === 'clear') {
      setHistory([])
      setCmdHistory((p) => [raw, ...p])
      setHistIdx(-1)
      return
    }
    let outputLines
    if (!cmd) outputLines = []
    else if (COMMANDS[cmd]) outputLines = COMMANDS[cmd]()
    else outputLines = [
      { t: 'warn', v: `bash: ${cmd}: command not found` },
      { t: 'dim', v: 'Try "help" for available commands.' },
    ]
    setHistory((p) => [...p, { type: 'input', cmd: raw }, { type: 'output', lines: outputLines }])
    setCmdHistory((p) => [raw, ...p])
    setHistIdx(-1)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      runCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHistory.length - 1)
      setHistIdx(next)
      setInput(cmdHistory[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      setInput(next === -1 ? '' : cmdHistory[next] ?? '')
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = Object.keys(COMMANDS).find((k) => k.startsWith(input))
      if (match) setInput(match)
    }
  }

  const hasInteracted = cmdHistory.length > 0

  return (
    <div style={{ width: 420, maxWidth: '100%' }}>
      <div
        className="terminal-glow border border-border rounded-md overflow-hidden bg-surface font-mono text-xs cursor-text"
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-surface2 border-b border-border select-none">
          <div className="w-3 h-3 rounded-full bg-warn opacity-80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
          <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
          <span className="ml-2 text-dim text-xs tracking-wider flex-1">jasper@kali — bash</span>
          <span className="text-dim/40 text-xs">try: help</span>
        </div>

        {/* Output */}
        <div ref={scrollRef} className="p-4 space-y-1 leading-relaxed overflow-y-auto overflow-x-hidden" style={{ height: 280 }}>
          {history.map((entry, i) => (
            <div key={i}>
              {entry.type === 'input' && (
                <div className="break-all">{prompt}<span className="text-bright">{entry.cmd}</span></div>
              )}
              {entry.type === 'output' && entry.lines.map((l, j) => (
                <div key={j} className={colorMap[l.t] || 'text-muted'} style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{l.v}</div>
              ))}
            </div>
          ))}
          <div className="flex items-start">
            {prompt}
            <span className="relative break-all">
              <span className="text-bright">{input}</span>
              <span className="cursor-blink" />
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              className="fixed top-0 left-0 w-px h-px opacity-0 pointer-events-none"
              autoComplete="off"
              spellCheck="false"
              aria-label="terminal input"
            />
          </div>
        </div>
      </div>

      {/* Hint */}
      <div style={{
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        opacity: hasInteracted ? 0 : 1,
        pointerEvents: 'none',
        transform: hasInteracted ? 'translateY(-4px)' : 'translateY(0)',
      }}>
        <div className="flex items-center gap-2 mt-2 px-1">
          <span className="flex gap-[3px]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="block w-1 h-1 rounded-full bg-accent animate-hint-dot"
                style={{ opacity: 0.7, animationDelay: `${i * 0.18}s` }} />
            ))}
          </span>
          <span className="font-mono text-dim" style={{ fontSize: 11 }}>
            interactive — click & type <span className="text-accent">help</span>
          </span>
          <span className="text-accent font-mono animate-hint-arrow" style={{ fontSize: 13 }}>↑</span>
        </div>
      </div>
    </div>
  )
}
