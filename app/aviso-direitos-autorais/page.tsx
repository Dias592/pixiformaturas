import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Aviso de Direitos Autorais',
  description: 'Aviso de Direitos Autorais da Pixi Formaturas - fotografia de formatura escolar em São Paulo.',
  alternates: { canonical: 'https://pixiformaturas.com.br/aviso-direitos-autorais/' },
  robots: { index: false, follow: true },
}

export default function AvisoDireitosAutoraisPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Direitos Autorais', href: '/aviso-direitos-autorais/' },
        ]}
      />
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-6 font-sans text-4xl font-bold">
            Aviso de <span className="gold-italic">Direitos Autorais</span>
          </h1>
          <div className="space-y-4 text-textMuted">
            <p>
              Todas as fotografias produzidas pela {BUSINESS.name} são protegidas por direitos
              autorais, conforme a Lei nº 9.610/1998 (Lei de Direitos Autorais).
            </p>
            <h2 className="pt-4 text-lg font-bold text-white">Uso das Imagens</h2>
            <p>
              As fotografias entregues às turmas podem ser utilizadas para fins pessoais e de
              compartilhamento entre familiares e amigos. O uso comercial das imagens, sem
              autorização prévia, é proibido.
            </p>
            <h2 className="pt-4 text-lg font-bold text-white">Portfólio e Divulgação</h2>
            <p>
              A {BUSINESS.name} pode utilizar fotografias realizadas em eventos para fins de
              divulgação do seu portfólio e redes sociais, salvo manifestação em contrário por
              parte da escola ou comissão de formatura.
            </p>
            <h2 className="pt-4 text-lg font-bold text-white">Contato</h2>
            <p>
              Em caso de dúvidas sobre o uso de imagens, entre em contato pelo e-mail{' '}
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
