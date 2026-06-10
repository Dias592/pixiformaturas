import { ZONAS_SP } from '@/lib/constants'

export default function CoberturaMapa() {
  return (
    <section className="bg-bgCard py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-2">Cobertura Local</p>
          <h2 className="font-sans text-3xl font-bold md:text-4xl">
            Atendemos em <span className="gold-italic">todo São Paulo</span>
          </h2>
          <p className="mt-4 text-textMuted">
            Levamos toda a estrutura fotográfica até a sua escola, em qualquer região da capital
            ou Grande São Paulo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ZONAS_SP.map((zona) => (
            <div key={zona.zona} className="rounded-lg border border-borderC bg-bg p-6">
              <h3 className="mb-3 font-sans text-lg font-bold text-gold">{zona.zona}</h3>
              <div className="flex flex-wrap gap-2">
                {zona.bairros.map((bairro) => (
                  <span key={bairro} className="chip">
                    {bairro}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
