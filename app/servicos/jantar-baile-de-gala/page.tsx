import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Jantar de Gala e Baile Formatura SP',
  description:
    'Registro completo do jantar de gala e do baile de formatura, com fotos espontâneas e posadas que eternizam a festa de encerramento da turma.',
  path: '/servicos/jantar-baile-de-gala/',
})

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['jantar-baile-de-gala']} />
}
