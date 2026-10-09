import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Pause, Play, X } from 'lucide-react'

const chapters = [
  {
    label: 'The point of view',
    title: 'Digital should move business forward.',
    body: 'We start with the real objective, then shape the strategy, creative and technology around it.',
  },
  {
    label: 'The craft',
    title: 'Make every interaction earn its place.',
    body: 'Clear content, considered design and purposeful motion make complex ideas easier to experience.',
  },
  {
    label: 'The system',
    title: 'Connect the experience to growth.',
    body: 'Web, search, marketing and measurement work best when they support one connected direction.',
  },
]

interface ExperienceIntroProps {
  onClose: () => void
}

function ExperienceIntro({ onClose }: ExperienceIntroProps) {
  const [activeChapter, setActiveChapter] = useState(0)
  const [isPaused, setIsPaused] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const chapter = chapters[activeChapter]

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') {
        setActiveChapter((current) => (current + 1) % chapters.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveChapter((current) => (current - 1 + chapters.length) % chapters.length)
      }
      if (event.code === 'Space' && event.target === document.body) {
        event.preventDefault()
        setIsPaused((paused) => !paused)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  useEffect(() => {
    if (isPaused) return
    const interval = window.setInterval(() => {
      setActiveChapter((current) => (current + 1) % chapters.length)
    }, 6000)
    return () => window.clearInterval(interval)
  }, [isPaused])

  const moveChapter = (direction: number) => {
    setActiveChapter((current) => (current + direction + chapters.length) % chapters.length)
  }

  return (
    <div className="intro-overlay" role="dialog" aria-modal="true" aria-label="Vision X introduction">
      <div className="intro-overlay__backdrop" aria-hidden="true" />
      <div className="intro-overlay__topline">
        <span>VISION X <span className="text-cyan-100/70">/</span> A SHORT INTRODUCTION</span>
        <button ref={closeButtonRef} type="button" onClick={onClose} className="intro-overlay__close" aria-label="Close introduction">
          <X size={19} />
        </button>
      </div>
      <div className="intro-overlay__content" aria-live="polite">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/60">{chapter.label}</p>
        <h2 key={chapter.title} className="intro-overlay__title">{chapter.title}</h2>
        <p className="intro-overlay__body">{chapter.body}</p>
      </div>
      <div className="intro-overlay__controls">
        <div className="intro-overlay__progress" aria-label={`Chapter ${activeChapter + 1} of ${chapters.length}`}>
          {chapters.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-label={`Go to chapter ${index + 1}: ${item.label}`}
              aria-current={index === activeChapter ? 'step' : undefined}
              onClick={() => setActiveChapter(index)}
              className="intro-overlay__progress-track"
            >
              <span className={index === activeChapter ? 'intro-overlay__progress-fill is-active' : index < activeChapter ? 'intro-overlay__progress-fill is-complete' : 'intro-overlay__progress-fill'} />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => moveChapter(-1)} className="intro-overlay__control" aria-label="Previous chapter"><ArrowLeft size={17} /></button>
          <button type="button" onClick={() => setIsPaused((paused) => !paused)} className="intro-overlay__control" aria-label={isPaused ? 'Resume introduction' : 'Pause introduction'}>
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
          </button>
          <button type="button" onClick={() => moveChapter(1)} className="intro-overlay__control" aria-label="Next chapter"><ArrowRight size={17} /></button>
        </div>
      </div>
    </div>
  )
}

export default ExperienceIntro