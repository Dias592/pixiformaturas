import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Photo Day de Formatura Escolar em SP',
  description:
    'Um dia inteiro dedicado exclusivamente à turma, com diferentes cenários, looks e poses para criar um álbum completo e diversificado.',
  path: '/servicos/photo-day/',
})

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['photo-day']} />
}
