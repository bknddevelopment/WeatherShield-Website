interface StaticImageProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  className?: string
  style?: React.CSSProperties
  loading?: 'lazy' | 'eager'
}

// This component uses a plain img tag with proper path handling for GitHub Pages
export default function StaticImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  style,
  loading = 'eager'
}: StaticImageProps) {
  // Always prepend the base path for production builds
  // This is evaluated at build time for static export
  const basePath = '/WeatherShield-Website'
  const imageSrc = src.startsWith('/') && !src.startsWith(basePath)
    ? `${basePath}${src}`
    : src
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={loading}
    />
  )
}