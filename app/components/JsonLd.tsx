interface LocalBusinessProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  image?: string[];
  sameAs?: string[];
}

interface ServiceProps {
  name: string;
  description: string;
  provider?: LocalBusinessProps;
  areaServed?: string[];
  serviceType?: string;
  url?: string;
}

interface FAQProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

interface BreadcrumbProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

interface ReviewProps {
  reviews: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function LocalBusinessJsonLd({
  name = 'Weather Shield Roofing',
  description = 'Professional roofing services in Myrtle Beach, SC. Specializing in roof replacement, repair, storm damage, and 24/7 emergency service.',
  url = 'https://weathershieldroofing.com',
  telephone = '843-877-5539',
  address = {
    streetAddress: '215 Ronnie Ct. Unit F',
    addressLocality: 'Myrtle Beach',
    addressRegion: 'SC',
    postalCode: '29579',
    addressCountry: 'US'
  },
  geo = {
    latitude: 33.6891,
    longitude: -78.8867
  },
  openingHours = [
    'Mo-Fr 09:00-17:00',
    'Sa 00:00-23:59',
    'Su 00:00-23:59'
  ],
  priceRange = '$$',
  image = [
    'https://weathershieldroofing.com/images/logo.png',
    'https://weathershieldroofing.com/images/office.jpg'
  ],
  sameAs = [
    'https://www.facebook.com/weathershieldroofing',
    'https://www.instagram.com/weathershieldroofing',
    'https://twitter.com/weathershieldroofing'
  ]
}: LocalBusinessProps = {}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name,
    description,
    url,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...geo
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '00:00',
        closes: '23:59'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '00:00',
        closes: '23:59'
      }
    ],
    priceRange,
    image,
    sameAs,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Replacement',
            description: 'Complete roof replacement with premium materials'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roof Repair',
            description: 'Professional roof repair services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Emergency Storm Damage Repair',
            description: '24/7 emergency roofing services'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  provider = {},
  areaServed = ['Myrtle Beach', 'Conway', 'North Myrtle Beach', 'Surfside Beach'],
  serviceType = 'Roofing Service',
  url = ''
}: ServiceProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'RoofingContractor',
      name: 'Weather Shield Roofing',
      ...provider
    },
    areaServed: areaServed.map(area => ({
      '@type': 'City',
      name: area
    })),
    serviceType,
    url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQJsonLd({ questions }: FAQProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: BreadcrumbProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ReviewJsonLd({ reviews, aggregateRating }: ReviewProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Weather Shield Roofing',
    aggregateRating: aggregateRating && {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      datePublished: review.datePublished,
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Weather Shield Roofing',
    url: 'https://weathershieldroofing.com',
    logo: 'https://weathershieldroofing.com/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '843-877-5539',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://www.facebook.com/weathershieldroofing',
      'https://www.instagram.com/weathershieldroofing',
      'https://twitter.com/weathershieldroofing'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Export all components for easy access
export const JsonLd = {
  LocalBusiness: LocalBusinessJsonLd,
  Service: ServiceJsonLd,
  FAQ: FAQJsonLd,
  Breadcrumb: BreadcrumbJsonLd,
  Review: ReviewJsonLd,
  Organization: OrganizationJsonLd
};

export default JsonLd;