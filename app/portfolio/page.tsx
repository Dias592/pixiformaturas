import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import PortfolioGalleryFiltered from '@/components/PortfolioGalleryFiltered'

export const metadata: Metadata = {
  title: { absolute: 'Portfólio Fotografia de Formatura SP | Pixi' },
  description:
    'Portfólio da Pixi Formaturas: fotos de formatura escolar e universitária em SP. Fotos de turma, colações de grau, bailes de gala e ensaios.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/portfolio/' },
}

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Portfólio', href: '/portfolio/' }]} />

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow mb-2">Nosso Trabalho</p>
            <h1 className="font-sans text-4xl font-bold md:text-5xl">
              Portfólio de <span className="gold-italic">Fotografia de Formatura</span>
            </h1>
            <p className="mt-4 text-textMuted">
              Confira registros reais de fotografia de formatura escolar e universitária em São
              Paulo: fotos de turma, colação de grau, baile de gala, ensaio externo e sessões em
              estúdio.
            </p>
          </div>

          <PortfolioGalleryFiltered />
        </div>
      </section>

      <CTASection />
    </>
  )
}
