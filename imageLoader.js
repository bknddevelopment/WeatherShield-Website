export default function myImageLoader({ src, width, quality }) {
  // For production on GitHub Pages, use direct image paths
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    // If src already starts with http, return as is
    if (src.startsWith('http')) {
      return src;
    }
    // For local images, prepend the basePath
    return `/WeatherShield-Website${src}`;
  }
  // For development, return the src as is
  return src;
}