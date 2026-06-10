import Link from 'next/link'
import SchemaOrg from './SchemaOrg'
import { breadcrumbSchema } from '@/lib/schema'
import { BUSINESS } from '@/lib/constants'

interface Crumb {
  name: string
  href: string
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = breadcrumbSchema(
    items.map((item) => ({ name: item.name, url: `${BUSINESS.url}${item.href}` }))
  )

  return (
    <nav aria-label="breadcrumb" className="border-b border-borderC bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-textMuted">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {i === items.length - 1 ? (
                <span className="text-gold">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-gold">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
      <SchemaOrg schema={schema} />
    </nav>
  )
}
