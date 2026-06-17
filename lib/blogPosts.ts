import { LOCAL_POSTS } from './blog/local-posts'
import { INFO_POSTS } from './blog/info-posts'
import { SEO_POSTS_1 } from './blog/seo-posts-1'
import { SEO_POSTS_2 } from './blog/seo-posts-2'
import { SEO_POSTS_3 } from './blog/seo-posts-3'
import { SEO_POSTS_4 } from './blog/seo-posts-4'
import { SEO_POSTS_5 } from './blog/seo-posts-5'
import { SEO_POSTS_6 } from './blog/seo-posts-6'
import { SEO_POSTS_7 } from './blog/seo-posts-7'
import { SEO_POSTS_8 } from './blog/seo-posts-8'
import { SEO_POSTS_9 } from './blog/seo-posts-9'
import { SEO_POSTS_10 } from './blog/seo-posts-10'
import type { BlogPost, ContentBlock } from './blog/types'

export type { BlogPost, ContentBlock }

export const BLOG_POSTS: BlogPost[] = [
  ...LOCAL_POSTS,
  ...INFO_POSTS,
  ...SEO_POSTS_1,
  ...SEO_POSTS_2,
  ...SEO_POSTS_3,
  ...SEO_POSTS_4,
  ...SEO_POSTS_5,
  ...SEO_POSTS_6,
  ...SEO_POSTS_7,
  ...SEO_POSTS_8,
  ...SEO_POSTS_9,
  ...SEO_POSTS_10,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const inCategory = BLOG_POSTS.filter((p) => p.category === post.category)
  const idx = inCategory.findIndex((p) => p.slug === post.slug)
  if (idx === -1 || inCategory.length <= 1) return []
  const results: BlogPost[] = []
  for (let i = 1; results.length < count && i < inCategory.length; i++) {
    results.push(inCategory[(idx + i) % inCategory.length])
  }
  return results
}
