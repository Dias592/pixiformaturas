import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import SchemaOrg from '@/components/SchemaOrg'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'FAQ Fotografia de Formatura SP',
  description:
    'Tire todas as dúvidas sobre fotografia de formatura escolar com a Pixi Formaturas: preços, prazos, o que está incluso, como funciona e muito mais.',
  alternates: { canonical: 'https://pixiformaturas.com.br/faq/' },
}

const FAQ_CATEGORIES = [
  {
    category: 'Sobre a Pixi Formaturas',
    items: [
      {
        question: 'O que é a Pixi Formaturas?',
        answer:
          'A Pixi Formaturas é uma empresa de fotografia escolar especializada exclusivamente em formaturas, atuando em São Paulo desde 2015. Cobrimos fotos de turma, ensaios externos, colação de grau, colação festiva e baile de gala.',
      },
      {
        question: 'A Pixi Formaturas atende escolas públicas e particulares?',
        answer:
          'Sim. Atendemos escolas públicas e particulares em todas as zonas de São Paulo e na Grande SP, com orçamento personalizado para cada escola, turma e pacote.',
      },
      {
        question: 'Quais níveis de ensino vocês atendem?',
        answer:
          'Atendemos formaturas do 9º ano do Ensino Fundamental, do 3º ano do Ensino Médio e colações de grau de cursos universitários e técnicos.',
      },
      {
        question: 'Vocês têm portfólio para eu ver o trabalho de vocês?',
        answer:
          'Sim. Acesse nossa página de Portfólio para ver registros reais de fotos de turma, colação de grau, baile de gala, ensaio externo e estúdio.',
      },
      {
        question: 'A Pixi Formaturas tem avaliações de outras escolas?',
        answer:
          'Sim, temos depoimentos de comissões de formatura de diversas escolas em São Paulo, disponíveis na página inicial e no Google Meu Negócio.',
      },
    ],
  },
  {
    category: 'Orçamento e Pagamento',
    items: [
      {
        question: 'Quanto custa um fotógrafo de formatura em São Paulo?',
        answer:
          'O valor varia conforme o tipo de cobertura, número de eventos, quantidade de fotógrafos e pacote escolhido pela turma. Fazemos um orçamento personalizado por escola, turma e pacote — solicite pelo WhatsApp e receba uma proposta sem compromisso.',
      },
      {
        question: 'Como peço um orçamento de fotografia de formatura?',
        answer:
          'É simples: entre em contato pelo WhatsApp ou preencha o formulário na página de Contato com informações sobre a escola, turma, nível de ensino e data prevista. Nossa equipe retorna com uma proposta personalizada.',
      },
      {
        question: 'É possível parcelar o pagamento da fotografia de formatura?',
        answer:
          'Sim. Facilitamos o pagamento para a comissão de formatura com parcelamento em até 12x no cartão de crédito.',
      },
      {
        question: 'O orçamento é por aluno ou por turma?',
        answer:
          'O orçamento é elaborado de forma personalizada considerando o tamanho da turma, o pacote de serviços escolhido e o número de eventos cobertos.',
      },
      {
        question: 'Existe taxa de deslocamento para escolas na Grande SP?',
        answer:
          'Levamos toda a estrutura fotográfica até o local. Eventuais custos de deslocamento para regiões mais distantes são informados de forma transparente no orçamento.',
      },
    ],
  },
  {
    category: 'Cobertura e Locais',
    items: [
      {
        question: 'A Pixi Formaturas atende fotógrafo de formatura perto de mim?',
        answer:
          'Sim. Atendemos todas as zonas de São Paulo (Sul, Norte, Leste, Oeste e Centro) e a Grande SP, incluindo Guarulhos, Osasco, ABC Paulista, Mogi das Cruzes e região, levando toda a estrutura até o colégio.',
      },
      {
        question: 'Vocês atendem ensaio externo em parques e locações ao ar livre?',
        answer:
          'Sim. O ensaio externo é uma das nossas especialidades, realizado em locações escolhidas junto com a comissão de formatura, como parques, mirantes e espaços urbanos.',
      },
      {
        question: 'É possível fazer o ensaio em estúdio fotográfico?',
        answer:
          'Sim, oferecemos sessões em estúdio fotográfico profissional em São Paulo como opção complementar ou alternativa ao ensaio externo.',
      },
      {
        question: 'Vocês cobrem eventos fora de São Paulo?',
        answer:
          'Atendemos prioritariamente São Paulo e Grande SP. Para eventos em outras cidades, consulte disponibilidade pelo WhatsApp.',
      },
      {
        question: 'A equipe leva todo o equipamento até a escola?',
        answer:
          'Sim. Levamos toda a estrutura fotográfica profissional — câmeras, iluminação e acessórios — até o colégio ou locação escolhida pela turma.',
      },
    ],
  },
  {
    category: 'Entrega e Álbum Digital',
    items: [
      {
        question: 'Qual o prazo de entrega das fotos de formatura?',
        answer:
          'O álbum digital é entregue em até 30 dias após o último evento da formatura, em galeria online de alta resolução com link de download para toda a turma.',
      },
      {
        question: 'Como funciona o álbum digital de formatura?',
        answer:
          'É uma galeria online em alta resolução, organizada por evento, com link de download individual e compartilhamento facilitado para toda a turma e familiares.',
      },
      {
        question: 'O que é o reconhecimento facial nas fotos de formatura?',
        answer:
          'É uma tecnologia que identifica automaticamente cada aluno nas fotos, permitindo que cada formando encontre rapidamente todas as suas imagens na galeria digital, sem precisar procurar foto por foto.',
      },
      {
        question: 'É possível imprimir um álbum físico personalizado?',
        answer:
          'Sim. Oferecemos álbum impresso personalizado por turma, com design exclusivo, papel fotográfico de alta qualidade e acabamento premium.',
      },
      {
        question: 'As fotos ficam disponíveis por quanto tempo na galeria online?',
        answer:
          'A galeria online permanece disponível por um período prolongado após a entrega, garantindo tempo suficiente para toda a turma baixar as fotos em alta resolução.',
      },
    ],
  },
  {
    category: 'Eventos e Cerimônias',
    items: [
      {
        question: 'A Pixi Formaturas faz cobertura discreta em cerimônias religiosas?',
        answer:
          'Sim. Nossa equipe tem experiência em atuação silenciosa e discreta em colações oficiais e cerimônias religiosas, sem interferir no protocolo, utilizando equipamento profissional adequado para ambientes com restrição de flash ou movimentação.',
      },
      {
        question: 'Vocês cobrem o jantar de gala e o baile de formatura?',
        answer:
          'Sim. Realizamos cobertura completa do jantar de gala e do baile de formatura, registrando tanto os momentos formais quanto a festa e a pista de dança.',
      },
      {
        question: 'É possível contratar apenas a colação de grau, sem o baile?',
        answer:
          'Sim. Nossos pacotes são personalizados e podem incluir apenas a cobertura da cerimônia oficial de colação de grau, conforme a necessidade da turma.',
      },
      {
        question: 'Vocês fazem cobertura de pré-eventos, como chá de turma?',
        answer:
          'Sim. Cobrimos pré-eventos memoráveis, como chás de turma, encontros da comissão e celebrações que antecedem a colação de grau.',
      },
      {
        question: 'O Photo Day é um evento separado da cerimônia oficial?',
        answer:
          'Sim. O Photo Day Exclusivo é um dia inteiro dedicado à turma, com diferentes cenários e looks, geralmente realizado em data separada da cerimônia oficial.',
      },
    ],
  },
  {
    category: 'Contratação e Planejamento',
    items: [
      {
        question: 'Com quanto tempo de antecedência devo contratar o fotógrafo de formatura?',
        answer:
          'Recomendamos contratar com pelo menos 3 a 6 meses de antecedência, especialmente para formaturas de fim de ano (outubro a dezembro), quando a agenda se esgota rapidamente.',
      },
      {
        question: 'É possível contratar o fotógrafo em cima da hora?',
        answer:
          'Em alguns casos sim, dependendo da disponibilidade da agenda. Recomendamos entrar em contato o quanto antes para verificarmos a possibilidade.',
      },
      {
        question: 'Como funciona o contrato com a Pixi Formaturas?',
        answer:
          'Após o alinhamento do pacote com a comissão de formatura, formalizamos um contrato com escopo de serviços, datas, condições de pagamento e prazo de entrega.',
      },
      {
        question: 'A comissão de formatura participa do planejamento?',
        answer:
          'Sim. Realizamos uma reunião de alinhamento com a comissão de formatura para definir locações, datas, número de fotógrafos e detalhes do pacote contratado.',
      },
      {
        question: 'Vocês fornecem fotógrafo para eventos de formatura infantil?',
        answer:
          'Nosso foco é em formaturas escolares a partir do 9º ano, mas consulte disponibilidade para eventos de formatura infantil pelo WhatsApp.',
      },
    ],
  },
]

export default function FaqPage() {
  const allItems = FAQ_CATEGORIES.flatMap((cat) => cat.items)
  const schema = faqSchema(allItems)

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'FAQ', href: '/faq/' }]} />

      <section className="bg-bg py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-2">Tire Suas Dúvidas</p>
            <h1 className="font-sans text-4xl font-bold md:text-5xl">
              Perguntas Frequentes sobre <span className="gold-italic">Fotografia de Formatura</span>
            </h1>
          </div>

          <div className="space-y-12">
            {FAQ_CATEGORIES.map((cat) => (
              <div key={cat.category}>
                <h2 className="mb-4 font-sans text-2xl font-bold text-gold">{cat.category}</h2>
                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <details
                      key={i}
                      className="group rounded-lg border border-borderC bg-bgCard p-5"
                    >
                      <summary className="cursor-pointer list-none font-semibold text-textMain marker:content-none">
                        <span className="flex items-center justify-between gap-4">
                          {item.question}
                          <span className="text-gold transition-transform group-open:rotate-45">+</span>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-textMuted">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SchemaOrg schema={schema} />
      <CTASection />
    </>
  )
}
