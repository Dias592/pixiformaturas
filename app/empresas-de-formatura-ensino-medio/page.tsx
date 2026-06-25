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
  title: { absolute: 'Empresas de Formatura Ensino Médio SP | Pixi' },
  description:
    'Empresas de formatura do ensino médio e terceirão em São Paulo. Cobertura fotográfica completa para turmas do 3º ano e 9º ano. Orçamento grátis.',
  alternates: {
    canonical: `${BUSINESS.url}/empresas-de-formatura-ensino-medio/`,
  },
}

const FAQ_ITEMS = [
  {
    question: 'Quanto custa fotógrafo para formatura do ensino médio em SP?',
    answer:
      'O valor varia conforme o tamanho da turma, o tipo de cerimônia e os serviços contratados. Para turmas do terceirão com cobertura de colação e baile, os pacotes partem de valores acessíveis com parcelamento em até 12x. Solicite um orçamento personalizado pelo WhatsApp para receber uma proposta detalhada sem compromisso.',
  },
  {
    question: 'Quando a turma do 3º ano deve começar a organizar?',
    answer:
      'O ideal é que a comissão de formatura do ensino médio comece a organizar pelo menos 4 a 6 meses antes da cerimônia de colação. Isso garante tempo para escolher fornecedores, negociar datas e planejar o Photo Day, o baile e a cobertura completa do evento.',
  },
  {
    question: 'O que está incluso no pacote para Terceirão?',
    answer:
      'Nosso pacote completo para o terceirão inclui cobertura da colação de grau, fotos de turma, Photo Day individual, cobertura do jantar ou baile de gala, galeria online com reconhecimento facial e álbum digital entregue em até 30 dias. Cada item pode ser contratado separadamente conforme a necessidade da turma.',
  },
  {
    question: 'A Pixi atende formatura de escola pública?',
    answer:
      'Sim. Atendemos formaturas de escolas públicas municipais e estaduais em toda a cidade de São Paulo, com condições especiais de pagamento e parcelamento para comissões de formatura do ensino médio da rede pública.',
  },
  {
    question: 'Photo Day é separado do pacote de formatura?',
    answer:
      'O Photo Day pode ser contratado como parte do pacote completo de formatura do ensino médio ou de forma avulsa. No Photo Day, cada aluno recebe uma sessão individual de fotos com cenário e iluminação profissional dentro da própria escola.',
  },
  {
    question: 'Como funciona o álbum digital para turmas grandes?',
    answer:
      'Para turmas grandes do terceirão, utilizamos tecnologia de reconhecimento facial para organizar as fotos por aluno automaticamente. Cada estudante acessa sua galeria individual online e pode baixar suas imagens em alta resolução. A entrega é feita em até 30 dias após o evento.',
  },
]

export default function EmpresasFormaturasEnsinoMedioPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          {
            name: 'Formatura do Ensino Médio',
            href: '/empresas-de-formatura-ensino-medio/',
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-2">Formatura Ensino Médio &middot; Terceirão</p>
          <h1 className="font-sans text-4xl font-bold md:text-5xl">
            Empresas de Formatura do Ensino Médio em São Paulo:{' '}
            <span className="gold-italic">
              Cobertura Completa para o Terceirão
            </span>
          </h1>

          <p className="mt-6 text-textMuted">
            Procurando uma <strong>empresa de formatura do ensino médio</strong>{' '}
            em São Paulo? A <strong>Pixi Formaturas</strong> é especialista em
            cobertura fotográfica completa para turmas do{' '}
            <strong>3º ano</strong>, <strong>9º ano</strong> e{' '}
            <strong>terceirão</strong>. Desde <strong>2015</strong>, registramos
            os momentos mais importantes da vida escolar de milhares de alunos
            na capital paulista — da colação de grau ao baile de gala, passando
            pelo Photo Day e ensaios externos.
          </p>

          <p className="mt-4 text-textMuted">
            Oferecemos pacotes personalizados para cada tipo de cerimônia do
            ensino médio, com galeria online, reconhecimento facial por aluno e
            entrega do álbum digital em até 30 dias. Atendemos escolas públicas
            e particulares em todas as zonas de São Paulo, com parcelamento em
            até 12x para a comissão de formatura.
          </p>

          <a
            href={whatsappLink(
              'Olá! Gostaria de um orçamento para formatura do ensino médio.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>

          <div className="mt-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="empresas-de-formatura-ensino-medio-hero" alt="Turma de formandos do ensino médio reunida para foto - Pixi Formaturas" priority />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            O que a Pixi Formaturas oferece para turmas do{' '}
            <span className="gold-italic">Ensino Médio</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Nossa cobertura para formaturas do ensino médio é pensada para
              registrar cada etapa da celebração — do primeiro ensaio ao último
              brinde do baile. Para o <strong>terceirão</strong>, oferecemos uma
              experiência completa que começa com as{' '}
              <Link
                href="/servicos/fotos-de-turma/"
                className="text-gold hover:underline"
              >
                fotos de turma
              </Link>{' '}
              ainda no ambiente escolar, passa pela{' '}
              <Link
                href="/servicos/colacao-de-grau/"
                className="text-gold hover:underline"
              >
                colação de grau
              </Link>{' '}
              e culmina na cobertura do{' '}
              <Link
                href="/servicos/jantar-baile-de-gala/"
                className="text-gold hover:underline"
              >
                jantar e baile de gala
              </Link>
              .
            </p>
            <p>
              Para turmas do <strong>3º ano</strong>, incluímos o Photo Day —
              uma sessão fotográfica individual com cenário profissional montado
              na escola —, além de ensaios externos em locações como parques e
              pontos icônicos de São Paulo. Já para o{' '}
              <strong>terceirão</strong>, a cobertura ganha proporções maiores,
              com equipe ampliada e estrutura completa de iluminação para
              buffets e espaços de eventos.
            </p>
            <p>
              Cada serviço pode ser contratado individualmente ou como parte de
              um pacote completo para a formatura do ensino médio. Nós nos
              adaptamos ao planejamento e ao orçamento de cada comissão de
              formatura.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="my-8 overflow-hidden rounded-lg">
            <BlogPhoto seed="empresas-de-formatura-ensino-medio-1" alt="Cobertura fotográfica de formatura do ensino médio - Pixi Formaturas" />
          </div>
        </div>
      </section>

      {/* Por que cobertura profissional */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Por que a formatura do Ensino Médio merece{' '}
            <span className="gold-italic">cobertura profissional</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              A formatura do ensino médio é, para muitas famílias, o marco mais
              importante da vida escolar. É o momento em que anos de dedicação,
              amizades e aprendizados se transformam em uma celebração
              inesquecível. Por isso, registrar esse dia com qualidade
              profissional não é um luxo — é uma forma de preservar memórias
              que vão durar para sempre.
            </p>
            <p>
              Desde <strong>2015</strong>, já fotografamos mais de{' '}
              <strong>200 turmas do ensino médio</strong> em São Paulo. Sabemos
              que a cerimônia de colação do terceirão tem uma emoção diferente —
              as famílias se emocionam, os professores homenageados choram, e os
              alunos celebram o fim de um ciclo e o início de outro. Nossa
              equipe é treinada para captar exatamente esses momentos de forma
              discreta e artística.
            </p>
            <p>
              Além do fator emocional, há razões práticas. Fotos tiradas com
              celular em ambientes de baixa iluminação — como auditórios e
              salões de festas — resultam em imagens tremidas e escuras.
              Trabalhamos com equipamento full-frame, lentes luminosas e flash
              profissional que garantem nitidez e cores reais em qualquer
              condição de luz.
            </p>
          </div>
        </div>
      </section>

      {/* 9º ano vs 3º ano */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Cobertura para o 9º Ano e para o{' '}
            <span className="gold-italic">3º Ano do Ensino Médio</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Entendemos que a formatura do <strong>9º ano</strong> e a do{' '}
              <strong>3º ano do ensino médio</strong> têm dinâmicas diferentes,
              e adaptamos nossa cobertura para cada uma delas.
            </p>
            <p>
              A formatura do 9º ano costuma ser uma cerimônia mais íntima,
              realizada no próprio ambiente escolar, com a presença de
              familiares e professores. Nesse caso, focamos nas fotos de turma,
              nos momentos de entrega de diploma e nas interações espontâneas
              entre alunos e educadores. O{' '}
              <Link
                href="/servicos/photo-day/"
                className="text-gold hover:underline"
              >
                Photo Day
              </Link>{' '}
              é um complemento muito procurado para essa faixa, pois oferece
              retratos individuais de alta qualidade para cada aluno.
            </p>
            <p>
              Já a formatura do <strong>terceirão</strong> é um evento de maior
              escala. Além da colação de grau — muitas vezes realizada em
              auditórios ou espaços externos à escola —, há o baile de gala ou
              jantar dançante, que exige uma cobertura fotográfica mais robusta.
              Nesses eventos, nossa equipe é ampliada para garantir que nenhum
              momento passe despercebido: a entrada dos formandos, os discursos,
              as homenagens, a pista de dança e os registros de mesa.
            </p>
            <p>
              Independentemente do tipo de cerimônia, todas as fotos são
              disponibilizadas na galeria online com reconhecimento facial,
              permitindo que cada aluno e família encontrem suas imagens
              facilmente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bgCard py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="my-8">
            <BlogPhoto seed="empresas-de-formatura-ensino-medio-2" alt="Formandos do terceirão comemorando na festa - Pixi Formaturas" />
          </div>
        </div>
      </section>

      {/* Escolas atendidas */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Escolas que já atendemos em{' '}
            <span className="gold-italic">São Paulo</span>
          </h2>
          <div className="space-y-4 text-textMuted">
            <p>
              Ao longo de quase uma década, a Pixi Formaturas já atendeu
              centenas de escolas na capital paulista. Trabalhamos com{' '}
              <strong>escolas públicas</strong> municipais e estaduais,{' '}
              <strong>escolas particulares</strong> de pequeno e grande porte e{' '}
              <strong>escolas técnicas</strong> (ETECs e institutos federais).
            </p>
            <p>
              Nossa atuação cobre todas as zonas de São Paulo: Zona Norte
              (Santana, Tucuruvi, Tremembé), Zona Sul (Moema, Santo Amaro,
              Interlagos), Zona Leste (Tatuapé, Penha, Itaquera), Zona Oeste
              (Pinheiros, Butantã, Lapa) e Centro (Liberdade, Bela Vista, Sé).
              Levamos toda a estrutura fotográfica até o local do evento, sem
              custo adicional de deslocamento dentro da cidade.
            </p>
            <p>
              Cada escola tem sua cultura e sua forma de celebrar o ensino
              médio. Algumas preferem cerimônias tradicionais com beca e canudo;
              outras optam por formatos mais descontraídos. Nós nos adaptamos ao
              estilo de cada instituição, sempre respeitando o protocolo e as
              orientações da coordenação.{' '}
              <Link
                href="/formatura-sao-paulo/"
                className="text-gold hover:underline"
              >
                Veja mais sobre nossa cobertura em São Paulo
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Como contratar */}
      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-sans text-3xl font-bold">
            Como contratar para a formatura do{' '}
            <span className="gold-italic">Terceirão</span>
          </h2>
          <p className="mb-6 text-textMuted">
            Contratar a cobertura fotográfica para a formatura do ensino médio
            com a Pixi Formaturas é simples. O processo funciona em quatro
            etapas:
          </p>
          <ul className="space-y-3 text-textMuted">
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">01</span>
              <div>
                <strong>Contato inicial:</strong> a comissão de formatura entra
                em contato pelo WhatsApp ou formulário do site informando a
                escola, a série (3º ano ou 9º ano), o número de alunos e a data
                prevista da cerimônia.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">02</span>
              <div>
                <strong>Proposta personalizada:</strong> enviamos um orçamento
                detalhado com os serviços recomendados para o tipo de evento,
                incluindo opções de parcelamento em até 12x.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">03</span>
              <div>
                <strong>Planejamento:</strong> após a aprovação, alinhamos o
                cronograma de Photo Day, ensaios e cobertura da cerimônia
                diretamente com a comissão e a coordenação da escola.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-display text-gold">04</span>
              <div>
                <strong>Cobertura e entrega:</strong> no dia do evento, nossa
                equipe realiza a cobertura completa. Em até 30 dias, as fotos
                são entregues na galeria online com reconhecimento facial.
              </div>
            </li>
          </ul>
          <a
            href={whatsappLink(
              'Olá! Quero contratar fotografia para a formatura do terceirão.'
            )}
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
          <h2 className="mb-8 font-sans text-3xl font-bold">
            Diferencial Pixi para o{' '}
            <span className="gold-italic">Ensino Médio</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-borderC bg-bgCard p-6">
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                Photo Day Exclusivo
              </h3>
              <p className="text-sm text-textMuted">
                Sessão fotográfica individual para cada aluno do ensino médio,
                com cenário e iluminação profissional montados na própria
                escola. Retratos que viram recordação para a vida toda.
              </p>
            </div>
            <div className="rounded-lg border border-borderC bg-bgCard p-6">
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                Álbum em 30 Dias
              </h3>
              <p className="text-sm text-textMuted">
                Entregamos o álbum digital completo do terceirão em até 30
                dias após o evento. Todas as fotos passam por curadoria
                profissional e tratamento de cor.
              </p>
            </div>
            <div className="rounded-lg border border-borderC bg-bgCard p-6">
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                Reconhecimento Facial
              </h3>
              <p className="text-sm text-textMuted">
                Tecnologia de reconhecimento facial que organiza as fotos por
                aluno automaticamente. Cada formando acessa sua galeria
                individual e baixa suas imagens em alta resolução.
              </p>
            </div>
            <div className="rounded-lg border border-borderC bg-bgCard p-6">
              <h3 className="mb-2 font-sans text-lg font-bold text-white">
                Parcelamento 12x
              </h3>
              <p className="text-sm text-textMuted">
                Facilitamos o pagamento para a comissão de formatura do ensino
                médio com parcelamento em até 12 vezes. Condições especiais
                para escolas públicas e turmas grandes.
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
