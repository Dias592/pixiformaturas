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
import SchemaOrg from '@/components/SchemaOrg'
import { HOME_FAQ } from '@/lib/constants'
import { howToSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'Empresa de Formatura em SP | Pixi Formaturas' },
  description:
    'A Pixi Formaturas é uma empresa de formatura em São Paulo, ABC e Grande SP desde 2015. Fotografia escolar e universitária, colação de grau, ensaio e álbum digital em 30 dias.',
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
            <strong className="text-white">São Paulo, Grande São Paulo e ABC Paulista</strong>{' '}
            <strong className="text-white">desde 2015</strong>.
            Oferecemos cobertura completa de colação de grau, baile de gala, fotos de turma, ensaio externo
            e <strong className="text-white">álbum digital</strong> com entrega em até{' '}
            <strong className="text-white">30 dias</strong>. Atendemos escolas públicas e particulares, faculdades
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

      <section className="bg-bgCard py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: '10+', label: 'Anos de experiência' },
              { value: '500+', label: 'Turmas fotografadas' },
              { value: '30', label: 'Dias para álbum digital' },
              { value: '5.0 ★', label: 'Avaliação dos clientes' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-gold md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-textMuted">{stat.label}</p>
              </div>
            ))}
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
      <SchemaOrg schema={howToSchema()} />
    </>
  )
}
