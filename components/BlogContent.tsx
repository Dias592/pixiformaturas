import type { ContentBlock } from '@/lib/blog/types'

export default function BlogContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-4 text-textMuted">
      {blocks.map((block, i) => {
        if (block.type === 'h2') {
          return (
            <h2 key={i} className="pt-4 font-sans text-2xl font-bold text-white">
              {block.text}
            </h2>
          )
        }
        if (block.type === 'h3') {
          return (
            <h3 key={i} className="pt-2 font-sans text-xl font-bold text-white">
              {block.text}
            </h3>
          )
        }
        if (block.type === 'ul') {
          return (
            <ul key={i} className="space-y-2">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="mt-1 text-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          )
        }
        return <p key={i}>{block.text}</p>
      })}
    </div>
  )
}
