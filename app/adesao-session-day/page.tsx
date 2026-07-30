import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function RedirectPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/servicos/photo-day/" />
        <link rel="canonical" href="https://pixiformaturas.com.br/servicos/photo-day/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("/servicos/photo-day/")`,
          }}
        />
      </head>
      <body />
    </html>
  )
}
