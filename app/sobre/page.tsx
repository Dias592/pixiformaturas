import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import PlaceholderImage from '@/components/PlaceholderImage'
import { whatsappLink } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sobre a Pixi Formaturas | Especialistas em Fotografia Escolar desde 2015',
  description:
    'Conheça a Pixi Formaturas: especializados em fotografia de formatura escolar em São Paulo desde 2015. Nossa missão é registrar o momento mais importante da vida escolar da sua turma.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/sobre/' },
}

const VALORES = [
  { title: 'Especialização', text: 'Só trabalhamos com formaturas escolares.' },
  {
    title: 'Discrição',
    text: 'Atuação silenciosa em cerimônias oficiais e religiosas.',
  },
  { title: 'Agilidade', text: 'Álbum digital entregue em até 30 dias.' },
  {
    title: 'Parceria',
    text: 'Atendemos a comissão do início ao fim do processo.',
  },
  {
    title: 'Qualidade',
    text: 'Equipamento profissional full-frame em todos os eventos.',
  },
]

const POR_QUE = [
  'Conhecemos o protocolo de cada tipo de cerimônia',
  'Levamos toda a estrutura fotográfica até o local',
  'Galeria online com reconhecimento facial por aluno',
  'Parcelamento facilitado para a comissão',
  'Atendemos escolas públicas e particulares',
]

export default function SobrePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Sobre', href: '/sobre/' }]} />

      <section className="bg-bg py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-2">Quem Somos</p>
            <h1 className="font-sans text-4xl font-bold md:text-5xl">
              Sobre a <span className="gold-italic">Pixi Formaturas</span>
            </h1>

            <div className="mt-6 space-y-4 text-textMuted">
              <p>
                A Pixi Formaturas nasceu em 2015 com uma missão clara: ser a referência em
                fotografia de formatura escolar em São Paulo. Desde o primeiro ano, nos
                especializamos exclusivamente no universo das formaturas escolares — do 9º ano do
                Ensino Fundamental às colações de grau universitárias.
              </p>
              <p>
                Ao longo de quase uma década, construímos parceria com dezenas de escolas
                públicas e particulares em todas as zonas de São Paulo e Grande SP. Conhecemos
                cada detalhe do protocolo das cerimônias, a dinâmica das comissões de formatura e
                o que cada turma precisa para ter registros que durem para sempre.
              </p>
            </div>

            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
              Solicitar Orçamento pelo WhatsApp
            </a>
          </div>

          <PlaceholderImage
            alt="Equipe da Pixi Formaturas - fotografia de formatura escolar em São Paulo"
            aspect="aspect-[4/5]"
            className="w-full"
          />
        </div>
      </section>

      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 font-sans text-3xl font-bold">
            Nossos <span className="gold-italic">valores</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VALORES.map((v) => (
              <div key={v.title} className="rounded-lg border border-borderC bg-bg p-6">
                <h3 className="mb-2 font-bold text-gold">{v.title}</h3>
                <p className="text-sm text-textMuted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Por que somos <span className="gold-italic">escolhidos</span>
          </h2>
          <ul className="space-y-3">
            {POR_QUE.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-textMuted">
                <span className="font-display text-gold">{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  )
}
