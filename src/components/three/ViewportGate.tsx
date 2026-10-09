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
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const screenPreference = window.matchMedia('(max-width: 767px)')
    let timeout = 0
    let observer: IntersectionObserver | null = null

    const disconnectObserver = () => {
      observer?.disconnect()
      observer = null
    }

    const evaluateScene = () => {
      window.clearTimeout(timeout)
      disconnectObserver()

      if (motionPreference.matches || screenPreference.matches || (device.deviceMemory ?? 8) <= 4 || device.connection?.saveData) {
        setIsReady(false)
        return
      }

      const activate = () => {
        disconnectObserver()
        timeout = window.setTimeout(() => setIsReady(true), 350)
      }
      const bounds = container.getBoundingClientRect()

      if (bounds.top < window.innerHeight + 120 && bounds.bottom > -120) {
        activate()
        return
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) activate()
      }, { rootMargin: '120px' })
      observer.observe(container)
    }

    evaluateScene()
    window.addEventListener('resize', evaluateScene, { passive: true })
    motionPreference.addEventListener('change', evaluateScene)
    screenPreference.addEventListener('change', evaluateScene)

    return () => {
      window.removeEventListener('resize', evaluateScene)
      motionPreference.removeEventListener('change', evaluateScene)
      screenPreference.removeEventListener('change', evaluateScene)
      disconnectObserver()
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