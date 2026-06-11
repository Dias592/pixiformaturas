'use client'

import { useState } from 'react'
import {
  BAILE_DE_GALA_IMAGES,
  ENSAIO_EXTERNO_IMAGES,
  COLACAO_DE_GRAU_IMAGES,
  FOTOS_DE_TURMA_IMAGES,
  ESTUDIO_IMAGES,
} from '@/lib/galleryImages'

const CATEGORIES = ['Todos', 'Fotos de Turma', 'Colação de Grau', 'Baile de Gala', 'Ensaio Externo', 'Estúdio']

interface PhotoItem {
  category: string
  alt: string
  src: string
  width: number
  height: number
}

const ITEMS: PhotoItem[] = [
  ...FOTOS_DE_TURMA_IMAGES.map((img) => ({ category: 'Fotos de Turma', alt: img.alt, src: img.src, width: img.width, height: img.height })),
  ...COLACAO_DE_GRAU_IMAGES.map((img) => ({ category: 'Colação de Grau', alt: img.alt, src: img.src, width: img.width, height: img.height })),
  ...BAILE_DE_GALA_IMAGES.map((img) => ({ category: 'Baile de Gala', alt: img.alt, src: img.src, width: img.width, height: img.height })),
  ...ENSAIO_EXTERNO_IMAGES.map((img) => ({ category: 'Ensaio Externo', alt: img.alt, src: img.src, width: img.width, height: img.height })),
  ...ESTUDIO_IMAGES.map((img) => ({ category: 'Estúdio', alt: img.alt, src: img.src, width: img.width, height: img.height })),
]

export default function PortfolioGalleryFiltered() {
  const [filter, setFilter] = useState('Todos')

  const filtered = filter === 'Todos' ? ITEMS : ITEMS.filter((item) => item.category === filter)

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              filter === cat
                ? 'border-gold bg-gold font-bold text-textDark'
                : 'border-borderC text-textMuted hover:border-gold hover:text-gold'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-4 [&>*]:mb-4">
        {filtered.map((item, i) => (
          <img
            key={i}
            src={item.src}
            alt={item.alt}
            style={{ aspectRatio: `${item.width} / ${item.height}` }}
            className="w-full break-inside-avoid rounded-lg object-cover"
          />
        ))}
      </div>
    </>
  )
}
