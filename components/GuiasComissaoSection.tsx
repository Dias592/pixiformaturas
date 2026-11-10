import Link from 'next/link'
import { getPostBySlug } from '@/lib/blogPosts'
import { GUIAS_ENSINO_MEDIO, GUIAS_GERAIS, type GuiaGrupo } from '@/lib/guiasComissao'

type Props = {
  /** Inclui o grupo de guias específicos de Ensino Médio (home, SP e landing do Ensino Médio). */
  includeEnsinoMedio?: boolean
}

export default function GuiasComissaoSection({ includeEnsinoMedio = false }: Props) {
  const grupos: GuiaGrupo[] = includeEnsinoMedio ? [...GUIAS_GERAIS, GUIAS_ENSINO_MEDIO] : GUIAS_GERAIS

  // Só renderiza guias que existem no blog, para nunca gerar link quebrado.
  const gruposValidos = grupos
    .map((g) => ({ ...g, guias: g.guias.filter((guia) => getPostBySlug(guia.slug)) }))
    .filter((g) => g.guias.length > 0)

  if (gruposValidos.length === 0) return null

  return (
    <section className="bg-bgCard py-16" aria-labelledby="guias-comissao-titulo">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow mb-2">Guias para a comissão</p>
        <h2 id="guias-comissao-titulo" className="mb-4 font-sans text-3xl font-bold">
          Tudo o que a comissão precisa saber para{' '}
          <span className="gold-italic">escolher bem</span>
        </h2>
        <p className="mb-10 max-w-3xl text-textMuted">
          Reunimos em guias objetivos o que comissões e famílias mais perguntam antes de contratar uma empresa
          de formatura: critérios de escolha, comparativos, cláusulas de contrato e cuidados para evitar
          problemas. Todos foram escritos a partir da experiência da Pixi em mais de 500 turmas desde 2015.
        </p>

        <div className="space-y-8">
          {gruposValidos.map((grupo) => (
            <div key={grupo.titulo}>
              <h3 className="mb-3 font-sans text-lg font-bold text-white">{grupo.titulo}</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {grupo.guias.map((guia) => (
                  <li key={guia.slug}>
                    <Link
                      href={`/blog/${guia.slug}/`}
                      className="flex h-full items-center justify-between gap-3 rounded-lg border border-borderC bg-bg p-4 text-sm text-textMuted transition-colors hover:border-gold hover:text-gold"
                    >
                      <span>{guia.label}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-textMuted">
          Prefere ver tudo em um só lugar?{' '}
          <Link href="/blog/" className="text-gold hover:underline">
            Acesse o blog da Pixi Formaturas
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
