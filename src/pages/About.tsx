import {
  ArrowDown,
  ArrowUpRight,
  Check,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'

const capabilities = [
  'Website Development',
  'E-Commerce Development',
  'SEO',
  'AEO',
  'GEO',
  'Local SEO',
  'Google Ads',
  'Meta Ads',
  'Lead Generation',
  'Branding',
  'Graphic Design',
  'Social Media',
  '3D Experiences',
  'Interactive Websites',
  'Digital Growth Systems',
]

const principles = [
  {
    number: '01',
    title: 'Strategy',
    description:
      'We start by understanding the business, audience, market and growth objective before choosing the digital direction.',
  },
  {
    number: '02',
    title: 'Technology',
    description:
      'We use modern web technologies to build fast, responsive and scalable digital experiences.',
  },
  {
    number: '03',
    title: 'Creative',
    description:
      'Design, content, motion and interaction work together to create a distinctive digital experience.',
  },
  {
    number: '04',
    title: 'Growth',
    description:
      'The goal is not simply to create something beautiful. Digital experiences should support visibility, engagement and measurable business growth.',
  },
]

function About() {
  return (
    <>
      <SEO
        title="About Vision X | Digital Growth & Creative Technology Agency"
        description="Learn about Vision X, a digital growth and creative technology agency combining strategy, technology, creative and performance marketing."
        canonical="https://www.myvisionx.in/about"
      />

      <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

        {/* HERO */}

        <section className="relative min-h-[85svh] overflow-hidden px-6 pb-20 pt-36 md:px-8 md:pt-44">

          <div className="pointer-events-none absolute right-[-180px] top-[15%] h-[550px] w-[550px] rounded-full border border-white/[0.04] bg-white/[0.015]" />

          <div className="pointer-events-none absolute right-[10%] top-[30%] h-48 w-48 rounded-full bg-white/[0.05] blur-[100px]" />

          <div className="relative mx-auto flex min-h-[70svh] max-w-7xl items-center">

            <div className="max-w-5xl">

              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-white/35" />

                <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/40">
                  About Vision X
                </p>
              </div>

              <h1 className="text-[clamp(3.8rem,9vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.075em]">
                We build
                <br />
                <span className="text-white">
                  digital
                </span>
                <br />
                <span className="text-white/25">
                  momentum.
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
                Vision X combines strategy, technology, creative and
                performance marketing to help ambitious brands build
                stronger digital foundations and grow online.
              </p>

            </div>

          </div>

          <div className="absolute bottom-8 left-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/25 md:left-8">
            <ArrowDown size={14} />
            <span>Explore Vision X</span>
          </div>

        </section>

        {/* INTRO */}

        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">

          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.65fr_1.35fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Who we are
              </p>
            </div>

            <div>

              <h2 className="max-w-5xl text-3xl font-medium leading-tight tracking-[-0.045em] md:text-5xl">
                Vision X is a digital growth and creative technology
                agency focused on building meaningful digital experiences.
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-7 text-white/40 md:text-lg">
                We bring web development, search visibility, performance
                marketing, creative and digital growth systems together
                under one digital strategy.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-7 text-white/40 md:text-lg">
                From websites and e-commerce platforms to SEO, AEO, GEO,
                paid advertising and interactive experiences, our work is
                designed to help businesses become easier to discover,
                understand and engage with online.
              </p>

            </div>

          </div>

        </section>

        {/* PRINCIPLES */}

        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                How we think
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Four disciplines.
                <br />
                <span className="text-white/25">
                  One digital direction.
                </span>
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 md:grid-cols-2">

              {principles.map((item) => (
                <article
                  key={item.number}
                  className="border-b border-r border-white/10 p-7 md:p-10"
                >

                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-white/25">
                      {item.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-white/40" />
                  </div>

                  <h3 className="mt-16 text-3xl font-medium tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/40 md:text-base">
                    {item.description}
                  </p>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* CAPABILITIES */}

        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">

          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.65fr_1.35fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Capabilities
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                What we
                <br />
                <span className="text-white/25">
                  do.
                </span>
              </h2>
            </div>

            <div className="grid gap-x-10 border-t border-white/10 sm:grid-cols-2">

              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-3 border-b border-white/10 py-5"
                >
                  <Check size={15} className="shrink-0 text-white/35" />

                  <span className="text-sm text-white/65">
                    {capability}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="border-t border-white/10 px-6 py-28 md:px-8 md:py-40">

          <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Work with Vision X
              </p>

              <h2 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.065em] md:text-8xl">
                Build what&apos;s
                <br />
                <span className="text-white/25">
                  next.
                </span>
              </h2>

            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium !text-black transition-transform duration-300 hover:scale-105"
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

        </section>

      </main>
    </>
  )
}

export default About