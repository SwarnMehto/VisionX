import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { serviceCategories } from '../../data/services'
import ServicesScene from '../three/ServicesScene'

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-24 md:px-8 md:py-32"
    >

      {/* 3D visual */}

      <div
        className="pointer-events-none absolute right-[-18%] top-[5%] hidden h-[650px] w-[650px] opacity-70 lg:block"
        aria-hidden="true"
      >
        <ServicesScene />
      </div>

      {/* Ambient glow */}

      <div
        className="pointer-events-none absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-white/[0.025] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}

        <div className="grid gap-10 md:grid-cols-[0.55fr_1.45fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              02 / Services
            </p>
          </div>

          <div>

            <h2 className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] md:text-7xl">
              Digital systems
              <br />

              <span className="text-white/25">
                designed to move
              </span>

              <br />

              brands forward.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45">
              Strategy, technology, search visibility, performance marketing
              and creative technology — connected into one growth system.
            </p>

          </div>

        </div>

        {/* Service Categories */}

        <div className="mt-24">

          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="group/category border-t border-white/10 py-10 md:py-14"
            >

              <div className="grid gap-8 md:grid-cols-[0.25fr_0.55fr_1.2fr]">

                {/* Number */}

                <div>
                  <span className="font-mono text-xs text-white/25">
                    {category.number}
                  </span>
                </div>

                {/* Category */}

                <div>

                  <h3 className="text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl">
                    {category.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/35">
                    {category.description}
                  </p>

                </div>

                {/* Services */}

                <div className="space-y-2">

                  {category.services.map((service) => (
                    <Link
                      key={service.number}
                      to={service.href}
                      className="group block rounded-2xl border border-transparent p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.035] md:p-5"
                    >

                      <div className="flex items-start justify-between gap-6">

                        <div className="min-w-0">

                          <div className="flex items-center gap-3">

                            <span className="font-mono text-[10px] text-white/20">
                              {service.number}
                            </span>

                            <h4 className="text-lg font-medium text-white/75 transition-colors duration-300 group-hover:text-white md:text-xl">
                              {service.title}
                            </h4>

                          </div>

                          <p className="mt-3 max-w-xl text-sm leading-6 text-white/30 transition-colors duration-300 group-hover:text-white/45">
                            {service.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">

                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-white/25 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/40"
                              >
                                {tag}
                              </span>
                            ))}

                          </div>

                        </div>

                        {/* Arrow */}

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/35 transition-all duration-500 group-hover:rotate-45 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">

                          <ArrowUpRight size={16} />

                        </div>

                      </div>

                    </Link>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-16 flex flex-col justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-end">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/25">
              Have a project in mind?
            </p>

            <h3 className="mt-4 max-w-xl text-3xl font-medium tracking-[-0.04em] md:text-4xl">
              Let&apos;s build something
              <span className="text-white/30">
                {' '}worth remembering.
              </span>
            </h3>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="text-black">
              Start a Project
            </span>

            <ArrowUpRight
              size={17}
              className="text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

        </div>

      </div>
    </section>
  )
}

export default ServicesSection