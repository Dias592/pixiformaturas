import { faqSchema } from '@/lib/schema'

interface FAQItem {
  question: string
  answer: string
}

const INLINE_PATTERN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g

function renderInline(text: string) {
  const parts: (string | JSX.Element)[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  INLINE_PATTERN.lastIndex = 0
  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    if (match[3] !== undefined) {
      parts.push(<strong key={key++}>{match[3]}</strong>)
    } else {
      parts.push(
        <a key={key++} href={match[2]} className="text-gold underline-offset-2 hover:underline">
          {match[1]}
        </a>
      )
    }
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

interface FAQSectionProps {
  items: FAQItem[]
  eyebrow?: string
  title?: string
  highlight?: string
}

export default function FAQSection({
  items,
  eyebrow = 'Dúvidas Frequentes',
  title = 'Perguntas',
  highlight = 'frequentes',
}: FAQSectionProps) {
  const schema = faqSchema(items)

  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-2">{eyebrow}</p>
          <h2 className="font-sans text-3xl font-bold md:text-4xl">
            {title} <span className="gold-italic">{highlight}</span>
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="group rounded-lg border border-borderC bg-bgCard p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-textMain marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-gold transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-textMuted">{renderInline(item.answer)}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  )
}
