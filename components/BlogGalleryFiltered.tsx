'use client'

import { useState } from 'react'
import BlogCard from './BlogCard'
import type { BlogPost } from '@/lib/blogPosts'

export default function BlogGalleryFiltered({ posts }: { posts: BlogPost[] }) {
  const categories = ['Todos', ...Array.from(new Set(posts.map((p) => p.category)))]
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? posts : posts.filter((p) => p.category === active)

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`chip transition-colors ${
              active === cat ? 'border-gold text-gold' : 'hover:border-gold hover:text-gold'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
