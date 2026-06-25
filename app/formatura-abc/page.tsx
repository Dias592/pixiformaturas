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
  title: { absolute: 'Fotografia de Formatura no ABC Paulista' },
  description:
    'Fotógrafo de formatura no ABC: Santo André, São Bernardo, São Caetano, Diadema, Mauá, Ribeirão Pires e Rio Grande da Serra. Orçamento grátis.',
  alternates: { canonical: `${BUSINESS.url}/formatura-abc/` },
}

const FAQ_ITEMS = [
  {
    question: 'Vocês atendem em todas as cidades do ABC Paulista?',
    answer:
      'Sim. Atendemos as sete cidades do ABC: Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema, Mauá, Ribeirão Pires e Rio Grande da Serra, cobrindo escolas públicas, particulares e universidades da região.',
  },
  {
    question: 'Qual o custo de deslocamento para o ABC?',
    answer:
      'Para as cidades do ABC Paulista, o deslocamento está incluso no pacote. Como a região é limítrofe à capital, nossa equipe chega com facilidade a qualquer escola ou buffet do ABC.',
  },
  {
    question: 'Vocês fotografam formaturas universitárias no ABC?',
    answer:
      'Sim. Atendemos colações de grau em universidades do ABC como UFABC, USCS, UniABC, Metodista e FMABC, além de faculdades particulares nas sete cidades da região.',
  },
  {
    question: 'Como funciona a galeria online para escolas do ABC?',
    answer:
      'Após o evento, disponibilizamos uma galeria online com reconhecimento facial, onde cada aluno encontra suas fotos automaticamente. A galeria fica disponível por 90 dias para download individual ou da turma.',
  },
]

export default function FormaturaABCPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Formatura ABC', href: '/formatura-abc/' },
        ]}
      />

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-2">Fotografia de Formatura no ABC</p>
          <h1 className="font-sans text-4xl font-bold md:text-5xl">
            Fotografia de Formatura no{' '}
            <span className="gold-italic">ABC Paulista</span>
          </h1>

          <p className="mt-6 text-textMuted">
            A <strong>Pixi Formaturas</strong> é especializada em{' '}
            <strong>fotografia de formatura escolar e universitária</strong> no{' '}
            <strong>ABC Paulista</strong> — <strong>Santo André</strong>,{' '}
            <strong>São Bernardo do Campo</strong>,{' '}
            <strong>São Caetano do Sul</strong>, <strong>Diadema</strong>,{' '}
            <strong>Mauá</strong>, <strong>Ribeirão Pires</strong> e{' '}
            <strong>Rio Grande da Serra</strong> — desde <strong>2015</strong>.
            Oferecemos cobertura completa com equipamento profissional full-frame,
            galeria online com reconhecimento facial por aluno e entrega em até 30
            dias.
          </p>

          <div className="mt-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="formatura-abc-hero" alt="Cobertura fotográfica da turma de formandos no ABC Paulista - Pixi Formaturas" priority />
          </div>
        </div>
      </section>

      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Cidades do ABC <span className="gold-italic">Atendidas</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Cobrimos formaturas nas sete cidades do ABC Paulista.{' '}
              <strong>Santo André</strong> e <strong>São Bernardo do Campo</strong>,
              as maiores cidades da região, concentram grande número de escolas
              estaduais, municipais e particulares que atendemos regularmente.{' '}
              <strong>São Caetano do Sul</strong>, reconhecida pelo alto IDH e
              excelência educacional, é uma das cidades onde mais atuamos.
            </p>
            <p>
              Também atendemos <strong>Diadema</strong> e <strong>Mauá</strong>,
              cidades com forte presença de escolas públicas e técnicas, além de{' '}
              <strong>Ribeirão Pires</strong> e <strong>Rio Grande da Serra</strong>,
              completando toda a cobertura do Grande ABC. Saiba mais sobre como
              atuamos na{' '}
              <Link href="/formatura-grande-sp/" className="text-gold hover:underline">
                Grande São Paulo
              </Link>{' '}
              e na{' '}
              <Link href="/formatura-sao-paulo/" className="text-gold hover:underline">
                capital paulista
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Escolas e <span className="gold-italic">Universidades</span> no ABC
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Fotografamos formaturas em escolas de todos os níveis no ABC: 9º ano
              do Ensino Fundamental, 3º ano do Ensino Médio e cursos técnicos. Nossos
              serviços incluem{' '}
              <Link href="/servicos/fotos-de-turma/" className="text-gold hover:underline">
                fotos de turma
              </Link>
              ,{' '}
              <Link href="/servicos/colacao-de-grau/" className="text-gold hover:underline">
                colação de grau
              </Link>
              ,{' '}
              <Link href="/servicos/colacao-festiva/" className="text-gold hover:underline">
                colação festiva
              </Link>{' '}
              e{' '}
              <Link href="/servicos/ensaio-externo/" className="text-gold hover:underline">
                ensaio externo
              </Link>
              .
            </p>
            <p>
              No ensino superior, atendemos colações de grau em universidades como
              UFABC, USCS, UniABC, Metodista e Faculdade de Medicina do ABC (FMABC).
              Conhecemos o protocolo de cada instituição e adaptamos nossa atuação
              ao formato de cada cerimônia — das mais formais às celebrações
              descontraídas com{' '}
              <Link href="/servicos/baile-de-gala/" className="text-gold hover:underline">
                baile de gala
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="my-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="formatura-abc-1" alt="Cobertura fotográfica de formatura no ABC Paulista - Pixi Formaturas" />
          </div>
        </div>
      </section>

      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Logística e <span className="gold-italic">Diferenciais</span> no ABC
          </h2>
          <ul className="space-y-3 text-textMuted">
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">01</span>
              Deslocamento incluso para todas as sete cidades do ABC Paulista, sem
              custo adicional no orçamento.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">02</span>
              Equipe com experiência em cerimônias nas principais escolas e
              universidades do ABC desde 2015.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">03</span>
              Parcelamento em até 12x para comissões de formatura, com condições
              especiais para escolas públicas do ABC.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">04</span>
              Entrega do{' '}
              <Link href="/servicos/album-digital/" className="text-gold hover:underline">
                álbum digital
              </Link>{' '}
              em até 30 dias com galeria online e reconhecimento facial por aluno.
            </li>
          </ul>
          <a
            href={whatsappLink('Olá! Gostaria de um orçamento para formatura no ABC Paulista.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-bgCard py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="my-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="formatura-abc-2" alt="Ensaio fotográfico de formandos no ABC - Pixi Formaturas" />
          </div>
        </div>
      </section>

      <FAQSection items={FAQ_ITEMS} />

      <CTASection />

      <SchemaOrg schema={faqSchema(FAQ_ITEMS)} />
    </>
  )
}
