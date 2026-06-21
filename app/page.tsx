import type { Metadata } from 'next'
import Link from 'next/link'
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
  title: 'Fotógrafo de Formatura Escolar e Universitária em São Paulo',
  description:
    'Pixi Formaturas: fotografia de formatura escolar em SP desde 2015. Fotos de turma, colação de grau, ensaio externo e álbum digital em 30 dias.',
  alternates: { canonical: 'https://www.pixiformaturas.com.br/' },
}

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="bg-bg py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-lg leading-relaxed text-textMuted">
            A <strong className="text-white">Pixi Formaturas</strong> é uma empresa especializada em{' '}
            <strong className="text-white">fotografia de formatura escolar e universitária</strong> em{' '}
            <strong className="text-white">São Paulo, Grande São Paulo e ABC Paulista</strong> desde 2015.
            Oferecemos cobertura completa de colação de grau, baile de gala, fotos de turma, ensaio externo
            e álbum digital com entrega em até 30 dias. Atendemos escolas públicas e particulares, faculdades
            e universidades em todas as zonas da capital e cidades da região metropolitana.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/formatura-sao-paulo/" className="chip hover:border-gold hover:text-gold transition-colors">
              Formatura em São Paulo
            </Link>
            <Link href="/formatura-grande-sp/" className="chip hover:border-gold hover:text-gold transition-colors">
              Formatura na Grande SP
            </Link>
            <Link href="/formatura-abc/" className="chip hover:border-gold hover:text-gold transition-colors">
              Formatura no ABC Paulista
            </Link>
          </div>
        </div>
      </section>

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
