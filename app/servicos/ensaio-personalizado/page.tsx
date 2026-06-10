import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'

export const metadata: Metadata = {
  title: 'Ensaio Personalizado de Formatura em SP',
  description:
    'Ensaio fotográfico personalizado para a turma, com conceito e locação definidos junto à comissão de formatura, criando um registro único e autêntico.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/servicos/ensaio-personalizado/' },
}

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['ensaio-personalizado']} />
}
