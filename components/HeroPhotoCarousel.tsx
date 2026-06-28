'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { HOME_HERO_IMAGES } from '@/lib/galleryImages'

const INTERVAL_MS = 2500
const FADE_MS = 1000

export default function HeroPhotoCarousel({ startIndex = 1 }: { startIndex?: number }) {
  const [current, setCurrent] = useState(startIndex)
  const [next, setNext] = useState<number | null>(null)
  const [hydrated, setHydrated] = useState(false)
  const currentRef = useRef(startIndex)
  const transitioning = useRef(false)

  const advance = useCallback(() => {
    if (transitioning.current) return
    transitioning.current = true
    const nextIdx = (currentRef.current + 1) % HOME_HERO_IMAGES.length
    setNext(nextIdx)

    setTimeout(() => {
      currentRef.current = nextIdx
      setCurrent(nextIdx)
      setNext(null)
      transitioning.current = false
    }, FADE_MS)
  }, [])

  useEffect(() => {
    setHydrated(true)
    const staticEl = document.querySelector('[data-static-hero]')
    if (staticEl) (staticEl as HTMLElement).style.opacity = '0'

    const interval = setInterval(advance, INTERVAL_MS)
    return () => clearInterval(interval)
  }, [advance])

  const currentImage = HOME_HERO_IMAGES[current]
  const nextImage = next !== null ? HOME_HERO_IMAGES[next] : null

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${
        hydrated ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-[#111111]">
        <img
          key={`current-${current}`}
          src={currentImage.src}
          alt={currentImage.alt}
          width={currentImage.width}
          height={currentImage.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>
      {nextImage && (
        <div className="absolute inset-0 bg-[#111111] animate-fade-in">
          <img
            key={`next-${next}`}
            src={nextImage.src}
            alt={nextImage.alt}
            width={nextImage.width}
            height={nextImage.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
      )}
    </div>
  )
}
