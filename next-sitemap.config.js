/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.pixiformaturas.com.br',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './out',
  trailingSlash: true,
  exclude: ['/404', '/500'],
  transform: async (config, path) => {
    let priority = 0.7
    let changefreq = 'monthly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    } else if (path.startsWith('/servicos')) {
      priority = 0.9
      changefreq = 'monthly'
    } else if (path.startsWith('/blog/')) {
      priority = 0.6
      changefreq = 'monthly'
    } else if (path.startsWith('/blog')) {
      priority = 0.7
      changefreq = 'weekly'
    } else if (
      path.startsWith('/portfolio') ||
      path.startsWith('/sobre') ||
      path.startsWith('/contato') ||
      path.startsWith('/faq')
    ) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (
      path.startsWith('/politica-de-privacidade') ||
      path.startsWith('/termos-de-uso') ||
      path.startsWith('/aviso-direitos-autorais')
    ) {
      priority = 0.3
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      {
        userAgent: '*',
        disallow: [
          '/politica-de-privacidade/',
          '/termos-de-uso/',
          '/aviso-direitos-autorais/',
        ],
      },
    ],
    additionalSitemaps: ['https://www.pixiformaturas.com.br/sitemap.xml'],
  },
}
