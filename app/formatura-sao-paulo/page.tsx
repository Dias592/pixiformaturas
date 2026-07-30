import type { Metadata } from 'next'
import Link from 'next/link'
import BlogPhoto from '@/components/BlogPhoto'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import SchemaOrg from '@/components/SchemaOrg'
import { BUSINESS, whatsappLink } from '@/lib/constants'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'Fotografia de Formatura em São Paulo' },
  description:
    'Fotógrafo de formatura escolar e universitária em São Paulo. Atendemos todas as zonas: Norte, Sul, Leste, Oeste e Centro. Orçamento grátis.',
  alternates: { canonical: `${BUSINESS.url}/formatura-sao-paulo/` },
}

const FAQ_ITEMS = [
  {
    question: 'Vocês atendem em todas as zonas de São Paulo?',
    answer:
      'Sim. A Pixi Formaturas atende escolas e universidades em todas as zonas da cidade de São Paulo — Norte, Sul, Leste, Oeste e Centro —, incluindo bairros como Santana, Tatuapé, Moema, Pinheiros, Vila Mariana e Itaquera.',
  },
  {
    question: 'Qual o prazo de entrega das fotos de formatura em SP?',
    answer:
      'Entregamos o álbum digital com galeria online em até 30 dias após o evento. As fotos passam por curadoria profissional, tratamento de cor e reconhecimento facial por aluno.',
  },
  {
    question: 'Vocês fotografam formaturas de escolas públicas em São Paulo?',
    answer:
      'Sim. Atendemos escolas públicas municipais e estaduais em toda a capital paulista, com condições e parcelamento especiais para comissões de formatura de escolas da rede pública.',
  },
  {
    question: 'Como funciona o orçamento de fotografia de formatura em SP?',
    answer:
      'O orçamento é personalizado por escola, turma e tipo de evento. Basta entrar em contato pelo WhatsApp ou formulário do site informando a escola, data e tipo de cerimônia que enviamos uma proposta detalhada sem compromisso.',
  },
]

export default function FormaturaSaoPauloPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Formatura São Paulo', href: '/formatura-sao-paulo/' },
        ]}
      />

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-2">Fotografia de Formatura na Capital</p>
          <h1 className="font-sans text-4xl font-bold md:text-5xl">
            Fotografia de Formatura em{' '}
            <span className="gold-italic">São Paulo</span>
          </h1>

          <p className="mt-6 text-textMuted">
            A <strong>Pixi Formaturas</strong> é uma empresa especializada em{' '}
            <strong>fotografia de formatura escolar e universitária</strong> em{' '}
            <strong>São Paulo</strong>, atuando em todas as zonas da capital — Norte,
            Sul, Leste, Oeste e Centro — desde <strong>2015</strong>. Com equipamento
            profissional full-frame, galeria online com reconhecimento facial e
            entrega em até 30 dias, somos a escolha de dezenas de escolas públicas e
            particulares na maior cidade do Brasil.
          </p>

          <div className="mt-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="formatura-sao-paulo-hero" alt="Ensaio fotográfico de formandos em São Paulo - Pixi Formaturas" priority />
          </div>
        </div>
      </section>

      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Serviços de Formatura em{' '}
            <span className="gold-italic">São Paulo</span>
          </h2>
          <p className="text-textMuted">
            Oferecemos cobertura fotográfica completa para todos os tipos de
            cerimônia de formatura na capital paulista. Desde as{' '}
            <Link href="/servicos/fotos-de-turma/" className="text-gold hover:underline">
              fotos de turma
            </Link>{' '}
            na escola até a{' '}
            <Link href="/servicos/colacao-de-grau/" className="text-gold hover:underline">
              colação de grau
            </Link>{' '}
            em universidades como USP, Mackenzie, PUC-SP, UNINOVE e FMU, passamos
            por{' '}
            <Link href="/servicos/ensaio-externo/" className="text-gold hover:underline">
              ensaios externos
            </Link>{' '}
            no Museu do Ipiranga, e{' '}
            <Link href="/servicos/jantar-baile-de-gala/" className="text-gold hover:underline">
              bailes de gala
            </Link>{' '}
            em buffets e espaços de eventos por toda a cidade. Cada pacote é
            personalizado conforme a necessidade da turma e da comissão.
          </p>
        </div>
      </section>

      <section className="bg-bg py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="my-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="formatura-sao-paulo-1" alt="Cobertura fotográfica de formatura em São Paulo - Pixi Formaturas" />
          </div>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Zonas e Bairros <span className="gold-italic">Atendidos</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Atuamos em todas as cinco zonas de São Paulo. Na{' '}
              <strong>Zona Sul</strong>, cobrimos bairros como Moema, Santo Amaro,
              Campo Belo, Jabaquara, Capela do Socorro e Interlagos — confira nosso
              guia sobre{' '}
              <Link href="/blog/fotografo-formatura-zona-sul-sp/" className="text-gold hover:underline">
                fotógrafo de formatura na Zona Sul
              </Link>
              . Na <strong>Zona Norte</strong>, atendemos Santana, Tucuruvi,
              Tremembé, Vila Guilherme e Jaçanã. Na <strong>Zona Leste</strong>,
              estamos presentes em Tatuapé, Penha, Itaquera, São Mateus e Guaianases.
              Na <strong>Zona Oeste</strong>, cobrimos Pinheiros, Butantã, Lapa,
              Perdizes e Vila Sônia. E no <strong>Centro</strong>, atendemos
              República, Liberdade, Bela Vista e Sé.
            </p>
            <p>
              Levamos toda a estrutura fotográfica até o local do evento, sem
              custo adicional de deslocamento dentro da cidade de São Paulo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Por que Escolher a{' '}
            <span className="gold-italic">Pixi Formaturas</span> em SP
          </h2>
          <ul className="space-y-3 text-textMuted">
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">01</span>
              Especialização exclusiva em formaturas — conhecemos o protocolo de
              cada tipo de cerimônia escolar e universitária.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">02</span>
              Galeria online com reconhecimento facial, facilitando a busca de
              fotos por aluno.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">03</span>
              Parcelamento em até 12x para a comissão de formatura, atendendo
              escolas públicas e particulares.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">04</span>
              Entrega do{' '}
              <Link href="/servicos/album-digital/" className="text-gold hover:underline">
                álbum digital
              </Link>{' '}
              em até 30 dias, com tratamento profissional e curadoria de imagens.
            </li>
          </ul>
          <a
            href={whatsappLink('Olá! Gostaria de um orçamento para formatura em São Paulo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-bg py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="my-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="formatura-sao-paulo-2" alt="Formandos na pista de dança do baile de gala em SP - Pixi Formaturas" />
          </div>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Como Funciona o <span className="gold-italic">Processo</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              O processo começa com o contato da comissão de formatura pelo WhatsApp
              ou formulário do site. Entendemos o tipo de cerimônia, a escola, o
              número de alunos e a data do evento. Em seguida, enviamos um orçamento
              personalizado sem compromisso.
            </p>
            <p>
              No dia do evento, nossa equipe chega com antecedência para preparar
              equipamento e iluminação. Após a cobertura, as fotos passam por
              curadoria, tratamento de cor e são disponibilizadas na galeria online
              com reconhecimento facial. Saiba mais sobre nossos{' '}
              <Link href="/servicos/" className="text-gold hover:underline">
                serviços completos de fotografia de formatura
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FAQSection items={FAQ_ITEMS} />

      <CTASection />

      <SchemaOrg schema={faqSchema(FAQ_ITEMS)} />
    </>
  )
}
