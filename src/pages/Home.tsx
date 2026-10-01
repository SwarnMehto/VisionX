import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import SEO from '../components/seo/SEO'
import HeroScene from '../components/three/HeroScene'
import SelectedWork from '../components/sections/SelectedWork'
import ServicesShowcase from '../components/sections/ServicesShowcase'
import WhyVisionX from '../components/sections/WhyVisionX'

function Home() {
  return (
    <>
      <SEO
        title="Vision X | Digital Growth, SEO, AEO, GEO & Creative Technology"
        description="Vision X is a digital growth agency building high-performance websites, SEO, AEO, GEO, performance marketing, creative technology and digital growth systems for ambitious brands."
        canonical="https://www.myvisionx.in/"
      />

      <main className="bg-[#050505] text-white">

        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="relative min-h-[100svh] overflow-hidden bg-[#050505] pt-28">

          {/* 3D Background */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <HeroScene />
          </div>

          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(255,255,255,0.10),transparent_30%)]" />

          {/* Dark Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] max-w-7xl items-center px-6 py-16 md:px-8">

            <div className="max-w-4xl">

              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-white/40" />

                <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/45">
                  Digital Growth & Creative Technology
                </p>
              </div>

              {/* Heading */}
              <h1 className="max-w-4xl text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.82] tracking-[-0.075em]">

                Build.
                <br />

                <span className="text-white">
                  Create.
                </span>

                <br />

                <span className="text-white/25">
                  Grow.
                </span>

              </h1>

              {/* Description */}
              <p className="mt-10 max-w-xl text-base leading-7 text-white/55 md:text-lg">
                We combine strategy, technology, creative and performance
                marketing to build digital experiences that move brands
                forward.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03]"
                >
                  Start a Project

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/35 hover:bg-white/5 hover:text-white"
                >
                  View Our Work
                </Link>

              </div>

            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30 md:left-8">
            <ArrowDown size={14} />
            <span>Scroll to explore</span>
          </div>

          {/* Right Label */}
          <div className="absolute bottom-8 right-8 z-10 hidden text-right md:block">

            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Strategy
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/25">
              Technology
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/25">
              Growth
            </p>

          </div>

        </section>


        {/* =========================================================
            INTRO
        ========================================================= */}

        <section className="border-t border-white/10 bg-[#050505] px-6 py-24 md:px-8 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  What we do
                </p>
              </div>

              <div>

                <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">

                  We build digital systems that connect

                  <span className="text-white/35">
                    {' '}creativity, technology and growth.
                  </span>

                </h2>

                <p className="mt-7 max-w-2xl text-base leading-7 text-white/45">
                  From websites and search visibility to performance
                  marketing and creative technology, Vision X helps brands
                  create a stronger digital presence and turn attention
                  into measurable business growth.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            SERVICES
        ========================================================= */}

        <ServicesShowcase />

        <WhyVisionX />


        {/* =========================================================
            SELECTED WORK
        ========================================================= */}

        <SelectedWork />


        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="border-t border-white/10 bg-[#050505] px-6 py-28 md:px-8 md:py-36">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-4xl">

              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/35">
                Have a project in mind?
              </p>

              <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.06em] md:text-7xl">

                Let's build
                <br />

                <span className="text-white/30">
                  something meaningful.
                </span>

              </h2>

              <div className="mt-10">

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03]"
                >
                  Start a Project

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  )
}

export default Home