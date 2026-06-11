import { whatsappLink } from '@/lib/constants'
import HeroPhoto from './HeroPhoto'

const SERVICE_GRID = [
  ['Fotos de Turma', 'Colação de Grau', 'Colação Festiva'],
  ['9º Ano', '3º Médio', 'Ensaio Externo'],
  ['Álbum Digital', 'Baile de Gala', 'Reconhecimento Facial'],
  ['Formatura Universitária'],
]

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col md:grid md:grid-cols-2 md:items-stretch">
      {/* Mobile image */}
      <div className="h-[45vh] w-full md:hidden">
        <HeroPhoto />
      </div>

      {/* Content column */}
      <div className="flex flex-1 flex-col justify-center gap-6 px-6 py-10 md:px-16 md:py-0">
        <p className="eyebrow normal-case tracking-normal">
          Fotógrafo de Formatura Escolar e Universitária · São Paulo
        </p>

        <h1 className="font-sans text-4xl font-bold leading-tight text-white md:text-6xl">
          Sua turma merece
          <br />
          <span className="gold-italic text-5xl md:text-7xl">Fotos que Emocionam</span>
          <br />
          para sempre
        </h1>

        <p className="rounded-lg border border-borderC bg-bgCard/50 p-4 text-textMuted">
          Especialistas em fotografia de formatura escolar e universitária em São Paulo. Cobertura
          completa para 9º ano, 3º ano do Ensino Médio, colação de grau universitária, fotos de
          turma, ensaio externo e álbum digital em 30 dias. Atendemos todas as zonas da cidade.
        </p>

        <div className="grid grid-cols-3 gap-y-3 gap-x-2 py-2 text-center">
          {SERVICE_GRID.flat().map((item) => (
            <span key={item} className="text-sm text-white md:text-base">
              {item}
            </span>
          ))}
        </div>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full md:w-4/5"
        >
          SOLICITAR ORÇAMENTO GRÁTIS ⊕
        </a>
      </div>

      {/* Desktop image */}
      <div className="relative hidden md:block">
        <HeroPhoto />
      </div>

      {/* Scroll chevron */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <svg
          className="animate-bounce-soft h-8 w-8 text-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
