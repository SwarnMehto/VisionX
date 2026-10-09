import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const recommendations = [
  { number: '01', title: 'Website Development', category: 'Digital Experiences', href: '/services/website-development', tone: 'cyan' },
  { number: '02', title: 'SEO / AEO / GEO', category: 'Search & Visibility', href: '/services/seo', tone: 'rose' },
  { number: '03', title: 'Google Ads', category: 'Performance Marketing', href: '/services/google-ads', tone: 'blue' },
  { number: '04', title: 'Meta Ads', category: 'Performance Marketing', href: '/services/meta-ads', tone: 'rose' },
  { number: '05', title: 'Lead Generation', category: 'Growth Systems', href: '/services/lead-generation', tone: 'cyan' },
  { number: '06', title: 'Branding', category: 'Creative & Brand', href: '/services/branding', tone: 'blue' },
  { number: '07', title: 'Creative Technology', category: 'Interactive Experiences', href: '/services/3d-experiences', tone: 'rose' },
]

function FeaturedCapabilities() {
  return (
    <section className="featured-capabilities border-t border-white/10 px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">05 / Top Picks</p>
            <h2 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[0.96] text-white md:text-6xl">
              Featured <span className="text-white/35">capabilities.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/45">
            A few of the ways Vision X can move your next digital project forward.
          </p>
        </div>

        <div role="region" aria-label="Featured Vision X capabilities" tabIndex={0} className="featured-rail">
          {recommendations.map((item) => (
            <Link key={item.number} to={item.href} className={`featured-card featured-card--${item.tone} group`}>
              <span className="featured-card__number">{item.number} <span>/ 07</span></span>
              <span className="featured-card__content">
                <span className="featured-card__category">{item.category}</span>
                <span className="featured-card__title">{item.title}</span>
              </span>
              <span className="featured-card__arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCapabilities