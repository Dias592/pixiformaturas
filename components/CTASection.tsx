import { whatsappLink } from '@/lib/constants'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export default function CTASection({
  title = 'Sua turma merece o melhor.',
  subtitle = 'Solicite orçamento sem compromisso e garanta o registro definitivo da sua formatura.',
}: CTASectionProps) {
  return (
    <section className="bg-bgCard py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-sans text-3xl font-bold md:text-4xl">
          {title.split(' ').slice(0, -2).join(' ')}{' '}
          <span className="gold-italic">{title.split(' ').slice(-2).join(' ')}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-textMuted">{subtitle}</p>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
          SOLICITAR ORÇAMENTO GRÁTIS ⊕
        </a>
      </div>
    </section>
  )
}
