'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SERVICES, whatsappLink } from '@/lib/constants'

const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/portfolio/', label: 'Portfólio' },
  { href: '/blog/', label: 'Blog' },
  { href: '/sobre/', label: 'Sobre' },
  { href: '/contato/', label: 'Contato' },
]

const TURMA_LINKS = [
  { href: '/empresa-de-formatura-sp/', label: 'Empresa de Formatura em SP' },
  { href: '/empresas-de-formatura-ensino-medio/', label: 'Formatura do Ensino Médio' },
  { href: '/empresas-de-formatura-medicina/', label: 'Formatura de Medicina' },
  { href: '/empresas-de-formatura-faculdade/', label: 'Formatura Universitária' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  const half = Math.ceil(SERVICES.length / 2)
  const col1 = SERVICES.slice(0, half)
  const col2 = SERVICES.slice(half)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href))
  const servicesActive = pathname?.startsWith('/servicos')

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  const linkClass = (href: string) =>
    `text-sm transition-colors hover:text-gold ${
      isActive(href) ? 'font-bold text-gold' : 'text-textMain'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-borderC bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-bold text-gold">
          Pixi Formaturas
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/" className={linkClass('/')}>
            Início
          </Link>

          <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <button
              className={`flex items-center gap-1 text-sm transition-colors hover:text-gold ${
                servicesActive ? 'font-bold text-gold' : 'text-textMain'
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Serviços
              <svg
                className={`h-3 w-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="grid w-[480px] grid-cols-2 gap-2 rounded-lg border border-borderC bg-bgCard p-4 shadow-xl">
                  {[col1, col2].map((col, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      {col.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/servicos/${s.slug}/`}
                          onClick={() => setServicesOpen(false)}
                          className={`text-sm transition-colors hover:text-gold ${
                            pathname === `/servicos/${s.slug}/` ? 'font-bold text-gold' : 'text-textMuted'
                          }`}
                        >
                          {s.shortName}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm transition-colors hover:text-gold text-textMain">
              Para sua Turma
              <svg className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
              <div className="flex w-[260px] flex-col gap-2 rounded-lg border border-borderC bg-bgCard p-4 shadow-xl">
                {TURMA_LINKS.map((t) => (
                  <Link key={t.href} href={t.href} className="text-sm text-textMuted transition-colors hover:text-gold">
                    {t.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/portfolio/" className={linkClass('/portfolio/')}>
            Portfólio
          </Link>
          <Link href="/blog/" className={linkClass('/blog/')}>
            Blog
          </Link>
          <Link href="/sobre/" className={linkClass('/sobre/')}>
            Sobre
          </Link>
          <Link href="/contato/" className={linkClass('/contato/')}>
            Contato
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="relative flex h-6 w-6 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-0.5 w-6 bg-gold transition-transform duration-200 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span className={`h-0.5 w-6 bg-gold transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-6 bg-gold transition-transform duration-200 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-borderC bg-bg px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={isActive(link.href) ? 'font-bold text-gold' : 'text-textMain'}
              >
                {link.label}
              </Link>
            ))}

            <div>
              <button
                className={`flex w-full items-center justify-between text-left ${
                  servicesActive ? 'font-bold text-gold' : 'text-textMain'
                }`}
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                Serviços
                <svg
                  className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicos/${s.slug}/`}
                      onClick={() => setOpen(false)}
                      className={`text-sm transition-colors hover:text-gold ${
                        pathname === `/servicos/${s.slug}/` ? 'font-bold text-gold' : 'text-textMuted'
                      }`}
                    >
                      {s.shortName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p className="text-sm font-bold text-gold">Para sua Turma</p>
              <div className="mt-2 flex flex-col gap-2 pl-4">
                {TURMA_LINKS.map((t) => (
                  <Link key={t.href} href={t.href} onClick={() => setOpen(false)} className="text-sm text-textMuted transition-colors hover:text-gold">
                    {t.label}
                  </Link>
                ))}
              </div>
            </div>

            {NAV_LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={isActive(link.href) ? 'font-bold text-gold' : 'text-textMain'}
              >
                {link.label}
              </Link>
            ))}

            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
