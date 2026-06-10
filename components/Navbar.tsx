'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SERVICES, whatsappLink } from '@/lib/constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const half = Math.ceil(SERVICES.length / 2)
  const col1 = SERVICES.slice(0, half)
  const col2 = SERVICES.slice(half)

  return (
    <header className="sticky top-0 z-40 border-b border-borderC bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-bold text-gold">
          Pixi Formaturas
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-sm text-textMain hover:text-gold">
            Início
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-textMain hover:text-gold">
              Serviços ▾
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full grid w-[480px] grid-cols-2 gap-2 rounded-lg border border-borderC bg-bgCard p-4 shadow-xl">
                {[col1, col2].map((col, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    {col.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/servicos/${s.slug}/`}
                        className="text-sm text-textMuted hover:text-gold"
                      >
                        {s.shortName}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/portfolio/" className="text-sm text-textMain hover:text-gold">
            Portfólio
          </Link>
          <Link href="/blog/" className="text-sm text-textMain hover:text-gold">
            Blog
          </Link>
          <Link href="/sobre/" className="text-sm text-textMain hover:text-gold">
            Sobre
          </Link>
          <Link href="/contato/" className="text-sm text-textMain hover:text-gold">
            Contato
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Abrir menu"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="h-0.5 w-6 bg-gold" />
          <span className="h-0.5 w-6 bg-gold" />
          <span className="h-0.5 w-6 bg-gold" />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-borderC bg-bg px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)} className="text-textMain">
              Início
            </Link>
            <div>
              <span className="text-textMain">Serviços</span>
              <div className="mt-2 flex flex-col gap-2 pl-4">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicos/${s.slug}/`}
                    onClick={() => setOpen(false)}
                    className="text-sm text-textMuted hover:text-gold"
                  >
                    {s.shortName}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/portfolio/" onClick={() => setOpen(false)} className="text-textMain">
              Portfólio
            </Link>
            <Link href="/blog/" onClick={() => setOpen(false)} className="text-textMain">
              Blog
            </Link>
            <Link href="/sobre/" onClick={() => setOpen(false)} className="text-textMain">
              Sobre
            </Link>
            <Link href="/contato/" onClick={() => setOpen(false)} className="text-textMain">
              Contato
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
