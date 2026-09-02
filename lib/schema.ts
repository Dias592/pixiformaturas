import { BUSINESS, TESTIMONIALS } from './constants'

export const personIvan = {
  '@type': 'Person',
  '@id': `${BUSINESS.url}/#person-ivan`,
  name: 'Ivan Dias',
  givenName: 'Ivan',
  familyName: 'Dias',
  jobTitle: 'Fotógrafo de Formatura e Coordenador Editorial',
  description:
    'Fotógrafo profissional desde 2011 com experiência em mais de 500 turmas de formatura e 700 casamentos em São Paulo. Especialista em cobertura fotográfica de eventos, colação de grau e formatura escolar e universitária.',
  worksFor: { '@id': `${BUSINESS.url}/#business` },
  url: `${BUSINESS.url}/sobre/`,
  image: `${BUSINESS.url}/images/ivan-dias-autor.jpg`,
  sameAs: [
    'https://www.instagram.com/pixiformaturas',
    'https://www.instagram.com/ivandiasfotografo',
    'https://ivandiasfotografo.com.br',
  ],
  knowsAbout: [
    'Fotografia de Formatura',
    'Fotografia Escolar',
    'Colação de Grau',
    'Fotografia de Casamento',
    'Cobertura de Eventos',
    'Baile de Gala',
    'Reconhecimento Facial em Fotografia',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Experiência Profissional',
      name: 'Mais de 14 anos de experiência em fotografia de eventos',
    },
  ],
  knowsLanguage: ['pt-BR'],
  nationality: 'BR',
}

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
      // address: intencionalmente incompleto (só addressLocality + addressRegion + addressCountry).
      // A Pixi opera como home office e não expõe endereço residencial em schema público.
      // Google Rich Results reporta postalCode/streetAddress como recomendados (não obrigatórios) —
      // decisão consciente de privacidade em vez de conformidade total.
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
      sameAs: [
        'https://www.instagram.com/pixiformaturas',
        'https://www.facebook.com/pixiformaturas',
        'https://www.linkedin.com/company/pixi-formaturas',
        'https://www.youtube.com/@pixiformaturas',
        'https://www.tiktok.com/@pixiformaturas',
        'https://www.pinterest.com/pixiformaturas',
        'https://ivandiasfotografo.com.br',
      ],
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: String(TESTIMONIALS.length),
        bestRating: '5',
        worstRating: '1',
      },
      review: TESTIMONIALS.map((t) => ({
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: t.name.split('·')[0].trim() },
        reviewBody: t.text,
      })),
    },
    {
      '@type': 'Organization',
      '@id': `${BUSINESS.url}/#organization`,
      name: BUSINESS.name,
      url: BUSINESS.url,
      logo: { '@type': 'ImageObject', url: `${BUSINESS.url}${BUSINESS.logoUrl}` },
      foundingDate: String(BUSINESS.foundingYear),
      sameAs: [
        'https://www.instagram.com/pixiformaturas',
        'https://www.facebook.com/pixiformaturas',
        'https://www.linkedin.com/company/pixi-formaturas',
        'https://www.youtube.com/@pixiformaturas',
        'https://www.tiktok.com/@pixiformaturas',
        'https://www.pinterest.com/pixiformaturas',
        'https://ivandiasfotografo.com.br',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-11-99896-4797',
        contactType: 'sales',
        areaServed: 'BR',
        availableLanguage: 'Portuguese',
      },
    },
    personIvan,
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
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
    },
    areaServed: { '@type': 'City', name: 'São Paulo' },
    serviceType: 'Fotografia de Formatura Escolar',
  }
}

function stripMarkdown(text: string) {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
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
        text: stripMarkdown(item.answer),
      },
    })),
  }
}

export function howToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Como contratar a Pixi Formaturas para fotografia de formatura',
    description:
      'Processo de contratação da Pixi Formaturas em 4 etapas simples, desde o primeiro contato até a entrega do álbum digital.',
    image: `${BUSINESS.url}/images/og-pixi-formaturas.jpg`,
    totalTime: 'PT30D',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'BRL' },
    supply: [
      { '@type': 'HowToSupply', name: 'Dados da turma e escola' },
      { '@type': 'HowToSupply', name: 'Data do evento' },
      { '@type': 'HowToSupply', name: 'Comissão de formatura organizada' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'WhatsApp para contato' }],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Solicite o orçamento pelo WhatsApp',
        text: 'Entre em contato com a Pixi Formaturas pelo WhatsApp (11) 9.9896-4797 e informe sobre a sua turma, escola e tipo de evento (9º ano, Ensino Médio ou formatura universitária).',
        url: `${BUSINESS.url}/#processo`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Reunião de alinhamento com a comissão',
        text: 'Realizamos reunião com a comissão de formatura para definir os detalhes do pacote fotográfico, datas do evento, locações escolhidas e serviços contratados.',
        url: `${BUSINESS.url}/#processo`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Dia da fotografia com estrutura completa',
        text: 'Nossa equipe de fotógrafos leva todo o equipamento profissional até o colégio, faculdade ou locação escolhida pela turma, com equipamento backup para garantir a cobertura completa.',
        url: `${BUSINESS.url}/#processo`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Álbum digital entregue em até 30 dias',
        text: 'Entregamos o álbum digital em galeria online de alta resolução com reconhecimento facial, permitindo que cada formando acesse suas fotos individualmente e faça download sem cobrança adicional.',
        url: `${BUSINESS.url}/#processo`,
      },
    ],
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

function toIsoBRT(dateStr: string) {
  if (dateStr.includes('T')) return dateStr // já está completo
  return `${dateStr}T09:00:00-03:00`
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
    author: {
      '@type': 'Person',
      '@id': personIvan['@id'],
      name: personIvan.name,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
      logo: { '@type': 'ImageObject', url: `${BUSINESS.url}${BUSINESS.logoUrl}` },
    },
    datePublished: toIsoBRT(opts.datePublished),
    dateModified: toIsoBRT(opts.dateModified),
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
  }
}
