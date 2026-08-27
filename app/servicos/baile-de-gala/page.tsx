import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function RedirectPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/servicos/jantar-baile-de-gala/" />
        <link rel="canonical" href="https://www.pixiformaturas.com.br/servicos/jantar-baile-de-gala/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("/servicos/jantar-baile-de-gala/")`,
          }}
        />
      </head>
      <body />
    </html>
  )
}
