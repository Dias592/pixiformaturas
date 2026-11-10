// Guias exibidos na seção "Guias para a comissão" (home e landings).
// Os rótulos são curtos de propósito: funcionam como texto âncora dos links internos.

export type GuiaLink = { slug: string; label: string }
export type GuiaGrupo = { titulo: string; guias: GuiaLink[] }

export const GUIAS_GERAIS: GuiaGrupo[] = [
  {
    titulo: 'Como escolher e comparar',
    guias: [
      { slug: 'empresa-de-formatura-o-que-e', label: 'O que é uma empresa de formatura' },
      { slug: 'como-escolher-empresa-de-formatura-sp', label: 'Como escolher uma empresa de formatura em SP' },
      { slug: 'empresas-formatura-sao-paulo-comparativo-2026', label: 'Comparativo de empresas de formatura em SP (2026)' },
      { slug: 'empresa-de-formatura-vs-fotografo-independente', label: 'Empresa de formatura ou fotógrafo independente?' },
      { slug: 'empresa-formatura-completa-x-especializada', label: 'Empresa completa ou especializada em fotografia?' },
      { slug: 'empresa-de-formatura-pequena-vs-grande-agencia', label: 'Empresa pequena ou grande agência?' },
      { slug: 'empresa-de-formatura-credenciada', label: 'Empresa de formatura credenciada' },
      { slug: 'empresa-formatura-foco-fotografia', label: 'Empresa de formatura com foco em fotografia' },
    ],
  },
  {
    titulo: 'Contrato, taxas e segurança',
    guias: [
      { slug: 'contrato-empresa-de-formatura-clausulas', label: 'Contrato de empresa de formatura: cláusulas essenciais' },
      { slug: 'erros-contratar-empresa-de-formatura', label: 'Erros comuns ao contratar uma empresa de formatura' },
      { slug: 'empresa-de-formatura-reclamacoes-evitar', label: 'Reclamações de empresas de formatura: como evitar' },
      { slug: 'empresa-formatura-isenta-taxas', label: 'Empresa de formatura isenta de taxas: como funciona' },
    ],
  },
]

export const GUIAS_ENSINO_MEDIO: GuiaGrupo = {
  titulo: 'Formatura do Ensino Médio',
  guias: [
    { slug: 'empresas-de-formatura-ensino-medio-sp-guia', label: 'Guia de empresas de formatura para o Ensino Médio em SP' },
    { slug: 'empresa-formatura-terceirao-sp-completo', label: 'Empresa de formatura para o terceirão em SP' },
    { slug: 'empresas-formatura-ensino-medio-particular-sp', label: 'Empresas de formatura para Ensino Médio particular' },
    { slug: 'fotografia-formatura-ensino-medio-sp-tudo-saber', label: 'Fotografia de formatura no Ensino Médio em SP' },
    { slug: 'contratar-empresa-formatura-ensino-medio-passo-a-passo', label: 'Como contratar uma empresa de formatura do Ensino Médio' },
  ],
}
