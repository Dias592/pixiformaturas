import Link from 'next/link'
import Breadcrumbs from './Breadcrumbs'
import CTASection from './CTASection'
import FAQSection from './FAQSection'
import PlaceholderImage from './PlaceholderImage'
import SchemaOrg from './SchemaOrg'
import { whatsappLink } from '@/lib/constants'
import { serviceSchema } from '@/lib/schema'
import type { GalleryImage } from '@/lib/galleryImages'

const INLINE_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g

function renderInline(text: string) {
  const parts: (string | JSX.Element)[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  INLINE_PATTERN.lastIndex = 0
  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <Link key={key++} href={match[2]} className="text-gold underline-offset-2 hover:underline">
        {match[1]}
      </Link>
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

export interface ServicePageData {
  slug: string
  name: string
  h1: string
  intro: string[]
  body: string[]
  extraSection?: { title: string; text: string }
  included: string[]
  steps: { title: string; text: string }[]
  faqs: { question: string; answer: string }[]
  testimonial: { name: string; text: string }
  galleryAlts: string[]
  galleryImages?: GalleryImage[]
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const schema = serviceSchema(data.slug, data.name, data.intro.join(' '))

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Serviços', href: '/servicos/' },
          { name: data.name, href: `/servicos/${data.slug}/` },
        ]}
      />

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow mb-2">Serviço</p>
          <h1 className="font-sans text-4xl font-bold md:text-5xl">{data.h1}</h1>

          <div className="mt-6 space-y-4 text-textMuted">
            {data.intro.map((p, i) => (
              <p key={i} className="text-lg text-white">
                {p}
              </p>
            ))}
            {data.body.map((p, i) => (
              <p key={i}>{renderInline(p)}</p>
            ))}
          </div>

          <a href={whatsappLink(`Olá! Gostaria de um orçamento para ${data.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
            SOLICITAR ORÇAMENTO GRÁTIS ⊕
          </a>
        </div>
      </section>

      {data.extraSection && (
        <section className="bg-bg py-4">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-4 font-sans text-3xl font-bold">{data.extraSection.title}</h2>
            <p className="text-textMuted">{data.extraSection.text}</p>
          </div>
        </section>
      )}

      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            O que está <span className="gold-italic">incluso</span>
          </h2>
          <ul className="space-y-3">
            {data.included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-textMuted">
                <span className="mt-1 text-gold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Como <span className="gold-italic">funciona</span>
          </h2>
          <ol className="space-y-6">
            {data.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-3xl font-bold text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-textMuted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 font-sans text-3xl font-bold">
            Galeria de <span className="gold-italic">{data.name}</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {data.galleryImages
              ? data.galleryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: `${img.width} / ${img.height}` }}
                    className="w-full self-center rounded-lg object-cover"
                  />
                ))
              : data.galleryAlts.map((alt, i) => (
                  <PlaceholderImage key={i} alt={alt} aspect="aspect-square" className="w-full" />
                ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-lg border border-borderC bg-bgCard p-8">
            <p className="mb-4 text-gold" aria-hidden="true">
              ★★★★★
            </p>
            <p className="mb-4 text-textMuted">&ldquo;{data.testimonial.text}&rdquo;</p>
            <p className="font-bold text-white">{data.testimonial.name}</p>
          </div>
        </div>
      </section>

      <FAQSection
        items={data.faqs}
        eyebrow="Dúvidas Sobre o Serviço"
        title="Perguntas"
        highlight="frequentes"
      />

      <CTASection />

      <SchemaOrg schema={schema} />
    </>
  )
}
