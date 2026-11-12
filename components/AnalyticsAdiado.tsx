'use client'

import { useEffect } from 'react'

const GA_ID = 'G-5HLEXW76CD'
// Sem interação, o Analytics carrega este tempo depois do evento load.
const FALLBACK_MS = 5000

// Carrega o Google Analytics (gtag.js) só na primeira interação do visitante
// (rolagem, toque, clique, tecla) ou alguns segundos depois do carregamento.
// Assim o script de terceiros não disputa a thread principal com a primeira pintura.
export default function AnalyticsAdiado() {
  useEffect(() => {
    let loaded = false
    let fallback: ReturnType<typeof setTimeout> | undefined
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const

    const load = () => {
      if (loaded) return
      loaded = true
      cleanup()
      const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void }
      w.dataLayer = w.dataLayer || []
      w.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer.push(arguments)
      }
      w.gtag('js', new Date())
      w.gtag('config', GA_ID)
      const s = document.createElement('script')
      s.async = true
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      document.head.appendChild(s)
    }

    const onLoad = () => {
      fallback = setTimeout(load, FALLBACK_MS)
    }

    function cleanup() {
      events.forEach((e) => window.removeEventListener(e, load))
      window.removeEventListener('load', onLoad)
      if (fallback) clearTimeout(fallback)
    }

    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }))
    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad, { once: true })

    return cleanup
  }, [])

  return null
}
