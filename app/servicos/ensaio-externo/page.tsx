import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Ensaio Externo de Formatura em SP | Pixi Formaturas',
  description:
    'Ensaio externo de formatura em São Paulo no Museu do Ipiranga (Museu Paulista da USP), locação pública e gratuita com cenário histórico monumental.',
  path: '/servicos/ensaio-externo/',
})

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['ensaio-externo']} />
}
