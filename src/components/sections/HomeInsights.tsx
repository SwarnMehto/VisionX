import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { featuredInsights } from '../../data/insights'

function HomeInsights() {
  return (
    <motion.section
      id="insights"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">05 / Signals</p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[0.94] text-white md:text-7xl">
              Insights<span className="text-white/32">.</span>
            </h2>
          </div>
          <Link to="/insights" className="inline-flex min-h-11 items-center gap-2 border-b border-white/20 text-sm text-white/65 transition-colors hover:border-cyan-100/50 hover:text-white">
            All insights <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="insights-rail">
          {featuredInsights.map((insight) => (
            <Link
              key={insight.number}
              to="/insights"
              className={`insight-poster insight-poster--${insight.category.toLowerCase()} group`}
            >
              <span className="insight-poster__art" aria-hidden="true" />
              <span className="insight-poster__meta">
                <span>{insight.number} / 03</span>
                <span>{insight.category}</span>
              </span>
              <span className="insight-poster__copy">
                <span className="insight-poster__eyebrow">Field note / Vision X</span>
                <span className="insight-poster__title">{insight.title}</span>
                <span className="insight-poster__description">{insight.description}</span>
              </span>
              <span className="insight-poster__arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default HomeInsights