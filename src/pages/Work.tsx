import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'

const projects = [
  {
    number: '01',
    client: 'LIPMT',
    logo: '/logos/lipmt.png',
    category: 'Education',
    title: 'Digital Platform for Paramedical Education',
    description:
      'A responsive digital platform focused on course discovery, admissions, user experience and search visibility for a paramedical education brand.',
    services: ['Web Development', 'SEO', 'Performance'],
    slug: 'lipmt',
    featured: true,
  },
  {
    number: '02',
    client: 'Krinay Scrubs',
    logo: '/logos/krinay.png',
    category: 'Healthcare / E-Commerce',
    title: 'E-Commerce Experience for Medical Professionals',
    description:
      'A modern e-commerce experience designed around medical apparel, product discovery, conversion and a scalable digital foundation.',
    services: ['E-Commerce', 'SEO', 'UI/UX'],
    slug: 'krinay-scrubs',
    featured: false,
  },
  {
    number: '03',
    client: 'Sharva Clinic',
    logo: '/logos/sharva.png',
    category: 'Healthcare',
    title: 'Digital Presence for Healthcare',
    description:
      'A professional healthcare digital presence focused on clear communication, local discovery and a stronger online brand experience.',
    services: ['Web', 'Local SEO', 'Digital Growth'],
    slug: 'sharva-clinic',
    featured: false,
  },
  {
    number: '04',
    client: 'Bluemoon Production',
    logo: '/logos/bluemoon.png',
    category: 'Production / Creative',
    title: 'Creative Digital Experience',
    description:
      'A creative digital experience supporting the online presence and positioning of a production-focused brand.',
    services: ['Digital', 'Creative', 'Web'],
    slug: 'bluemoon-production',
    featured: false,
  },
  {
    number: '05',
    client: 'Gem Records',
    logo: '/logos/gem-records.png',
    category: 'Music / Entertainment',
    title: 'Digital Presence for Music & Entertainment',
    description:
      'A digital experience created around the online presence and creative positioning of a music-focused brand.',
    services: ['Digital', 'Creative', 'Web'],
    slug: 'gem-records',
    featured: false,
  },
  {
    number: '06',
    client: 'Crystal Smart Solution',
    logo: '/logos/crystal-smart.png',
    category: 'Business / Technology',
    title: 'Digital Business Solution',
    description:
      'A digital experience focused on presenting business solutions clearly and creating a stronger digital foundation.',
    services: ['Web', 'Digital', 'Growth'],
    slug: 'crystal-smart-solution',
    featured: true,
  },
]

function Work() {
  return (
    <>
      <SEO
        title="Our Work | Digital Projects & Case Studies | Vision X"
        description="Explore selected digital projects by Vision X across education, healthcare, e-commerce, entertainment and technology."
        canonical="https://www.myvisionx.in/work"
      />

      <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative min-h-[80svh] overflow-hidden px-6 pb-20 pt-36 md:px-8 md:pt-44">

          {/* Ambient 3D-style glow */}
          <div className="pointer-events-none absolute right-[-160px] top-[15%] h-[520px] w-[520px] rounded-full border border-white/[0.04] bg-white/[0.015] blur-[1px]" />

          <div className="pointer-events-none absolute right-[5%] top-[28%] h-48 w-48 rounded-full bg-white/[0.04] blur-[90px]" />

          <div className="relative mx-auto flex min-h-[65svh] max-w-7xl items-center">

            <div className="max-w-5xl">

              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-white/35" />

                <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/40">
                  Selected Work
                </p>
              </div>

              <h1 className="text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.82] tracking-[-0.075em]">
                Work that
                <br />
                <span className="text-white">
                  moves
                </span>
                <br />
                <span className="text-white/25">
                  brands.
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
                A selection of digital experiences, e-commerce platforms,
                creative projects and growth systems built by Vision X.
              </p>

            </div>

          </div>

          <div className="absolute bottom-8 left-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/25 md:left-8">
            <ArrowDown size={14} />
            <span>Explore our work</span>
          </div>

        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/30">
                  Projects
                </p>

                <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                  Selected
                  <span className="text-white/25">
                    {' '}work.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-white/35 md:text-base">
                Digital work across education, healthcare, e-commerce,
                entertainment, creative production and technology.
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {projects.map((project) => (

                <article
                  key={project.client}
                  className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] ${
                    project.featured ? 'md:col-span-2' : ''
                  }`}
                >

                  {/* Visual */}
                  <div
                    className={`relative flex items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent ${
                      project.featured
                        ? 'h-[360px] md:h-[460px]'
                        : 'h-[320px] md:h-[380px]'
                    }`}
                  >

                    {/* Background rings */}
                    <div className="absolute h-56 w-56 rounded-full border border-white/[0.06] transition-all duration-700 group-hover:scale-125 group-hover:border-white/[0.12]" />

                    <div className="absolute h-40 w-40 rounded-full bg-white/[0.025] blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-white/[0.06]" />

                    {/* Logo */}
                    <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-md transition-all duration-700 group-hover:scale-110 group-hover:border-white/20 group-hover:bg-white/[0.07] md:h-44 md:w-44 md:p-9">

                      <img
                        src={project.logo}
                        alt={`${project.client} logo`}
                        className="max-h-full max-w-full object-contain opacity-90 transition-all duration-500 group-hover:opacity-100"
                      />

                    </div>

                    {/* Number */}
                    <span className="absolute left-6 top-6 text-xs tracking-[0.25em] text-white/25">
                      {project.number}
                    </span>

                    {/* Category */}
                    <span className="absolute right-6 top-6 rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-white/35">
                      {project.category}
                    </span>

                    {/* Arrow */}
                    <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight size={18} />
                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-7 md:p-10">

                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                      <div className="max-w-3xl">

                        <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                          {project.client}
                        </p>

                        <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] md:text-4xl">
                          {project.title}
                        </h3>

                        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/40 md:text-base">
                          {project.description}
                        </p>

                      </div>

                      <Link
                        to={`/work/${project.slug}`}
                        className="group/link flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs text-white/60 transition-all duration-300 hover:border-white/25 hover:bg-white hover:text-black"
                      >
                        View Project

                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover/link:rotate-45"
                        />
                      </Link>

                    </div>

                    {/* Services */}
                    <div className="mt-7 flex flex-wrap gap-2">

                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white/30"
                        >
                          {service}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Hover border */}
                  <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-transparent transition-colors duration-500 group-hover:border-white/20" />

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="border-t border-white/10 px-6 py-28 md:px-8 md:py-40">

          <div className="mx-auto max-w-7xl">

            <p className="text-xs uppercase tracking-[0.35em] text-white/30">
              Start something new
            </p>

            <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

              <h2 className="max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.065em] md:text-8xl">
                Your project
                <br />
                <span className="text-white/25">
                  could be next.
                </span>
              </h2>

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

          </div>

        </section>

      </main>
    </>
  )
}

export default Work