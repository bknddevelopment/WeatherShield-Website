'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle,
  Home,
  Users,
  Shield,
  Star,
  Navigation,
  CloudRain,
  Wind,
  Sun
} from 'lucide-react';
import HeroSection from './HeroSection';
import ServiceShowcase from './ServiceShowcase';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import { JsonLd } from './JsonLd';

interface LocationPageProps {
  city: string;
  state?: string;
  zipCodes: string[];
  population?: string;
  description: string;
  heroImage?: string;
  neighborhoods?: string[];
  weatherChallenges?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  localStats?: Array<{
    value: string;
    label: string;
  }>;
  nearbyAreas?: Array<{
    name: string;
    distance: string;
    href: string;
  }>;
  emergencyResponse?: string;
  localTestimonials?: Array<{
    name: string;
    review: string;
    rating: number;
  }>;
}

export default function LocationPageTemplate({
  city,
  state = 'SC',
  zipCodes,
  population,
  description,
  heroImage = '/images/location-hero.jpg',
  neighborhoods = [],
  weatherChallenges = [
    {
      icon: <CloudRain className="w-6 h-6" />,
      title: 'Heavy Rainfall',
      description: 'Annual rainfall requires proper drainage and waterproofing'
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'Hurricane Season',
      description: 'Storm-resistant materials and installation methods'
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: 'UV Exposure',
      description: 'High UV levels require durable, fade-resistant materials'
    }
  ],
  localStats = [
    { value: '2 Hours', label: 'Average Response Time' },
    { value: '100+', label: 'Homes Serviced' },
    { value: '24/7', label: 'Emergency Available' },
    { value: '5 Stars', label: 'Local Rating' }
  ],
  nearbyAreas = [],
  emergencyResponse = '2 hours',
  localTestimonials = []
}: LocationPageProps) {
  return (
    <>
      {/* SEO Schema */}
      <JsonLd.LocalBusiness
        name={`Weather Shield Roofing - ${city}`}
        description={`Professional roofing services in ${city}, ${state}. ${description}`}
        address={{
          addressLocality: city,
          addressRegion: state,
          postalCode: zipCodes[0]
        }}
      />

      {/* Hero Section */}
      <HeroSection
        title={`Premier Roofing Services in ${city}, ${state}`}
        subtitle={description}
        backgroundImage={heroImage}
        showEmergencyCTA={true}
      />

      {/* Location Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map/Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-weather-teal/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Navigation className="w-20 h-20 text-weather-teal/30 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-weather-dark/50 mb-2">{city} Service Area</h3>
                  <p className="text-weather-dark/40">ZIP Codes: {zipCodes.join(', ')}</p>
                  {population && (
                    <p className="text-weather-dark/40 mt-2">Population: {population}</p>
                  )}
                </div>
              </div>
              
              {/* Service Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-weather-teal" />
                  <div>
                    <p className="text-sm text-weather-dark">Emergency Response</p>
                    <p className="text-xl font-bold text-weather-black">{emergencyResponse}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-weather-teal/10 text-weather-teal rounded-full text-sm font-semibold mb-4">
                  Serving {city} Since 2010
                </span>
                <h2 className="text-4xl font-bold text-weather-black mb-6">
                  Your Local Roofing Experts in {city}
                </h2>
                <p className="text-lg text-weather-dark mb-6">
                  {description}
                </p>
                <p className="text-lg text-weather-dark">
                  As {city} residents ourselves, we understand the unique roofing challenges 
                  our community faces. From coastal weather to local building codes, we have 
                  the expertise to protect your home.
                </p>
              </div>

              {/* Local Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {localStats.map((stat) => (
                  <div key={stat.label} className="bg-weather-light rounded-lg p-4">
                    <div className="text-2xl font-bold text-weather-teal mb-1">{stat.value}</div>
                    <div className="text-sm text-weather-dark">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="bg-weather-teal text-white px-8 py-4 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Get Free {city} Quote
                </Link>
                <a
                  href="tel:843-877-5539"
                  className="border-2 border-weather-teal text-weather-teal px-8 py-4 rounded-lg font-semibold text-center hover:bg-weather-teal hover:text-white transition-all duration-300"
                >
                  Call Local Team
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Weather Challenges */}
      <section className="py-16 bg-weather-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-weather-black mb-4">
              {city} Weather Challenges We Handle
            </h2>
            <p className="text-lg text-weather-dark max-w-3xl mx-auto">
              Our roofing solutions are specifically designed to withstand {city}'s unique weather conditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {weatherChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-weather-teal/10 rounded-lg mb-4">
                  <div className="text-weather-teal">{challenge.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-weather-black mb-2">
                  {challenge.title}
                </h3>
                <p className="text-weather-dark">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Neighborhoods */}
      {(neighborhoods.length > 0 || nearbyAreas.length > 0) && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Neighborhoods */}
              {neighborhoods.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-weather-black mb-6">
                    {city} Neighborhoods We Serve
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {neighborhoods.map((neighborhood) => (
                      <div key={neighborhood} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-weather-teal" />
                        <span className="text-weather-dark">{neighborhood}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Nearby Areas */}
              {nearbyAreas.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-weather-black mb-6">
                    Also Serving Nearby Areas
                  </h3>
                  <div className="space-y-3">
                    {nearbyAreas.map((area) => (
                      <Link
                        key={area.name}
                        href={area.href}
                        className="flex items-center justify-between p-4 bg-weather-light rounded-lg hover:bg-weather-gray transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-weather-teal" />
                          <span className="font-semibold text-weather-black group-hover:text-weather-teal transition-colors">
                            {area.name}
                          </span>
                        </div>
                        <span className="text-sm text-weather-dark">{area.distance}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us for Location */}
      <section className="py-16 bg-weather-teal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why {city} Homeowners Choose Weather Shield
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <Home className="w-12 h-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Local Expertise</h4>
              <p className="text-sm opacity-90">Deep knowledge of {city} building codes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Clock className="w-12 h-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Fast Response</h4>
              <p className="text-sm opacity-90">{emergencyResponse} emergency response</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Users className="w-12 h-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Community Trust</h4>
              <p className="text-sm opacity-90">Serving {city} families since 2010</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Shield className="w-12 h-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Guaranteed Work</h4>
              <p className="text-sm opacity-90">Lifetime warranty on workmanship</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      {localTestimonials.length > 0 && (
        <section className="py-16 bg-weather-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-weather-black mb-4">
                What {city} Residents Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-weather-dark mb-4">"{testimonial.review}"</p>
                  <p className="font-semibold text-weather-black">- {testimonial.name}</p>
                  <p className="text-sm text-weather-dark">{city} Resident</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      <ServiceShowcase />

      {/* CTA Section */}
      <CTASection 
        variant="primary"
        title={`Ready to Protect Your ${city} Home?`}
        description={`Get your free roofing inspection and quote today. Serving all of ${city} and surrounding areas.`}
        showFeatures
      />
    </>
  );
}