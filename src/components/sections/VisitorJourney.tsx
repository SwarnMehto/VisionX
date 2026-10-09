import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const JOURNEY_KEY = 'visionx-journey-complete'

const journeys = [
  {
    number: '01',
    label: 'GROW MY BUSINESS',
    detail: 'A clearer direction for your next stage of growth.',
    href: '/contact',
    atmosphere: 'journey-option--growth',
  },
  {
    number: '02',
    label: 'BUILD A WEBSITE',
    detail: 'A considered digital experience, made for your brand.',
    href: '/services/website-development',
    atmosphere: 'journey-option--website',
  },
  {
    number: '03',
    label: 'EXPLORE OUR WORK',
    detail: 'Selected digital experiences by Vision X.',
    href: '#work',
    atmosphere: 'journey-option--work',
  },
]

function VisitorJourney() {
  const [isVisible, setIsVisible] = useState(() =>
    !window.sessionStorage.getItem(JOURNEY_KEY),
  )
  const complete = () => {
    window.sessionStorage.setItem(JOURNEY_KEY, 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <section className="journey-screen" aria-labelledby="journey-heading">
      <div className="journey-screen__grain" aria-hidden="true" />
      <div className="journey-screen__content">
        <div className="mb-8 flex items-center justify-between gap-5">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">VISION X <span className="text-cyan-100/65">/</span> DIRECTION SELECTOR</p>
          <button type="button" onClick={complete} className="journey-screen__skip">Skip <ArrowDownRight size={14} aria-hidden="true" /></button>
        </div>
        <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/65">Choose your next chapter</p>
        <h2 id="journey-heading" className="journey-screen__title">What brings<br className="hidden sm:block" /> you here?</h2>
        <div className="journey-screen__rail">
          {journeys.map((journey) => (
            <Link
              key={journey.number}
              to={journey.href}
              onClick={complete}
              className={`journey-option group ${journey.atmosphere}`}
            >
              <span className="journey-option__number">{journey.number} <span>/ 03</span></span>
              <span className="journey-option__content">
                <span className="journey-option__title">{journey.label}</span>
                <span className="journey-option__detail">{journey.detail}</span>
              </span>
              <span className="journey-option__arrow" aria-hidden="true">
                {journey.href.startsWith('#') ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VisitorJourney