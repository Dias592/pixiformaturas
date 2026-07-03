import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function RedirectPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/sobre/" />
        <link rel="canonical" href="https://pixiformaturas.com.br/sobre/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("/sobre/")`,
          }}
        />
      </head>
      <body />
    </html>
  )
}
