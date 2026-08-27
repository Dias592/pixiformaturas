import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'

export const metadata: Metadata = {
  title: 'Ensaio Externo de Formatura em SP | Pixi Formaturas',
  description:
    'Ensaio externo de formatura em São Paulo no Museu do Ipiranga (Museu Paulista da USP), locação pública e gratuita com cenário histórico monumental.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/servicos/ensaio-externo/' },
}

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['ensaio-externo']} />
}
