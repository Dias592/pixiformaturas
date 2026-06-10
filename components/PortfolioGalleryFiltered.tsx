'use client'

import { useState } from 'react'
import PlaceholderImage from './PlaceholderImage'

const CATEGORIES = ['Todos', 'Fotos de Turma', 'Colação de Grau', 'Baile de Gala', 'Ensaio Externo', 'Estúdio']

const ITEMS: { category: string; alt: string; aspect: string }[] = [
  { category: 'Fotos de Turma', alt: 'Fotos de turma de formatura do 9º ano - Zona Sul SP - Pixi Formaturas', aspect: 'aspect-[3/4]' },
  { category: 'Fotos de Turma', alt: 'Fotos de turma de formatura do 3º ano - Zona Oeste SP - Pixi Formaturas', aspect: 'aspect-square' },
  { category: 'Fotos de Turma', alt: 'Ensaio de turma em estúdio - São Paulo - Pixi Formaturas', aspect: 'aspect-[4/5]' },
  { category: 'Fotos de Turma', alt: 'Fotos de turma ao ar livre - Zona Norte SP - Pixi Formaturas', aspect: 'aspect-[3/4]' },
  { category: 'Colação de Grau', alt: 'Cerimônia de colação de grau universitária - Centro SP - Pixi Formaturas', aspect: 'aspect-square' },
  { category: 'Colação de Grau', alt: 'Colação de grau do Ensino Médio - Grande SP - Pixi Formaturas', aspect: 'aspect-[4/5]' },
  { category: 'Colação de Grau', alt: 'Entrega de diploma na colação de grau - SP - Pixi Formaturas', aspect: 'aspect-[3/4]' },
  { category: 'Colação de Grau', alt: 'Cerimônia oficial de formatura - Zona Leste SP - Pixi Formaturas', aspect: 'aspect-square' },
  { category: 'Baile de Gala', alt: 'Baile de gala de formatura - Zona Sul SP - Pixi Formaturas', aspect: 'aspect-[4/5]' },
  { category: 'Baile de Gala', alt: 'Jantar de gala de formatura - Zona Oeste SP - Pixi Formaturas', aspect: 'aspect-[3/4]' },
  { category: 'Baile de Gala', alt: 'Pista de dança do baile de formatura - Grande SP - Pixi Formaturas', aspect: 'aspect-square' },
  { category: 'Baile de Gala', alt: 'Festa de formatura - Zona Leste SP - Pixi Formaturas', aspect: 'aspect-[4/5]' },
  { category: 'Ensaio Externo', alt: 'Ensaio externo de formatura do 9º ano - Zona Sul SP - Pixi Formaturas', aspect: 'aspect-[3/4]' },
  { category: 'Ensaio Externo', alt: 'Ensaio externo de turma em parque - SP - Pixi Formaturas', aspect: 'aspect-square' },
  { category: 'Ensaio Externo', alt: 'Ensaio externo de formatura do 3º ano - Zona Norte SP - Pixi Formaturas', aspect: 'aspect-[4/5]' },
  { category: 'Ensaio Externo', alt: 'Ensaio fotográfico personalizado de turma - SP - Pixi Formaturas', aspect: 'aspect-[3/4]' },
  { category: 'Estúdio', alt: 'Sessão de fotos em estúdio profissional - São Paulo - Pixi Formaturas', aspect: 'aspect-square' },
  { category: 'Estúdio', alt: 'Retratos individuais em estúdio - Pixi Formaturas', aspect: 'aspect-[4/5]' },
  { category: 'Estúdio', alt: 'Fotos de turma em estúdio fotográfico - SP - Pixi Formaturas', aspect: 'aspect-[3/4]' },
  { category: 'Estúdio', alt: 'Ensaio de formandos em estúdio - Pixi Formaturas', aspect: 'aspect-square' },
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
          <PlaceholderImage
            key={i}
            alt={item.alt}
            aspect={item.aspect}
            className="w-full break-inside-avoid"
          />
        ))}
      </div>
    </>
  )
}
