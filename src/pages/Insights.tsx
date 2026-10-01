
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'

const insightCategories = [
  {
    number: '01',
    title: 'SEO',
    description:
      'Practical insights into technical SEO, on-page optimization, content strategy and organic search visibility.',
    tags: ['Technical SEO', 'Content', 'Organic Growth'],
  },
  {
    number: '02',
    title: 'AEO',
    description:
      'Explore how brands can structure useful information for answer-driven search experiences and conversational discovery.',
    tags: ['AEO', 'Answers', 'Search'],
  },
  {
    number: '03',
    title: 'GEO',
    description:
      'Understand how clear entities, structured information and authoritative content can support discovery across generative search experiences.',
    tags: ['GEO', 'AI Search', 'Entities'],
  },
  {
    number: '04',
    title: 'Digital Marketing',
    description:
      'Insights covering Google Ads, Meta Ads, lead generation, conversion systems and digital growth strategies.',
    tags: ['Google Ads', 'Meta Ads', 'Leads'],
  },
  {
    number: '05',
    title: 'Web Development',
    description:
      'Modern approaches to websites, e-commerce, performance, responsive design and interactive digital experiences.',
    tags: ['React', 'TypeScript', 'Performance'],
  },
  {
    number: '06',
    title: 'Growth',
    description:
      'Ideas and frameworks for connecting technology, creative, marketing and analytics into a stronger growth system.',
    tags: ['Strategy', 'Analytics', 'Growth'],
  },
]

const featuredInsights = [
  {
    number: '01',
    category: 'SEO',
    title: 'Building a Search-Ready Digital Foundation',
    description:
      'How website architecture, technical performance, content and user experience work together to support organic visibility.',
  },
  {
    number: '02',
    category: 'AEO',
    title: 'Designing Content for Answer-Driven Search',
    description:
      'A practical look at making important business information clear, structured and useful for people searching for answers.',
  },
  {
    number: '03',
    category: 'GEO',
    title: 'Preparing Your Brand for AI Discovery',
    description:
      'Why consistent brand information, clear entities and useful content matter as digital discovery continues to evolve.',
  },
]

function Insights() {
  return (
    <>
      <SEO
        title="Insights | SEO, AEO, GEO, Digital Marketing & Growth | Vision X"
        description="Explore Vision X insights on SEO, AEO, GEO, web development, digital marketing, performance marketing and digital growth."
        canonical="https://www.myvisionx.in/insights"
      />

      <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

        {/* HERO */}
        <section className="relative min-h-[75svh] overflow-hidden px-6 pb-20 pt-36 md:px-8 md:pt-44">

          <div className="pointer-events-none absolute right-[-180px] top-[15%] h-[520px] w-[520px] rounded-full border border-white/[0.04] bg-white/[0.015]" />

          <div className="pointer-events-none absolute right-[12%] top-[30%] h-48 w-48 rounded-full bg-white/[0.04] blur-[100px]" />

          <div className="relative mx-auto flex min-h-[60svh] max-w-7xl items-center">

            <div className="max-w-5xl">

              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-white/35" />

                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Vision X Insights
                </p>
              </div>

              <h1 className="text-[clamp(3.8rem,9vw,8.5rem)] font-medium leading-[0.84] tracking-[-0.075em]">
                Ideas that
                <br />

                <span className="text-white">
                  move
                </span>{' '}

                <span className="text-white/25">
                  digital
                </span>

                <br />

                growth.
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
                Perspectives on search, technology, creative, performance
                marketing and the systems businesses can use to build a
                stronger digital presence.
              </p>

            </div>

          </div>

        </section>

        {/* FEATURED */}
        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Featured
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Explore the
                <br />

                <span className="text-white/25">
                  thinking.
                </span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              {featuredInsights.map((insight) => (
                <article
                  key={insight.number}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] md:p-8"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs tracking-[0.2em] text-white/25">
                      {insight.number}
                    </span>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-white/35">
                      {insight.category}
                    </span>

                  </div>

                  <h3 className="mt-14 text-2xl font-medium leading-tight tracking-[-0.035em]">
                    {insight.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    {insight.description}
                  </p>

                  <div className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight size={16} />
                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* TOPICS */}
        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="mb-16 grid gap-8 md:grid-cols-[0.65fr_1.35fr]">

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                  Topics
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.045em] md:text-5xl">
                  Digital knowledge across
                  <span className="text-white/25">
                    {' '}search, technology and growth.
                  </span>
                </h2>
              </div>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {insightCategories.map((category) => (
                <Link
                  key={category.number}
                  to={`/insights/${category.title
                    .toLowerCase()
                    .replaceAll(' ', '-')}`}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] md:p-9"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs tracking-[0.2em] text-white/25">
                      {category.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight size={16} />
                    </div>

                  </div>

                  <h3 className="mt-14 text-3xl font-medium tracking-[-0.04em]">
                    {category.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/40 md:text-base">
                    {category.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">

                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-white/30"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </Link>
              ))}

            </div>

          </div>

        </section>

        {/* SEARCH EVOLUTION */}
        <section className="border-t border-white/10 px-6 py-24 md:px-8 md:py-32">

          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.65fr_1.35fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Search evolution
              </p>
            </div>

            <div>

              <h2 className="text-3xl font-medium leading-tight tracking-[-0.045em] md:text-5xl">
                Search is changing.
                <br />

                <span className="text-white/25">
                  Your digital foundation should too.
                </span>
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-7 text-white/40 md:text-lg">
                Modern digital discovery can involve traditional search,
                local search, answer engines and generative experiences.
                Clear information architecture and useful content help
                people understand what a business does and where it fits.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">

                {['SEO', 'AEO', 'GEO'].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                  >
                    <p className="text-lg font-medium">
                      {item}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/35">
                      Structured for modern digital discovery.
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="border-t border-white/10 px-6 py-28 md:px-8 md:py-40">

          <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Have a project?
              </p>

              <h2 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
                Turn ideas
                <br />

                <span className="text-white/25">
                  into growth.
                </span>
              </h2>

            </div>

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

        </section>

      </main>
    </>
  )
}

export default Insights
