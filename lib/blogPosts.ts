import { LOCAL_POSTS } from './blog/local-posts'
import { INFO_POSTS } from './blog/info-posts'
import type { BlogPost, ContentBlock } from './blog/types'

export type { BlogPost, ContentBlock }

export const BLOG_POSTS: BlogPost[] = [...LOCAL_POSTS, ...INFO_POSTS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, count)
}
