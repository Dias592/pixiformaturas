interface PlaceholderImageProps {
  alt: string
  className?: string
  aspect?: string
}

export default function PlaceholderImage({
  alt,
  className = '',
  aspect = 'aspect-[4/5]',
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-bgCard border border-borderC text-textMuted text-sm text-center p-4 ${aspect} ${className}`}
    >
      📷 Foto do portfólio — será substituída
    </div>
  )
}
