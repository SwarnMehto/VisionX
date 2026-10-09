import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const OPENING_KEY = 'visionx-opening-complete'

function CinematicOpening() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false

    return (
      !window.sessionStorage.getItem(OPENING_KEY) &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  })
  const [isExiting, setIsExiting] = useState(false)
  const closeTimer = useRef<number | null>(null)

  const complete = useCallback(() => {
    if (isExiting) return
    window.sessionStorage.setItem(OPENING_KEY, 'true')
    setIsExiting(true)
    closeTimer.current = window.setTimeout(() => setIsVisible(false), 460)
  }, [isExiting])

  useEffect(() => {
    if (!isVisible || isExiting) return

    const timeout = window.setTimeout(complete, 2200)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter') complete()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isVisible, isExiting, complete])

  useEffect(() => () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`opening-sequence${isExiting ? ' opening-sequence--exiting' : ''}`} role="dialog" aria-modal="true" aria-label="Vision X opening">
      <div className="opening-sequence__grain" aria-hidden="true" />
      <div className="opening-sequence__content">
        <span className="opening-sequence__eyebrow">Vision X Media / Independent digital studio</span>
        <img src="/logos/visionx-logo.png" width="52" height="52" alt="" aria-hidden="true" className="opening-sequence__symbol" />
        <p className="opening-sequence__mark" aria-label="Vision X">VISION <span>X</span></p>
        <p className="opening-sequence__tagline">Digital Growth <span>/</span> Creative Technology</p>
        <div className="opening-sequence__actions">
          <button type="button" onClick={complete} className="opening-sequence__enter">
            ENTER EXPERIENCE <ArrowRight size={16} aria-hidden="true" />
          </button>
          <button type="button" onClick={complete} className="opening-sequence__skip">
            SKIP
          </button>
        </div>
      </div>
    </div>
  )
}

export default CinematicOpening