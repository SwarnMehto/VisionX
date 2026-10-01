import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    client: 'LIPMT',
    logo: '/logos/lipmt.png',
    title: 'Digital Platform for Paramedical Education',
    category: 'Education',
    description:
      'A responsive digital platform for a paramedical institute, focused on course discovery, admissions and search visibility.',
    services: ['Web Development', 'SEO', 'Performance'],
    className: 'md:col-span-2',
  },
  {
    number: '02',
    client: 'Krinay Scrubs',
    logo: '/logos/krinay.png',
    title: 'E-Commerce Experience for Medical Professionals',
    category: 'Healthcare / E-Commerce',
    description:
      'A modern e-commerce experience for medical scrubs with product discovery, category structure and an SEO-focused foundation.',
    services: ['E-Commerce', 'SEO', 'UI/UX'],
    className: '',
  },
  {
    number: '03',
    client: 'Sharva Clinic',
    logo: '/logos/sharva.png',
    title: 'Digital Presence for Healthcare',
    category: 'Healthcare',
    description:
      'A professional digital presence designed around healthcare communication, local visibility and patient discovery.',
    services: ['Web', 'Local SEO', 'Digital Growth'],
    className: '',
  },
  {
    number: '04',
    client: 'Bluemoon Production',
    logo: '/logos/bluemoon.png',
    title: 'Creative Digital Experience',
    category: 'Production / Creative',
    description:
      'A digital project supporting the creative and production-focused presence of the brand.',
    services: ['Digital', 'Creative', 'Web'],
    className: '',
  },
  {
    number: '05',
    client: 'Gem Records',
    logo: '/logos/gem-records.png',
    title: 'Digital Presence for Music & Entertainment',
    category: 'Music / Entertainment',
    description:
      'A digital project created around the online presence and creative positioning of a music-focused brand.',
    services: ['Digital', 'Creative', 'Web'],
    className: '',
  },
  {
    number: '06',
    client: 'Crystal Smart Solution',
    logo: '/logos/crystal-smart.png',
    title: 'Digital Business Solution',
    category: 'Business / Technology',
    description:
      'A digital experience focused on presenting the business, its solutions and its services clearly online.',
    services: ['Web', 'Digital', 'Growth'],
    className: 'md:col-span-2',
  },
]

function SelectedWork() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 text-white md:py-40">

      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              Selected Work
            </p>

            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-8xl">
              Work that
              <br />
              <span className="text-white/30">moves brands.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/45 md:text-lg">
            A selection of digital experiences, growth systems and creative
            work built for businesses across different industries.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-5 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.client}
              className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] ${project.className}`}
            >

              {/* Visual Area */}
              <div className="relative flex h-[280px] items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent md:h-[360px]">

                {/* Background glow */}
                <div className="absolute h-48 w-48 rounded-full bg-white/[0.025] blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-white/[0.05]" />

                {/* Logo container */}
                <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm transition-all duration-700 group-hover:scale-110 group-hover:border-white/20 group-hover:bg-white/[0.06] md:h-40 md:w-40">

                  <img
                    src={project.logo}
                    alt={`${project.client} logo`}
                    className="max-h-full max-w-full object-contain opacity-85 transition-all duration-500 group-hover:opacity-100"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />

                  {/* Fallback text */}
                  <span className="absolute px-3 text-center text-lg font-medium tracking-[-0.03em] text-white/75 md:text-xl">
                    {project.client}
                  </span>

                </div>

                {/* Number */}
                <span className="absolute left-6 top-6 text-xs tracking-[0.25em] text-white/30">
                  {project.number}
                </span>

                {/* Category */}
                <span className="absolute right-6 top-6 rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-white/40">
                  {project.category}
                </span>

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={17} />
                </div>

              </div>

              {/* Content */}
              <div className="p-7 md:p-9">

                <h3 className="text-2xl font-medium tracking-[-0.035em] md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45 md:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/35"
                    >
                      {service}
                    </span>
                  ))}
                </div>

              </div>

              {/* Hover border */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-transparent transition-colors duration-500 group-hover:border-white/20" />

            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm text-white/35">
              Have a project in mind?
            </p>

            <p className="mt-1 text-xl tracking-[-0.02em] text-white/70">
              Let's build something meaningful.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium !text-black transition-transform duration-300 hover:scale-105"
          >
            <span className="!text-black">
              Start a Project
            </span>

            <ArrowUpRight
              size={16}
              className="!text-black transition-transform duration-300 group-hover:rotate-45"
            />
          </a>

        </div>

      </div>
    </section>
  )
}

export default SelectedWork