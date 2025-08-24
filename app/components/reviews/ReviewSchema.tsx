import Script from 'next/script';

interface ReviewSchemaProps {
  reviews: Array<{
    id: number;
    name: string;
    date: string;
    rating: number;
    text: string;
  }>;
  averageRating: number;
  totalReviews: number;
  businessName: string;
  businessUrl: string;
}

export default function ReviewSchema({
  reviews,
  averageRating,
  totalReviews,
  businessName,
  businessUrl
}: ReviewSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "url": businessUrl,
    "telephone": "+1-843-877-5539",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Myrtle Beach",
      "addressRegion": "SC",
      "postalCode": "29577",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.6891,
      "longitude": -78.8867
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": totalReviews,
      "reviewCount": totalReviews
    },
    "review": reviews.slice(0, 10).map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.date,
      "reviewBody": review.text
    })),
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/weathershieldroofing",
      "https://www.google.com/maps/place/Weather+Shield+Roofing",
      "https://www.yelp.com/biz/weather-shield-roofing-myrtle-beach",
      "https://www.bbb.org/weathershield"
    ],
    "image": [
      "https://weathershieldroofing.com/images/logo.jpg",
      "https://weathershieldroofing.com/images/office.jpg",
      "https://weathershieldroofing.com/images/team.jpg"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": businessUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Reviews",
        "item": `${businessUrl}/reviews`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Weather Shield Roofing's average rating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Weather Shield Roofing has an average rating of ${averageRating} stars based on ${totalReviews} verified customer reviews across multiple platforms including Google, Facebook, Yelp, and BBB.`
        }
      },
      {
        "@type": "Question",
        "name": "How many reviews does Weather Shield Roofing have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Weather Shield Roofing has received over ${totalReviews} verified customer reviews. We maintain a 100% response rate to customer feedback and consistently earn 5-star ratings for our roofing, siding, and gutter services in Myrtle Beach.`
        }
      },
      {
        "@type": "Question",
        "name": "Where can I read Weather Shield Roofing reviews?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can read Weather Shield Roofing reviews on multiple platforms including Google Business Profile, Facebook, Yelp, and the Better Business Bureau (BBB). We encourage all customers to share their experiences to help others make informed decisions."
        }
      },
      {
        "@type": "Question",
        "name": "How can I leave a review for Weather Shield Roofing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can leave a review for Weather Shield Roofing on Google, Facebook, Yelp, or BBB. We appreciate all feedback and respond to every review. Your experience helps other homeowners in Myrtle Beach find quality roofing services."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": businessName,
    "alternateName": "Weather Shield",
    "url": businessUrl,
    "logo": "https://weathershieldroofing.com/logo.png",
    "description": "Weather Shield Roofing is Myrtle Beach's premier roofing contractor, specializing in residential and commercial roofing, siding, and gutter services. With over 15 years of experience and 500+ 5-star reviews.",
    "foundingDate": "2009",
    "founders": [
      {
        "@type": "Person",
        "name": "Founder Name"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-843-877-5539",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Myrtle Beach"
      },
      {
        "@type": "City",
        "name": "Conway"
      },
      {
        "@type": "City",
        "name": "North Myrtle Beach"
      },
      {
        "@type": "City",
        "name": "Surfside Beach"
      },
      {
        "@type": "City",
        "name": "Garden City"
      }
    ],
    "award": [
      "GAF Certified Contractor",
      "BBB A+ Rating",
      "Best of Myrtle Beach 2023"
    ]
  };

  return (
    <>
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}