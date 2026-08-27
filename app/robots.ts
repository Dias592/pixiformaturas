import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.pixiformaturas.com.br'

export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    'GPTBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'Google-Extended',
    'CCBot',
    'Bytespider',
  ]

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiBots.map((userAgent) => ({ userAgent, allow: '/' })),
      {
        userAgent: '*',
        disallow: ['/politica-de-privacidade/', '/termos-de-uso/', '/aviso-direitos-autorais/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
