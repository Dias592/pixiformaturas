import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/servicePages'

export const metadata: Metadata = {
  title: 'Fotógrafo para Colação Festiva e Baile de Gala SP',
  description:
    'Cobertura fotográfica completa do baile de gala e da festa de formatura. Registramos cada abraço e emoção com sensibilidade e espontaneidade — do jantar de gala à pista de dança.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/servicos/colacao-festiva/' },
}

export default function Page() {
  return <ServicePageTemplate data={SERVICE_PAGES['colacao-festiva']} />
}
