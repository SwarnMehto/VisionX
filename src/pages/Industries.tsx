import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'

const industries = [
  {
    number: '01',
    title: 'Healthcare',
    description:
      'Digital experiences for clinics, healthcare brands, medical professionals and healthcare businesses.',
    services: ['Web Development', 'Local SEO', 'Lead Generation'],
  },
  {
    number: '02',
    title: 'Education',
    description:
      'Digital platforms designed to improve course discovery, admissions, student enquiries and online visibility.',
    services: ['Web Development', 'SEO', 'Performance Marketing'],
  },
  {
    number: '03',
    title: 'E-Commerce',
    description:
      'Conversion-focused commerce experiences designed around product discovery, trust and measurable growth.',
    services: ['E-Commerce', 'SEO', 'Paid Ads'],
  },
  {
    number: '04',
    title: 'Entertainment & Media',
    description:
      'Creative digital experiences for production companies, music brands, artists and entertainment businesses.',
    services: ['Creative', 'Web', 'Social Media'],
  },
  {
    number: '05',
    title: 'Technology',
    description:
      'Modern digital experiences that communicate technology products, services and solutions clearly.',
    services: ['Web Development', 'UI/UX', 'Digital Growth'],
  },
  {
    number: '06',
    title: 'Local Businesses',
    description:
      'Digital foundations that help local businesses become easier to discover through search and local platforms.',
    services: ['Local SEO', 'Google Ads', 'Lead Generation'],
  },
]

function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve | Vision X"
        description="Vision X builds digital experiences, SEO, performance marketing and growth systems for healthcare, education, e-commerce, entertainment, technology and local businesses."
        canonical="https://www.myvisionx.in/industries"
      />

      <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

        {/* HERO */}

        <section className="relative min-h-[75svh] overflow-hidden px-6 pb-20 pt-36 md:px-8 md:pt-44">

          <div className="pointer-events-none absolute right-[-180px] top-[15%] h-[520px] w-[520px] rounded-full border border-white/[0.04] bg-white/[0.015]" />

          <div className="pointer-events-none absolute right-[12%] top-[32%] h-48 w-48 rounded-full bg-white/[0.04] blur-[100px]" />

          <div className="relative mx-auto flex min-h-[60svh] max-w-7xl items-center">

            <div className="max-w-5xl">

              <p className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-white/35">
                04 / Where We Build
              </p>

              <h1 className="text-[clamp(3.8rem,9vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.075em]">
                Built for
                <br />
                <span className="text-white">
                  business.
                </span>
                <br />
                <span className="text-white/25">
                  Designed to grow.
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
                We create digital experiences and growth systems adapted
                to the needs, audiences and challenges of different
                industries.
              </p>

            </div>

          </div>

        </section>

        {/* INDUSTRIES */}

        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="mb-16">

              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Expertise
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Digital solutions for
                <br />
                <span className="text-white/25">
                  different markets.
                </span>
              </h2>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {industries.map((industry) => (
                <article
                  key={industry.number}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] md:p-10"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs tracking-[0.25em] text-white/25">
                      {industry.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight size={16} />
                    </div>

                  </div>

                  <h3 className="mt-16 text-3xl font-medium tracking-[-0.045em] md:text-4xl">
                    {industry.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/40 md:text-base">
                    {industry.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">

                    {industry.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white/30"
                      >
                        {service}
                      </span>
                    ))}

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* WHY */}

        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">

          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.65fr_1.35fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Our approach
              </p>
            </div>

            <div>

              <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.045em] md:text-5xl">
                Different industries need different digital strategies.
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-7 text-white/40 md:text-lg">
                We adapt the digital experience around the business model,
                audience, search behaviour, conversion journey and growth
                objectives of each project.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="border-t border-white/10 px-6 py-28 md:px-8 md:py-40">

          <div className="mx-auto max-w-7xl">

            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Your industry. Your opportunity.
            </p>

            <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

              <h2 className="max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
                Let&apos;s build your
                <br />
                <span className="text-white/25">
                  digital future.
                </span>
              </h2>

              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium !text-black transition-transform duration-300 hover:scale-105"
              >
                <span className="!text-black">
                  Start a Project
                </span>

                <ArrowUpRight
                  size={17}
                  className="!text-black transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  )
}

export default Industries