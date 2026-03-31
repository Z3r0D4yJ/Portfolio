import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ArrowsOutIcon, ArrowsInIcon } from "@phosphor-icons/react"

const COMMANDS = {
  help: () => [
    { t: 'accent', v: 'Available commands:' },
    { t: 'dim', v: '  whoami       — about Jasper' },
    { t: 'dim', v: '  skills       — technical skill set' },
    { t: 'dim', v: '  ctf          — CTF stats' },
    { t: 'dim', v: '  goals        — what I\'m working towards' },
    { t: 'dim', v: '  contact      — get in touch' },
    { t: 'dim', v: '  clear        — clear terminal' },
    { t: 'dim', v: '  help         — show this message' },
  ],
  whoami: () => [
    { t: 'accent', v: 'Jasper Van Zeir — Z3r0D4yJ' },
    { t: 'muted', v: 'CS Student · Belgian Defence SGT' },
    { t: 'dim', v: 'HOGENT Applied CS → HOWEST Cybersecurity (2026)' },
    { t: 'dim', v: 'Full Stack Dev track — learning to build' },
    { t: 'dim', v: 'so I can learn how things break.' },
    { t: 'dim', v: 'Based in Belgium 🇧🇪' },
  ],
  skills: () => [
    { t: 'accent', v: 'Development:' },
    { t: 'green', v: '  ████████████████░░░░  85%  JS / TypeScript' },
    { t: 'green', v: '  ████████████████░░░░  80%  Java' },
    { t: 'green', v: '  ████████████████░░░░  80%  React & Tailwind' },
    { t: 'green', v: '  ███████████████░░░░░  75%  C# / .NET' },
    { t: 'bright', v: '' },
    { t: 'accent', v: 'Security:' },
    { t: 'blue',  v: '  █████████████░░░░░░░  70%  CTF & Labs' },
    { t: 'blue',  v: '  █████████████░░░░░░░  70%  Linux & Networking' },
    { t: 'blue',  v: '  █████████████░░░░░░░  65%  Web App Security' },
    { t: 'blue',  v: '  ████████████░░░░░░░░  60%  Recon & Enumeration' },
  ],
  ctf: () => [
    { t: 'accent', v: 'CTF Stats:' },
    { t: 'bright', v: '' },
    { t: 'green', v: '  Challenges completed:  50+' },
    { t: 'green', v: '  Writeups published:   20+' },
    { t: 'bright', v: '' },
    { t: 'muted', v: '  Platforms:' },
    { t: 'dim',   v: '    HackTheBox · TryHackMe · BugForge' },
    { t: 'bright', v: '' },
    { t: 'muted', v: '  Focus areas:' },
    { t: 'dim',   v: '    Web security · Network · Forensics' },
    { t: 'bright', v: '' },
    { t: 'dim',   v: '  Active since 2019' },
    { t: 'dim',   v: '  → z3r0d4yj.gitbook.io/z3r0d4yj-docs' },
  ],
  goals: () => [
    { t: 'accent', v: 'Where I\'m headed:' },
    { t: 'bright', v: '' },
    { t: 'green', v: '  [2026]  Start Cybersecurity @ HOWEST' },
    { t: 'green', v: '  [——]    OSCP certification' },
    { t: 'green', v: '  [——]    eWPT certification' },
    { t: 'blue',  v: '  [——]    Red Team / Pentester role' },
    { t: 'blue',  v: '  [——]    Defence Cyber Command' },
    { t: 'bright', v: '' },
    { t: 'dim',   v: '  "Learn how systems are built,' },
    { t: 'dim',   v: '   understand how they break,' },
    { t: 'dim',   v: '   protect what matters."' },
  ],
  contact: () => [
    { t: 'accent', v: 'Contact Jasper:' },
    { t: 'muted', v: '  email    jasper@vzeir-sec.be' },
    { t: 'muted', v: '  linkedin linkedin.com/in/jaspervanzeir' },
    { t: 'muted', v: '  github   github.com/jasper-vzeir' },
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

function TerminalContent({ history, input, prompt, colorMap, scrollRef, inputRef, handleKey, setInput, expanded }) {
  return (
    <div
      ref={scrollRef}
      className="p-4 space-y-1 leading-relaxed overflow-y-auto overflow-x-hidden"
      style={{ height: expanded ? 'calc(100% - 44px)' : 280 }}
    >
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
  )
}

function TitleBar({ expanded, setExpanded, hasInteracted }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-surface2 border-b border-border select-none">
      <div className="w-3 h-3 rounded-full bg-warn opacity-80" />
      <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
      <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
      <span className="ml-2 text-dim text-xs tracking-wider flex-1">jasper@kali — bash</span>
      {!expanded && <span className="text-dim/40 text-xs mr-2">try: help</span>}
      {expanded && <span className="text-dim/40 text-xs mr-2">ESC to close</span>}
      <button
        onClick={(e) => {
          e.stopPropagation()
          setExpanded(!expanded)
        }}
        className="w-6 h-6 flex items-center justify-center text-dim hover:text-accent transition-colors"
        aria-label={expanded ? 'Collapse terminal' : 'Expand terminal'}
      >
        {expanded
          ? <ArrowsInIcon size={14} weight="bold" />
          : <ArrowsOutIcon size={14} weight="bold" />
        }
      </button>
    </div>
  )
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
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [history])

  // Lock body scroll when expanded
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [expanded])

  // Close on Escape
  useEffect(() => {
    if (!expanded) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setExpanded(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [expanded])

  // Animate open: mount portal first, then trigger CSS transition
  // Animate close: reverse CSS transition, then unmount portal
  useEffect(() => {
    if (expanded) {
      setVisible(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true))
      })
    } else {
      setAnimating(false)
      const timer = setTimeout(() => setVisible(false), 500)
      return () => clearTimeout(timer)
    }
  }, [expanded])

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

  const sharedProps = { history, input, prompt, colorMap, scrollRef, inputRef, handleKey, setInput }

  return (
    <div className="hidden lg:block" style={{ width: 420, maxWidth: '100%' }}>
      {/* Inline (collapsed) terminal */}
      <div
        className="terminal-glow border border-border rounded-md overflow-hidden bg-surface font-mono text-xs cursor-text"
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
        style={{ visibility: visible ? 'hidden' : 'visible' }}
      >
        <TitleBar expanded={false} setExpanded={setExpanded} hasInteracted={hasInteracted} />
        {!visible && <TerminalContent {...sharedProps} expanded={false} />}
      </div>

      {/* Expanded terminal — rendered via portal to escape overflow:hidden parents */}
      {visible && createPortal(
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[9998] bg-bg/80 backdrop-blur-sm transition-opacity duration-500"
            style={{ opacity: animating ? 1 : 0 }}
            onClick={() => setExpanded(false)}
          />

          {/* Expanded terminal */}
          <div
            className="fixed z-[9999] terminal-glow border border-border rounded-md overflow-hidden bg-surface font-mono text-sm cursor-text transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              top: animating ? '5vh' : '35%',
              left: animating ? '10vw' : '45%',
              right: animating ? '10vw' : '45%',
              bottom: animating ? '5vh' : '35%',
              opacity: animating ? 1 : 0,
            }}
            onClick={() => inputRef.current?.focus({ preventScroll: true })}
          >
            <TitleBar expanded={true} setExpanded={setExpanded} hasInteracted={hasInteracted} />
            <TerminalContent {...sharedProps} expanded={true} />
          </div>
        </>,
        document.body
      )}

      {/* Hint */}
      <div style={{
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        opacity: hasInteracted || expanded ? 0 : 1,
        pointerEvents: 'none',
        transform: hasInteracted || expanded ? 'translateY(-4px)' : 'translateY(0)',
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
