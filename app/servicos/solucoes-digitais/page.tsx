import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'

export const metadata: Metadata = {
  title: 'Soluções Digitais para Fotografia de Formatura SP',
  description:
    'Plataformas digitais completas para entrega, organização e compartilhamento das fotos de formatura, integradas com reconhecimento facial e download em alta resolução.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/servicos/solucoes-digitais/' },
}

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['solucoes-digitais']} />
}
