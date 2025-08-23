'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  CheckCircle, 
  Phone,
  Navigation,
  Home
} from 'lucide-react';

interface ServiceArea {
  name: string;
  slug: string;
  zipCodes: string[];
  distance?: string;
  featured?: boolean;
}

const serviceAreas: ServiceArea[] = [
  {
    name: 'Myrtle Beach',
    slug: 'myrtle-beach',
    zipCodes: ['29572', '29575', '29579', '29578', '29579'],
    featured: true
  },
  {
    name: 'Conway',
    slug: 'conway',
    zipCodes: ['29526', '29527', '29528'],
    distance: '15 miles',
    featured: true
  },
  {
    name: 'North Myrtle Beach',
    slug: 'north-myrtle-beach',
    zipCodes: ['29582', '29597', '29598'],
    distance: '10 miles',
    featured: true
  },
  {
    name: 'Surfside Beach',
    slug: 'surfside-beach',
    zipCodes: ['29575', '29587'],
    distance: '8 miles'
  },
  {
    name: 'Garden City',
    slug: 'garden-city',
    zipCodes: ['29576'],
    distance: '10 miles'
  },
  {
    name: 'Pawleys Island',
    slug: 'pawleys-island',
    zipCodes: ['29585'],
    distance: '25 miles'
  },
  {
    name: 'Murrells Inlet',
    slug: 'murrells-inlet',
    zipCodes: ['29576'],
    distance: '15 miles'
  },
  {
    name: 'Little River',
    slug: 'little-river',
    zipCodes: ['29566'],
    distance: '20 miles'
  },
  {
    name: 'Socastee',
    slug: 'socastee',
    zipCodes: ['29588'],
    distance: '12 miles'
  },
  {
    name: 'Carolina Forest',
    slug: 'carolina-forest',
    zipCodes: ['29579'],
    distance: '10 miles'
  },
  {
    name: 'Loris',
    slug: 'loris',
    zipCodes: ['29569'],
    distance: '30 miles'
  },
  {
    name: 'Aynor',
    slug: 'aynor',
    zipCodes: ['29511'],
    distance: '25 miles'
  }
];

export default function ServiceAreas() {
  const featuredAreas = serviceAreas.filter(area => area.featured);
  const otherAreas = serviceAreas.filter(area => !area.featured);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-weather-teal/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-weather-teal" />
            <span className="text-weather-teal font-semibold">Service Coverage</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-weather-black mb-4">
            Proudly Serving the Grand Strand
          </h2>
          <p className="text-xl text-weather-dark max-w-3xl mx-auto">
            From Pawleys Island to Little River, we provide premium roofing services throughout Horry County
          </p>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-weather-teal/10 rounded-2xl p-8 mb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Navigation className="w-16 h-16 text-weather-teal/30 mx-auto mb-4" />
              <p className="text-2xl font-bold text-weather-dark/50">Interactive Service Map</p>
              <p className="text-weather-dark/40">Covering 30+ mile radius from Myrtle Beach</p>
            </div>
          </div>
          <div className="h-96 relative z-10">
            {/* Map would go here */}
          </div>
        </motion.div>

        {/* Featured Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-weather-black mb-6 text-center">Primary Service Areas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/locations/${area.slug}`}
                  className="block bg-weather-teal p-6 rounded-xl text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2">{area.name}</h4>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>ZIP: {area.zipCodes[0]}+</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Home className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Same-day service available</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>24/7 emergency response</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Service Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-weather-black mb-6 text-center">All Service Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="bg-weather-light rounded-lg p-4 hover:bg-weather-gray transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-weather-black group-hover:text-weather-teal transition-colors">
                      {area.name}
                    </h4>
                    {area.distance && (
                      <p className="text-sm text-weather-dark">{area.distance}</p>
                    )}
                  </div>
                  <MapPin className="w-5 h-5 text-weather-teal/50 group-hover:text-weather-teal transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Service Area Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-weather-light rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-weather-black mb-4">
                Local Expertise, Rapid Response
              </h3>
              <p className="text-weather-dark mb-6">
                As a local Myrtle Beach company, we understand the unique roofing challenges 
                of coastal living. From hurricane preparedness to salt air corrosion, we have 
                the expertise to protect your home.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-weather-teal flex-shrink-0" />
                  <span className="text-weather-dark">Average response time under 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-weather-teal flex-shrink-0" />
                  <span className="text-weather-dark">Local crews familiar with area building codes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-weather-teal flex-shrink-0" />
                  <span className="text-weather-dark">Established relationships with local suppliers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-weather-teal flex-shrink-0" />
                  <span className="text-weather-dark">Community-focused service and support</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-weather-black mb-4">
                Not Sure If We Service Your Area?
              </h4>
              <p className="text-weather-dark mb-6">
                Give us a call! We're expanding our service area and may be able to help 
                even if you're outside our standard coverage zone.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:843-877-5539"
                  className="flex items-center justify-center gap-2 bg-weather-teal text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call (843) 877-5539
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 border-2 border-weather-teal text-weather-teal px-6 py-3 rounded-lg font-semibold hover:bg-weather-teal hover:text-white transition-all duration-300"
                >
                  Check Service Availability
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}