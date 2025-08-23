export default function myImageLoader({ src, width, quality }) {
  // Always return the direct image path for static export
  // This ensures images work on GitHub Pages without Next.js image optimization
  
  // If src already starts with http, return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For production builds (static export), prepend the basePath
  const isProd = process.env.NODE_ENV === 'production';
  if (isProd) {
    return `/WeatherShield-Website${src}`;
  }
  
  // For development, return the src as is
  return src;
}