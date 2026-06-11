import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { globalSchema } from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pixiformaturas.com.br'),
  title: {
    default: 'Fotógrafo de Formatura Escolar e Universitária em São Paulo | Pixi Formaturas',
    template: '%s | Pixi Formaturas',
  },
  description:
    'Pixi Formaturas: especialistas em fotografia de formatura escolar e universitária em São Paulo desde 2015. Fotos de turma, colação de grau, ensaio externo e álbum digital em 30 dias. Atendemos todas as zonas.',
  keywords: [
    'fotógrafo de formatura escolar São Paulo',
    'fotógrafo de formatura SP',
    'fotografia formatura escolar',
    'fotos de turma formatura',
    'fotógrafo colação de grau SP',
    'ensaio fotográfico formatura',
    'fotógrafo formatura 9 ano',
    'fotógrafo formatura ensino médio',
    'baile de gala fotógrafo SP',
    'álbum digital formatura',
    'reconhecimento facial formatura',
    'fotógrafo formatura universitária São Paulo',
    'fotógrafo colação de grau faculdade SP',
    'fotógrafo formatura faculdade São Paulo',
    'formatura universitária fotógrafo SP',
    'Pixi Formaturas',
  ],
  authors: [{ name: 'Pixi Formaturas', url: 'https://www.pixiformaturas.com.br' }],
  creator: 'Pixi Formaturas',
  publisher: 'Pixi Formaturas',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: 'https://www.pixiformaturas.com.br' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.pixiformaturas.com.br',
    siteName: 'Pixi Formaturas',
    title: 'Fotógrafo de Formatura Escolar em São Paulo | Pixi Formaturas',
    description:
      'Especialistas em fotografia de formatura escolar em SP desde 2015. Fotos de turma, colação, baile de gala. Álbum digital em 30 dias.',
    images: [
      {
        url: '/images/og-pixi-formaturas.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixi Formaturas - Fotografia de Formatura Escolar em São Paulo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotógrafo de Formatura Escolar em SP | Pixi Formaturas',
    description: 'Especialistas em fotografia de formatura escolar em São Paulo desde 2015.',
    images: ['/images/og-pixi-formaturas.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5HLEXW76CD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5HLEXW76CD');
          `}
        </Script>
      </body>
    </html>
  )
}
