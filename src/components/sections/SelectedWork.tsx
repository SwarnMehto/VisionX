import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  MoveUpRight,
  Sparkles,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    number: '01',
    client: 'LIPMT',
    slug: 'lipmt',
    logo: '/logos/lipmt.png',
    category: 'Education',
    description:
      'A responsive digital platform focused on course discovery, admissions, user experience and search visibility for a paramedical education brand.',
    tags: ['Web Development', 'SEO', 'Performance'],
    type: 'education',
    size: 'large',
  },
  {
    number: '02',
    client: 'Krinay Scrubs',
    slug: 'krinay-scrubs',
    logo: '/logos/krinay.png',
    category: 'Healthcare / E-commerce',
    description:
      'A modern e-commerce experience designed around medical apparel, product discovery, conversion and a scalable digital foundation.',
    tags: ['E-commerce', 'SEO', 'UI/UX'],
    type: 'commerce',
    size: 'normal',
  },
  {
    number: '03',
    client: 'Sharva Clinic',
    slug: 'sharva-clinic',
    logo: '/logos/sharva.png',
    category: 'Healthcare',
    description:
      'A professional healthcare digital presence focused on clear communication, local discovery and a stronger online brand experience.',
    tags: ['Web', 'Local SEO', 'Digital Growth'],
    type: 'healthcare',
    size: 'normal',
  },
  {
    number: '04',
    client: 'Bluemoon Production',
    slug: 'bluemoon-production',
    logo: '/logos/bluemoon.png',
    category: 'Production / Creative',
    description:
      'A creative digital experience supporting the online presence and positioning of a production-focused brand.',
    tags: ['Digital', 'Creative', 'Web'],
    type: 'creative',
    size: 'normal',
  },
  {
    number: '05',
    client: 'Gem Records',
    slug: 'gem-records',
    logo: '/logos/gem-records.png',
    category: 'Music / Entertainment',
    description:
      'A digital experience created around the online presence and creative positioning of a music-focused brand.',
    tags: ['Digital', 'Creative', 'Web'],
    type: 'music',
    size: 'normal',
  },
  {
    number: '06',
    client: 'Crystal Smart Solution',
    slug: 'crystal-smart-solution',
    logo: '/logos/crystal-smart.png',
    category: 'Business / Technology',
    description:
      'A digital experience focused on presenting business solutions clearly and creating a stronger digital foundation.',
    tags: ['Web', 'Digital', 'Growth'],
    type: 'technology',
    size: 'normal',
  },
]

