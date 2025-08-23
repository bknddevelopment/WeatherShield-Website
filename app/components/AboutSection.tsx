'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Shield, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  TrendingUp,
  Heart,
  Home
} from 'lucide-react';

const stats = [
  { value: '14+', label: 'Years of Excellence', icon: <Clock className="w-6 h-6" /> },
  { value: '500+', label: 'Homes Protected', icon: <Home className="w-6 h-6" /> },
  { value: '100%', label: 'Satisfaction Rate', icon: <Heart className="w-6 h-6" /> },
  { value: '24/7', label: 'Emergency Service', icon: <Shield className="w-6 h-6" /> }
];

const values = [
  {
    title: 'Quality First',
    description: 'We use only premium materials and proven installation techniques.',
    icon: <Award className="w-8 h-8" />
  },
  {
    title: 'Customer Focus',
    description: 'Your satisfaction is our top priority in every project we undertake.',
    icon: <Users className="w-8 h-8" />
  },
  {
    title: 'Integrity',
    description: 'Honest pricing, transparent communication, and reliable service.',
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: 'Innovation',
    description: 'Staying ahead with the latest roofing technologies and methods.',
    icon: <TrendingUp className="w-8 h-8" />
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team-working.jpg"
                alt="Weather Shield Roofing team at work"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-weather-black/50 to-transparent" />
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-weather-teal rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-weather-black">14+ Years</p>
                    <p className="text-sm text-weather-dark">Protecting Myrtle Beach Homes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-weather-teal/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-weather-purple/20 rounded-full blur-2xl" />
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
                About Weather Shield
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-weather-black mb-6">
                Your Trusted Roofing Partner Since 2010
              </h2>
              <p className="text-lg text-weather-dark mb-6">
                Weather Shield Roofing has been the cornerstone of quality roofing services in Myrtle Beach 
                and the surrounding areas for over a decade. Our commitment to excellence, combined with our 
                deep understanding of coastal weather challenges, makes us the preferred choice for homeowners 
                and businesses alike.
              </p>
              <p className="text-lg text-weather-dark mb-8">
                We're not just roofers – we're your neighbors, committed to protecting what matters most. 
                Every project we undertake is backed by our dedication to quality, safety, and customer 
                satisfaction.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-weather-teal flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-weather-black mb-1">Licensed & Fully Insured</h4>
                  <p className="text-weather-dark">Complete protection and peace of mind for every project</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-weather-teal flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-weather-black mb-1">Local Expertise</h4>
                  <p className="text-weather-dark">Deep understanding of coastal weather and building codes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-weather-teal flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-weather-black mb-1">Warranty Backed</h4>
                  <p className="text-weather-dark">Industry-leading warranties on materials and workmanship</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/about"
                className="bg-weather-teal text-white px-8 py-4 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
              </a>
              <a
                href="/testimonials"
                className="border-2 border-weather-teal text-weather-teal px-8 py-4 rounded-lg font-semibold text-center hover:bg-weather-teal hover:text-white transition-all duration-300"
              >
                Read Customer Reviews
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-weather-light rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-weather-teal/20 rounded-lg mb-4">
                <div className="text-weather-teal">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold text-weather-black mb-2">{stat.value}</div>
              <div className="text-sm text-weather-dark">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-weather-black mb-4">Our Core Values</h3>
            <p className="text-lg text-weather-dark max-w-2xl mx-auto">
              These principles guide every decision we make and every roof we install
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <div className="text-weather-teal">{value.icon}</div>
                </div>
                <h4 className="text-xl font-semibold text-weather-black mb-2">{value.title}</h4>
                <p className="text-weather-dark">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}