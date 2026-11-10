import { getPostImage } from '@/lib/galleryImages'

interface BlogPhotoProps {
  seed: string
  alt: string
  className?: string
  priority?: boolean
  /** Posição fixa do artigo (BlogPost.coverRank). Sem ela, a foto vem de um hash fixo do seed. */
  rank?: number
}

export default function BlogPhoto({ seed, alt, className = '', priority = false, rank }: BlogPhotoProps) {
  const image = getPostImage(seed, rank)

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
