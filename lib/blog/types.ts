export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }

export interface FaqItem {
  question: string
  answer: string
}

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  date: string
  /** Data da última atualização relevante do conteúdo (YYYY-MM-DD). Alimenta o lastmod do sitemap e o dateModified do schema. Omitir quando não houve edição depois da publicação. */
  dateModified?: string
  excerpt: string
  coverAlt: string
  content: ContentBlock[]
  faq: FaqItem[]
  relatedService: string
  /** Posição fixa do artigo, atribuída em lib/blogPosts.ts (não preencher nos arquivos de conteúdo). */
  coverRank?: number
}
