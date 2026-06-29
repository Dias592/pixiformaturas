'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { HOME_HERO_IMAGES } from '@/lib/galleryImages'

const INTERVAL_MS = 2500
const FADE_MS = 1000
const PRELOAD_BEFORE_MS = 800

export default function HeroPhotoCarousel({ startIndex = 1 }: { startIndex?: number }) {
  const [current, setCurrent] = useState(startIndex)
  const [next, setNext] = useState<number | null>(null)
  const [hydrated, setHydrated] = useState(false)
  const currentRef = useRef(startIndex)
  const transitioning = useRef(false)
  const preloadedRef = useRef<Set<string>>(new Set())

  const getNextIdx = useCallback((idx: number) => (idx + 1) % HOME_HERO_IMAGES.length, [])

  const preloadImage = useCallback((idx: number) => {
    const src = HOME_HERO_IMAGES[idx].src
    if (preloadedRef.current.has(src)) return
    preloadedRef.current.add(src)
    const img = new Image()
    img.src = src
  }, [])

  useEffect(() => {
    setHydrated(true)
    const staticEl = document.querySelector('[data-static-hero]')
    if (staticEl) (staticEl as HTMLElement).style.opacity = '0'

    const preloadTimer = setInterval(() => {
      if (transitioning.current) return
      preloadImage(getNextIdx(currentRef.current))
    }, INTERVAL_MS - PRELOAD_BEFORE_MS)

    const transitionTimer = setInterval(() => {
      if (transitioning.current) return
      transitioning.current = true
      const nextIdx = getNextIdx(currentRef.current)
      setNext(nextIdx)

      setTimeout(() => {
        currentRef.current = nextIdx
        setCurrent(nextIdx)
        setNext(null)
        transitioning.current = false
      }, FADE_MS)
    }, INTERVAL_MS)

    return () => {
      clearInterval(preloadTimer)
      clearInterval(transitionTimer)
    }
  }, [getNextIdx, preloadImage])

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
