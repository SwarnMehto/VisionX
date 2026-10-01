import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import SEO from '../components/seo/SEO'
import { serviceCategories } from '../data/services'

function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()

  const service = serviceCategories
    .flatMap((category) => category.services)
    .find((item) => item.href === `/services/${slug}`)

  if (!service) {
    return (
      <main className="min-h-screen bg-[#050505] px-6 pt-40 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-white/40">Service not found.</p>

          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 transition hover:border-white/25 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
        </div>
      </main>
    )
  }

  const category = serviceCategories.find((item) =>
    item.services.some((currentService) => currentService.href === service.href),
  )

  return (
    <>
      <SEO
        title={`${service.title} | Vision X`}
        description={service.description}
        canonical={`https://www.myvisionx.in${service.href}`}
      />

      <main className="min-h-screen bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
          <div className="pointer-events-none absolute right-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-white/[0.035] blur-[140px]" />

          <div className="relative mx-auto max-w-7xl">
            <Link
              to="/services"
              className="mb-14 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/35 transition hover:text-white"
            >
              <ArrowLeft size={14} />
              All Services
            </Link>

            <div className="max-w-5xl">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/35">
                {category?.title}
              </p>

              <h1 className="text-5xl font-medium leading-[0.92] tracking-[-0.06em] md:text-8xl">
                {service.title}
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                What we do
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
                Build a stronger digital foundation around{' '}
                <span className="text-white/30">{service.title.toLowerCase()}.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/45">
                Vision X combines strategy, technology, creative execution and
                measurable growth systems to create digital experiences that
                support long-term business objectives.
              </p>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Our approach
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Strategy. Execution. Growth.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  number: '01',
                  title: 'Discover',
                  text: 'Understand the business, audience, objectives and digital opportunities.',
                },
                {
                  number: '02',
                  title: 'Build',
                  text: 'Create the strategy, experience and systems required to move the project forward.',
                },
                {
                  number: '03',
                  title: 'Grow',
                  text: 'Measure performance, improve the system and build sustainable digital momentum.',
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-9"
                >
                  <span className="text-xs tracking-[0.2em] text-white/25">
                    {step.number}
                  </span>

                  <h3 className="mt-12 text-2xl font-medium tracking-[-0.03em]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INCLUDED */}
        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                What&apos;s included
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {service.tags.map((tag, index) => (
                <div
                  key={tag}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 p-5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    <Check size={15} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {tag}
                    </p>

                    <p className="mt-1 text-xs text-white/30">
                      Vision X service capability {index + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-36">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Have a project in mind?
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-8xl">
              Let&apos;s build
              <br />
              <span className="text-white/25">something meaningful.</span>
            </h2>

            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Start a Project
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default ServiceDetail