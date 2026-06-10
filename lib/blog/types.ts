export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  date: string
  excerpt: string
  coverAlt: string
  content: ContentBlock[]
  relatedService: string
}
