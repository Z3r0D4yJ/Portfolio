export const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#ctf', label: 'Writeups & Blog' },
]

export interface SocialLink {
  href: string
  title: string
  type: 'github' | 'linkedin' | 'email' | 'gitbook' | 'cv'
}

export const SOCIALS: SocialLink[] = [
  { href: 'https://github.com/jasper-vzeir', title: 'GitHub', type: 'github' },
  { href: 'https://linkedin.com/in/jaspervanzeir', title: 'LinkedIn', type: 'linkedin' },
  { href: 'mailto:jaspervanzeir1@gmail.com', title: 'Email', type: 'email' },
  { href: 'https://z3r0d4yj.gitbook.io/z3r0d4yj-docs', title: 'GitBook', type: 'gitbook' },
  { href: '#', title: 'Download CV', type: 'cv' },
]

export interface ExperienceEntry {
  date: string
  title: string
  org: string
  desc: string
  tags: string[]
  href?: string
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    date: '2026 — 2029',
    title: 'Bachelor Cybersecurity',
    org: 'HOWEST — Upcoming',
    desc: 'Dedicated cybersecurity degree focused on offensive security, ethical hacking, digital forensics, and secure software development. The next step after building a solid full stack foundation.',
    tags: ['Pentesting', 'Red Team', 'Forensics', 'Offensive Security'],
    href: 'https://www.howest.be/en/programmes/bachelor/cybersecurity',
  },
  {
    date: 'Aug 2025 — Present',
    title: 'Sergeant, IT Division',
    org: 'Belgian Armed Forces',
    desc: 'Active-duty Sergeant within IT at Belgian Defence. Responsible for infrastructure support, system administration, and internal tooling. Gaining hands-on experience in discipline, responsibility, and professional operations.',
    tags: ['Infrastructure', 'Sysadmin', 'Networking'],
    href: 'https://www.mil.be',
  },
  {
    date: '2024 — Present',
    title: 'Self-Study & CTF Competitions',
    org: 'HackTheBox · TryHackMe · BugForge',
    desc: 'Actively building cybersecurity knowledge through 50+ CTF challenges and hands-on security labs. Documenting everything in 20+ writeups on GitBook. Focused on web exploitation, network security, and offensive tooling.',
    tags: ['Web Security', 'CTF', 'HackTheBox', 'TryHackMe', 'Python'],
    href: 'https://z3r0d4yj.gitbook.io/z3r0d4yj-docs',
  },
  {
    date: '2023 — 2026',
    title: 'Bachelor Applied Computer Science',
    org: 'HOGENT — Full Stack Development',
    desc: 'Full Stack Development track covering Java, C#, JavaScript, TypeScript, React, and MySQL. Deliberately chosen to understand how modern applications are built before specialising in how they break.',
    tags: ['Java', 'C#', 'React', 'TypeScript', 'MySQL', 'Docker'],
    href: 'https://www.hogent.be',
  },
]

export interface Certification {
  issuer: string
  name: string
  date?: string
  href?: string
  inProgress?: boolean
}

export const CERTIFICATIONS: Certification[] = [
  {
    issuer: 'TryHackMe',
    name: 'Pre-Security',
    date: '2024',
    inProgress: false,
    href: 'https://tryhackme.com/path/outline/presecurity',
  },
  {
    issuer: 'Hack The Box',
    name: 'HTB Certified Penetration Testing Specialist (CPTS)',
    inProgress: true,
    href: 'https://academy.hackthebox.com/preview/certifications/htb-certified-penetration-testing-specialist',
  },
  {
    issuer: 'Cisco',
    name: 'Cisco Networking Academy — Cybersecurity Essentials',
    inProgress: true,
    href: 'https://www.netacad.com/courses/cybersecurity-essentials',
  },
]

export interface Project {
  number: string
  name: string
  desc: string
  tags: string[]
  href?: string
  /** Path relative to /public, e.g. "/projects/team-ico.png" */
  thumbnail: string
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Phishing URL Detector',
    desc: 'AI-powered phishing URL detection tool using a Random Forest classifier trained on 11,000+ labeled URLs. Detects phishing patterns via URL structure, suspicious keywords, subdomain count, and special characters.',
    tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Phishing Detection'],
    href: 'https://github.com/jasper-vzeir',
    thumbnail: '/projects/phishing.png',
  },
  {
    number: '02',
    name: 'Cybersecurity Portfolio',
    desc: 'This site. Next.js 15, Tailwind CSS, gradient cursor library, dark design system. Active development.',
    tags: ['Next.js 15', 'Tailwind CSS', 'TypeScript'],
    href: 'https://github.com/jasper-vzeir',
    thumbnail: '/projects/portfolio.png',
  },
]

export type BadgeVariant = 'hard' | 'medium' | 'easy'

export interface CTFEntry {
  title: string
  meta: string
  badge: BadgeVariant
  badgeLabel: string
  href: string
}

export const CTF_ENTRIES: CTFEntry[] = [
  {
    title: 'Galaxy Dash — SQL Injection',
    meta: 'Bugforge · Web Exploitation · SQLite',
    badge: 'medium',
    badgeLabel: 'Medium',
    href: 'https://z3r0d4yj.gitbook.io/z3r0d4yj-docs',
  },
]
