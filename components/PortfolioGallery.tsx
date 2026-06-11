import Link from 'next/link'
import { HOME_HERO_IMAGES } from '@/lib/galleryImages'

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
          {HOME_HERO_IMAGES.map((item, i) => (
            <img
              key={i}
              src={item.src}
              alt={item.alt}
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
              className="w-full break-inside-avoid rounded-lg object-cover"
            />
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
