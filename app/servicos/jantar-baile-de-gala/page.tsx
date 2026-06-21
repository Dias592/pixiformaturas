import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'

export const metadata: Metadata = {
  title: 'Jantar de Gala e Baile Formatura SP',
  description:
    'Registro completo do jantar de gala e do baile de formatura, com fotos espontâneas e posadas que eternizam a festa de encerramento da turma.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/servicos/jantar-baile-de-gala/' },
}

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['jantar-baile-de-gala']} />
}
