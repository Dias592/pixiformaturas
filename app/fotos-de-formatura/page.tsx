import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function RedirectPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/servicos/" />
        <link rel="canonical" href="https://www.pixiformaturas.com.br/servicos/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("/servicos/")`,
          }}
        />
      </head>
      <body />
    </html>
  )
}
