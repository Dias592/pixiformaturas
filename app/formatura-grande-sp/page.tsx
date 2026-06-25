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
  title: { absolute: 'Fotografia de Formatura na Grande São Paulo' },
  description:
    'Fotógrafo de formatura na Grande SP: Guarulhos, Osasco, Mogi das Cruzes, Barueri, Cotia, Taboão da Serra e mais. Orçamento grátis para escolas.',
  alternates: { canonical: `${BUSINESS.url}/formatura-grande-sp/` },
}

const FAQ_ITEMS = [
  {
    question: 'Vocês atendem em quais cidades da Grande São Paulo?',
    answer:
      'Atendemos Guarulhos, Osasco, Mogi das Cruzes, Barueri, Cotia, Taboão da Serra, Itapevi, Carapicuíba, Suzano, Itaquaquecetuba, Ferraz de Vasconcelos, Arujá, Santana de Parnaíba, entre outras cidades da região metropolitana.',
  },
  {
    question: 'Há custo extra de deslocamento para a Grande SP?',
    answer:
      'Para a maioria das cidades da Grande São Paulo o deslocamento já está incluso no pacote. Em casos de cidades mais distantes da região metropolitana, informamos previamente se haverá algum valor adicional no orçamento.',
  },
  {
    question: 'Vocês atendem escolas públicas na Grande SP?',
    answer:
      'Sim. Atendemos escolas públicas municipais e estaduais em todas as cidades da Grande São Paulo, com parcelamento facilitado e condições especiais para comissões de formatura de escolas da rede pública.',
  },
  {
    question: 'Como contratar o fotógrafo de formatura na Grande SP?',
    answer:
      'Basta entrar em contato pelo WhatsApp ou formulário do site informando a cidade, escola, número de alunos e data do evento. Enviamos um orçamento personalizado sem compromisso em até 24 horas.',
  },
]

export default function FormaturaGrandeSPPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Formatura Grande SP', href: '/formatura-grande-sp/' },
        ]}
      />

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-2">Fotografia de Formatura na Região Metropolitana</p>
          <h1 className="font-sans text-4xl font-bold md:text-5xl">
            Fotografia de Formatura na{' '}
            <span className="gold-italic">Grande São Paulo</span>
          </h1>

          <p className="mt-6 text-textMuted">
            A <strong>Pixi Formaturas</strong> é especializada em{' '}
            <strong>fotografia de formatura escolar e universitária</strong> na{' '}
            <strong>Grande São Paulo</strong>, atendendo cidades como Guarulhos,
            Osasco, Mogi das Cruzes, Barueri, Cotia e Taboão da Serra desde{' '}
            <strong>2015</strong>. Levamos a mesma qualidade e estrutura profissional
            da capital para todas as cidades da região metropolitana, com
            equipamento full-frame, galeria online com reconhecimento facial e
            entrega em até 30 dias.
          </p>

          <div className="mt-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="formatura-grande-sp-hero" alt="Registro fotográfico da turma de formandos na Grande SP - Pixi Formaturas" priority />
          </div>
        </div>
      </section>

      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Cidades <span className="gold-italic">Atendidas</span> na Grande SP
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Nossa equipe atende formaturas em toda a região metropolitana de São
              Paulo. Entre as principais cidades: <strong>Guarulhos</strong> (maior
              cidade da Grande SP, com centenas de escolas públicas e particulares),{' '}
              <strong>Osasco</strong>, <strong>Barueri</strong> e{' '}
              <strong>Santana de Parnaíba</strong> na região oeste;{' '}
              <strong>Mogi das Cruzes</strong>, <strong>Suzano</strong>,{' '}
              <strong>Itaquaquecetuba</strong> e <strong>Ferraz de Vasconcelos</strong>{' '}
              no Alto Tietê; <strong>Cotia</strong>, <strong>Itapevi</strong>,{' '}
              <strong>Carapicuíba</strong> e <strong>Jandira</strong> na região
              sudoeste; e <strong>Taboão da Serra</strong>,{' '}
              <strong>Embu das Artes</strong> e <strong>Itapecerica da Serra</strong>{' '}
              na divisa com a Zona Sul da capital.
            </p>
            <p>
              Se a sua escola fica em alguma dessas cidades ou em outra cidade da
              região metropolitana, entre em contato — provavelmente já atendemos
              na sua região.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Logística e <span className="gold-italic">Deslocamento</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Um dos diferenciais da Pixi Formaturas na Grande SP é a logística
              simplificada. Nossa base fica na capital paulista, o que nos permite
              chegar com rapidez às cidades da região metropolitana. Levamos toda a
              estrutura fotográfica — iluminação, equipamentos de backup e materiais
              — até o local da cerimônia, seja uma escola em Guarulhos, um buffet em
              Osasco ou uma universidade em Mogi das Cruzes.
            </p>
            <p>
              Cobrimos todos os tipos de evento: desde{' '}
              <Link href="/servicos/fotos-de-turma/" className="text-gold hover:underline">
                fotos de turma
              </Link>{' '}
              e{' '}
              <Link href="/servicos/colacao-de-grau/" className="text-gold hover:underline">
                colação de grau
              </Link>{' '}
              até{' '}
              <Link href="/servicos/colacao-festiva/" className="text-gold hover:underline">
                colação festiva
              </Link>{' '}
              e{' '}
              <Link href="/servicos/baile-de-gala/" className="text-gold hover:underline">
                baile de gala
              </Link>
              . Confira todos os nossos{' '}
              <Link href="/servicos/" className="text-gold hover:underline">
                serviços de fotografia de formatura
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bgCard py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="my-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="formatura-grande-sp-1" alt="Cobertura fotográfica de formatura na Grande São Paulo - Pixi Formaturas" />
          </div>
        </div>
      </section>

      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Por que Escolher a{' '}
            <span className="gold-italic">Pixi Formaturas</span> na Grande SP
          </h2>
          <ul className="space-y-3 text-textMuted">
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">01</span>
              Experiência com formaturas em mais de 15 cidades da região
              metropolitana desde 2015.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">02</span>
              Mesma qualidade da capital: equipamento full-frame, tratamento
              profissional e galeria com reconhecimento facial.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">03</span>
              Deslocamento incluso para a maioria das cidades da Grande SP, sem
              surpresas no orçamento.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">04</span>
              Parcelamento em até 12x e condições especiais para escolas públicas
              da região metropolitana. Entrega do{' '}
              <Link href="/servicos/album-digital/" className="text-gold hover:underline">
                álbum digital
              </Link>{' '}
              em até 30 dias.
            </li>
          </ul>
          <a
            href={whatsappLink('Olá! Gostaria de um orçamento para formatura na Grande SP.')}
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
            <BlogPhoto seed="formatura-grande-sp-2" alt="Colação de grau na Grande São Paulo - Pixi Formaturas" />
          </div>
        </div>
      </section>

      <FAQSection items={FAQ_ITEMS} />

      <CTASection />

      <SchemaOrg schema={faqSchema(FAQ_ITEMS)} />
    </>
  )
}
