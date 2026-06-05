import { FilePdf } from '@phosphor-icons/react/dist/ssr'

export function CVButton() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed top-5 right-6 z-50
        flex items-center gap-1.5
        font-mono text-[10px] tracking-[1.5px] uppercase
        text-muted bg-surface border border-border
        px-3 py-1.5
        hover:text-accent hover:border-[rgba(0,255,136,0.3)] hover:bg-[rgba(255,255,255,0.02)]
        transition-colors duration-200
        group
      "
    >
      <FilePdf size={15} weight="bold" />
      Download CV
    </a>
  )
}
