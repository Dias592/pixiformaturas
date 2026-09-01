import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Fotos de Turma de Formatura em SP',
  description:
    'Ensaio fotográfico criativo que captura a união da turma. Ideal para 9º ano e 3º ano do Ensino Médio. Locações internas e externas em SP.',
  path: '/servicos/fotos-de-turma/',
})

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['fotos-de-turma']} />
}
