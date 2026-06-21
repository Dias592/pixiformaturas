import type { MetadataRoute } from 'next'
import { SERVICE_PAGES } from '@/lib/servicePages'
import { BLOG_POSTS } from '@/lib/blogPosts'

export const dynamic = 'force-static'

const SITE_URL = 'https://www.pixiformaturas.com.br'

// Date the main content was last meaningfully updated
const SITE_LAUNCH = new Date('2025-06-01')
const LAST_BLOG_UPDATE = new Date('2026-02-09') // date of newest blog post

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: LAST_BLOG_UPDATE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/servicos/`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/portfolio/`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/sobre/`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contato/`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/faq/`, lastModified: SITE_LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog/`, lastModified: LAST_BLOG_UPDATE, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/politica-de-privacidade/`, lastModified: SITE_LAUNCH, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/termos-de-uso/`, lastModified: SITE_LAUNCH, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/aviso-direitos-autorais/`, lastModified: SITE_LAUNCH, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = Object.values(SERVICE_PAGES).map((service) => ({
    url: `${SITE_URL}/servicos/${service.slug}/`,
    lastModified: SITE_LAUNCH,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
