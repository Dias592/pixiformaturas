import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaOrg from '@/components/SchemaOrg'
import ContactForm from '@/components/ContactForm'
import { BUSINESS, whatsappLink } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Orçamento Fotografia Formatura SP',
  description:
    'Solicite orçamento de fotografia de formatura escolar com a Pixi Formaturas em SP. Atendemos escolas públicas e particulares. WhatsApp rápido.',
  alternates: { canonical: 'https://pixiformaturas.com.br/contato/' },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contato - Pixi Formaturas',
  url: `${BUSINESS.url}/contato/`,
  about: { '@id': `${BUSINESS.url}/#business` },
}

export default function ContatoPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Contato', href: '/contato/' }]} />

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-2">Orçamento Sem Compromisso</p>
            <h1 className="font-sans text-4xl font-bold md:text-5xl">
              Solicite seu <span className="gold-italic">Orçamento de Fotografia de Formatura</span>
            </h1>
            <p className="mt-4 text-textMuted">
              Conte para a gente sobre a sua escola, turma e tipo de evento e receba um orçamento
              personalizado para fotografia de formatura escolar em São Paulo. Atendemos escolas
              públicas e particulares em todas as zonas, com parcelamento em até 12x.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="rounded-lg border border-borderC bg-bgCard p-6 md:p-8">
              <h2 className="mb-6 font-sans text-xl font-bold text-white">
                Preencha o formulário
              </h2>
              <ContactForm />
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-lg border border-borderC bg-bgCard p-6">
                <h2 className="mb-3 font-sans text-xl font-bold text-white">Fale direto pelo WhatsApp</h2>
                <p className="mb-4 text-sm text-textMuted">
                  Resposta rápida para orçamento de fotógrafo de formatura escolar em São Paulo e
                  Grande SP.
                </p>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
                  SOLICITAR ORÇAMENTO GRÁTIS ⊕
                </a>
              </div>

              <div className="rounded-lg border border-borderC bg-bgCard p-6">
                <h2 className="mb-3 font-sans text-xl font-bold text-white">Outros canais</h2>
                <ul className="space-y-2 text-sm text-textMuted">
                  <li>
                    E-mail:{' '}
                    <a href={`mailto:${BUSINESS.email}`} className="text-gold hover:underline">
                      {BUSINESS.email}
                    </a>
                  </li>
                  <li>
                    Instagram:{' '}
                    <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                      @pixiformaturas
                    </a>
                  </li>
                  <li>Atendimento: Segunda a sexta, 9h às 18h</li>
                  <li>Atuação: São Paulo (todas as zonas) e Grande SP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SchemaOrg schema={contactSchema} />
    </>
  )
}
