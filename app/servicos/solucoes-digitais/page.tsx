import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Soluções Digitais Formatura SP',
  description:
    'Plataformas digitais para entrega e compartilhamento das fotos de formatura com reconhecimento facial e download em alta resolução.',
  path: '/servicos/solucoes-digitais/',
})

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['solucoes-digitais']} />
}
