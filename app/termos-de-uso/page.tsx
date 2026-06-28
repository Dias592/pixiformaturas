import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de Uso do site da Pixi Formaturas - fotografia de formatura escolar em São Paulo.',
  alternates: { canonical: 'https://pixiformaturas.com.br/termos-de-uso/' },
  robots: { index: false, follow: true },
}

export default function TermosDeUsoPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: 'Home', href: '/' }, { name: 'Termos de Uso', href: '/termos-de-uso/' }]}
      />
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-6 font-sans text-4xl font-bold">
            Termos de <span className="gold-italic">Uso</span>
          </h1>
          <div className="space-y-4 text-textMuted">
            <p>
              Ao acessar o site da {BUSINESS.name}, você concorda com os termos descritos
              abaixo. Caso não concorde, recomendamos não utilizar este site.
            </p>
            <h2 className="pt-4 text-lg font-bold text-white">Uso do Conteúdo</h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, imagens e marca, é de propriedade da
              {' '}{BUSINESS.name} e não pode ser reproduzido sem autorização prévia.
            </p>
            <h2 className="pt-4 text-lg font-bold text-white">Solicitações de Orçamento</h2>
            <p>
              Os orçamentos solicitados por meio do formulário de contato ou WhatsApp não geram
              compromisso de contratação até a formalização de um contrato entre as partes.
            </p>
            <h2 className="pt-4 text-lg font-bold text-white">Disponibilidade do Site</h2>
            <p>
              Buscamos manter o site sempre disponível e atualizado, mas não garantimos
              funcionamento ininterrupto e isento de falhas.
            </p>
            <h2 className="pt-4 text-lg font-bold text-white">Contato</h2>
            <p>
              Dúvidas sobre estes termos podem ser enviadas para{' '}
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
