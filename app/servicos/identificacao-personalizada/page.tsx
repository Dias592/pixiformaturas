import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Identificação Personalizada Formatura SP',
  description:
    'Tecnologia de reconhecimento facial que identifica automaticamente cada aluno nas fotos, facilitando a busca de imagens individuais na galeria digital.',
  path: '/servicos/identificacao-personalizada/',
})

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['identificacao-personalizada']} />
}
