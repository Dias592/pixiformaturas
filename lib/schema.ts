import { BUSINESS } from './constants'

export const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService', 'Photographer'],
      '@id': `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
      slogan: 'Empresa de Formatura especializada em Fotografia Escolar e Universitária',
      description:
        'Empresa de formatura especializada em fotografia escolar e universitária em São Paulo, ABC Paulista e Grande SP desde 2015. Cobertura de formaturas do 9º ano, Ensino Médio (Terceirão), colação de grau universitária e cursos de Medicina, Direito e Engenharia. Álbum digital com reconhecimento facial em 30 dias, parcelamento em 12x.',
      url: BUSINESS.url,
      logo: {
        '@type': 'ImageObject',
        url: `${BUSINESS.url}${BUSINESS.logoUrl}`,
      },
      image: `${BUSINESS.url}${BUSINESS.ogImage}`,
      telephone: '+55-11-99896-4797',
      email: BUSINESS.email,
      foundingDate: String(BUSINESS.foundingYear),
      currenciesAccepted: 'BRL',
      paymentAccepted: 'Pix, Cartão de Crédito, Boleto',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      areaServed: [
        { '@type': 'City', name: 'São Paulo' },
        { '@type': 'City', name: 'Santo André' },
        { '@type': 'City', name: 'São Bernardo do Campo' },
        { '@type': 'City', name: 'São Caetano do Sul' },
        { '@type': 'City', name: 'Diadema' },
        { '@type': 'City', name: 'Mauá' },
        { '@type': 'City', name: 'Ribeirão Pires' },
        { '@type': 'City', name: 'Rio Grande da Serra' },
        { '@type': 'City', name: 'Guarulhos' },
        { '@type': 'City', name: 'Osasco' },
        { '@type': 'City', name: 'Mogi das Cruzes' },
        { '@type': 'City', name: 'Suzano' },
        { '@type': 'City', name: 'Barueri' },
        { '@type': 'City', name: 'Carapicuíba' },
        { '@type': 'City', name: 'Cotia' },
        { '@type': 'City', name: 'Taboão da Serra' },
      ],
      sameAs: [BUSINESS.instagram, 'https://www.facebook.com/pixiformaturas/'],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      priceRange: '$$',
      numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 15 },
      knowsAbout: [
        'Fotografia de formatura escolar',
        'Fotografia de formatura universitária',
        'Colação de grau',
        'Baile de gala',
        'Ensaio fotográfico externo',
        'Álbum digital de formatura',
        'Reconhecimento facial em fotos',
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${BUSINESS.url}/#organization`,
      name: BUSINESS.name,
      url: BUSINESS.url,
      logo: { '@type': 'ImageObject', url: `${BUSINESS.url}${BUSINESS.logoUrl}` },
      foundingDate: String(BUSINESS.foundingYear),
      sameAs: [BUSINESS.instagram, 'https://www.facebook.com/pixiformaturas/'],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-11-99896-4797',
        contactType: 'sales',
        areaServed: 'BR',
        availableLanguage: 'Portuguese',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BUSINESS.url}/#website`,
      url: BUSINESS.url,
      name: BUSINESS.name,
      publisher: { '@id': `${BUSINESS.url}/#business` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BUSINESS.url}/blog?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export function serviceSchema(slug: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BUSINESS.url}/servicos/${slug}/#service`,
    name,
    description,
    provider: { '@id': `${BUSINESS.url}/#business` },
    areaServed: { '@type': 'City', name: 'São Paulo' },
    serviceType: 'Fotografia de Formatura Escolar',
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function articleSchema(opts: {
  headline: string
  datePublished: string
  dateModified: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    image: `${BUSINESS.url}${BUSINESS.ogImage}`,
    author: { '@id': `${BUSINESS.url}/#business` },
    publisher: {
      '@id': `${BUSINESS.url}/#business`,
      logo: { '@type': 'ImageObject', url: `${BUSINESS.url}${BUSINESS.logoUrl}` },
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
  }
}
