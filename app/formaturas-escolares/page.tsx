import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function RedirectPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/empresas-de-formatura-ensino-medio/" />
        <link rel="canonical" href="https://www.pixiformaturas.com.br/empresas-de-formatura-ensino-medio/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("/empresas-de-formatura-ensino-medio/")`,
          }}
        />
      </head>
      <body />
    </html>
  )
}
