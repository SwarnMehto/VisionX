import { useEffect, useRef } from 'react'

function CinematicHeadline() {
  const sectionRef = useRef<HTMLElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const orb = orbRef.current

    if (!section || !orb) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect()

      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      orb.style.transform = `
        translate3d(${x * 35}px, ${y * 25}px, 0)
        rotateX(${y * -8}deg)
        rotateY(${x * 10}deg)
      `
    }

    const handleMouseLeave = () => {
      orb.style.transform =
        'translate3d(0,0,0) rotateX(0deg) rotateY(0deg)'
    }

    section.addEventListener('mousemove', handleMouseMove)
    section.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      section.removeEventListener('mousemove', handleMouseMove)
      section.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="noise relative overflow-hidden border-t border-white/[0.07] bg-[#050505] px-6 py-28 md:px-8 md:py-40"
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(circle at center, black 20%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black 20%, transparent 75%)',
        }}
      />

      {/* =====================================================
          AMBIENT GLOWS
      ===================================================== */}

      <div
        className="pointer-events-none absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-rose-500/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[8%] bottom-[10%] h-80 w-80 rounded-full bg-cyan-400/[0.05] blur-[130px]"
        aria-hidden="true"
      />

      {/* =====================================================
          FUTURE ORBIT
      ===================================================== */}

      <div
        ref={orbRef}
        className="pointer-events-none absolute right-[5%] top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 transition-transform duration-700 ease-out lg:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full border border-white/[0.06]" />

        <div className="absolute inset-[45px] rounded-full border border-cyan-300/[0.08]" />

        <div className="absolute inset-[90px] rounded-full border border-rose-400/[0.08]" />

        <div
          className="absolute inset-[35px] rounded-full border border-white/[0.04]"
          style={{
            transform: 'rotateX(65deg) rotateZ(25deg)',
          }}
        />

        <div
          className="absolute inset-[70px] rounded-full border border-cyan-300/[0.05]"
          style={{
            transform: 'rotateY(65deg) rotateZ(-25deg)',
          }}
        />

        {/* Core */}

        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] bg-white/[0.015] shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl">
          <div className="absolute inset-5 rounded-full border border-white/[0.06]" />

          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,0.8)]" />
        </div>

        {/* Orbit nodes */}

        <span className="absolute left-[8%] top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)]" />

        <span className="absolute right-[12%] top-[20%] h-1.5 w-1.5 rounded-full bg-rose-300 shadow-[0_0_15px_rgba(251,113,133,0.8)]" />

        <span className="absolute bottom-[15%] left-[28%] h-1 w-1 rounded-full bg-white/60" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-5xl">
          {/* Label */}

          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-12 bg-white/25" />

            <span className="text-[10px] uppercase tracking-[0.32em] text-white/35">
              Digital Systems / 002
            </span>
          </div>

          {/* Main headline */}

          <h2 className="max-w-5xl text-[clamp(3rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.075em]">
            <span className="block text-white">
              We engineer
            </span>

            <span className="block text-white/25">
              what comes next.
            </span>
          </h2>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 md:text-xl md:leading-8">
            Strategy, technology, creative and performance working as one
            connected digital system — built for brands that want to move
            faster, look sharper and grow smarter.
          </p>

          {/* System indicators */}

          <div className="mt-12 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                Strategy
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-300 shadow-[0_0_10px_rgba(251,113,133,0.7)]" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                Technology
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                Growth
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SYSTEM LINE
        ===================================================== */}

        <div className="mt-24 flex items-center justify-between border-t border-white/[0.07] pt-5">
          <span className="text-[9px] uppercase tracking-[0.28em] text-white/20">
            Vision X / Digital Growth Infrastructure
          </span>

          <span className="hidden text-[9px] uppercase tracking-[0.28em] text-white/20 sm:block">
            System Active
          </span>
        </div>
      </div>
    </section>
  )
}

export default CinematicHeadline