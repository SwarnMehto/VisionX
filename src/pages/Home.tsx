import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import SEO from '../components/seo/SEO'
import HeroScene from '../components/three/HeroScene'
import SelectedWork from '../components/sections/SelectedWork'
import ServicesShowcase from '../components/sections/ServicesShowcase'
import WhyVisionX from '../components/sections/WhyVisionX'
import HeroHUD from '../components/sections/HeroHUD'
import IndustriesShowcase from '../components/sections/IndustriesShowcase'

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

        <section
          className="
            noise
            relative
            min-h-[100svh]
            overflow-hidden
            bg-[#050505]
            pt-28
          "
        >

          {/* =======================================================
              3D BACKGROUND
          ======================================================= */}

          <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
          >
            <HeroScene />
          </div>


          {/* =======================================================
              FUTURE ATMOSPHERE
          ======================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-[radial-gradient(circle_at_72%_48%,rgba(255,255,255,0.055),transparent_25%)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-[radial-gradient(circle_at_82%_42%,rgba(34,211,238,0.055),transparent_28%)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-[radial-gradient(circle_at_70%_60%,rgba(124,58,237,0.045),transparent_30%)]
            "
          />


          {/* =======================================================
              READABILITY LAYER
          ======================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[2]
              bg-gradient-to-r
              from-[#050505]
              via-[#050505]/90
              to-[#050505]/15
            "
          />


          {/* =======================================================
              HERO HUD
          ======================================================= */}

          <HeroHUD />


          {/* =======================================================
              HERO CONTENT
          ======================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[calc(100svh-7rem)]
              max-w-7xl
              items-center
              px-6
              py-16
              md:px-8
            "
          >

            <div className="w-full max-w-5xl">


              {/* ===================================================
                  VISION X BRAND SIGNAL
              =================================================== */}

              <div className="mb-7 flex items-center gap-3">

                <div className="flex items-center gap-2">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/65">
                    Vision X
                  </span>

                  <span className="h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />

                </div>

                <span className="h-px w-8 bg-white/20" />

                <span className="text-[9px] uppercase tracking-[0.28em] text-white/30">
                  Digital Systems Studio
                </span>

              </div>


              {/* ===================================================
                  EYEBROW
              =================================================== */}

              <div className="mb-8 flex items-center gap-3">

                <span className="h-px w-10 bg-white/35" />

                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-white/45
                  "
                >
                  Digital Growth & Creative Technology
                </p>

              </div>


              {/* ===================================================
                  MAIN HEADLINE
              =================================================== */}

              <h1
                className="
                  max-w-5xl
                  text-[clamp(4rem,10vw,9rem)]
                  font-medium
                  leading-[0.82]
                  tracking-[-0.075em]
                "
              >

                <span className="block text-white">
                  Build.
                </span>

                <span className="block text-white">
                  Create.
                </span>

                <span className="block text-white/25">
                  Grow.
                </span>

              </h1>


              {/* ===================================================
                  BRAND POSITIONING
              =================================================== */}

              <div className="mt-7 flex items-center gap-3">

                <Sparkles
                  size={13}
                  className="text-cyan-300"
                />

                <p
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.32em]
                    text-white/30
                  "
                >
                  Vision X / Digital systems for ambitious brands
                </p>

              </div>


              {/* ===================================================
                  DESCRIPTION
              =================================================== */}

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-base
                  leading-7
                  text-white/55
                  md:text-lg
                  md:leading-8
                "
              >
                We combine strategy, technology, creative and performance
                marketing to build digital experiences that move brands
                forward.
              </p>


              {/* ===================================================
                  CTA
              =================================================== */}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-white
                    px-7
                    py-4
                    text-sm
                    font-medium
                    !text-black
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:bg-white/90
                  "
                >
                  <span className="!text-black">
                    Start a Project
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="
                      !text-black
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>


                <Link
                  to="/work"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-black/20
                    px-7
                    py-4
                    text-sm
                    font-medium
                    text-white/80
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-white/35
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  View Our Work
                </Link>

              </div>


              {/* ===================================================
                  HERO BRAND SIGNATURE
              =================================================== */}

              <div className="mt-14 hidden items-center gap-6 md:flex">

                <div className="flex items-center gap-3">

                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />

                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                    System Online
                  </span>

                </div>

                <span className="h-3 w-px bg-white/10" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Vision X
                </span>

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Strategy × Technology × Growth
                </span>

              </div>

            </div>

          </div>


          {/* =======================================================
              BOTTOM LEFT SCROLL
          ======================================================= */}

          <div
            className="
              absolute
              bottom-8
              left-6
              z-10
              flex
              items-center
              gap-3
              text-xs
              uppercase
              tracking-[0.25em]
              text-white/30
              md:left-8
            "
          >

            <ArrowDown
              size={14}
              className="animate-bounce"
            />

            <span>
              Scroll to explore
            </span>

          </div>


          {/* =======================================================
              BOTTOM RIGHT SYSTEM LABEL
          ======================================================= */}

          <div
            className="
              absolute
              bottom-8
              right-8
              z-10
              hidden
              text-right
              md:block
            "
          >

            <p className="text-[10px] uppercase tracking-[0.28em] text-white/20">
              Strategy
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/20">
              Technology
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/20">
              Intelligence
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/20">
              Growth
            </p>

          </div>


          {/* =======================================================
              HERO BOTTOM VIGNETTE
          ======================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-[3]
              h-32
              bg-gradient-to-t
              from-[#050505]
              to-transparent
            "
          />

        </section>


        {/* =========================================================
            VISION X INTRO
        ========================================================= */}

        <section
          className="
            border-t
            border-white/10
            bg-[#050505]
            px-6
            py-24
            md:px-8
            md:py-32
          "
        >

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">


              {/* LEFT LABEL */}

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-white/25" />

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.3em]
                      text-white/35
                    "
                  >
                    Vision X
                  </p>

                </div>

                <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Digital Growth Studio
                </p>

              </div>


              {/* RIGHT CONTENT */}

              <div>

                <h2
                  className="
                    max-w-4xl
                    text-3xl
                    font-medium
                    leading-tight
                    tracking-[-0.04em]
                    md:text-5xl
                  "
                >
                  We build digital systems that connect

                  <span className="text-white/35">
                    {' '}
                    creativity, technology and growth.
                  </span>
                </h2>

                <p
                  className="
                    mt-7
                    max-w-2xl
                    text-base
                    leading-7
                    text-white/45
                  "
                >
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
        <IndustriesShowcase />


        {/* =========================================================
            WHY VISION X
        ========================================================= */}

        <WhyVisionX />


        {/* =========================================================
            SELECTED WORK
        ========================================================= */}

        <SelectedWork />


        {/* =========================================================
            BRAND SIGNATURE
        ========================================================= */}

        <section
          className="
            relative
            overflow-hidden
            border-t
            border-white/10
            bg-[#050505]
            px-6
            py-20
            md:px-8
            md:py-24
          "
        >

          {/* Background atmosphere */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-180px]
              top-1/2
              h-[400px]
              w-[400px]
              -translate-y-1/2
              rounded-full
              bg-cyan-400/[0.025]
              blur-[130px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-[-180px]
              top-1/2
              h-[400px]
              w-[400px]
              -translate-y-1/2
              rounded-full
              bg-violet-500/[0.02]
              blur-[130px]
            "
          />


          <div className="relative mx-auto max-w-7xl">

            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />

                  <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                    Vision X
                  </span>

                </div>

                <h3
                  className="
                    mt-5
                    text-4xl
                    font-medium
                    tracking-[-0.055em]
                    md:text-6xl
                  "
                >
                  Digital systems
                  <span className="text-white/25">
                    {' '}for what comes next.
                  </span>
                </h3>

              </div>


              <div className="max-w-xs">

                <p className="text-sm leading-6 text-white/35">
                  Strategy. Technology. Creative. Growth.
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/20">
                  Vision X / VX-001
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section
          className="
            relative
            overflow-hidden
            border-t
            border-white/10
            bg-[#050505]
            px-6
            py-28
            md:px-8
            md:py-36
          "
        >

          {/* Background glow */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-150px]
              top-1/2
              h-[450px]
              w-[450px]
              -translate-y-1/2
              rounded-full
              bg-white/[0.025]
              blur-[140px]
            "
          />


          <div
            className="
              pointer-events-none
              absolute
              left-[30%]
              top-[20%]
              h-[300px]
              w-[300px]
              rounded-full
              bg-cyan-400/[0.015]
              blur-[120px]
            "
          />


          <div className="relative mx-auto max-w-7xl">

            <div className="max-w-4xl">


              {/* FINAL SIGNAL */}

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-8 bg-white/25" />

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-white/35
                  "
                >
                  Vision X / Final Signal
                </p>

              </div>


              {/* HEADING */}

              <h2
                className="
                  text-5xl
                  font-medium
                  leading-[0.95]
                  tracking-[-0.06em]
                  md:text-7xl
                "
              >

                Let's build

                <br />

                <span className="text-white/30">
                  something meaningful.
                </span>

              </h2>


              {/* DESCRIPTION */}

              <p
                className="
                  mt-7
                  max-w-xl
                  text-base
                  leading-7
                  text-white/40
                  md:text-lg
                "
              >
                Have a brand, product or digital system that needs to move
                forward? Let's build what comes next.
              </p>


              {/* CTA */}

              <div className="mt-10">

                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-white
                    px-7
                    py-4
                    text-sm
                    font-medium
                    !text-black
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:bg-white/90
                  "
                >

                  <span className="!text-black">
                    Start a Project
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="
                      !text-black
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </Link>

              </div>


              {/* BRAND FOOTNOTE */}

              <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3">

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                  VISION X
                </span>

                <span className="h-3 w-px bg-white/10" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Digital Growth
                </span>

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Creative Technology
                </span>

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Performance
                </span>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  )
}

export default Home