import Link from 'next/link'
import PlaceholderImage from './PlaceholderImage'
import type { BlogPost } from '@/lib/blogPosts'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="flex flex-col overflow-hidden rounded-lg border border-borderC bg-bgCard transition-colors hover:border-gold"
    >
      <PlaceholderImage alt={post.title} aspect="aspect-[16/9]" className="w-full" />
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow mb-2 text-xs">{post.category}</p>
        <h3 className="mb-2 font-sans text-lg font-bold text-white">{post.title}</h3>
        <p className="mb-4 flex-1 text-sm text-textMuted">{post.excerpt}</p>
        <span className="btn-link text-sm">Ler artigo →</span>
      </div>
    </Link>
  )
}
