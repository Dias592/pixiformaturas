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
            <h3 className="mb-4 font-display text-lg font-bold">Regiões Atendidas</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <Link href="/formatura-sao-paulo/" className="hover:text-white hover:underline">
                  Formatura em São Paulo
                </Link>
              </li>
              <li>
                <Link href="/formatura-grande-sp/" className="hover:text-white hover:underline">
                  Formatura na Grande SP
                </Link>
              </li>
              <li>
                <Link href="/formatura-abc/" className="hover:text-white hover:underline">
                  Formatura no ABC Paulista
                </Link>
              </li>
            </ul>

            <h3 className="mb-3 mt-6 font-display text-lg font-bold">Institucional</h3>
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
          </div>
        </div>
      </div>

      <div className="bg-magentaLight py-4">
        <div className="mx-auto max-w-7xl px-6 text-center text-xs text-white/90">
          <p>© 2026 Pixi Formaturas · Todos os direitos reservados</p>
          <p className="mt-1">
            Empresa de formatura em São Paulo · ABC Paulista · Grande SP · Santo André · São Bernardo
            do Campo · São Caetano do Sul · Diadema · Mauá · Guarulhos · Osasco · Moema · Vila Mariana
            · Pinheiros · Brooklin · Morumbi · Higienópolis · Jardins
          </p>
          <p className="mt-1">
            9º Ano · Terceirão · Ensino Médio · Colação de Grau · Universitária · Medicina · Direito
            · Engenharia · Administração · Fotos de turma · Álbum digital · Baile de gala
          </p>
        </div>
      </div>
    </footer>
  )
}
