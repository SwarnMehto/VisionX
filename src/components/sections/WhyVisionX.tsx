import {
  ArrowUpRight,
  BrainCircuit,
  Gauge,
  Layers3,
  Radar,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const signals = [
  {
    label: 'Strategy',
    value: '01',
    text: 'Clear direction before execution.',
    icon: BrainCircuit,
  },
  {
    label: 'Technology',
    value: '02',
    text: 'Modern systems built to perform.',
    icon: Layers3,
  },
  {
    label: 'Intelligence',
    value: '03',
    text: 'Data and AI informing decisions.',
    icon: Radar,
  },
  {
    label: 'Performance',
    value: '04',
    text: 'Every system designed for measurable growth.',
    icon: Gauge,
  },
]

function WhyVisionX() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505] px-6 py-28 md:px-8 md:py-40">
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '90px 90px',
          maskImage:
            'radial-gradient(circle at 50% 45%, black 10%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 45%, black 10%, transparent 75%)',
        }}
      />

      {/* =====================================================
          AMBIENT LIGHT
      ===================================================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[150px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[-100px] top-[20%] h-[350px] w-[350px] rounded-full bg-rose-500/[0.04] blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/25" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Intelligence / 004
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.07em]">
              <span className="text-white">Not another</span>
              <br />
              <span className="text-white/25">digital agency.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
              Vision X connects strategy, technology, creative thinking and
              performance into one digital growth system.
            </p>
          </div>
        </div>

        {/* ===================================================
            CORE SYSTEM
        =================================================== */}

        <div className="mt-20 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* =================================================
              LEFT — DIGITAL CORE
          ================================================= */}

          <div className="relative min-h-[560px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.018]">
            {/* scanning line */}

            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

            {/* orbit system */}

            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 md:h-[470px] md:w-[470px]">
              {/* outer */}

              <div className="absolute inset-0 rounded-full border border-white/[0.05]" />

              {/* orbit */}

              <div
                className="absolute inset-[35px] rounded-full border border-cyan-300/[0.07]"
                style={{
                  transform: 'rotateX(67deg) rotateZ(22deg)',
                }}
              />

              <div
                className="absolute inset-[65px] rounded-full border border-rose-300/[0.07]"
                style={{
                  transform: 'rotateY(63deg) rotateZ(-28deg)',
                }}
              />

              <div
                className="absolute inset-[105px] rounded-full border border-white/[0.05]"
                style={{
                  transform: 'rotateX(55deg) rotateZ(-15deg)',
                }}
              />

              {/* core */}

              <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.09] bg-black/50 shadow-[0_0_100px_rgba(34,211,238,0.08)] backdrop-blur-xl md:h-44 md:w-44">
                <div className="absolute inset-5 rounded-full border border-white/[0.06]" />

                <div className="absolute inset-10 rounded-full border border-cyan-300/[0.12]" />

                <div className="relative flex flex-col items-center">
                  <Sparkles
                    size={22}
                    className="text-cyan-200"
                  />

                  <span className="mt-2 text-[8px] uppercase tracking-[0.3em] text-white/35">
                    VX CORE
                  </span>
                </div>
              </div>

              {/* nodes */}

              <span className="absolute left-[5%] top-[47%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />

              <span className="absolute right-[9%] top-[18%] h-1.5 w-1.5 rounded-full bg-rose-300 shadow-[0_0_18px_rgba(251,113,133,0.9)]" />

              <span className="absolute bottom-[8%] left-[34%] h-1.5 w-1.5 rounded-full bg-white/70" />
            </div>

            {/* corner labels */}

            <div className="absolute left-6 top-6">
              <p className="text-[8px] uppercase tracking-[0.28em] text-white/20">
                Neural Growth Layer
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-cyan-200/50">
                Active
              </p>
            </div>

            <div className="absolute bottom-6 left-6">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

                <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                  System Online
                </span>
              </div>
            </div>

            <div className="absolute bottom-6 right-6">
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/15">
                VX / 004
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT — SIGNALS
          ================================================= */}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {signals.map((signal, index) => {
              const Icon = signal.icon

              return (
                <div
                  key={signal.label}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5 transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.035]"
                >
                  {/* hover glow */}

                  <div className="pointer-events-none absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-cyan-300/[0.04] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-white/40 transition-colors group-hover:border-cyan-300/20 group-hover:text-cyan-200">
                      <Icon size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">
                          {signal.label}
                        </p>

                        <span className="text-[9px] tracking-[0.2em] text-white/15">
                          {signal.value}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-white/30">
                        {signal.text}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={14}
                      className="text-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/40"
                    />
                  </div>

                  {/* progress line */}

                  <div className="mt-5 h-px w-full bg-white/[0.05]">
                    <div
                      className="h-px bg-gradient-to-r from-cyan-300/50 to-rose-300/20"
                      style={{
                        width: `${62 + index * 8}%`,
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ===================================================
            METRICS
        =================================================== */}

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="border-t border-white/[0.07] px-1 py-5">
            <p className="text-3xl font-medium tracking-[-0.05em] text-white">
              01
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/20">
              Connected system
            </p>
          </div>

          <div className="border-t border-white/[0.07] px-1 py-5">
            <p className="text-3xl font-medium tracking-[-0.05em] text-white">
              ∞
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/20">
              Room to evolve
            </p>
          </div>

          <div className="border-t border-white/[0.07] px-1 py-5">
            <p className="text-3xl font-medium tracking-[-0.05em] text-white">
              24/7
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/20">
              Digital mindset
            </p>
          </div>
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        =================================================== */}

        <div className="mt-20 flex flex-col gap-6 border-t border-white/[0.07] pt-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck
                size={15}
                className="text-white/30"
              />

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Built for the next internet
              </span>
            </div>

            <p className="text-sm leading-7 text-white/30">
              We don't just create digital assets. We engineer the ecosystem
              around them.
            </p>
          </div>

          <button
            type="button"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.02] px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-white/50 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            Explore the system

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyVisionX