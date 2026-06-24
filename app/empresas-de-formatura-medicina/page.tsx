import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import SchemaOrg from '@/components/SchemaOrg'
import { BUSINESS, whatsappLink } from '@/lib/constants'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'Empresas de Formatura Medicina SP | Pixi' },
  description:
    'Fotografia profissional de formatura de Medicina em São Paulo. Cobertura de colação de grau, juramento de Hipócrates e beca branca. Orçamento grátis.',
  alternates: { canonical: `${BUSINESS.url}/empresas-de-formatura-medicina/` },
}

const FAQ_ITEMS = [
  {
    question: 'Quanto custa um fotógrafo de formatura de Medicina em SP?',
    answer:
      'O valor varia conforme o tipo de cerimônia (colação oficial, festiva ou ambas), número de formandos e localização da faculdade. A Pixi Formaturas envia orçamento personalizado e sem compromisso pelo WhatsApp — basta informar a faculdade, data e tipo de evento.',
  },
  {
    question: 'A Pixi cobre formatura na FMABC?',
    answer:
      'Sim. A Pixi Formaturas atende a Faculdade de Medicina do ABC (FMABC), em Santo André, sem taxa de deslocamento. Já cobrimos diversas colações de grau e cerimônias festivas na FMABC e em outras faculdades do ABC Paulista.',
  },
  {
    question: 'Colação oficial e festiva são cobertas separadamente?',
    answer:
      'Podem ser contratadas juntas ou separadamente. A colação de grau oficial é a cerimônia solene com juramento de Hipócrates e entrega de diploma, enquanto a colação festiva inclui jantar de gala e celebração. Oferecemos pacotes combinados com condições especiais.',
  },
  {
    question: 'Com quanto tempo de antecedência devo contratar o fotógrafo para formatura de Medicina?',
    answer:
      'Recomendamos pelo menos 4 a 6 meses de antecedência, pois as formaturas de Medicina costumam ter alta demanda por fotógrafos especializados, especialmente no segundo semestre.',
  },
]

export default function EmpresasFormaturaMedicinaPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Formatura de Medicina', href: '/empresas-de-formatura-medicina/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-2">Formatura de Medicina</p>
          <h1 className="font-sans text-4xl font-bold md:text-5xl">
            Empresas de Formatura de Medicina em{' '}
            <span className="gold-italic">São Paulo</span>
          </h1>

          <p className="mt-6 text-textMuted">
            A <strong>Pixi Formaturas</strong> é especializada em{' '}
            <strong>fotografia de formatura de Medicina</strong> em São Paulo e ABC
            Paulista desde <strong>2015</strong>. Registramos com excelência a{' '}
            <strong>colação de grau</strong> de cursos de Medicina, do juramento de
            Hipócrates à entrega do diploma, com equipe experiente em cerimônias
            longas e protocolos acadêmicos rigorosos. Se você faz parte da comissão
            de formatura de uma turma de Medicina e busca uma empresa de formatura
            com experiência comprovada, fale conosco pelo WhatsApp e receba um
            orçamento personalizado.
          </p>

          <p className="mt-4 text-textMuted">
            A formatura de Medicina é uma das mais tradicionais e emocionantes do
            meio universitário. Com beca branca, juramento solene e uma cerimônia
            que pode durar horas, cada detalhe precisa ser registrado por
            profissionais que entendem a dinâmica desse evento. Na Pixi, já
            acompanhamos dezenas de <strong>colações de grau</strong> de Medicina em
            faculdades como FMABC, USP, Unifesp e Santa Casa — e sabemos que não
            existe espaço para amadorismo nesse momento único.
          </p>

          <a
            href={whatsappLink('Olá! Gostaria de um orçamento para formatura de Medicina em SP.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </section>

      {/* O que torna a formatura de Medicina diferente */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            O que Torna a Formatura de Medicina{' '}
            <span className="gold-italic">Diferente</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              A <strong>colação de grau de Medicina</strong> é uma cerimônia com
              características únicas que a diferenciam de qualquer outra formatura
              universitária. O <strong>juramento de Hipócrates</strong>, momento em
              que os novos médicos se comprometem publicamente com a ética e a
              dedicação à saúde, é o ponto alto da cerimônia e exige registro
              fotográfico preciso e discreto. Diferentemente de outras colações, a
              formatura de Medicina carrega séculos de tradição acadêmica que se
              manifestam em cada etapa do protocolo.
            </p>
            <p>
              A <strong>beca branca</strong> é um dos símbolos mais marcantes da
              formatura de Medicina. Enquanto a maioria dos cursos utiliza beca
              preta, os formandos de Medicina vestem branco — uma referência direta
              ao jaleco e à vocação médica. Esse detalhe visual transforma as fotos
              da <strong>colação de grau</strong> e exige atenção especial à
              iluminação e ao enquadramento por parte do fotógrafo.
            </p>
            <p>
              A duração da cerimônia é outro fator diferencial. Uma{' '}
              <strong>colação de grau</strong> de Medicina costuma durar entre 3 e 5
              horas, com momentos de discurso, homenagens a professores paraninfos,
              juramento coletivo, entrega individual de diploma e, em muitos casos,
              momentos religiosos. A equipe fotográfica precisa estar preparada para
              manter a qualidade e a consistência das imagens ao longo de todo esse
              período, sem interrupções e com total discrição.
            </p>
            <p>
              Além da <strong>colação de grau</strong> oficial, muitas turmas de
              Medicina realizam a colação festiva — um jantar de gala ou baile de
              formatura que celebra a conquista de forma mais descontraída. Na Pixi,
              cobrimos ambos os eventos com a mesma dedicação e atenção aos
              detalhes, garantindo que nenhum momento importante fique sem registro.
              A <strong>colação de grau</strong> de Medicina é, acima de tudo, a
              celebração de anos de estudo intenso e dedicação — e nós tratamos esse
              momento com o respeito que ele merece.
            </p>
          </div>
        </div>
      </section>

      {/* Cobertura fotográfica para colação de Medicina */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Cobertura Fotográfica para{' '}
            <span className="gold-italic">Colação de Medicina</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Nossa cobertura fotográfica para formaturas de Medicina é pensada para
              registrar cada etapa da cerimônia com qualidade profissional e sem
              interferir no protocolo. Utilizamos equipamento full-frame com lentes
              de longo alcance que permitem capturar detalhes à distância — do
              momento do juramento de Hipócrates à expressão de cada formando ao
              receber o diploma.
            </p>
            <p>
              Na cerimônia oficial, registramos a entrada dos formandos com beca
              branca, o juramento de Hipócrates, os discursos dos paraninfos e
              homenageados, a entrega individual do diploma e os momentos de emoção
              com familiares. Cada formando recebe retratos individuais no palco e
              no momento de sua chamada, garantindo que todos tenham fotos pessoais
              de alta qualidade.
            </p>
            <p>
              Também fotografamos os detalhes que tornam a formatura de Medicina
              especial: o anel de formatura, o diploma aberto, a beca e capelo, os
              arranjos florais e a decoração da cerimônia. Esses elementos contam a
              história visual da formatura e complementam o registro das cenas
              principais.
            </p>
            <p>
              Na recepção pós-cerimônia, capturamos os abraços, as fotos com a
              família e os reencontros entre colegas. Oferecemos também a cobertura
              da{' '}
              <Link href="/servicos/colacao-de-grau/" className="text-gold hover:underline">
                colação de grau
              </Link>{' '}
              festiva, com jantar de gala e festa, em pacote combinado com condições
              especiais para turmas de Medicina.
            </p>
          </div>
        </div>
      </section>

      {/* Faculdades de Medicina atendidas */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Faculdades de Medicina Atendidas em{' '}
            <span className="gold-italic">SP e ABC</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Atendemos turmas de Medicina das principais faculdades de São Paulo e
              do ABC Paulista. Nossa experiência inclui cobertura de formaturas em
              instituições como:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>FMABC</strong> — Faculdade de Medicina do ABC, em Santo
                André, uma das mais tradicionais da região metropolitana.
              </li>
              <li>
                <strong>USP</strong> — Faculdade de Medicina da Universidade de São
                Paulo, referência nacional em ensino médico.
              </li>
              <li>
                <strong>Unifesp</strong> — Universidade Federal de São Paulo
                (Escola Paulista de Medicina), com campus em São Paulo e região.
              </li>
              <li>
                <strong>Santa Casa de São Paulo</strong> — Faculdade de Ciências
                Médicas da Santa Casa, no centro da capital.
              </li>
              <li>
                <strong>UniABC</strong> — com campus no ABC Paulista, atendida sem
                taxa de deslocamento.
              </li>
            </ul>
            <p>
              Também atendemos turmas de Medicina de outras instituições da Grande
              São Paulo, como UNINOVE, Anhembi Morumbi e Universidade São Judas.
              Para faculdades no{' '}
              <Link href="/formatura-abc/" className="text-gold hover:underline">
                ABC Paulista
              </Link>
              , não cobramos taxa de deslocamento — levamos toda a estrutura
              fotográfica sem custo adicional.
            </p>
          </div>
        </div>
      </section>

      {/* Como contratar */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Como Contratar para{' '}
            <span className="gold-italic">Formatura de Medicina</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              O processo de contratação da Pixi Formaturas para turmas de Medicina é
              simples e pensado para facilitar a vida da comissão de formatura.
              Seguimos quatro etapas claras:
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-textMuted">
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">01</span>
              <strong>Contato pelo WhatsApp:</strong> a comissão entra em contato
              informando a faculdade, o número de formandos, a data e o tipo de
              cerimônia (oficial, festiva ou ambas).
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">02</span>
              <strong>Orçamento personalizado:</strong> enviamos uma proposta
              detalhada com os serviços incluídos, valores e opções de parcelamento
              em até 12x.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">03</span>
              <strong>Reunião de alinhamento:</strong> definimos juntos os detalhes
              de cobertura, pontos de atenção da cerimônia e logística do dia.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">04</span>
              <strong>Cobertura e entrega:</strong> no dia, nossa equipe chega com
              antecedência para preparar equipamento. Após o evento, as fotos são
              entregues em até 30 dias na galeria online com reconhecimento facial.
            </li>
          </ul>
          <a
            href={whatsappLink('Olá! Sou da comissão de formatura de Medicina e gostaria de um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Falar com a Pixi pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Diferenciais Pixi para{' '}
            <span className="gold-italic">Turmas de Medicina</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-borderC bg-bg p-6">
              <span className="chip mb-3 inline-block">Experiência</span>
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                Especialistas em cerimônias longas
              </h3>
              <p className="text-sm text-textMuted">
                Formaturas de Medicina podem durar mais de 4 horas. Nossa equipe é
                treinada para manter a qualidade e a atenção do início ao fim, com
                equipamento extra e revezamento quando necessário.
              </p>
            </div>
            <div className="rounded-lg border border-borderC bg-bg p-6">
              <span className="chip mb-3 inline-block">Equipe</span>
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                Equipe dedicada por cerimônia
              </h3>
              <p className="text-sm text-textMuted">
                Escalamos fotógrafos exclusivos para cada formatura de Medicina,
                garantindo cobertura completa de todos os ângulos — palco, plateia e
                bastidores — sem perder nenhum momento.
              </p>
            </div>
            <div className="rounded-lg border border-borderC bg-bg p-6">
              <span className="chip mb-3 inline-block">Entrega</span>
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                Álbum digital em 30 dias
              </h3>
              <p className="text-sm text-textMuted">
                Galeria online em alta resolução entregue em até 30 dias, com
                tratamento profissional, curadoria de imagens e reconhecimento
                facial para facilitar a busca por formando.
              </p>
            </div>
            <div className="rounded-lg border border-borderC bg-bg p-6">
              <span className="chip mb-3 inline-block">Deslocamento</span>
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                Sem taxa de deslocamento no ABC
              </h3>
              <p className="text-sm text-textMuted">
                Para faculdades no ABC Paulista — como FMABC e UniABC — não cobramos
                taxa de deslocamento. Levamos toda a estrutura fotográfica sem custo
                adicional para a comissão.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={FAQ_ITEMS} />

      <CTASection />

      <SchemaOrg schema={faqSchema(FAQ_ITEMS)} />
    </>
  )
}
