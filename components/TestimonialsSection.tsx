import { TESTIMONIALS, BUSINESS } from '@/lib/constants'
import SchemaOrg from './SchemaOrg'

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BUSINESS.url}/#business`,
  name: BUSINESS.name,
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
}

export default function TestimonialsSection() {
  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-2">Depoimentos</p>
          <h2 className="font-sans text-3xl font-bold md:text-4xl">
            O que dizem <span className="gold-italic">nossos clientes</span>
          </h2>
          <p className="mt-3 text-sm text-textMuted">
            Avaliação média de <strong className="text-gold">5.0 ★</strong> com base em{' '}
            {TESTIMONIALS.length} avaliações de comissões e turmas atendidas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="rounded-lg border border-borderC bg-bgCard p-6">
              <p className="mb-4 text-gold" aria-hidden="true">
                ★★★★★
              </p>
              <p className="mb-4 text-sm text-textMuted">&ldquo;{t.text}&rdquo;</p>
              <p className="text-sm font-bold text-white">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      <SchemaOrg schema={reviewSchema} />
    </section>
  )
}
