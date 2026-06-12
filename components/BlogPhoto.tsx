import { getPostImage } from '@/lib/galleryImages'

interface BlogPhotoProps {
  seed: string
  alt: string
  className?: string
  priority?: boolean
}

export default function BlogPhoto({ seed, alt, className = '', priority = false }: BlogPhotoProps) {
  const image = getPostImage(seed)

  return (
    <img
      src={image.src}
      alt={alt}
      width={image.width}
      height={image.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
      className={`w-full object-cover ${className}`}
    />
  )
}
