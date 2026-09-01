import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import PlaceholderImage from '@/components/PlaceholderImage'
import { SERVICES, whatsappLink } from '@/lib/constants'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Serviços Fotografia de Formatura SP | Pixi Formaturas',
  description:
    'Serviços da Pixi Formaturas: fotos de turma, colação de grau, colação festiva, ensaio externo, baile de gala e álbum digital. Orçamento grátis.',
  path: '/servicos/',
})

export default function ServicosPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Serviços', href: '/servicos/' }]} />

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-2">O Que Fazemos</p>
            <h1 className="font-sans text-4xl font-bold md:text-5xl">
              Serviços de <span className="gold-italic">Fotografia de Formatura Escolar e Universitária</span>
            </h1>
            <p className="mt-4 text-textMuted">
              Pacotes completos para fotografia profissional de formatura escolar e
              universitária, com orçamento personalizado por escola, turma e pacote — do 9º ano
              ao Ensino Superior, em todas as zonas de São Paulo e Grande SP.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col overflow-hidden rounded-lg border border-borderC bg-bgCard"
              >
                <PlaceholderImage
                  alt={`${service.name} - fotografia de formatura em São Paulo - Pixi Formaturas`}
                  aspect="aspect-[4/3]"
                  className="w-full"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-2 font-sans text-lg font-bold text-white">{service.name}</h2>
                  <p className="mb-4 flex-1 text-sm text-textMuted">{service.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link href={`/servicos/${service.slug}/`} className="btn-link text-sm">
                      Saiba mais →
                    </Link>
                    <a
                      href={whatsappLink(`Olá! Gostaria de um orçamento para ${service.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link text-sm"
                    >
                      ORÇAMENTO →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
