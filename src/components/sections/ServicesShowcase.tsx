import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Web Development',
    shortTitle: 'Web',
    description:
      'High-performance websites and digital experiences built for speed, conversion, SEO and long-term growth.',
    tags: ['React', 'TypeScript', 'E-Commerce'],
  },
  {
    number: '02',
    title: 'SEO',
    shortTitle: 'Search',
    description:
      'Technical, on-page and local SEO systems designed to improve visibility, rankings and qualified organic traffic.',
    tags: ['Technical SEO', 'Local SEO', 'Content'],
  },
  {
    number: '03',
    title: 'AEO',
    shortTitle: 'Answer',
    description:
      'Structure your brand and content for AI answers, featured results, conversational search and knowledge discovery.',
    tags: ['AI Search', 'Structured Data', 'Content'],
  },
  {
    number: '04',
    title: 'GEO',
    shortTitle: 'Generative',
    description:
      'Generative Engine Optimization strategies that help your business become more discoverable across emerging AI platforms.',
    tags: ['AI Visibility', 'Entity SEO', 'Authority'],
  },
  {
    number: '05',
    title: 'Google & Local Growth',
    shortTitle: 'Local',
    description:
      'Google Business Profile optimization, local search strategy and location-focused campaigns that turn searches into enquiries.',
    tags: ['Google Business', 'Local SEO', 'Maps'],
  },
  {
    number: '06',
    title: 'Performance Marketing',
    shortTitle: 'Ads',
    description:
      'Data-driven Google and Meta advertising campaigns built around leads, sales, acquisition and measurable business outcomes.',
    tags: ['Google Ads', 'Meta Ads', 'Analytics'],
  },
  {
    number: '07',
    title: 'Social Media Marketing',
    shortTitle: 'Social',
    description:
      'Creative social strategies, content systems and campaign management designed to build attention and brand demand.',
    tags: ['Instagram', 'Facebook', 'Content'],
  },
  {
    number: '08',
    title: 'Branding & Creative',
    shortTitle: 'Brand',
    description:
      'Visual identities, campaign creatives and brand systems that make businesses look consistent, distinctive and memorable.',
    tags: ['Identity', 'Graphic Design', 'Campaigns'],
  },
  {
    number: '09',
    title: 'Lead Generation',
    shortTitle: 'Growth',
    description:
      'Landing pages, conversion systems and acquisition funnels designed to turn digital traffic into real business opportunities.',
    tags: ['Landing Pages', 'Funnels', 'CRM'],
  },
  {
    number: '10',
    title: '3D & Creative Technology',
    shortTitle: '3D',
    description:
      'Interactive 3D experiences, motion interfaces and creative technology that give brands a more memorable digital presence.',
    tags: ['3D', 'Motion', 'Interactive'],
  },
]

function ServicesShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 text-white md:py-40">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Section Header */}
        <div className="mb-20 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              What We Do
            </p>

            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-8xl">
              Everything your
              <br />
              <span className="text-white/30">brand needs.</span>
            </h2>
          </div>

          <div className="max-w-md md:ml-auto">
            <p className="text-base leading-7 text-white/50 md:text-lg">
              From strategy and technology to creative and performance,
              Vision X brings the digital systems behind modern brand growth
              together under one roof.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="border-t border-white/10">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative border-b border-white/10"
            >
              <div className="grid gap-6 py-8 transition-all duration-500 md:grid-cols-[80px_1fr_1.1fr_40px] md:items-center md:py-10">
                
                {/* Number */}
                <div className="text-xs tracking-[0.2em] text-white/30">
                  {service.number}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {service.title}
                  </h3>

                  <span className="mt-2 block text-xs uppercase tracking-[0.25em] text-white/25 md:hidden">
                    {service.shortTitle}
                  </span>
                </div>

                {/* Description + Tags */}
                <div className="max-w-xl">
                  <p className="text-sm leading-6 text-white/45 md:text-base">
                    {service.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/35 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex md:justify-end">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-black group-hover:rotate-45">
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-6 text-white/35">
            Need a custom digital growth system? We can combine multiple
            capabilities into one strategy built around your business goals.
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm transition-all duration-300 hover:bg-white hover:text-black"
          >
            Start a Project

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcase