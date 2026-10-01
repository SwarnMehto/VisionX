import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import SEO from '../components/seo/SEO'

const projects = {
  lipmt: {
    client: 'LIPMT',
    logo: '/logos/lipmt.png',
    category: 'Education',
    title: 'Digital Platform for Paramedical Education',
    description:
      'A digital platform focused on course discovery, admissions, user experience and search visibility for a paramedical education brand.',
    services: ['Web Development', 'SEO', 'Performance'],
    technologies: ['React', 'TypeScript', 'Responsive UI', 'SEO'],
  },

  'krinay-scrubs': {
    client: 'Krinay Scrubs',
    logo: '/logos/krinay.png',
    category: 'Healthcare / E-Commerce',
    title: 'E-Commerce Experience for Medical Professionals',
    description:
      'A modern e-commerce experience designed around medical apparel, product discovery, conversion and a scalable digital foundation.',
    services: ['E-Commerce', 'SEO', 'UI/UX'],
    technologies: ['React', 'TypeScript', 'E-Commerce', 'Analytics'],
  },

  'sharva-clinic': {
    client: 'Sharva Clinic',
    logo: '/logos/sharva.png',
    category: 'Healthcare',
    title: 'Digital Presence for Healthcare',
    description:
      'A professional healthcare digital presence focused on clear communication, local discovery and a stronger online brand experience.',
    services: ['Web', 'Local SEO', 'Digital Growth'],
    technologies: ['Web Development', 'Local SEO', 'Google Business'],
  },

  'bluemoon-production': {
    client: 'Bluemoon Production',
    logo: '/logos/bluemoon.png',
    category: 'Production / Creative',
    title: 'Creative Digital Experience',
    description:
      'A creative digital experience supporting the online presence and positioning of a production-focused brand.',
    services: ['Digital', 'Creative', 'Web'],
    technologies: ['Web', 'Creative Direction', 'Digital Experience'],
  },

  'gem-records': {
    client: 'Gem Records',
    logo: '/logos/gem-records.png',
    category: 'Music / Entertainment',
    title: 'Digital Presence for Music & Entertainment',
    description:
      'A digital experience created around the online presence and creative positioning of a music-focused brand.',
    services: ['Digital', 'Creative', 'Web'],
    technologies: ['Web', 'Creative', 'Digital Strategy'],
  },

  'crystal-smart-solution': {
    client: 'Crystal Smart Solution',
    logo: '/logos/crystal-smart.png',
    category: 'Business / Technology',
    title: 'Digital Business Solution',
    description:
      'A digital experience focused on presenting business solutions clearly and creating a stronger digital foundation.',
    services: ['Web', 'Digital', 'Growth'],
    technologies: ['Web Development', 'Digital Strategy', 'Growth'],
  },
}

function WorkDetail() {
  const { slug } = useParams()

  const project = slug
    ? projects[slug as keyof typeof projects]
    : undefined

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            404
          </p>

          <h1 className="mt-4 text-5xl font-medium tracking-[-0.05em]">
            Project not found
          </h1>

          <Link
            to="/work"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium !text-black"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>
        </div>
      </main>
    )
  }

  return (
    <>
      <SEO
        title={`${project.client} | Vision X`}
        description={project.description}
        canonical={`https://www.myvisionx.in/work/${slug}`}
      />

      <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

        {/* HERO */}

        <section className="relative px-6 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">

          <div className="pointer-events-none absolute right-[-150px] top-[10%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[120px]" />

          <div className="relative mx-auto max-w-7xl">

            <Link
              to="/work"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to Work
            </Link>

            <div className="mt-16 grid gap-14 md:grid-cols-[1fr_0.7fr] md:items-end">

              <div>

                <p className="text-xs uppercase tracking-[0.35em] text-white/30">
                  {project.category}
                </p>

                <h1 className="mt-6 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.07em]">
                  {project.client}
                </h1>

                <h2 className="mt-8 max-w-3xl text-2xl font-medium tracking-[-0.035em] text-white/65 md:text-4xl">
                  {project.title}
                </h2>

              </div>

              {/* Logo */}

              <div className="flex min-h-[280px] items-center justify-center rounded-[32px] border border-white/10 bg-white/[0.025] p-12">

                <img
                  src={project.logo}
                  alt={`${project.client} logo`}
                  className="max-h-40 max-w-[220px] object-contain"
                />

              </div>

            </div>

          </div>

        </section>

        {/* OVERVIEW */}

        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">

          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Project Overview
              </p>
            </div>

            <div>

              <p className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.04em] text-white/80 md:text-4xl">
                {project.description}
              </p>

              <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                    Services
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                    Technology
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CREATIVE PLACEHOLDER */}

        <section className="px-6 pb-24 md:px-8 md:pb-32">

          <div className="mx-auto max-w-7xl">

            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.02]">

              <div className="absolute h-72 w-72 rounded-full border border-white/[0.07]" />

              <div className="absolute h-48 w-48 rounded-full bg-white/[0.035] blur-3xl" />

              <img
                src={project.logo}
                alt={`${project.client} project`}
                className="relative z-10 max-h-28 max-w-[240px] object-contain opacity-80"
              />

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="border-t border-white/10 px-6 py-28 md:px-8 md:py-40">

          <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Have a project in mind?
              </p>

              <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-7xl">
                Let&apos;s build
                <br />
                <span className="text-white/25">
                  something meaningful.
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
                className="!text-black transition-transform group-hover:rotate-45"
              />
            </Link>

          </div>

        </section>

      </main>
    </>
  )
}

export default WorkDetail