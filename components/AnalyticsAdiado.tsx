'use client'

import { useEffect } from 'react'
import { abrirWhatsApp, carregarGtag } from '@/lib/gtag'

// Sem interação, o Google tag carrega este tempo depois do evento load.
const FALLBACK_MS = 5000

// Carrega o Google tag (GA4 + Ads) fora da primeira pintura:
// - na hora, se a visita veio de anúncio (gclid/gbraid/wbraid na URL), para o
//   parâmetro ser gravado no cookie antes de qualquer navegação interna;
// - senão, na primeira interação (rolagem, toque, clique, tecla) ou 5 s depois do load.
// Também intercepta os cliques em links do WhatsApp para enviar a conversão antes de abrir.
export default function AnalyticsAdiado() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (['gclid', 'gbraid', 'wbraid', 'dclid'].some((p) => params.has(p))) {
      carregarGtag()
    }

    let fallback: ReturnType<typeof setTimeout> | undefined
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const

    const load = () => {
      cleanup()
      carregarGtag()
    }

    const onLoad = () => {
      fallback = setTimeout(load, FALLBACK_MS)
    }

    function cleanup() {
      events.forEach((e) => window.removeEventListener(e, load))
      window.removeEventListener('load', onLoad)
      if (fallback) clearTimeout(fallback)
    }

    // Clique simples (sem Ctrl/Shift/meio) em qualquer link do WhatsApp.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest?.('a[href*="wa.me/"]') as HTMLAnchorElement | null
      if (!link) return
      e.preventDefault()
      const origem = (link.getAttribute('aria-label') || link.textContent || 'whatsapp').trim().slice(0, 80)
      abrirWhatsApp(link.href, origem)
    }

    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }))
    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad, { once: true })
    document.addEventListener('click', onClick)

    return () => {
      cleanup()
      document.removeEventListener('click', onClick)
    }
  }, [])

  return null
}
