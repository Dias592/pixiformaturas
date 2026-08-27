import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function RedirectPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/blog/ensaio-formatura-museu-do-ipiranga-sp/" />
        <link rel="canonical" href="https://www.pixiformaturas.com.br/blog/ensaio-formatura-museu-do-ipiranga-sp/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("/blog/ensaio-formatura-museu-do-ipiranga-sp/")`,
          }}
        />
      </head>
      <body />
    </html>
  )
}
