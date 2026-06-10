import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ServicesGrid from '@/components/ServicesGrid'
import DiferenciaisSection from '@/components/DiferenciaisSection'
import PortfolioGallery from '@/components/PortfolioGallery'
import HowItWorksSection from '@/components/HowItWorksSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import CoberturaMapa from '@/components/CoberturaMapa'
import CTASection from '@/components/CTASection'
import { HOME_FAQ } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Fotógrafo de Formatura Escolar em São Paulo',
  description:
    'Pixi Formaturas: especialistas em fotografia de formatura escolar em SP desde 2015. Fotos de turma, colação de grau, ensaio externo e álbum digital em 30 dias. Atendemos todas as zonas. Solicite orçamento!',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/' },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <DiferenciaisSection />
      <PortfolioGallery />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection
        items={HOME_FAQ}
        eyebrow="Tire suas Dúvidas"
        title="Perguntas"
        highlight="frequentes"
      />
      <CoberturaMapa />
      <CTASection />
    </>
  )
}
