import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'

export const metadata: Metadata = {
  title: 'Soluções Digitais Formatura SP',
  description:
    'Plataformas digitais para entrega e compartilhamento das fotos de formatura com reconhecimento facial e download em alta resolução.',
  alternates: { canonical: 'https://pixiformaturas.com.br/servicos/solucoes-digitais/' },
}

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['solucoes-digitais']} />
}
