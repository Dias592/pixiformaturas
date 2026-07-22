import Link from 'next/link'
import type { ContentBlock } from '@/lib/blog/types'

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
        <Link key={key++} href={match[2]} className="text-gold underline-offset-2 hover:underline">
          {match[1]}
        </Link>
      )
    }
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

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
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ul>
          )
        }
        if (block.type === 'ol') {
          return (
            <ol key={i} className="space-y-3">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-bg">
                    {j + 1}
                  </span>
                  <span className="pt-0.5">{renderInline(item)}</span>
                </li>
              ))}
            </ol>
          )
        }
        if (block.type === 'table') {
          return (
            <div key={i} className="overflow-x-auto rounded-lg border border-borderC">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-bgCard">
                    {block.headers.map((h, j) => (
                      <th key={j} className="px-4 py-3 font-sans font-bold text-white">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, j) => (
                    <tr key={j} className="border-t border-borderC">
                      {row.map((cell, k) => (
                        <td key={k} className="px-4 py-3">
                          {renderInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        return <p key={i}>{renderInline(block.text)}</p>
      })}
    </div>
  )
}
