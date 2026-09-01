import type { Metadata } from 'next'
import Link from 'next/link'
import BlogPhoto from '@/components/BlogPhoto'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import SchemaOrg from '@/components/SchemaOrg'
import { whatsappLink } from '@/lib/constants'
import { faqSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Empresa de Formatura em SP | Pixi Formaturas',
  description:
    'A Pixi Formaturas é empresa de formatura em São Paulo, ABC e Grande SP desde 2015. Fotografia escolar e universitária especializada, álbum digital em 30 dias e parcelamento em 12x.',
  path: '/empresa-de-formatura-sp/',
})

const FAQ_ITEMS = [
  {
    question: 'O que uma empresa de formatura faz?',
    answer:
      'Uma empresa de formatura organiza e executa serviços relacionados à cerimônia de formatura, como fotografia, filmagem, convites, decoração e festa. A Pixi Formaturas é uma empresa de formatura especializada exclusivamente em fotografia, oferecendo cobertura completa de fotos de turma, colação de grau, baile de gala, ensaio personalizado e álbum digital.',
  },
  {
    question: 'Quanto custa contratar empresa de formatura em SP?',
    answer:
      'O valor varia conforme o tipo de cobertura, quantidade de alunos e eventos contratados. Na Pixi Formaturas, o orçamento é personalizado e sem compromisso. Oferecemos parcelamento em até 12x sem taxas ocultas. Entre em contato pelo WhatsApp para receber uma proposta detalhada para sua turma.',
  },
  {
    question: 'Qual a diferença entre empresa de formatura e fotógrafo independente?',
    answer:
      'Uma empresa de formatura conta com equipe estruturada, equipamento profissional redundante, galeria online com reconhecimento facial e processos padronizados de entrega. Um fotógrafo independente pode oferecer um trabalho personalizado, mas geralmente não possui a mesma infraestrutura para atender grandes turmas com prazos garantidos.',
  },
  {
    question: 'A Pixi Formaturas atende fora de São Paulo?',
    answer:
      'Sim. Além da capital paulista, atendemos toda a região do ABC Paulista (Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema, Mauá, Ribeirão Pires e Rio Grande da Serra) e cidades da Grande São Paulo como Guarulhos, Osasco, Barueri, Cotia e Taboão da Serra.',
  },
  {
    question: 'Quanto tempo antes da formatura devo contratar?',
    answer:
      'Recomendamos que a comissão de formatura entre em contato com pelo menos 3 meses de antecedência para garantir a data. Para turmas grandes ou eventos em datas concorridas (novembro e dezembro), o ideal é fechar com 6 meses de antecedência.',
  },
  {
    question: 'O álbum digital está incluso no pacote?',
    answer:
      'Sim. Todos os pacotes da Pixi Formaturas incluem o álbum digital com galeria online. As fotos passam por curadoria profissional, tratamento de cor e são organizadas por reconhecimento facial. A entrega é feita em até 30 dias após o evento.',
  },
]

export default function EmpresaDeFormaturaSPPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Empresa de Formatura em SP', href: '/empresa-de-formatura-sp/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-2">Empresa de Formatura SP</p>
          <h1 className="font-sans text-4xl font-bold md:text-5xl">
            Empresa de Formatura em SP: como escolher a melhor para{' '}
            <span className="gold-italic">sua turma</span>
          </h1>

          <p className="mt-6 text-textMuted">
            Contratar a <strong>empresa de formatura</strong> certa é uma das decisões
            mais importantes que a comissão de formatura precisa tomar. A escolha impacta
            diretamente a qualidade dos registros que vão durar para sempre — das fotos de
            turma ao álbum digital da colação de grau. A <strong>Pixi Formaturas</strong>{' '}
            é uma empresa de formatura especializada em{' '}
            <strong>fotografia escolar e universitária em São Paulo</strong>, atuando
            desde <strong>2015</strong> com foco exclusivo em cobertura fotográfica de
            cerimônias de formatura.
          </p>

          <p className="mt-4 text-textMuted">
            Já atendemos <strong>mais de 500 turmas</strong> em escolas públicas e
            particulares na capital paulista, ABC Paulista e Grande SP. Oferecemos álbum
            digital com entrega em até <strong>30 dias</strong>, galeria online com
            reconhecimento facial e parcelamento em até 12x sem taxas ocultas. Se você
            está procurando uma empresa de formatura em SP que priorize qualidade
            fotográfica e transparência, está no lugar certo.
          </p>

          <a
            href={whatsappLink('Olá! Gostaria de um orçamento para fotografia de formatura em SP.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>

          <div className="mt-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="empresa-de-formatura-sp-hero" alt="Formandos celebrando no baile de gala em São Paulo - Pixi Formaturas" priority />
          </div>
        </div>
      </section>

      {/* O que é uma empresa de formatura */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            O que é uma empresa de formatura e{' '}
            <span className="gold-italic">por que contratar uma especializada?</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Uma empresa de formatura é uma prestadora de serviços que atua na
              organização e execução de cerimônias de formatura escolar e universitária.
              Dependendo da empresa, os serviços podem incluir fotografia, filmagem,
              convites, decoração, locação de espaço e organização de festa. Algumas
              empresas oferecem pacotes completos, enquanto outras — como a Pixi
              Formaturas — se especializam em uma área específica para entregar o melhor
              resultado possível.
            </p>
            <p>
              Contratar uma empresa de formatura profissional garante que cada etapa seja
              conduzida por quem entende o protocolo das cerimônias, os prazos de entrega
              e as expectativas das turmas. <strong>Desde 2015</strong>, já registramos{' '}
              <strong>mais de 500 turmas</strong> em São Paulo e região, sempre com equipamento
              profissional full-frame, <strong>equipe treinada</strong> e processos que garantem
              entrega dentro do prazo. Quando a
              comissão escolhe uma empresa de formatura especializada, reduz riscos e
              ganha tranquilidade para curtir a própria formatura.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="my-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="empresa-de-formatura-sp-1" alt="Cobertura fotográfica de formatura em São Paulo - Pixi Formaturas" />
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 font-sans text-3xl font-bold">
            Por que escolher a <span className="gold-italic">Pixi Formaturas</span> como empresa de formatura em SP?
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: '01',
                title: 'Foco exclusivo em fotografia',
                text: 'Não dispersamos energia com festa, convites ou decoração. Toda a nossa operação é dedicada a entregar as melhores fotos de formatura.',
              },
              {
                num: '02',
                title: 'Álbum digital em 30 dias',
                text: 'Após o evento, as fotos passam por curadoria, tratamento de cor e são disponibilizadas na galeria online em até 30 dias.',
              },
              {
                num: '03',
                title: 'Reconhecimento facial',
                text: 'Cada aluno encontra suas fotos automaticamente na galeria online, sem precisar vasculhar centenas de imagens.',
              },
              {
                num: '04',
                title: 'Parcelamento em 12x',
                text: 'Facilitamos o pagamento para a comissão de formatura com parcelamento em até 12 vezes, atendendo escolas públicas e particulares.',
              },
              {
                num: '05',
                title: 'Sem taxas ocultas',
                text: 'O orçamento que apresentamos é o valor final. Sem surpresas, sem cobranças extras no dia do evento.',
              },
              {
                num: '06',
                title: 'Cobertura SP + ABC + Grande SP',
                text: 'Atendemos toda a capital paulista, as 7 cidades do ABC e a Grande São Paulo sem custo adicional de deslocamento.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-lg border border-borderC bg-bgCard p-6"
              >
                <span className="font-display text-2xl text-gold">{item.num}</span>
                <h3 className="mt-2 mb-2 font-bold text-white">{item.title}</h3>
                <p className="text-sm text-textMuted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regiões atendidas */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 font-sans text-3xl font-bold">
            Quais regiões de SP a{' '}
            <span className="gold-italic">Pixi Formaturas</span> atende?
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-borderC bg-bg p-6">
              <h3 className="mb-3 font-bold text-gold">Capital SP</h3>
              <p className="text-sm text-textMuted">
                Atendemos todas as zonas da cidade de São Paulo — Norte, Sul, Leste,
                Oeste e Centro — com cobertura em bairros como Moema, Santana, Tatuapé,
                Pinheiros, Vila Mariana, Itaquera e dezenas de outros.
              </p>
              <Link
                href="/formatura-sao-paulo/"
                className="mt-3 inline-block text-sm text-gold hover:underline"
              >
                Fotografia de formatura em SP &rarr;
              </Link>
            </div>
            <div className="rounded-lg border border-borderC bg-bg p-6">
              <h3 className="mb-3 font-bold text-gold">ABC Paulista</h3>
              <p className="text-sm text-textMuted">
                Cobrimos as 7 cidades do ABC: Santo André, São Bernardo do Campo, São
                Caetano do Sul, Diadema, Mauá, Ribeirão Pires e Rio Grande da Serra.
              </p>
              <Link
                href="/formatura-abc/"
                className="mt-3 inline-block text-sm text-gold hover:underline"
              >
                Formatura no ABC Paulista &rarr;
              </Link>
            </div>
            <div className="rounded-lg border border-borderC bg-bg p-6">
              <h3 className="mb-3 font-bold text-gold">Grande SP</h3>
              <p className="text-sm text-textMuted">
                Além da capital e do ABC, atendemos Guarulhos, Osasco, Barueri, Cotia,
                Taboão da Serra, Itapecerica da Serra, Embu das Artes e outras cidades
                da região metropolitana.
              </p>
              <Link
                href="/formatura-grande-sp/"
                className="mt-3 inline-block text-sm text-gold hover:underline"
              >
                Formatura na Grande São Paulo &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bgCard py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="my-8">
            <BlogPhoto seed="empresa-de-formatura-sp-2" alt="Foto de grupo da turma de formandos - Pixi Formaturas" />
          </div>
        </div>
      </section>

      {/* Tipos de cobertura fotográfica */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 font-sans text-3xl font-bold">
            Tipos de <span className="gold-italic">cobertura fotográfica</span>
          </h2>
          <p className="mb-6 text-textMuted">
            Como empresa de formatura especializada em fotografia, oferecemos cobertura
            para todos os momentos da cerimônia. Cada serviço pode ser contratado
            individualmente ou como parte de um pacote completo para a turma.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                href: '/servicos/fotos-de-turma/',
                title: 'Fotos de Turma',
                desc: 'Registro oficial da turma na escola ou universidade, com fotos individuais e de grupo.',
              },
              {
                href: '/servicos/colacao-de-grau/',
                title: 'Colação de Grau',
                desc: 'Cobertura completa da cerimônia oficial, incluindo entrega de diploma e juramento.',
              },
              {
                href: '/servicos/jantar-baile-de-gala/',
                title: 'Jantar e Baile de Gala',
                desc: 'Fotografias do jantar de formatura e baile, com iluminação profissional para ambientes internos.',
              },
              {
                href: '/servicos/ensaio-personalizado/',
                title: 'Ensaio Personalizado',
                desc: 'Sessão de fotos externa em locações escolhidas pela turma — parques, campus ou pontos turísticos.',
              },
              {
                href: '/servicos/album-digital/',
                title: 'Álbum Digital',
                desc: 'Galeria online com todas as fotos tratadas, reconhecimento facial e download individual por aluno.',
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-lg border border-borderC bg-bgCard p-5 transition hover:border-gold"
              >
                <h3 className="mb-1 font-bold text-white">{service.title}</h3>
                <p className="text-sm text-textMuted">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Como contratar */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 font-sans text-3xl font-bold">
            Como contratar a{' '}
            <span className="gold-italic">Pixi Formaturas</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Solicitar orçamento',
                text: 'Entre em contato pelo WhatsApp ou formulário do site informando a escola, o número de alunos, o tipo de cerimônia e a data prevista. Respondemos em até 24 horas com uma proposta personalizada.',
              },
              {
                step: '02',
                title: 'Reunião com a comissão',
                text: 'Agendamos uma reunião (presencial ou online) com a comissão de formatura para alinhar expectativas, tirar dúvidas e ajustar o pacote conforme a necessidade da turma.',
              },
              {
                step: '03',
                title: 'Cobertura do evento',
                text: 'No dia da cerimônia, nossa equipe chega com antecedência para preparar equipamento e iluminação. Trabalhamos com câmeras full-frame e lentes profissionais para garantir a melhor qualidade.',
              },
              {
                step: '04',
                title: 'Entrega em 30 dias',
                text: 'Após o evento, as fotos passam por curadoria, tratamento de cor e são organizadas com reconhecimento facial. O álbum digital é disponibilizado na galeria online em até 30 dias.',
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="font-display text-3xl text-gold">{item.step}</span>
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-textMuted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href={whatsappLink('Olá! Sou da comissão de formatura e gostaria de um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Falar com a Pixi pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Empresa especializada vs agência completa */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Por que escolher empresa especializada em{' '}
            <span className="gold-italic">fotografia</span>
          </h2>
          <p className="mb-6 text-textMuted">
            Ao procurar uma empresa de formatura em SP, a turma geralmente encontra dois
            modelos: empresas especializadas em um serviço específico (como fotografia) e
            agências que oferecem pacote completo (foto, festa, convite, decoração). Ambas
            têm vantagens, mas a escolha depende da prioridade da comissão. Veja a
            comparação:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-textMuted">
              <thead>
                <tr className="border-b border-borderC">
                  <th className="py-3 pr-4 text-left font-bold text-white">Critério</th>
                  <th className="py-3 pr-4 text-left font-bold text-gold">
                    Empresa Especializada em Foto
                  </th>
                  <th className="py-3 text-left font-bold text-white">
                    Agência de Formatura Completa
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-borderC">
                <tr>
                  <td className="py-3 pr-4 font-medium">Qualidade fotográfica</td>
                  <td className="py-3 pr-4">Alta — foco total em fotografia</td>
                  <td className="py-3">Variável — fotografia é um dos muitos serviços</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Prazo de entrega</td>
                  <td className="py-3 pr-4">Definido e garantido (30 dias)</td>
                  <td className="py-3">Pode variar conforme demanda interna</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Equipamento</td>
                  <td className="py-3 pr-4">Profissional full-frame dedicado</td>
                  <td className="py-3">Pode ser compartilhado entre equipes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Tecnologia</td>
                  <td className="py-3 pr-4">Reconhecimento facial, galeria online</td>
                  <td className="py-3">Nem sempre disponível</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Transparência no preço</td>
                  <td className="py-3 pr-4">Orçamento detalhado por serviço</td>
                  <td className="py-3">Pacote fechado, difícil comparar itens</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Flexibilidade</td>
                  <td className="py-3 pr-4">Contrate apenas o que a turma precisa</td>
                  <td className="py-3">Pacote completo, pode incluir itens desnecessários</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-textMuted">
            Na Pixi Formaturas, acreditamos que a turma merece liberdade para escolher
            cada fornecedor separadamente. Quando nós cuidamos exclusivamente da
            fotografia, entregamos um resultado superior ao de empresas que dividem
            atenção entre dezenas de serviços diferentes.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={FAQ_ITEMS} />

      {/* CTA */}
      <CTASection />

      <SchemaOrg schema={faqSchema(FAQ_ITEMS)} />
    </>
  )
}
