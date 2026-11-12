'use client'

import { useState, useEffect, useRef } from 'react'
import { HOME_HERO_IMAGES } from '@/lib/galleryImages'

const INTERVAL_MS = 2500
const FADE_MS = 1000
// O carrossel só começa depois que a página terminou de carregar.
// Até lá, a foto estática (HeroPhotoStatic) continua visível e é o LCP da página.
const START_DELAY_MS = 2500

export default function HeroPhotoCarousel({ startIndex = 1 }: { startIndex?: number }) {
  // null = nada por cima da foto estática
  const [current, setCurrent] = useState<number | null>(null)
  const [next, setNext] = useState<number | null>(null)
  const currentRef = useRef(startIndex - 1)
  const transitioning = useRef(false)

  useEffect(() => {
    let transitionTimer: ReturnType<typeof setInterval> | undefined
    let startTimer: ReturnType<typeof setTimeout> | undefined

    const preload = (idx: number) =>
      new Promise<void>((resolve) => {
        const img = new Image()
        img.onload = img.onerror = () => resolve()
        img.src = HOME_HERO_IMAGES[idx].src
      })

    const step = async () => {
      if (transitioning.current) return
      transitioning.current = true
      const nextIdx = (currentRef.current + 1) % HOME_HERO_IMAGES.length
      await preload(nextIdx)
      setNext(nextIdx)
      setTimeout(() => {
        currentRef.current = nextIdx
        setCurrent(nextIdx)
        setNext(null)
        transitioning.current = false
      }, FADE_MS)
    }

    const start = () => {
      startTimer = setTimeout(() => {
        step()
        transitionTimer = setInterval(step, INTERVAL_MS + FADE_MS)
      }, START_DELAY_MS)
    }

    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })

    return () => {
      window.removeEventListener('load', start)
      if (startTimer) clearTimeout(startTimer)
      if (transitionTimer) clearInterval(transitionTimer)
    }
  }, [])

  const currentImage = current !== null ? HOME_HERO_IMAGES[current] : null
  const nextImage = next !== null ? HOME_HERO_IMAGES[next] : null

  return (
    <div className="pointer-events-none absolute inset-0">
      {currentImage && (
        <div className="absolute inset-0 bg-[#111111]">
          <img
            key={`current-${current}`}
            src={currentImage.src}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
      )}
      {nextImage && (
        <div className="absolute inset-0 bg-[#111111] animate-fade-in">
          <img
            key={`next-${next}`}
            src={nextImage.src}
            alt={nextImage.alt}
            width={nextImage.width}
            height={nextImage.height}
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
      )}
    </div>
  )
}
