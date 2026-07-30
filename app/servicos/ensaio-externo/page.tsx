import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'

export const metadata: Metadata = {
  title: 'Ensaio Externo de Formatura em SP | Pixi Formaturas',
  description:
    'Ensaio externo de formatura em São Paulo, com fotos ao ar livre em locações como Ibirapuera, Villa-Lobos e Beco do Batman. Luz natural e cenário urbano.',
  alternates: { canonical: 'https://pixiformaturas.com.br/servicos/ensaio-externo/' },
}

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['ensaio-externo']} />
}
