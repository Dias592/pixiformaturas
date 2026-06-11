import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSection() {
  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-2">Depoimentos</p>
          <h2 className="font-sans text-3xl font-bold md:text-4xl">
            O que dizem <span className="gold-italic">nossos clientes</span>
          </h2>
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
    </section>
  )
}
