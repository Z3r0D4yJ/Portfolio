'use client'
import { useScrollFade } from '@/hooks/useScrollFade'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export function FadeIn({ children, className, as: Tag = 'div' }: FadeInProps) {
  const ref = useScrollFade<HTMLDivElement>()
  return (
    // @ts-expect-error - dynamic tag ref typing
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
