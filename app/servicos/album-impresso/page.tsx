import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Álbum Impresso de Formatura SP',
  description:
    'Álbum físico personalizado por turma, com design exclusivo, papel fotográfico de alta qualidade e acabamento premium.',
  path: '/servicos/album-impresso/',
})

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['album-impresso']} />
}
