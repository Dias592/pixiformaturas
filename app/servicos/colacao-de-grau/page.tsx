import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Fotógrafo Colação de Grau SP',
  description:
    'Cobertura fotográfica completa da cerimônia oficial de colação de grau, registrando cada momento solene com discrição e qualidade profissional.',
  path: '/servicos/colacao-de-grau/',
})

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['colacao-de-grau']} />
}
