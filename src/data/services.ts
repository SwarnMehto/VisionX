export type ServiceItem = {
  number: string
  title: string
  description: string
  href: string
  tags: string[]
}

export type ServiceCategory = {
  id: string
  number: string
  title: string
  description: string
  services: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'digital-experiences',
    number: '01',
    title: 'Digital Experiences',
    description:
      'High-performance digital experiences designed to make brands easier to discover, trust and engage with.',
    services: [
      {
        number: '01.01',
        title: 'Website Development',
        description:
          'Modern, responsive and conversion-focused websites built for performance, scalability and search visibility.',
        href: '/services/website-development',
        tags: ['React', 'TypeScript', 'Performance'],
      },
      {
        number: '01.02',
        title: 'E-commerce Development',
        description:
          'Commerce experiences designed around product discovery, trust, conversion and measurable growth.',
        href: '/services/ecommerce-development',
        tags: ['E-commerce', 'UX', 'Conversion'],
      },
      {
        number: '01.03',
        title: 'UI/UX & Web Design',
        description:
          'Clear, premium interfaces that combine visual identity, usability and conversion-focused user journeys.',
        href: '/services/ui-ux-web-design',
        tags: ['UI/UX', 'Design', 'Experience'],
      },
    ],
  },

  {
    id: 'search-visibility',
    number: '02',
    title: 'Search & Visibility',
    description:
      'Search strategies built for traditional search, AI discovery, local intent and evolving digital search behaviour.',
    services: [
      {
        number: '02.01',
        title: 'SEO',
        description:
          'Technical, on-page and content SEO designed to improve organic visibility and qualified traffic.',
        href: '/services/seo',
        tags: ['Technical SEO', 'Content', 'Organic Growth'],
      },
      {
        number: '02.02',
        title: 'AEO',
        description:
          'Answer Engine Optimization designed to make useful brand information easier for answer-driven search experiences to surface.',
        href: '/services/aeo',
        tags: ['AEO', 'Answers', 'Content'],
      },
      {
        number: '02.03',
        title: 'GEO',
        description:
          'Generative Engine Optimization focused on clear, structured and authoritative brand information for AI discovery.',
        href: '/services/geo',
        tags: ['GEO', 'AI Search', 'Entity'],
      },
      {
        number: '02.04',
        title: 'Local SEO',
        description:
          'Local search optimization including Google Business Profile strategy, location visibility and local discovery.',
        href: '/services/local-seo',
        tags: ['Local SEO', 'GBP', 'Maps'],
      },
    ],
  },

  {
    id: 'performance-marketing',
    number: '03',
    title: 'Performance Marketing',
    description:
      'Paid acquisition systems built around measurable traffic, leads, conversions and business outcomes.',
    services: [
      {
        number: '03.01',
        title: 'Google Ads',
        description:
          'Search and performance campaigns designed to reach high-intent audiences and generate qualified opportunities.',
        href: '/services/google-ads',
        tags: ['Google Ads', 'PPC', 'Leads'],
      },
      {
        number: '03.02',
        title: 'Meta Ads',
        description:
          'Creative-led campaigns across Meta platforms designed for discovery, demand generation and conversions.',
        href: '/services/meta-ads',
        tags: ['Meta Ads', 'Creative', 'Growth'],
      },
      {
        number: '03.03',
        title: 'Lead Generation',
        description:
          'Landing pages, campaigns and conversion systems designed to turn attention into qualified leads.',
        href: '/services/lead-generation',
        tags: ['Leads', 'Funnels', 'Conversion'],
      },
    ],
  },

  {
    id: 'creative-brand',
    number: '04',
    title: 'Creative & Brand',
    description:
      'Visual systems and content that create consistency, recognition and stronger digital communication.',
    services: [
      {
        number: '04.01',
        title: 'Branding',
        description:
          'Brand identity systems built around positioning, visual language and memorable digital presence.',
        href: '/services/branding',
        tags: ['Identity', 'Strategy', 'Brand'],
      },
      {
        number: '04.02',
        title: 'Graphic Design',
        description:
          'Campaign creatives, marketing assets and visual communication designed for digital-first brands.',
        href: '/services/graphic-design',
        tags: ['Creative', 'Design', 'Campaigns'],
      },
      {
        number: '04.03',
        title: 'Social Media',
        description:
          'Content strategy and creative systems designed to build visibility and meaningful audience engagement.',
        href: '/services/social-media',
        tags: ['Social', 'Content', 'Creative'],
      },
    ],
  },

  {
    id: 'creative-technology',
    number: '05',
    title: 'Creative Technology',
    description:
      'Interactive digital experiences combining design, motion, 3D and technology.',
    services: [
      {
        number: '05.01',
        title: '3D Experiences',
        description:
          'Interactive 3D experiences that give websites and digital campaigns a more immersive visual layer.',
        href: '/services/3d-experiences',
        tags: ['3D', 'WebGL', 'Interactive'],
      },
      {
        number: '05.02',
        title: 'Interactive Websites',
        description:
          'Motion-rich websites that use interaction purposefully to improve storytelling and engagement.',
        href: '/services/interactive-websites',
        tags: ['Motion', 'Interaction', 'UX'],
      },
      {
        number: '05.03',
        title: 'Digital Growth Systems',
        description:
          'Connected digital systems that bring websites, marketing, analytics and lead generation together.',
        href: '/services/digital-growth-systems',
        tags: ['Growth', 'Analytics', 'Systems'],
      },
    ],
  },
]