import {
  ArrowUpRight,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Factory,
  BriefcaseBusiness,
  Layers3,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const industries = [
  {
    number: '01',
    title: 'Healthcare',
    shortTitle: 'Healthcare',
    description:
      'Digital experiences, patient acquisition systems, search visibility and growth infrastructure for healthcare brands.',
    icon: HeartPulse,
    tags: ['Web', 'SEO', 'Growth'],
    accent: 'cyan',
    size: 'large',
  },
  {
    number: '02',
    title: 'Education',
    shortTitle: 'Education',
    description:
      'High-converting digital platforms and student acquisition systems built for institutes, colleges and education brands.',
    icon: GraduationCap,
    tags: ['Admissions', 'Ads', 'SEO'],
    accent: 'violet',
    size: 'normal',
  },
  {
    number: '03',
    title: 'E-commerce',
    shortTitle: 'E-commerce',
    description:
      'Commerce experiences designed around discovery, conversion, retention and measurable growth.',
    icon: ShoppingBag,
    tags: ['Commerce', 'Performance', 'CRO'],
    accent: 'cyan',
    size: 'normal',
  },
  {
    number: '04',
    title: 'Real Estate',
    shortTitle: 'Real Estate',
    description:
      'Digital systems that help property brands generate visibility, qualified leads and stronger customer journeys.',
    icon: Building2,
    tags: ['Leads', 'Web', 'Performance'],
    accent: 'violet',
    size: 'normal',
  },
  {
    number: '05',
    title: 'Manufacturing',
    shortTitle: 'Manufacturing',
    description:
      'Modern digital infrastructure for manufacturers, suppliers and industrial businesses ready to scale.',
    icon: Factory,
    tags: ['B2B', 'Web', 'SEO'],
    accent: 'cyan',
    size: 'normal',
  },
  {
    number: '06',
    title: 'Professional Services',
    shortTitle: 'Professional',
    description:
      'Authority-driven digital ecosystems for businesses competing on trust, expertise and long-term relationships.',
    icon: BriefcaseBusiness,
    tags: ['Brand', 'Authority', 'Growth'],
    accent: 'violet',
    size: 'normal',
  },
]

function IndustriesShowcase() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-24 md:px-8 md:py-32"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.035] blur-[140px]" />

        <div className="absolute right-[-180px] top-[45%] h-[500px] w-[500px] rounded-full bg-violet-500/[0.035] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* =========================================================
          HEADER
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/35">
                Industries
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <Layers3
                  size={14}
                  className="text-white/50"
                />
              </div>

              <span className="text-[9px] uppercase tracking-[0.28em] text-white/25">
                VX / 003
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
              Built for different
              <br />

              <span className="text-white/25">
                worlds. Designed to scale.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 md:text-lg">
              Vision X builds digital systems for ambitious businesses across
              industries — combining technology, creative, visibility and
              performance into one connected growth ecosystem.
            </p>
          </div>
        </div>

        {/* =========================================================
            SYSTEM STATUS
        ========================================================= */}

        <div className="mt-16 flex flex-wrap items-center gap-4 border-y border-white/10 py-5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
              <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-[9px] uppercase tracking-[0.28em] text-white/40">
              Digital systems active
            </span>
          </div>

          <span className="hidden h-3 w-px bg-white/10 md:block" />

          <span className="text-[9px] uppercase tracking-[0.28em] text-white/20">
            Strategy
          </span>

          <span className="text-[9px] text-white/15">×</span>

          <span className="text-[9px] uppercase tracking-[0.28em] text-white/20">
            Technology
          </span>

          <span className="text-[9px] text-white/15">×</span>

          <span className="text-[9px] uppercase tracking-[0.28em] text-white/20">
            Growth
          </span>
        </div>

        {/* =========================================================
            INDUSTRY GRID
        ========================================================= */}

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon

            const isLarge = industry.size === 'large'

            return (
              <div
                key={industry.title}
                className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045] ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Card atmosphere */}

                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[90px] transition-opacity duration-500 group-hover:opacity-100 ${
                    industry.accent === 'cyan'
                      ? 'bg-cyan-400/[0.07]'
                      : 'bg-violet-500/[0.07]'
                  }`}
                />

                {/* Perspective grid */}

                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
                      backgroundSize: '45px 45px',
                    }}
                  />
                </div>

                {/* Card content */}

                <div
                  className={`relative flex h-full min-h-[320px] flex-col justify-between p-6 md:p-7 ${
                    isLarge ? 'md:min-h-[360px]' : ''
                  }`}
                >
                  {/* Top */}

                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                          industry.accent === 'cyan'
                            ? 'border-cyan-300/10 bg-cyan-300/[0.05]'
                            : 'border-violet-300/10 bg-violet-300/[0.05]'
                        }`}
                      >
                        <Icon
                          size={18}
                          className={
                            industry.accent === 'cyan'
                              ? 'text-cyan-300'
                              : 'text-violet-300'
                          }
                        />
                      </div>

                      <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                        Sector / {industry.number}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/70"
                    />
                  </div>

                  {/* Middle */}

                  <div className="relative mt-10">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                      {industry.shortTitle}
                    </p>

                    <h3
                      className={`mt-3 font-medium tracking-[-0.045em] text-white ${
                        isLarge
                          ? 'text-4xl md:text-5xl'
                          : 'text-3xl md:text-4xl'
                      }`}
                    >
                      {industry.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
                      {industry.description}
                    </p>
                  </div>

                  {/* Bottom */}

                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/35 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Decorative number */}

                  <span className="pointer-events-none absolute bottom-[-30px] right-[-10px] select-none text-[130px] font-medium leading-none tracking-[-0.1em] text-white/[0.025] transition-all duration-500 group-hover:text-white/[0.05]">
                    {industry.number}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* =========================================================
            BOTTOM SIGNAL
        ========================================================= */}

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Sparkles
              size={14}
              className="text-white/30"
            />

            <p className="text-[9px] uppercase tracking-[0.28em] text-white/25">
              One digital partner. Multiple growth environments.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04] hover:text-white"
          >
            Build your system

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default IndustriesShowcase