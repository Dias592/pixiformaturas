import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'

export const metadata: Metadata = {
  title: 'Álbum Impresso de Formatura Personalizado SP',
  description:
    'Álbum físico personalizado por turma, com design exclusivo, papel fotográfico de alta qualidade e acabamento premium.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/servicos/album-impresso/' },
}

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['album-impresso']} />
}
