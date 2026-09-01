import type { Metadata } from 'next'
import { BUSINESS } from './constants'

interface PageMetadataOptions {
  title: string
  description: string
  path: string
}

export function pageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const url = `${BUSINESS.url}${path}`

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url,
      siteName: 'Pixi Formaturas',
      title,
      description,
      images: [
        {
          url: BUSINESS.ogImage,
          width: 1200,
          height: 630,
          alt: 'Pixi Formaturas - Fotografia de Formatura Escolar em São Paulo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [BUSINESS.ogImage],
    },
  }
}
