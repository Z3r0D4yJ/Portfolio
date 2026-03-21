import { Section, SectionHeader } from './Section'
import { ShieldCheckIcon, GithubLogoIcon  } from "@phosphor-icons/react"

export default function Projects() {
  return (
    <Section id="projects" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader num="// 03" title="PROJECTS" />
        {/* Gitbook banner */}
        <a
          href="https://z3r0d4yj.gitbook.io/z3r0d4yj-docs"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal card-hover group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-border bg-surface p-6 mb-10 no-underline"
        >
<         div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="w-12 h-12 border border-border bg-surface2 rounded-sm flex items-center justify-center flex-shrink-0">
              <GithubLogoIcon size={24} weight="duotone" className="text-accent" />
            </div>

            <div>
              <div className="font-display text-2xl text-bright tracking-wider mb-1">
                z3r0d4yj-repos
              </div>

              <div className="font-mono text-xs text-dim mb-2">
                https://github.com/Z3r0D4yJ
              </div>

              <p className="font-mono text-xs text-dim/80 max-w-lg leading-relaxed">
                A collection of my projects, experiments, and development work. This includes school projects, personal builds, and technical explorations where I test ideas and learn new technologies.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 font-mono text-xs px-4 py-2 border border-accent/40 text-accent group-hover:bg-accent group-hover:text-bg transition-all duration-200 whitespace-nowrap">
            Visit Repos →
          </div>
        </a>

        <div className="border border-border bg-surface p-6 reveal">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left — project info */}
            <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 border border-border bg-surface2 rounded-sm flex items-center justify-center flex-shrink-0">
              <ShieldCheckIcon size={24} weight="duotone" className="text-accent" />
            </div>
              <span className="font-mono text-xs px-2 py-1 border border-accent/20 text-accent bg-accent/5">
                In Development
              </span>
            </div>

              <h3 className="font-display text-3xl text-bright tracking-wider mb-3">
                Phishing URL Detector
              </h3>

              <p className="text-sm leading-relaxed text-muted mb-4">
                An AI-powered phishing URL detection tool designed to identify potentially malicious websites based on their URL structure. Phishing attacks are one of the most common cybersecurity threats, this project aims to combat them with machine learning.
              </p>

              <p className="text-sm leading-relaxed text-dim mb-6">
                Instead of analyzing the full webpage, the system focuses on characteristics of the URL itself: length, number of subdomains, presence of suspicious keywords (e.g. "login", "verify", "secure"), special characters, and whether the URL contains an IP address instead of a domain name. A Random Forest classifier is trained on thousands of labeled URLs to learn patterns that distinguish phishing links from legitimate ones.
              </p>

              <div className="font-mono text-xs text-dim border-t border-border pt-4 mb-6 leading-relaxed">
                <span className="text-accent">~/features</span>
                <span className="text-dim"> → </span>
                <span className="text-muted">URL feature extraction · ML classification · Confidence scoring · Web interface for real-time predictions</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'Random Forest', 'Feature Engineering', 'Phishing Detection', 'URL Analysis', 'Scikit-learn', 'Web Interface'].map((t) => (
                  <span key={t} className="font-mono text-xs px-2 py-1 border border-border text-dim hover:border-accent/30 hover:text-accent transition-colors">{t}</span>
                ))}
              </div>
            </div>

            {/* Right — terminal-style preview */}
            <div className="lg:w-80 flex-shrink-0 hidden lg:block">
              <div className="border border-border bg-surface rounded-md overflow-hidden font-mono text-xs">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-surface2 border-b border-border">
                  <div className="w-2.5 h-2.5 rounded-full bg-warn opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-80" />
                  <span className="ml-2 text-dim tracking-wider">output</span>
                </div>
                <div className="p-4 space-y-2 leading-relaxed">
                  <div className="text-dim">$ python detect.py</div>
                  <div className="text-bright"></div>
                  <div className="text-accent">Analyzing URL...</div>
                  <div className="text-dim">→ Length: 47 chars</div>
                  <div className="text-dim">→ Subdomains: 3</div>
                  <div className="text-dim">→ Suspicious keywords: 2</div>
                  <div className="text-dim">→ IP address: No</div>
                  <div className="text-dim">→ Special chars: 4</div>
                  <div className="text-bright"></div>
                  <div className="text-warn">⚠ Prediction: PHISHING</div>
                  <div className="text-accent">  Confidence: 94.2%</div>
                  <div className="text-bright"></div>
                  <div className="text-dim">Model: RandomForest v1.0</div>
                  <div className="text-dim">Dataset: 11,000+ URLs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="font-mono text-xs text-dim mt-6 reveal" style={{ transitionDelay: '100ms' }}>
          More projects coming soon as I continue building and learning. This section will grow over time.
        </p>
                <div className="mt-8 flex items-center gap-4 reveal" style={{ transitionDelay: '200ms' }}>
          <div className="h-px flex-1 bg-border max-w-xs" />

          <a
            href="https://github.com/Z3r0D4yJ"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-dim hover:text-accent transition-colors tracking-widest"
          >
            VIEW ALL PROJECTS →
          </a>
        </div>
      </div>
    </Section>
  )
}
