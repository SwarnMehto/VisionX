import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface ViewportGateProps {
  children: ReactNode
  className?: string
}

function ViewportGate({ children, className = '' }: ViewportGateProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const device = navigator as Navigator & {
      connection?: { saveData?: boolean }
      deviceMemory?: number
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const smallScreen = window.matchMedia('(max-width: 767px)').matches
    const lowMemory = (device.deviceMemory ?? 8) <= 4

    if (prefersReducedMotion || smallScreen || lowMemory || device.connection?.saveData) return

    const bounds = container.getBoundingClientRect()
    if (bounds.top < window.innerHeight && bounds.bottom > 0) {
      const timeout = window.setTimeout(() => setIsReady(true), 350)
      return () => window.clearTimeout(timeout)
    }

    let timeout = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      observer.disconnect()
      timeout = window.setTimeout(() => setIsReady(true), 350)
    }, { rootMargin: '120px' })

    observer.observe(container)
    return () => {
      observer.disconnect()
      window.clearTimeout(timeout)
    }
  }, [])

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      {isReady ? children : null}
    </div>
  )
}

export default ViewportGate