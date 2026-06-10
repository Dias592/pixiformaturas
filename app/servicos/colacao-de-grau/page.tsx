import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'

export const metadata: Metadata = {
  title: 'Fotógrafo para Colação de Grau Oficial em SP',
  description:
    'Cobertura fotográfica completa da cerimônia oficial de colação de grau, registrando cada momento solene com discrição e qualidade profissional.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/servicos/colacao-de-grau/' },
}

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['colacao-de-grau']} />
}
