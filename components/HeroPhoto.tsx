'use client'

import { useEffect, useState } from 'react'
import { HOME_HERO_IMAGES } from '@/lib/galleryImages'

interface HeroPhotoProps {
  className?: string
}

const INTERVAL_MS = 2500

export default function HeroPhoto({ className = '' }: HeroPhotoProps) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((current) => {
          let next = Math.floor(Math.random() * HOME_HERO_IMAGES.length)
          if (next === current && HOME_HERO_IMAGES.length > 1) {
            next = (next + 1) % HOME_HERO_IMAGES.length
          }
          return next
        })
        setVisible(true)
      }, 300)
    }, INTERVAL_MS)

    return () => clearInterval(interval)
  }, [])

  const image = HOME_HERO_IMAGES[index]

  return (
    <div className={`flex h-full w-full items-center justify-center overflow-hidden bg-bgCard ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className={`h-full w-full object-contain transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
