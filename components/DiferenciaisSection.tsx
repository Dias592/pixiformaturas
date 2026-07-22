import { DIFERENCIAIS } from '@/lib/constants'

export default function DiferenciaisSection() {
  return (
    <section className="bg-bgCard py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-2">Por que a Pixi Formaturas?</p>
          <h2 className="font-sans text-3xl font-bold md:text-4xl">
            Por que escolher a Pixi Formaturas <span className="gold-italic">para sua turma?</span>
          </h2>
          <p className="mt-4 text-textMuted">
            Somos referência em fotografia de formatura escolar em São Paulo. Veja o que nos
            diferencia no mercado de formaturas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map((item) => (
            <div
              key={item.number}
              className="relative overflow-hidden rounded-lg border border-borderC bg-bg p-6"
            >
              <span
                className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-8xl font-bold text-numberBg"
                aria-hidden="true"
              >
                {item.number}
              </span>
              <div className="relative">
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 font-sans text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-textMuted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
