'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  style?: React.CSSProperties
  fill?: boolean
  sizes?: string
  quality?: number
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false, 
  className = '',
  style,
  fill = false,
  sizes,
  quality = 75
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  
  useEffect(() => {
    // Check if we're on GitHub Pages
    if (typeof window !== 'undefined') {
      const isGitHubPages = window.location.hostname.includes('github.io')
      const isProduction = process.env.NODE_ENV === 'production'
      
      if (isGitHubPages || isProduction) {
        // For GitHub Pages, prepend the base path if it's a local image
        if (src.startsWith('/') && !src.startsWith('/WeatherShield-Website')) {
          setImageSrc(`/WeatherShield-Website${src}`)
        }
      }
    }
  }, [src])
  
  // For critical images like logos, use a regular img tag with proper path handling
  if (priority && (src.includes('logo') || src.includes('weather_shield'))) {
    const finalSrc = typeof window !== 'undefined' && window.location.hostname.includes('github.io') 
      ? `/WeatherShield-Website${src}` 
      : src
      
    return (
      <img
        src={finalSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        loading="eager"
      />
    )
  }
  
  // For other images, use Next.js Image with unoptimized mode
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={style}
      fill={fill}
      sizes={sizes}
      quality={quality}
      unoptimized={true}
    />
  )
}