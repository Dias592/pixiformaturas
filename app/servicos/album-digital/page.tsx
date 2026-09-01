import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Álbum Digital de Formatura SP',
  description:
    'Galeria online em alta resolução, entregue em até 30 dias, com link de download e compartilhamento para toda a turma.',
  path: '/servicos/album-digital/',
})

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['album-digital']} />
}
