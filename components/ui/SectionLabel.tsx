interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="font-mono text-[10px] tracking-[3px] uppercase text-muted mb-7 flex items-center gap-3 after:content-[''] after:block after:h-px after:w-10 after:bg-border">
      {children}
    </div>
  )
}
