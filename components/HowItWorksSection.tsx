import { HOW_IT_WORKS } from '@/lib/constants'

export default function HowItWorksSection() {
  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-2">Processo</p>
          <h2 className="font-sans text-3xl font-bold md:text-4xl">
            Como funciona o processo de <span className="gold-italic">contratação da Pixi?</span>
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item) => (
            <li key={item.step} className="rounded-lg border border-borderC bg-bgCard p-6">
              <span className="font-display text-4xl font-bold text-gold">{item.step}</span>
              <h3 className="mt-3 mb-2 font-sans text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-textMuted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
