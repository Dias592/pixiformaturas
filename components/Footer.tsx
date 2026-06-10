import Link from 'next/link'
import { BUSINESS, FOOTER_SERVICES } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-magenta text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-display text-lg font-bold">Pixi Formaturas</h3>
            <ul className="space-y-2 text-sm text-white/90">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <address className="not-italic">
            <h3 className="mb-4 font-display text-lg font-bold">Contato</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  WhatsApp: (11) 9.9896-4797
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white hover:underline">
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  Instagram @pixiformaturas
                </a>
              </li>
              <li>São Paulo - SP, Brasil</li>
            </ul>
          </address>

          <div>
            <h3 className="mb-4 font-display text-lg font-bold">Outras Políticas</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <Link href="/politica-de-privacidade/" className="hover:text-white hover:underline">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso/" className="hover:text-white hover:underline">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/aviso-direitos-autorais/" className="hover:text-white hover:underline">
                  Aviso de Direitos Autorais
                </Link>
              </li>
            </ul>
            <p className="mt-6 font-display text-2xl font-bold tracking-wide text-right">
              PIXI<br />FORMATURAS
            </p>
          </div>
        </div>
      </div>

      <div className="bg-magentaLight py-4">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs text-white/90">
          <p>© 2026 Pixi Formaturas · Todos os direitos reservados</p>
          <p className="mt-1">
            Fotógrafo de formatura SP · Fotos de turma · Colação de grau · 9º ano · 3º médio ·
            Ensaio externo formatura SP · Álbum digital · Baile de gala · Filmagem formatura SP ·
            Zona Sul · Zona Norte · Zona Leste · Zona Oeste · Centro SP · Grande SP
          </p>
        </div>
      </div>
    </footer>
  )
}
