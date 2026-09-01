import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Pré-Eventos de Formatura em SP',
  description:
    'Cobertura fotográfica de pré-eventos da formatura, como chá de turma, encontros da comissão e celebrações que antecedem a colação de grau.',
  path: '/servicos/pre-eventos/',
})

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['pre-eventos']} />
}
