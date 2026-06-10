import Link from 'next/link'
import { SERVICES, whatsappLink } from '@/lib/constants'

export default function ServicesGrid() {
  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-2">Nossos Serviços</p>
          <h2 className="font-sans text-3xl font-bold md:text-4xl">
            Cobertura fotográfica <span className="gold-italic">completa para sua formatura</span>
          </h2>
          <p className="mt-4 text-textMuted">
            Do ensaio de turma à cerimônia oficial — registramos cada emoção com qualidade
            profissional. Fotógrafo de formatura escolar especializado em São Paulo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col justify-between rounded-lg border border-borderC bg-bgCard p-6"
            >
              <div>
                <h3 className="mb-2 font-sans text-xl font-bold text-white">{service.name}</h3>
                <p className="mb-4 text-sm text-textMuted">{service.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Link href={`/servicos/${service.slug}/`} className="btn-link text-sm">
                  Saiba mais →
                </Link>
                <a
                  href={whatsappLink(`Olá! Gostaria de um orçamento para ${service.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link text-sm"
                >
                  ORÇAMENTO →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
