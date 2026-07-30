export const dynamic = 'force-static'

export async function GET() {
  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta httpEquiv="refresh" content="0; url=/sitemap.xml" />
    <link rel="canonical" href="https://pixiformaturas.com.br/sitemap.xml" />
    <meta name="robots" content="noindex, follow" />
    <script>window.location.replace("/sitemap.xml")</script>
  </head>
  <body></body>
</html>`

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
