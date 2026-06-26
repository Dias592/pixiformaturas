'use client'

import { useState, useEffect } from 'react'
import { HOME_HERO_IMAGES } from '@/lib/galleryImages'

export default function HeroPhotoCarousel({ startIndex = 1 }: { startIndex?: number }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
    const staticEl = document.querySelector('[data-static-hero]')
    if (staticEl) (staticEl as HTMLElement).style.opacity = '0'

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HOME_HERO_IMAGES.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${
        hydrated ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {HOME_HERO_IMAGES.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={index === startIndex ? 'eager' : 'lazy'}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}
