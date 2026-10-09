import { lazy, Suspense, useState } from 'react'
import { ArrowDown, ArrowUpRight, Mail, MessageCircle, Play } from 'lucide-react'
import { motion, MotionConfig } from 'framer-motion'
import { Link } from 'react-router-dom'

import SEO from '../components/seo/SEO'
import SelectedWork from '../components/sections/SelectedWork'
import ServicesShowcase from '../components/sections/ServicesShowcase'
import IndustriesShowcase from '../components/sections/IndustriesShowcase'
import CinematicOpening from '../components/sections/CinematicOpening'
import VisitorJourney from '../components/sections/VisitorJourney'
import ViewportGate from '../components/three/ViewportGate'
import FeaturedCapabilities from '../components/sections/FeaturedCapabilities'
import HomeInsights from '../components/sections/HomeInsights'
import { PUBLIC_EMAIL, WHATSAPP_URL } from '../data/contact'

const HeroScene = lazy(() => import('../components/three/HeroScene'))
const ExperienceIntro = lazy(() => import('../components/sections/ExperienceIntro'))

const pilotWord = {
  hidden: { opacity: 0.15, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

function Home() {
  const [introOpen, setIntroOpen] = useState(false)

  return (
    <MotionConfig reducedMotion="user">
    <>
      <CinematicOpening />
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
          onPointerMove={(event) => {
            if (event.pointerType !== 'mouse') return
            const bounds = event.currentTarget.getBoundingClientRect()
            event.currentTarget.style.setProperty('--pointer-x', `${(event.clientX - bounds.left) / bounds.width}`)
            event.currentTarget.style.setProperty('--pointer-y', `${(event.clientY - bounds.top) / bounds.height}`)
          }}
          className="
            noise
            home-hero
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

          <ViewportGate className="home-hero-scene pointer-events-none absolute inset-0 z-0">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </ViewportGate>


          {/* =======================================================
              FUTURE ATMOSPHERE
          ======================================================= */}

          <div
            className="
              home-hero-atmosphere
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
              bg-[radial-gradient(circle_at_70%_60%,rgba(227,93,115,0.045),transparent_30%)]
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
                    Vision X Media
                  </span>

                  <span className="h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />

                </div>

                <span className="h-px w-8 bg-white/20" />

                <span className="text-[9px] uppercase tracking-[0.28em] text-white/30">
                  Independent Digital Studio
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
                  Digital Growth / Creative Technology
                </p>

              </div>


              {/* ===================================================
                  MAIN HEADLINE
              =================================================== */}

              <h1
                className="
                  home-hero-title
                  max-w-5xl
                  text-[clamp(3rem,6vw,6.4rem)]
                  font-medium
                  leading-[0.88]
                  tracking-normal
                "
              >

                <span className="block text-white">
                  BUILD DIGITAL
                </span>

                <span className="block text-white">
                  EXPERIENCES
                </span>

                <span className="block text-white/25">
                  THAT MOVE
                </span>
                <span className="block text-white/35">BRANDS FORWARD.</span>

              </h1>


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

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

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
                    Explore Our Work
                </Link>

                <button
                  type="button"
                  onClick={() => setIntroOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm font-medium text-white/65 transition-colors hover:border-cyan-100/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                >
                  <Play size={15} aria-hidden="true" />
                  Play Intro
                </button>

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

        <VisitorJourney />

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
                    01 / The Pilot
                  </p>

                </div>

                <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Digital Growth Studio
                </p>

              </div>


              {/* RIGHT CONTENT */}

              <div>

                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.7 }}
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.055 } } }}
                  className="
                    pilot-statement
                    max-w-4xl
                    text-3xl
                    font-medium
                    leading-tight
                    tracking-[-0.04em]
                    md:text-5xl
                  "
                >
                  <motion.span variants={pilotWord}>We </motion.span>
                  <motion.span variants={pilotWord}>build </motion.span>
                  <motion.span variants={pilotWord}>digital </motion.span>
                  <motion.span variants={pilotWord}>systems </motion.span>
                  <motion.span variants={pilotWord}>that </motion.span>
                  <motion.span variants={pilotWord}>connect </motion.span>
                  <motion.span variants={pilotWord} className="text-white">creativity, </motion.span>
                  <motion.span variants={pilotWord} className="text-white">technology </motion.span>
                  <motion.span variants={pilotWord} className="text-cyan-100">and growth.</motion.span>
                </motion.h2>

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
        <FeaturedCapabilities />
        <SelectedWork />
        <IndustriesShowcase />
        <HomeInsights />


        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section
          className="
            closing-scene
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
                  06 / Final Scene
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

                READY TO BUILD

                <br />

                <span className="text-white/30">
                  WHAT&apos;S NEXT?
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

              <div className="mt-10 flex flex-wrap gap-3">

                <Link
                  to="/contact"
                  className="
                    group
                    vx-magnetic
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

                <a href={`mailto:${PUBLIC_EMAIL}`} className="vx-magnetic inline-flex items-center gap-2 border border-white/15 px-5 py-4 text-sm text-white/75 transition-colors hover:border-white/35 hover:text-white">
                  <Mail size={16} aria-hidden="true" /> Email Vision X
                </a>

                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="vx-magnetic inline-flex items-center gap-2 border border-white/15 px-5 py-4 text-sm text-white/75 transition-colors hover:border-cyan-100/35 hover:text-white">
                  <MessageCircle size={16} aria-hidden="true" /> WhatsApp
                </a>

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

      {introOpen && (
        <Suspense fallback={<div className="route-loading" role="status">Opening introduction</div>}>
          <ExperienceIntro onClose={() => setIntroOpen(false)} />
        </Suspense>
      )}
    </>
    </MotionConfig>
  )
}

export default Home