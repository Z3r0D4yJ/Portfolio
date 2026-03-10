import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

const HOVER_SELECTOR = 'a, button, [role="button"], input, .card-hover, .cursor-pointer'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Cursor follows mouse directly
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Ring — heavier spring, trails behind
  const ringX = useSpring(mouseX, { damping: 20, stiffness: 200, mass: 0.8 })
  const ringY = useSpring(mouseY, { damping: 20, stiffness: 200, mass: 0.8 })

  // Dot — tighter spring, stays close to mouse
  const dotX = useSpring(mouseX, { damping: 15, stiffness: 400, mass: 0.3 })
  const dotY = useSpring(mouseY, { damping: 15, stiffness: 400, mass: 0.3 })

  // Ring size
  const ringSize = useSpring(32, { damping: 18, stiffness: 250 })

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!hasFinePointer) return

    setIsVisible(true)

    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const onOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) {
        setIsHovered(true)
        ringSize.set(48)
      }
    }
    const onOut = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) {
        setIsHovered(false)
        ringSize.set(32)
      }
    }
    const onDown = () => {
      setIsClicking(true)
      ringSize.set(22)
    }
    const onUp = () => {
      setIsClicking(false)
      ringSize.set(isHovered ? 48 : 32)
    }
    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [mouseX, mouseY, ringSize, isHovered])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999]">

      {/* Outer ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          borderWidth: 1,
          borderStyle: 'solid',
        }}
        className="pointer-events-none"
        animate={{
          borderColor: isHovered ? 'rgba(0,229,176,0.9)' : 'rgba(0,229,176,0.5)',
          backgroundColor: isHovered ? 'rgba(0,229,176,0.04)' : 'rgba(0,229,176,0)',
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="pointer-events-none"
      >
        <motion.div
          className="rounded-full bg-accent"
          animate={{
            width: isClicking ? 3 : isHovered ? 7 : 4,
            height: isClicking ? 3 : isHovered ? 7 : 4,
          }}
          transition={{ type: 'spring', damping: 15, stiffness: 400 }}
          style={{ boxShadow: '0 0 6px rgba(0,229,176,0.9)' }}
        />
      </motion.div>

      {/* Crosshairs */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="pointer-events-none"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 12, height: 1, background: 'rgba(0,229,176,0.35)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 1, height: 12, background: 'rgba(0,229,176,0.35)' }}
        />
      </motion.div>
    </div>
  )
}
