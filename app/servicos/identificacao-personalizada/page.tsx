import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'

export const metadata: Metadata = {
  title: 'Identificação Personalizada em Fotos de Formatura SP',
  description:
    'Tecnologia de reconhecimento facial que identifica automaticamente cada aluno nas fotos, facilitando a busca de imagens individuais na galeria digital.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/servicos/identificacao-personalizada/' },
}

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['identificacao-personalizada']} />
}
