import { getPostImage } from '@/lib/galleryImages'

interface BlogPhotoProps {
  seed: string
  alt: string
  className?: string
}

export default function BlogPhoto({ seed, alt, className = '' }: BlogPhotoProps) {
  const image = getPostImage(seed)

  return (
    <img
      src={image.src}
      alt={alt}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
      className={`w-full object-cover ${className}`}
    />
  )
}
