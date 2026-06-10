import Link from 'next/link'
import PlaceholderImage from './PlaceholderImage'

const PREVIEW_ITEMS = [
  { alt: 'Fotos de turma de formatura do 9º ano - Zona Sul - Pixi Formaturas', aspect: 'aspect-[3/4]' },
  { alt: 'Colação de grau universitária - Centro de São Paulo - Pixi Formaturas', aspect: 'aspect-square' },
  { alt: 'Baile de gala de formatura - Zona Oeste - Pixi Formaturas', aspect: 'aspect-[4/5]' },
  { alt: 'Ensaio externo de formatura do 3º ano - Zona Norte - Pixi Formaturas', aspect: 'aspect-[3/4]' },
  { alt: 'Cerimônia de colação de grau - Grande SP - Pixi Formaturas', aspect: 'aspect-square' },
  { alt: 'Fotos de turma em estúdio - Pixi Formaturas', aspect: 'aspect-[4/5]' },
  { alt: 'Jantar de gala de formatura - Zona Leste - Pixi Formaturas', aspect: 'aspect-[3/4]' },
  { alt: 'Ensaio personalizado de turma - São Paulo - Pixi Formaturas', aspect: 'aspect-square' },
  { alt: 'Photo Day exclusivo de formatura - Pixi Formaturas', aspect: 'aspect-[4/5]' },
  { alt: 'Colação festiva e baile - Zona Sul - Pixi Formaturas', aspect: 'aspect-[3/4]' },
  { alt: 'Fotos de turma do Ensino Médio - Pixi Formaturas', aspect: 'aspect-square' },
  { alt: 'Cobertura de formatura escolar - Grande São Paulo - Pixi Formaturas', aspect: 'aspect-[4/5]' },
]

export default function PortfolioGallery() {
  return (
    <section className="bg-bgCard py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-2">Portfólio</p>
          <h2 className="font-sans text-3xl font-bold md:text-4xl">
            Momentos que <span className="gold-italic">contam histórias</span>
          </h2>
        </div>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {PREVIEW_ITEMS.map((item, i) => (
            <PlaceholderImage key={i} alt={item.alt} aspect={item.aspect} className="w-full break-inside-avoid" />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/portfolio/" className="btn-primary">
            Ver Portfólio Completo
          </Link>
        </div>
      </div>
    </section>
  )
}
