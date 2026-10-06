import { Activity, Cpu } from 'lucide-react'

function HeroHUD() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] hidden md:block"
      aria-hidden="true"
    >
      {/* =========================================
          TOP RIGHT STATUS
      ========================================= */}

      <div className="absolute right-[7%] top-[18%]">
        <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-[9px] uppercase tracking-[0.28em] text-white/50">
              Digital Core Online
            </span>
          </div>
        </div>
      </div>


      {/* =========================================
          PERFORMANCE CARD
          RIGHT SIDE ONLY
      ========================================= */}

      <div className="absolute right-[5%] top-[35%]">
        <div className="w-44 rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-2xl backdrop-blur-2xl">

          <div className="flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Performance
            </span>

            <Activity
              size={14}
              className="text-cyan-300"
            />
          </div>


          <div className="mt-5 flex items-end justify-between">
            <span className="text-3xl font-medium tracking-[-0.06em] text-white">
              98
            </span>

            <span className="mb-1 text-[9px] uppercase tracking-[0.2em] text-cyan-300">
              Optimized
            </span>
          </div>


          {/* Mini Graph */}

          <div className="mt-4 flex h-8 items-end gap-[3px]">
            {[25, 38, 32, 55, 45, 68, 60, 78, 70, 92].map(
              (height, index) => (
                <span
                  key={index}
                  className="w-full rounded-sm bg-white/20"
                  style={{
                    height: `${height}%`,
                  }}
                />
              ),
            )}
          </div>

        </div>
      </div>


      {/* =========================================
          DIGITAL SYSTEM CARD
          RIGHT BOTTOM
      ========================================= */}

      <div className="absolute bottom-[22%] right-[8%]">
        <div className="w-52 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-2xl">

          <div className="flex items-center justify-between">

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Growth System
            </span>

            <Cpu
              size={14}
              className="text-white/50"
            />

          </div>


          <div className="mt-4 grid grid-cols-3 gap-2">

            {/* WEB */}

            <div className="rounded-lg border border-white/5 bg-white/[0.03] p-2">

              <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

              <p className="mt-2 text-[8px] uppercase tracking-wider text-white/35">
                Web
              </p>

            </div>


            {/* ADS */}

            <div className="rounded-lg border border-white/5 bg-white/[0.03] p-2">

              <div className="h-1.5 w-1.5 rounded-full bg-violet-300" />

              <p className="mt-2 text-[8px] uppercase tracking-wider text-white/35">
                Ads
              </p>

            </div>


            {/* DATA */}

            <div className="rounded-lg border border-white/5 bg-white/[0.03] p-2">

              <div className="h-1.5 w-1.5 rounded-full bg-white" />

              <p className="mt-2 text-[8px] uppercase tracking-wider text-white/35">
                Data
              </p>

            </div>

          </div>

        </div>
      </div>


      {/* =========================================
          LEFT BOTTOM INDEX
          SAFE AREA — DOES NOT TOUCH HEADING
      ========================================= */}

      <div className="absolute bottom-[13%] left-[4%]">

        <div className="flex items-center gap-3">

          <span className="h-px w-10 bg-white/20" />

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
            VX / 001
          </span>

        </div>

      </div>

    </div>
  )
}

export default HeroHUD
