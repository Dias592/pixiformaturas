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
  title: 'Empresas de Formatura Faculdade SP | Pixi',
  description:
    'A Pixi Formaturas é empresa de formatura universitária em SP, ABC e Grande SP. Fotografia profissional para colação de grau, baile e álbum digital desde 2015.',
  path: '/empresas-de-formatura-faculdade/',
})

const FAQ_ITEMS = [
  {
    question: 'Quanto custa fotografia de formatura de faculdade em SP?',
    answer:
      'O valor depende do tipo de cerimônia (colação oficial, festiva ou ambas), número de formandos e localização da universidade. A Pixi Formaturas envia orçamento personalizado e sem compromisso pelo WhatsApp — basta informar a faculdade, data e tipo de evento desejado.',
  },
  {
    question: 'A Pixi cobre formaturas fora da capital?',
    answer:
      'Sim. Além de toda a cidade de São Paulo, atendemos faculdades no ABC Paulista (Santo André, São Bernardo, São Caetano, Diadema, Mauá) sem taxa de deslocamento, e também em Guarulhos, Osasco e demais cidades da Grande SP.',
  },
  {
    question: 'Qual a diferença entre colação oficial e festiva?',
    answer:
      'A colação de grau oficial é a cerimônia solene com juramento, outorga de grau e entrega de diploma, realizada pela universidade. A colação festiva é a celebração organizada pela comissão de formatura, geralmente com jantar de gala, baile e festa. A Pixi cobre ambas, juntas ou separadamente.',
  },
  {
    question: 'É possível parcelar a fotografia de formatura universitária?',
    answer:
      'Sim. Oferecemos parcelamento em até 12x no cartão de crédito para facilitar o pagamento pela comissão de formatura. O orçamento é personalizado por turma e tipo de cobertura contratada.',
  },
  {
    question: 'Como funciona o reconhecimento facial nas fotos de formatura?',
    answer:
      'Utilizamos tecnologia de reconhecimento facial que identifica automaticamente cada formando nas fotos. Na galeria online, cada aluno consegue encontrar todas as suas imagens de forma rápida e prática, sem precisar buscar foto por foto manualmente.',
  },
  {
    question: 'A Pixi atende turmas de todos os cursos universitários?',
    answer:
      'Sim. Atendemos formaturas de todos os cursos de graduação e pós-graduação: Medicina, Direito, Engenharia, Administração, Psicologia, Arquitetura, Enfermagem, Pedagogia, entre outros. Cada cobertura é adaptada ao protocolo e às tradições específicas do curso.',
  },
]

export default function EmpresasFormaturaFaculdadePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Formatura de Faculdade', href: '/empresas-de-formatura-faculdade/' },
        ]}
      />

      {/* Hero */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-2">Formatura Universitária</p>
          <h1 className="font-sans text-4xl font-bold md:text-5xl">
            Empresas de Formatura de Faculdade em SP:{' '}
            <span className="gold-italic">Fotografia Profissional para Colação</span>
          </h1>

          <p className="mt-6 text-textMuted">
            A <strong>Pixi Formaturas</strong> é uma empresa de formatura
            especializada em <strong>fotografia de formatura de faculdade</strong>{' '}
            em São Paulo, ABC Paulista e Grande SP desde <strong>2015</strong>.
            Oferecemos cobertura fotográfica completa para{' '}
            <strong>colação de grau</strong> oficial e festiva de todos os cursos
            universitários — de Medicina e Direito a Engenharia, Administração e
            Psicologia. Se você faz parte da comissão de formatura da sua turma e
            busca uma empresa confiável com experiência em cerimônias
            universitárias, fale conosco e receba um orçamento sem compromisso.
          </p>

          <p className="mt-4 text-textMuted">
            Sabemos que a formatura universitária é o encerramento de anos de
            dedicação, noites de estudo e amizades que duram a vida inteira. Por
            isso, tratamos cada <strong>colação de grau</strong> com o mesmo cuidado
            e profissionalismo, independentemente do curso ou do tamanho da turma.
            Nossa equipe já acompanhou centenas de formaturas em faculdades como USP,
            PUC-SP, Mackenzie, FGV, Insper e UFABC, e entendemos que cada curso tem
            suas tradições e seu protocolo — e nós nos adaptamos a todos.
          </p>

          <a
            href={whatsappLink('Olá! Gostaria de um orçamento para formatura de faculdade em SP.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>

          <div className="mt-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="empresas-de-formatura-faculdade-hero" alt="Formandos no palco da colação de grau universitária - Pixi Formaturas" priority />
          </div>
        </div>
      </section>

      {/* Fotografia para todos os cursos */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            A Pixi cobre fotografia de formatura para{' '}
            <span className="gold-italic">quais cursos universitários?</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Cada curso universitário carrega tradições e símbolos próprios que
              tornam a formatura um evento singular. Conhecemos essas
              particularidades e adaptamos nossa cobertura para registrar cada
              detalhe com precisão e sensibilidade.
            </p>
            <p>
              Nos cursos de <strong>Direito</strong>, a beca preta e a toga são
              elementos centrais da cerimônia, junto com o juramento e a entrega do
              grau de bacharel. A fotografia precisa captar a solenidade do momento
              e a força simbólica da vestimenta. Em <strong>Engenharia</strong>, o
              anel de formatura é um dos registros mais valorizados pelos formandos
              — fotografamos em close e em contexto, garantindo que esse símbolo
              esteja presente no álbum.
            </p>
            <p>
              Para cursos de <strong>Administração</strong>, <strong>Psicologia</strong>,{' '}
              <strong>Arquitetura</strong>, <strong>Enfermagem</strong>,{' '}
              <strong>Pedagogia</strong> e <strong>Contabilidade</strong>, nossa
              equipe segue o protocolo específico de cada faculdade, registrando
              desde a entrada dos formandos até o momento final da celebração.
              Também atendemos cursos de <strong>Medicina</strong>,{' '}
              <strong>Odontologia</strong>, <strong>Farmácia</strong> e demais
              cursos da área da saúde, com experiência em cerimônias longas e
              juramentos profissionais.
            </p>
            <p>
              Independentemente do curso, garantimos cobertura completa da{' '}
              <Link href="/servicos/colacao-de-grau/" className="text-gold hover:underline">
                colação de grau
              </Link>{' '}
              com equipamento profissional full-frame, equipe dedicada e galeria
              online com reconhecimento facial.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="my-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="empresas-de-formatura-faculdade-1" alt="Cobertura fotográfica de formatura universitária - Pixi Formaturas" />
          </div>
        </div>
      </section>

      {/* Colação oficial e festiva */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Qual a diferença entre colação de grau{' '}
            <span className="gold-italic">oficial e festiva?</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              A formatura universitária geralmente se divide em dois grandes
              momentos: a <strong>colação de grau oficial</strong> e a{' '}
              <strong>colação festiva</strong>. Embora estejam relacionadas, são
              eventos com dinâmicas completamente diferentes — e a cobertura
              fotográfica precisa se adaptar a cada um.
            </p>
            <p>
              A <strong>colação de grau oficial</strong> é a cerimônia solene
              organizada pela universidade. Inclui a outorga de grau, juramento
              profissional, discursos de paraninfos e homenageados, e a entrega
              individual do diploma. É um momento de formalidade, protocolo rígido e
              emoção contida — e nossa equipe atua com total discrição, utilizando
              lentes de longo alcance e iluminação natural para não interferir na
              cerimônia.
            </p>
            <p>
              Já a{' '}
              <Link href="/servicos/colacao-festiva/" className="text-gold hover:underline">
                colação festiva
              </Link>{' '}
              é a celebração organizada pela comissão de formatura. Pode incluir
              jantar de gala, baile de formatura, shows e homenagens especiais. Aqui,
              a fotografia é mais espontânea e vibrante — capturamos os abraços, as
              danças, os brindes e a alegria de quem conquistou o diploma.
            </p>
            <p>
              Oferecemos pacotes combinados para colação oficial e festiva, com
              condições especiais para turmas que contratam ambos os eventos. A
              comissão de formatura pode escolher o formato que melhor se encaixa no
              orçamento e nas necessidades da turma, com a segurança de que ambos os
              momentos serão registrados com a mesma qualidade profissional.
            </p>
          </div>
        </div>
      </section>

      {/* Universidades atendidas */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Quais universidades e faculdades a Pixi atende em{' '}
            <span className="gold-italic">São Paulo?</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Atendemos turmas de graduação e pós-graduação nas principais
              universidades e faculdades de São Paulo e região metropolitana. Nossa
              experiência inclui cobertura de formaturas em instituições como:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong>USP</strong> — Universidade de São Paulo, com campus na
                Cidade Universitária, Butantã e outros polos.
              </li>
              <li>
                <strong>PUC-SP</strong> — Pontifícia Universidade Católica de São
                Paulo, com campus em Perdizes e Monte Alegre.
              </li>
              <li>
                <strong>Mackenzie</strong> — Universidade Presbiteriana Mackenzie,
                na Consolação e Higienópolis.
              </li>
              <li>
                <strong>FGV</strong> — Fundação Getulio Vargas, referência em
                Administração, Direito e Economia.
              </li>
              <li>
                <strong>Insper</strong> — Instituto de Ensino e Pesquisa, em Vila
                Olímpia.
              </li>
              <li>
                <strong>UFABC</strong> — Universidade Federal do ABC, com campus em
                Santo André e São Bernardo do Campo.
              </li>
              <li>
                <strong>USCS</strong> — Universidade Municipal de São Caetano do
                Sul.
              </li>
              <li>
                <strong>Metodista</strong> — Universidade Metodista de São Paulo, em
                São Bernardo do Campo.
              </li>
              <li>
                <strong>UniABC</strong> — com campus no ABC Paulista, atendida sem
                taxa de deslocamento.
              </li>
              <li>
                <strong>FMABC</strong> — Faculdade de Medicina do ABC, em Santo
                André.
              </li>
            </ul>
            <p>
              Também atendemos UNINOVE, Anhembi Morumbi, FMU, São Judas, UNIP,
              ESPM, Belas Artes e demais instituições de{' '}
              <Link href="/formatura-sao-paulo/" className="text-gold hover:underline">
                São Paulo
              </Link>{' '}
              e do{' '}
              <Link href="/formatura-abc/" className="text-gold hover:underline">
                ABC Paulista
              </Link>
              . Para faculdades no ABC, não cobramos taxa de deslocamento.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bgCard py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="my-8">
            <BlogPhoto seed="empresas-de-formatura-faculdade-2" alt="Grupo de formandos da turma no baile de gala - Pixi Formaturas" />
          </div>
        </div>
      </section>

      {/* Turmas grandes */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Como Funciona a Cobertura para{' '}
            <span className="gold-italic">Turmas Grandes</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Formaturas universitárias frequentemente reúnem turmas com mais de 100
              formandos — e, em alguns casos, mais de 300. A logística fotográfica
              para eventos desse porte exige planejamento, equipe ampliada e
              tecnologia que garanta que nenhum formando fique sem registro.
            </p>
            <p>
              Para turmas grandes, escalamos múltiplos fotógrafos posicionados em
              pontos estratégicos: palco, plateia, bastidores e área de convivência.
              Isso garante cobertura simultânea de diferentes ângulos e momentos,
              sem que a equipe precise se deslocar durante a cerimônia e corra o
              risco de perder registros importantes.
            </p>
            <p>
              A tecnologia de <strong>reconhecimento facial</strong> é especialmente
              valiosa em turmas grandes. Com ela, cada formando encontra suas fotos
              automaticamente na galeria online, sem precisar percorrer centenas de
              imagens. É uma solução que economiza tempo para os formandos e
              demonstra o cuidado da comissão de formatura na escolha do fotógrafo.
              Saiba mais sobre nossas{' '}
              <Link href="/servicos/solucoes-digitais/" className="text-gold hover:underline">
                soluções digitais
              </Link>{' '}
              para fotografia de formatura.
            </p>
            <p>
              Também fazemos o mapeamento prévio do local da cerimônia com a
              comissão, identificando os melhores ângulos, a iluminação disponível e
              os pontos de acesso para a equipe. Esse planejamento antecipado é
              fundamental para garantir uma cobertura fluida e profissional em
              eventos com grande volume de formandos.
            </p>
          </div>
        </div>
      </section>

      {/* Como contratar */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Como Contratar para a{' '}
            <span className="gold-italic">Formatura da Sua Turma</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Contratar a Pixi Formaturas para a formatura da sua faculdade é um
              processo simples e transparente. Trabalhamos diretamente com a
              comissão de formatura para alinhar todos os detalhes e garantir uma
              cobertura que atenda às expectativas da turma.
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-textMuted">
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">01</span>
              <strong>Contato pelo WhatsApp:</strong> a comissão entra em contato
              informando a faculdade, o curso, o número de formandos, a data e o
              tipo de cerimônia desejada (colação oficial, festiva ou ambas).
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">02</span>
              <strong>Orçamento personalizado:</strong> enviamos uma proposta
              detalhada com os serviços incluídos, valores e opções de parcelamento
              em até 12x no cartão de crédito.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">03</span>
              <strong>Reunião de alinhamento:</strong> definimos juntos os detalhes
              de cobertura, protocolo da cerimônia, pontos de atenção e logística do
              dia do evento.
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">04</span>
              <strong>Cobertura e entrega:</strong> no dia, nossa equipe chega com
              antecedência para preparar equipamento e posicionamento. Após o evento,
              as fotos são tratadas profissionalmente e entregues em até 30 dias na
              galeria online com reconhecimento facial por formando.
            </li>
          </ul>
          <a
            href={whatsappLink('Olá! Sou da comissão de formatura da faculdade e gostaria de um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Falar com a Pixi pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Diferenciais Pixi para{' '}
            <span className="gold-italic">Formaturas Universitárias</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-borderC bg-bgCard p-6">
              <span className="chip mb-3 inline-block">Experiência</span>
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                Experiência em cerimônias formais
              </h3>
              <p className="text-sm text-textMuted">
                Desde 2015, cobrimos formaturas universitárias de todos os cursos em
                São Paulo e ABC. Conhecemos o protocolo de cada tipo de cerimônia e
                atuamos com total discrição durante a colação de grau oficial.
              </p>
            </div>
            <div className="rounded-lg border border-borderC bg-bgCard p-6">
              <span className="chip mb-3 inline-block">Cobertura</span>
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                Cobertura no ABC sem taxa
              </h3>
              <p className="text-sm text-textMuted">
                Para faculdades no ABC Paulista — UFABC, FMABC, Metodista, UniABC,
                USCS — não cobramos taxa de deslocamento. Levamos toda a estrutura
                fotográfica sem custo adicional.
              </p>
            </div>
            <div className="rounded-lg border border-borderC bg-bgCard p-6">
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
            <div className="rounded-lg border border-borderC bg-bgCard p-6">
              <span className="chip mb-3 inline-block">Pagamento</span>
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                Parcelamento em até 12x
              </h3>
              <p className="text-sm text-textMuted">
                Facilitamos o pagamento para a comissão de formatura com
                parcelamento em até 12x no cartão de crédito. Orçamento
                personalizado por turma, curso e tipo de cobertura.
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
