import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function RedirectPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/contato/" />
        <link rel="canonical" href="https://pixiformaturas.com.br/contato/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("/contato/")`,
          }}
        />
      </head>
      <body />
    </html>
  )
}