function ProjectVisual({
  type,
  number,
  logo,
  client,
  href,
}: {
  type: string
  number: string
  logo: string
  client: string
  href: string
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* =========================================================
          BASE ATMOSPHERE
      ========================================================= */}

      <div className="absolute inset-0 bg-[#080808]" />

      {/* Main radial light */}

      <div
        className={`absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] ${
          type === 'commerce'
            ? 'bg-cyan-400/[0.09]'
            : type === 'education'
              ? 'bg-rose-500/[0.09]'
              : 'bg-blue-400/[0.07]'
        }`}
      />

      {/* =========================================================
          DIGITAL GRID
      ========================================================= */}

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '55px 55px',
          transform:
            'perspective(700px) rotateX(58deg) scale(1.6) translateY(20%)',
          transformOrigin: 'center bottom',
        }}
      />

      {/* =========================================================
          ORBIT
      ========================================================= */}

      <div
        className={`absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${
          type === 'commerce'
            ? 'border-cyan-300/15'
            : type === 'education'
              ? 'border-rose-300/15'
              : 'border-blue-300/15'
        }`}
      />

      <div
        className={`absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed ${
          type === 'commerce'
            ? 'border-cyan-300/10'
            : type === 'education'
              ? 'border-rose-300/10'
              : 'border-white/10'
        }`}
      />

      {/* =========================================================
          CORE
      ========================================================= */}

      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`absolute inset-0 rounded-[28%] border rotate-45 transition-transform duration-700 group-hover:rotate-[135deg] ${
            type === 'commerce'
              ? 'border-cyan-300/30 bg-cyan-300/[0.035]'
              : type === 'education'
                ? 'border-rose-300/30 bg-rose-300/[0.035]'
                : 'border-blue-300/25 bg-blue-300/[0.035]'
          }`}
        />

        <div className="absolute inset-4 rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-md" />

        <div
          className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            type === 'commerce'
              ? 'bg-cyan-300'
              : type === 'education'
                ? 'bg-rose-300'
                : 'bg-blue-300'
          }`}
        />
      </div>

      <Link
        to={href}
        aria-label={`View ${client} project`}
        className="absolute left-1/2 top-1/2 z-10 flex h-36 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/45 p-5 shadow-2xl backdrop-blur-md transition-transform duration-700 group-hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200 md:h-44 md:w-64"
      >
        <img src={logo} width="256" height="176" alt={`${client} logo`} loading="lazy" className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110" />
      </Link>

      {/* =========================================================
          ORBIT DOTS
      ========================================================= */}

      <div
        className={`absolute left-[18%] top-[28%] h-2 w-2 rounded-full ${
          type === 'commerce'
            ? 'bg-cyan-300'
            : type === 'education'
              ? 'bg-rose-300'
              : 'bg-blue-300'
        }`}
      />

      <div className="absolute bottom-[23%] right-[21%] h-1.5 w-1.5 rounded-full bg-white/50" />

      <div className="absolute right-[15%] top-[22%] h-1 w-1 rounded-full bg-white/40" />

      {/* =========================================================
          SYSTEM LABELS
      ========================================================= */}

      <div className="absolute left-6 top-6">
        <p className="text-[8px] uppercase tracking-[0.28em] text-white/25">
          VX / PROJECT {number}
        </p>
      </div>

      <div className="absolute bottom-6 right-6 text-right">
        <p className="text-[8px] uppercase tracking-[0.28em] text-white/20">
          Digital Environment
        </p>

        <p className="mt-1 text-[8px] uppercase tracking-[0.28em] text-white/10">
          CASE STUDY / VX
        </p>
      </div>

      {/* =========================================================
          CORNER MARKERS
      ========================================================= */}

      <span className="absolute left-4 top-1/2 h-8 w-px -translate-y-1/2 bg-white/10" />

      <span className="absolute right-4 top-1/2 h-8 w-px -translate-y-1/2 bg-white/10" />

      <span className="absolute left-1/2 top-4 h-px w-8 -translate-x-1/2 bg-white/10" />

      <span className="absolute bottom-4 left-1/2 h-px w-8 -translate-x-1/2 bg-white/10" />
    </div>
  )
}

function SelectedWork() {
  const progressRef = useRef<HTMLSpanElement>(null)

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      id="work"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-24 md:px-8 md:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[-220px] top-[30%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.025] blur-[150px]" />

        <div className="absolute right-[-220px] bottom-[10%] h-[550px] w-[550px] rounded-full bg-rose-500/[0.025] blur-[170px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/30" />

              <p className="text-[10px] uppercase tracking-[0.32em] text-white/35">
                03 / Originals
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.025]">
                <Layers3
                  size={14}
                  className="text-white/45"
                />
              </div>

              <span className="text-[9px] uppercase tracking-[0.28em] text-white/25">
                VX / 004
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
              Work that moves
              <br />

              <span className="text-white/25">
                brands forward.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 md:text-lg">
              We don't just design interfaces. We build digital experiences,
              visibility systems and growth infrastructure designed to create
              measurable momentum.
            </p>
          </div>
        </div>

        {/* =========================================================
            PROJECTS
        ========================================================= */}

        <div
          role="region"
          aria-label="Selected project rail"
          tabIndex={0}
          data-cursor="DRAG"
          onScroll={(event) => {
            const rail = event.currentTarget
            const maximum = rail.scrollWidth - rail.clientWidth
            const progress = maximum > 0 ? rail.scrollLeft / maximum : 1
            progressRef.current?.style.setProperty('transform', `scaleX(${progress})`)
          }}
          className="project-rail mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-5"
        >
          {projects.map((project) => (
            <article
              key={project.number}
              data-cursor="VIEW PROJECT"
              className="project-poster group relative min-h-[490px] min-w-[min(88vw,760px)] snap-start overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.035] md:min-h-[520px]"
            >
              {/* =====================================================
                  VISUAL
              ===================================================== */}

              <ProjectVisual
                type={project.type}
                number={project.number}
                logo={project.logo}
                client={project.client}
                href={`/work/${project.slug}`}
              />

              {/* =====================================================
                  DARK READABILITY
              ===================================================== */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />

              {/* =====================================================
                  CONTENT
              ===================================================== */}

              <div className="relative flex min-h-[490px] flex-col justify-between p-6 md:min-h-[520px] md:p-10">
                {/* TOP */}

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-[9px] text-white/45 backdrop-blur-xl">
                      {project.number}
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                      {project.category}
                    </span>
                  </div>

                </div>

                {/* MIDDLE */}

                <div className="max-w-2xl">
                  <h3 className="project-poster__title text-5xl font-medium leading-[0.9] tracking-[-0.065em] text-white md:text-7xl">
                    {project.client}
                  </h3>

                  <p className="mt-6 max-w-xl text-sm leading-6 text-white/50 md:text-base md:leading-7">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/40 backdrop-blur-xl transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BOTTOM */}

                <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles
                      size={13}
                      className="text-white/30"
                    />

                    <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                      Digital experience / growth system
                    </span>
                  </div>

                  <Link
                    to={`/work/${project.slug}`}
                    className="group/link inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-black/20 px-5 py-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white/65 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                  >
                    Explore Project

                    <MoveUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>

              {/* =====================================================
                  HOVER SCAN LINE
              ===================================================== */}

              <div className="pointer-events-none absolute left-0 top-0 h-px w-full -translate-x-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent transition-transform duration-[1400ms] ease-out group-hover:translate-x-full" />

              {/* =====================================================
                  CORNER ICON
              ===================================================== */}

              <div className="pointer-events-none absolute bottom-8 right-8 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/20 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100 md:flex">
                <ExternalLink
                  size={15}
                  className="text-white/60"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="project-progress" aria-hidden="true">
          <span ref={progressRef} style={{ transform: 'scaleX(0.167)' }} />
        </div>

        {/* =========================================================
            VIEW ALL WORK
        ========================================================= */}

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              More systems in the archive
            </p>

            <p className="mt-2 text-sm text-white/40">
              Explore the full Vision X work environment.
            </p>
          </div>

          <Link
            to="/work"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
          >
            View All Work

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.section>
  )
}

export default SelectedWork