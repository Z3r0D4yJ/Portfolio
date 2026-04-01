'use client'
import Image from 'next/image'
import { useState } from 'react'

function Placeholder() {
  return (
    <div className="w-full h-full bg-surface2 flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth={1.5} className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9l4-4 4 4 4-4 4 4" />
        <circle cx="8.5" cy="13.5" r="1.5" />
      </svg>
    </div>
  )
}

export function ProjectThumb({ src }: { src: string }) {
  const [error, setError] = useState(false)

  if (error) return <Placeholder />

  return (
    <Image
      src={src}
      alt=""
      fill
      className="object-cover"
      onError={() => setError(true)}
      sizes="120px"
    />
  )
}
