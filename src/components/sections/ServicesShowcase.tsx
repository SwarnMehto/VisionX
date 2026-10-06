
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Globe2,
  Megaphone,
  Search,
  Sparkles,
  Zap,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    id: '01',
    title: 'Web Experiences',
    short: 'WEB',
    description:
      'High-performance websites and digital experiences engineered to make brands impossible to ignore.',
    icon: Globe2,
    tags: ['Web Design', 'Development', '3D Experiences'],
    accent: 'cyan',
  },
  {
    id: '02',
    title: 'SEO / AEO / GEO',
    short: 'SEARCH',
    description:
      'Search visibility built for traditional search engines, AI answers and the next generation of discovery.',
    icon: Search,
    tags: ['SEO', 'AEO', 'GEO'],
    accent: 'violet',
  },
  {
    id: '03',
    title: 'Performance Growth',
    short: 'GROWTH',
    description:
      'Data-driven campaigns designed to turn attention into qualified traffic, leads and revenue.',
    icon: BarChart3,
    tags: ['Google Ads', 'Meta Ads', 'Analytics'],
    accent: 'cyan',
  },
  {
    id: '04',
    title: 'Brand & Creative',
    short: 'CREATE',
    description:
      'Visual systems, campaigns and creative assets that give ambitious brands a distinct digital identity.',
    icon: Sparkles,
    tags: ['Branding', 'Creative', 'Social'],
    accent: 'violet',
  },
  {
    id: '05',
    title: 'Digital Systems',
    short: 'SYSTEMS',
    description:
      'Connected digital tools, automation and intelligent workflows that make businesses operate smarter.',
    icon: Code2,
    tags: ['Automation', 'CRM', 'Integrations'],
    accent: 'cyan',
  },
  {
    id: '06',
    title: 'Launch & Scale',
    short: 'SCALE',
    description:
      'From first launch to continuous optimisation, we build systems that are ready to evolve with your business.',
    icon: Megaphone,
    tags: ['Launch', 'Testing', 'Optimisation'],
    accent: 'violet',
  },
]

