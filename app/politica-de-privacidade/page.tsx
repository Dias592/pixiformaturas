import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { BUSINESS } from '@/lib/constants'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Política de Privacidade',
    description:
      'Política de Privacidade da Pixi Formaturas - fotografia de formatura escolar em São Paulo.',
    path: '/politica-de-privacidade/',
  }),
  robots: { index: false, follow: true },
}

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Política de Privacidade', href: '/politica-de-privacidade/' },
        ]}
      />
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-6 font-sans text-4xl font-bold">
            Política de <span className="gold-italic">Privacidade</span>
          </h1>
          <div className="space-y-4 text-textMuted">
            <p>
              A {BUSINESS.name} respeita a privacidade de seus clientes e visitantes do site.
              Esta política descreve como coletamos, usamos e protegemos as informações
              fornecidas por meio do nosso site.
            </p>
            <h2 className="pt-4 text-lg font-bold text-white">Coleta de Informações</h2>
            <p>
              Coletamos informações fornecidas voluntariamente por meio do formulário de
              contato, como nome, escola, nível de ensino, data prevista e cidade/bairro, com o
              objetivo exclusivo de elaborar orçamentos de fotografia de formatura.
            </p>
            <h2 className="pt-4 text-lg font-bold text-white">Uso das Informações</h2>
            <p>
              As informações coletadas são utilizadas apenas para contato comercial via
              WhatsApp, e-mail ou telefone, não sendo compartilhadas com terceiros para fins de
              marketing sem consentimento.
            </p>
            <h2 className="pt-4 text-lg font-bold text-white">Cookies e Análise</h2>
            <p>
              Utilizamos o Google Analytics para entender como os visitantes utilizam o site,
              com o objetivo de melhorar a experiência de navegação.
            </p>
            <h2 className="pt-4 text-lg font-bold text-white">Contato</h2>
            <p>
              Em caso de dúvidas sobre esta política, entre em contato pelo e-mail{' '}
              <a href={`mailto:${BUSINESS.email}`} className="text-gold hover:underline">
                {BUSINESS.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
