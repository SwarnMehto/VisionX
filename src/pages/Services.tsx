import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import ViewportGate from '../components/three/ViewportGate'
import SEO from '../components/seo/SEO'
import { serviceCategories } from '../data/services'

const ServicesScene = lazy(() => import('../components/three/ServicesScene'))

function Services() {
  return (
    <>
      <SEO
        title="Digital Marketing & Technology Services | Vision X"
        description="Explore Vision X services including website development, SEO, AEO, GEO, local SEO, Google Ads, Meta Ads, lead generation, branding, social media and 3D creative technology."
        canonical="https://www.myvisionx.in/services"
      />

      <main className="min-h-screen bg-[#050505] text-white">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative min-h-[85svh] overflow-hidden px-6 pb-20 pt-36 md:px-8 md:pt-44">

          {/* 3D Background */}
          <ViewportGate className="pointer-events-none absolute inset-0">
            <Suspense fallback={null}>
              <ServicesScene />
            </Suspense>
          </ViewportGate>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.09),transparent_30%)]" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />

          {/* Hero content */}
          <div className="relative z-10 mx-auto flex min-h-[65svh] max-w-7xl items-center">

            <div className="max-w-5xl">

              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-white/35" />

                <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/40">
                  02 / Capabilities
                </p>
              </div>

              <h1 className="text-[clamp(4rem,9vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.075em]">
                Digital
                <br />
                systems
                <br />
                <span className="text-white/25">
                  built for growth.
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
                From websites and search visibility to paid acquisition,
                creative technology and digital growth systems, we help
                ambitious brands build stronger digital foundations.
              </p>

              {/* Hero CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium !text-black transition-all duration-300 hover:scale-[1.03]"
                >
                  <span className="!text-black">
                    Start a Project
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="!text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/75 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  Explore Services
                </a>

              </div>

            </div>

          </div>

          {/* Scroll indicator */}
          <a
            href="#services"
            className="absolute bottom-8 left-6 z-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-white/60 md:left-8"
          >
            <ArrowDown size={14} />
            <span>Scroll to explore</span>
          </a>

          {/* Right label */}
          <div className="absolute bottom-8 right-8 z-10 hidden text-right md:block">
            <p className="text-xs uppercase tracking-[0.25em] text-white/20">
              Strategy
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/20">
              Technology
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/20">
              Growth
            </p>
          </div>

        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="services"
          className="relative border-t border-white/10 bg-[#050505] px-6 py-24 md:px-8 md:py-32"
        >

          <div className="mx-auto max-w-7xl">

            {/* Section intro */}
            <div className="mb-20 grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/35">
                  What we do
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] md:text-6xl">
                  Everything your brand needs to
                  <span className="text-white/25">
                    {' '}build, grow and scale.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-7 text-white/40">
                  We bring strategy, technology, creative and performance
                  together to create digital systems that work as one.
                </p>
              </div>

            </div>

            {/* Service categories */}

            <div className="border-t border-white/10">

              {serviceCategories.map((category) => (

                <section
                  key={category.id}
                  className="group border-b border-white/10 py-14 md:py-20"
                >

                  <div className="grid gap-10 md:grid-cols-[180px_1fr]">

                    {/* Number */}
                    <div>
                      <span className="text-sm tracking-[0.2em] text-white/25">
                        {category.number}
                      </span>
                    </div>

                    <div>

                      {/* Category heading */}
                      <div className="max-w-4xl">

                        <h2 className="text-3xl font-medium tracking-[-0.045em] md:text-5xl">
                          {category.title}
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/40">
                          {category.description}
                        </p>

                      </div>

                      {/* Service cards */}
                      <div className="mt-12 grid gap-3 md:grid-cols-2">

                        {category.services.map((service) => (

                          <Link
                            key={service.number}
                            to={service.href}
                            className="group/card relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.018] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04] md:p-7"
                          >

                            {/* Hover glow */}
                            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

                            {/* Top */}
                            <div className="relative flex items-center justify-between">

                              <span className="text-xs tracking-[0.2em] text-white/25">
                                {service.number}
                              </span>

                              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover/card:rotate-45 group-hover/card:border-white/25 group-hover/card:bg-white group-hover/card:text-black">
                                <ArrowUpRight size={16} />
                              </div>

                            </div>

                            {/* Content */}
                            <div className="relative mt-12">

                              <h3 className="text-xl font-medium tracking-[-0.025em] md:text-2xl">
                                {service.title}
                              </h3>

                              <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                                {service.description}
                              </p>

                            </div>

                            {/* Tags */}
                            <div className="relative mt-6 flex flex-wrap gap-2">

                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white/30 transition-colors duration-300 group-hover/card:border-white/15 group-hover/card:text-white/45"
                                >
                                  {tag}
                                </span>
                              ))}

                            </div>

                          </Link>

                        ))}

                      </div>

                    </div>

                  </div>

                </section>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="border-t border-white/10 bg-[#050505] px-6 py-24 md:px-8 md:py-36">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/35">
                  Our approach
                </p>
              </div>

              <div>

                <h2 className="max-w-4xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] md:text-6xl">
                  Strategy.
                  <br />
                  Build.
                  <br />
                  <span className="text-white/25">
                    Grow.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-7 text-white/40">
                  Every project starts with understanding the business,
                  identifying the opportunity and building the right digital
                  system around it.
                </p>

                {/* Process */}
                <div className="mt-14 border-t border-white/10">

                  {[
                    {
                      number: '01',
                      title: 'Strategy',
                      description:
                        'Understand the business, audience, goals and opportunities before building.',
                    },
                    {
                      number: '02',
                      title: 'Build',
                      description:
                        'Design and develop digital experiences that are fast, clear and conversion-focused.',
                    },
                    {
                      number: '03',
                      title: 'Launch',
                      description:
                        'Connect analytics, search, campaigns and the systems required for growth.',
                    },
                    {
                      number: '04',
                      title: 'Grow',
                      description:
                        'Continuously improve visibility, acquisition and digital performance.',
                    },
                  ].map((step) => (

                    <div
                      key={step.number}
                      className="grid gap-5 border-b border-white/10 py-7 md:grid-cols-[80px_220px_1fr] md:items-center"
                    >

                      <span className="text-xs tracking-[0.2em] text-white/25">
                        {step.number}
                      </span>

                      <h3 className="text-xl font-medium">
                        {step.title}
                      </h3>

                      <p className="max-w-xl text-sm leading-6 text-white/40">
                        {step.description}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="border-t border-white/10 bg-[#050505] px-6 py-28 md:px-8 md:py-40">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">

              <div>

                <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/30">
                  Have a project in mind?
                </p>

                <h2 className="max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.065em] md:text-8xl">
                  Let's build
                  <br />
                  <span className="text-white/25">
                    something meaningful.
                  </span>
                </h2>

              </div>

              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium !text-black transition-all duration-300 hover:scale-105"
              >
                <span className="!text-black">
                  Start a Project
                </span>

                <ArrowUpRight
                  size={17}
                  className="!text-black transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  )
}

export default Services