function ServicesShowcase() {
  const [active, setActive] = useState(0)

  const current = services[active]
  const CurrentIcon = current.icon

  const isCyan = current.accent === 'cyan'

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505] px-6 py-28 md:px-8 md:py-40"
    >
      {/* =========================================================
          BACKGROUND GRID
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
          maskImage:
            'radial-gradient(circle at center, black, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black, transparent 75%)',
        }}
      />

      {/* =========================================================
          BACKGROUND HORIZONTAL LIGHT
      ========================================================= */}

      <motion.div
        className="pointer-events-none absolute left-[-20%] top-[30%] h-px w-[140%] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        animate={{
          x: ['-8%', '8%', '-8%'],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* =========================================================
          AMBIENT GLOW
      ========================================================= */}

      <motion.div
        key={current.accent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`pointer-events-none absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full blur-[150px] ${
          isCyan ? 'bg-cyan-400/[0.055]' : 'bg-violet-500/[0.055]'
        }`}
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`pointer-events-none absolute left-[20%] top-[55%] h-[300px] w-[300px] rounded-full blur-[130px] ${
          isCyan ? 'bg-cyan-400/[0.025]' : 'bg-violet-500/[0.025]'
        }`}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/25" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Capabilities / 003
              </span>
            </div>

            <div className="mt-8 hidden lg:block">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span
                    className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-30 ${
                      isCyan ? 'bg-cyan-300' : 'bg-violet-300'
                    }`}
                  />

                  <span
                    className={`relative h-2 w-2 rounded-full ${
                      isCyan ? 'bg-cyan-300' : 'bg-violet-300'
                    }`}
                  />
                </span>

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                  Digital systems online
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.07em]">
              <span className="text-white">Built for</span>
              <br />
              <span className="text-white/25">digital momentum.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
              One connected team across technology, search, creative and
              performance — designed to turn digital presence into business
              momentum.
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            MAIN SYSTEM
        ========================================================= */}

        <div className="mt-20 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          {/* =======================================================
              SERVICE NAVIGATION
          ======================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="sticky top-32">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.28em] text-white/20">
                  Select capability
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                  {String(active + 1).padStart(2, '0')} / 06
                </span>
              </div>

              <div className="space-y-1">
                {services.map((service, index) => {
                  const Icon = service.icon
                  const isActive = index === active

                  return (
                    <motion.button
                      key={service.id}
                      type="button"
                      onClick={() => setActive(index)}
                      whileHover={{
                        x: 5,
                      }}
                      whileTap={{
                        scale: 0.985,
                      }}
                      className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-xl border px-4 py-4 text-left transition-all duration-500 ${
                        isActive
                          ? 'border-white/[0.14] bg-white/[0.045]'
                          : 'border-transparent hover:border-white/[0.07] hover:bg-white/[0.02]'
                      }`}
                    >
                      {/* Active line */}

                      <span
                        className={`absolute left-0 top-0 h-full w-px transition-all duration-500 ${
                          isActive
                            ? isCyan
                              ? 'bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]'
                              : 'bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.8)]'
                            : 'bg-transparent'
                        }`}
                      />

                      <span className="w-7 text-[9px] tracking-[0.2em] text-white/20">
                        {service.id}
                      </span>

                      <motion.div
                        animate={
                          isActive
                            ? {
                                rotate: [0, 5, -5, 0],
                              }
                            : {
                                rotate: 0,
                              }
                        }
                        transition={{
                          duration: 2.5,
                          repeat: isActive ? Infinity : 0,
                          ease: 'easeInOut',
                        }}
                        className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-500 ${
                          isActive
                            ? service.accent === 'cyan'
                              ? 'border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-200'
                              : 'border-violet-300/20 bg-violet-300/[0.08] text-violet-200'
                            : 'border-white/[0.07] bg-white/[0.02] text-white/25'
                        }`}
                      >
                        <Icon size={16} />
                      </motion.div>

                      <span
                        className={`text-sm transition-colors duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-white/40 group-hover:text-white/70'
                        }`}
                      >
                        {service.title}
                      </span>

                      <ArrowUpRight
                        size={14}
                        className={`ml-auto transition-all duration-300 ${
                          isActive
                            ? 'translate-x-0 translate-y-0 text-white/60'
                            : 'translate-y-1 -translate-x-1 text-white/0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-white/30'
                        }`}
                      />
                    </motion.button>
                  )
                })}
              </div>

              {/* Navigation footer */}

              <div className="mt-8 hidden border-t border-white/[0.07] pt-5 md:block">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.22em] text-white/15">
                    VX / SERVICES
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.22em] text-white/15">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =======================================================
              DIGITAL CORE
          ======================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[520px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.018]"
          >
            {/* Scan lines */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  'linear-gradient(transparent 50%, rgba(255,255,255,0.025) 50%)',
                backgroundSize: '100% 4px',
              }}
            />

            {/* Fine grid */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                maskImage:
                  'radial-gradient(circle at center, black, transparent 75%)',
                WebkitMaskImage:
                  'radial-gradient(circle at center, black, transparent 75%)',
              }}
            />

            {/* =====================================================
                ORBITAL SYSTEM
            ===================================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="pointer-events-none absolute right-[-90px] top-1/2 h-[430px] w-[430px] -translate-y-1/2"
            >
              <div className="absolute inset-0 rounded-full border border-white/[0.06]" />

              <div
                className="absolute inset-[45px] rounded-full border border-cyan-300/[0.07]"
                style={{
                  transform: 'rotateX(65deg) rotateZ(25deg)',
                }}
              />

              <div
                className="absolute inset-[85px] rounded-full border border-violet-300/[0.07]"
                style={{
                  transform: 'rotateY(60deg) rotateZ(-20deg)',
                }}
              />

              {/* orbit dots */}

              <span className="absolute left-[10%] top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_15px_rgba(103,232,249,0.8)]" />

              <span className="absolute right-[16%] top-[18%] h-1 w-1 rounded-full bg-violet-300/70 shadow-[0_0_15px_rgba(196,181,253,0.8)]" />

              <span className="absolute bottom-[15%] right-[35%] h-1.5 w-1.5 rounded-full bg-white/50" />
            </motion.div>

            {/* Counter orbit */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="pointer-events-none absolute right-[-90px] top-1/2 h-[430px] w-[430px] -translate-y-1/2"
            >
              <div className="absolute inset-[70px] rounded-full border border-white/[0.035]" />
            </motion.div>

            {/* Core */}

            <motion.div
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute right-[calc(215px-48px)] top-1/2 z-[1] hidden h-24 w-24 -translate-y-1/2 rounded-full border border-white/[0.08] bg-black/40 shadow-[0_0_100px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:block"
            >
              <div
                className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                  isCyan
                    ? 'bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,0.9)]'
                    : 'bg-violet-300 shadow-[0_0_25px_rgba(196,181,253,0.9)]'
                }`}
              />

              <div
                className={`absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                  isCyan
                    ? 'border-cyan-300/[0.08]'
                    : 'border-violet-300/[0.08]'
                }`}
              />
            </motion.div>

            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-7 md:p-10">
              {/* Top */}

              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.28em] text-white/25">
                  Digital capability
                </span>

                <motion.div
                  key={current.id}
                  initial={{
                    scale: 0.8,
                    opacity: 0,
                    rotate: -10,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                    isCyan
                      ? 'border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-200'
                      : 'border-violet-300/20 bg-violet-300/[0.06] text-violet-200'
                  }`}
                >
                  <CurrentIcon size={18} />
                </motion.div>
              </div>

              {/* Main content */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="max-w-xl"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <motion.span
                      animate={{
                        opacity: [0.45, 1, 0.45],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`h-1.5 w-1.5 rounded-full ${
                        isCyan
                          ? 'bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]'
                          : 'bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.8)]'
                      }`}
                    />

                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                      {current.short}
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/15">
                      / {current.id}
                    </span>
                  </div>

                  <h3 className="max-w-2xl text-4xl font-medium tracking-[-0.05em] text-white md:text-6xl">
                    {current.title}
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-white/40 md:text-base">
                    {current.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {current.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.06,
                        }}
                        className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-white/35"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom system */}

              <div className="mt-12 flex items-center justify-between border-t border-white/[0.07] pt-5">
                <div className="flex items-center gap-2">
                  <Zap size={12} className="text-white/25" />

                  <span className="text-[9px] uppercase tracking-[0.22em] text-white/25">
                    System ready
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden text-[9px] uppercase tracking-[0.22em] text-white/15 sm:block">
                    Live capability
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.22em] text-white/20">
                    VX / {current.id}
                  </span>
                </div>
              </div>
            </div>

            {/* =====================================================
                SIDE DECORATION
            ===================================================== */}

            <div className="pointer-events-none absolute bottom-8 right-8 hidden flex-col items-end gap-2 md:flex">
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/10">
                CORE
              </span>

              <div className="flex items-end gap-[3px]">
                {[18, 30, 22, 42, 28, 50, 35, 58].map((height, index) => (
                  <motion.span
                    key={index}
                    animate={{
                      height: [`${height}%`, `${Math.min(height + 18, 90)}%`, `${height}%`],
                    }}
                    transition={{
                      duration: 1.8 + index * 0.08,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`block w-[3px] rounded-full ${
                      isCyan ? 'bg-cyan-300/30' : 'bg-violet-300/30'
                    }`}
                    style={{
                      minHeight: '3px',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20 border-t border-white/[0.07] pt-6"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/20">
              Strategy × Technology × Creative × Performance
            </p>

            <div className="flex items-center gap-3">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isCyan
                    ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.6)]'
                    : 'bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.6)]'
                }`}
              />

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/15">
                Vision X / 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesShowcase
