import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'

export const metadata: Metadata = {
  title: 'Fotos de Turma de Formatura em SP',
  description:
    'Ensaio fotográfico criativo e descontraído que captura a união da turma. Ideal para 9º ano e 3º ano do Ensino Médio. Realizamos em locações internas e externas escolhidas pela turma.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/servicos/fotos-de-turma/' },
}

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['fotos-de-turma']} />
}
