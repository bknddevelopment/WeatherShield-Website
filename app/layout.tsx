import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Weather Shield Roofing | Professional Roofing Services in Myrtle Beach, SC',
  description: 'Weather Shield Roofing provides expert roof repair, replacement, and storm damage restoration services in Myrtle Beach, SC. 24/7 emergency service available. Licensed, insured, and trusted by homeowners.',
  keywords: 'roofing, roof repair, roof replacement, storm damage, Myrtle Beach roofing, South Carolina roofing, emergency roof repair, commercial roofing, residential roofing',
  authors: [{ name: 'Weather Shield Roofing' }],
  creator: 'Weather Shield Roofing',
  publisher: 'Weather Shield Roofing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://weathershieldroofing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Weather Shield Roofing | Professional Roofing Services in Myrtle Beach, SC',
    description: 'Expert roof repair, replacement, and storm damage restoration in Myrtle Beach. 24/7 emergency service. Free inspections.',
    url: 'https://weathershieldroofing.com',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/logo/weather_shield_roofing_transparent.png',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing - Myrtle Beach, SC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weather Shield Roofing | Myrtle Beach, SC',
    description: 'Expert roofing services in Myrtle Beach. 24/7 emergency repair. Free inspections.',
    images: ['/images/logo/weather_shield_roofing_transparent.png'],
    creator: '@weathershield',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              "name": "Weather Shield Roofing",
              "image": "https://weathershieldroofing.com/images/logo/weather_shield_roofing_transparent.png",
              "url": "https://weathershieldroofing.com",
              "telephone": "+1-843-877-5539",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "215 Ronnie Ct. Unit F",
                "addressLocality": "Myrtle Beach",
                "addressRegion": "SC",
                "postalCode": "29579",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.6891,
                "longitude": -78.8867
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "Closed",
                  "closes": "Closed"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/weathershieldroofing",
                "https://www.instagram.com/weathershieldroofing",
                "https://www.linkedin.com/company/weather-shield-roofing"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Roofing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Roof Repair"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Roof Replacement"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Storm Damage Restoration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Roof Repair"
                    }
                  }
                ]
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  )
}