import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
}

function SEO({
  title,
  description,
  canonical,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      {canonical && (
        <link
          rel="canonical"
          href={canonical}
        />
      )}

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
    </Helmet>
  )
}

export default SEO