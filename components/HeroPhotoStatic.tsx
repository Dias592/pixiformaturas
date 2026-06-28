import { HOME_HERO_IMAGES } from '@/lib/galleryImages'

export default function HeroPhotoStatic() {
  const image = HOME_HERO_IMAGES[0]

  return (
    <div className="h-full w-full bg-[#111111]">
      <img
        data-static-hero
        src={image.src}
        alt={image.alt}
        width={1280}
        height={853}
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="h-full w-full object-contain transition-opacity duration-700"
      />
    </div>
  )
}
