// Google tag (GA4 + Google Ads) carregado sob demanda.
// O script só entra na página na primeira interação, ao clicar num CTA
// ou alguns segundos depois do load (ver components/AnalyticsAdiado.tsx).

export const GA_ID = 'G-5HLEXW76CD'

// Rótulo de conversão do Google Ads no formato 'AW-979392419/XXXXXXXX'.
// Vazio = só o evento do GA4 é enviado (a conversão pode ser importada do GA4 no Ads).
// Preencha com o rótulo da ação de conversão "WhatsApp" criada no Google Ads.
export const ADS_CONVERSAO_WHATSAPP = ''

type Gtag = (...args: unknown[]) => void
type Janela = Window & { dataLayer?: unknown[]; gtag?: Gtag; google_tag_manager?: unknown }

let carregado = false
let scriptPronto: Promise<void> | null = null

function janela(): Janela {
  return window as Janela
}

// Garante a fila do gtag e insere o script uma única vez.
// Eventos enviados antes de o script chegar ficam na fila e saem quando ele carrega.
export function carregarGtag(): Promise<void> {
  const w = janela()
  if (!carregado) {
    carregado = true
    w.dataLayer = w.dataLayer || []
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments)
    }
    w.gtag('js', new Date())
    w.gtag('config', GA_ID)
    scriptPronto = new Promise((resolve) => {
      const s = document.createElement('script')
      s.async = true
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      s.onload = s.onerror = () => resolve()
      document.head.appendChild(s)
    })
  }
  return scriptPronto ?? Promise.resolve()
}

const TEMPO_MAXIMO_MS = 1000

// Envia o evento de conversão do WhatsApp e só depois abre o link.
// Espera o retorno do Google (event_callback) por no máximo 1 s; os hits vão por beacon,
// então sobrevivem à troca de aba/app mesmo que o callback não chegue a tempo.
export function abrirWhatsApp(url: string, origem: string) {
  const aba = window.open('about:blank', '_blank')
  let aberto = false
  const abrir = () => {
    if (aberto) return
    aberto = true
    if (aba) {
      aba.opener = null
      aba.location.href = url
    } else {
      window.location.href = url
    }
  }

  try {
    carregarGtag()
    const gtag = janela().gtag!
    const pagina = window.location.pathname
    let pendentes = ADS_CONVERSAO_WHATSAPP ? 2 : 1
    const concluir = () => {
      pendentes -= 1
      if (pendentes <= 0) abrir()
    }
    gtag('event', 'generate_lead', {
      method: 'whatsapp',
      cta_origem: origem,
      cta_pagina: pagina,
      link_url: url.split('?')[0],
      // O GA4 já envia por fetch keepalive/beacon e descarrega a fila quando a aba
      // fica oculta (abertura do WhatsApp); transport_type viraria só um parâmetro solto.
      event_callback: concluir,
      event_timeout: TEMPO_MAXIMO_MS,
    })
    if (ADS_CONVERSAO_WHATSAPP) {
      gtag('event', 'conversion', {
        send_to: ADS_CONVERSAO_WHATSAPP,
        transport_type: 'beacon',
        event_callback: concluir,
        event_timeout: TEMPO_MAXIMO_MS,
      })
    }
  } catch {
    abrir()
  }
  setTimeout(abrir, TEMPO_MAXIMO_MS)
}
