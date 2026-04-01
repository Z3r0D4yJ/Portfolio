interface TagProps {
  children: React.ReactNode
}

export function Tag({ children }: TagProps) {
  return (
    <span className="font-mono text-[11px] text-accent bg-accent-dim px-[10px] py-[3px] tracking-[0.5px]">
      {children}
    </span>
  )
}
