import {
  ArrowUpRight,
  BarChart3,
  Layers3,
  Sparkles,
  Zap,
} from 'lucide-react'

const capabilities = [
  {
    number: '01',
    icon: Layers3,
    title: 'Strategy First',
    description:
      'Every digital project starts with a clear understanding of the business, audience, positioning and growth objective.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Built for Performance',
    description:
      'Fast, responsive and conversion-focused digital experiences built with modern technology and scalable systems.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Creative + Technology',
    description:
      'We combine visual design, interactive experiences, 3D and technology to create digital experiences people remember.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Growth & Measurement',
    description:
      'SEO, AEO, GEO, analytics and performance marketing connect creative execution with measurable business outcomes.',
  },
]

function WhyVisionX() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 text-white md:py-40">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[25%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-[0.8fr_1.2fr] md:pb-24">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/35">
              Why Vision X
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-7xl">
              Not just another
              <br />
              <span className="text-white/30">
                digital agency.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 md:text-lg">
              Vision X brings strategy, design, technology and growth
              together to create digital systems that are built to perform,
              evolve and scale.
            </p>
          </div>

        </div>

        {/* Capability Grid */}
        <div className="grid md:grid-cols-2">

          {capabilities.map((item, index) => {
            const Icon = item.icon

            return (
              <article
                key={item.number}
                className={`group relative border-b border-white/10 py-10 md:p-12 ${
                  index % 2 === 0
                    ? 'md:border-r md:pr-16'
                    : 'md:pl-16'
                }`}
              >

                {/* Number */}
                <div className="flex items-center justify-between">

                  <span className="text-xs tracking-[0.25em] text-white/25">
                    {item.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                    <Icon size={18} />
                  </div>

                </div>

                <h3 className="mt-10 text-2xl font-medium tracking-[-0.035em] md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-white/40 md:text-base">
                  {item.description}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />

              </article>
            )
          })}

        </div>

        {/* Bottom statement */}
        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

          <div>
            <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              One partner for your
              <span className="text-white/30">
                {' '}digital growth journey.
              </span>
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm transition-all duration-300 hover:bg-white hover:text-black"
          >
            Let&apos;s Talk

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </a>

        </div>

      </div>
    </section>
  )
}

export default WhyVisionX