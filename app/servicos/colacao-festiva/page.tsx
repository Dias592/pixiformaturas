import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Colação Festiva e Baile de Gala SP',
  description:
    'Cobertura fotográfica do baile de gala e festa de formatura. Registramos cada emoção com sensibilidade — do jantar à pista de dança.',
  path: '/servicos/colacao-festiva/',
})

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['colacao-festiva']} />
}
