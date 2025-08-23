'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Home, 
  Wrench, 
  Wind, 
  Shield, 
  Droplets, 
  Building2,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Star,
  TrendingUp,
  Sparkles,
  BadgeCheck
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  features: string[];
  priceRange?: string;
  timeframe?: string;
  highlight?: string;
  badge?: 'popular' | 'sale' | 'new' | 'emergency';
  rating?: number;
}

const services: Service[] = [
  {
    title: 'Roof Replacement',
    description: 'Complete roof replacement with premium GAF materials and expert installation.',
    icon: <Home className="w-8 h-8" />,
    href: '/services/roof-replacement',
    features: [
      'GAF Premium shingles',
      'Complete tear-off & disposal',
      'Lifetime material warranty',
      '25-year workmanship guarantee'
    ],
    priceRange: '$8,500 - $15,000',
    timeframe: '2-3 days',
    badge: 'popular',
    rating: 4.9
  },
  {
    title: 'Roof Repair',
    description: 'Fast and reliable roof repair services to protect your home from damage.',
    icon: <Wrench className="w-8 h-8" />,
    href: '/services/roof-repair',
    features: [
      'Leak detection & repair',
      'Shingle replacement',
      'Flashing & seal repair',
      'Same-day service available'
    ],
    priceRange: '$350 - $2,500',
    timeframe: '2-4 hours',
    rating: 4.8
  },
  {
    title: 'Storm Damage',
    description: '24/7 emergency response for storm, hurricane, and hail damage.',
    icon: <Wind className="w-8 h-8" />,
    href: '/services/storm-damage',
    features: [
      '60-minute response time',
      'Insurance claim assistance',
      'Emergency tarping',
      'Full restoration services'
    ],
    priceRange: 'Insurance Covered',
    timeframe: 'Immediate',
    badge: 'emergency',
    rating: 5.0
  },
  {
    title: 'Roof Inspections',
    description: 'Comprehensive roof inspections with drone technology and detailed reports.',
    icon: <Shield className="w-8 h-8" />,
    href: '/services/roof-inspections',
    features: [
      'FREE initial inspection',
      'Drone & thermal imaging',
      'Insurance documentation',
      'Preventive care plan'
    ],
    priceRange: 'FREE - $500',
    timeframe: '1 hour',
    badge: 'sale',
    rating: 4.9
  },
  {
    title: 'Gutter Services',
    description: 'Complete gutter solutions including installation, repair, and guards.',
    icon: <Droplets className="w-8 h-8" />,
    href: '/services/gutter-services',
    features: [
      'Seamless 6" gutters',
      'LeafGuard® systems',
      'Cleaning & maintenance',
      'Downspout optimization'
    ],
    priceRange: '$1,200 - $3,500',
    timeframe: '1 day',
    rating: 4.7
  },
  {
    title: 'Commercial Roofing',
    description: 'Professional commercial roofing for businesses and property managers.',
    icon: <Building2 className="w-8 h-8" />,
    href: '/services/commercial',
    features: [
      'TPO & EPDM systems',
      'Metal roof coating',
      'Preventive maintenance',
      'Weekend installation'
    ],
    priceRange: 'Custom Quote',
    timeframe: 'Flexible',
    badge: 'new',
    rating: 4.8
  }
];

const badgeConfig = {
  popular: {
    text: 'MOST POPULAR',
    color: 'bg-gradient-to-r from-weather-amber to-weather-amber-dark',
    icon: <TrendingUp className="w-3 h-3" />
  },
  sale: {
    text: 'SPECIAL OFFER',
    color: 'bg-gradient-to-r from-green-500 to-green-600',
    icon: <Sparkles className="w-3 h-3" />
  },
  new: {
    text: 'NEW SERVICE',
    color: 'bg-gradient-to-r from-weather-navy to-weather-navy-dark',
    icon: <Star className="w-3 h-3" />
  },
  emergency: {
    text: '24/7 EMERGENCY',
    color: 'bg-gradient-to-r from-red-500 to-red-600',
    icon: <Clock className="w-3 h-3" />
  }
};

export default function ServiceShowcase() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-weather-light to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-weather-amber/10 text-weather-amber px-4 py-2 rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <BadgeCheck className="w-4 h-4" />
            <span className="text-sm font-bold">GAF MASTER ELITE SERVICES</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-weather-navy mb-4">
            Premium Roofing Solutions
          </h2>
          <p className="text-xl text-weather-dark max-w-3xl mx-auto">
            Industry-leading expertise with transparent pricing and guaranteed satisfaction
          </p>
        </motion.div>

        {/* Services Grid with 3D Effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === index ? 'perspective(1000px) rotateY(-5deg)' : 'perspective(1000px) rotateY(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <div className="relative bg-white rounded-2xl shadow-elevation-2 hover:shadow-elevation-4 transition-all duration-300 h-full group overflow-hidden">
                {/* 3D Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-weather-navy/5 to-weather-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                {service.badge && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <motion.div 
                      className={`${badgeConfig[service.badge].color} text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1`}
                      animate={{ rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      {badgeConfig[service.badge].icon}
                      {badgeConfig[service.badge].text}
                    </motion.div>
                  </div>
                )}

                <div className="p-8 relative z-10">
                  {/* Icon with Animation */}
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-weather-navy/10 to-weather-amber/10 rounded-2xl mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-weather-navy">
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Title & Rating */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-display font-bold text-weather-navy">
                      {service.title}
                    </h3>
                    {service.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-bold text-weather-dark">{service.rating}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-weather-dark mb-4">
                    {service.description}
                  </p>

                  {/* Price & Time */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-weather-gray/30">
                    {service.priceRange && (
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-weather-amber" />
                        <span className="text-sm font-bold text-weather-navy">{service.priceRange}</span>
                      </div>
                    )}
                    {service.timeframe && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-weather-amber" />
                        <span className="text-sm text-weather-dark">{service.timeframe}</span>
                      </div>
                    )}
                  </div>

                  {/* Features with Animation */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <CheckCircle className="w-5 h-5 text-weather-amber flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-weather-dark">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button with 3D Effect */}
                  <Link href={service.href}>
                    <motion.button
                      className="w-full bg-gradient-to-r from-weather-navy to-weather-navy-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-weather-navy via-weather-navy-dark to-weather-navy rounded-3xl p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute top-10 left-10 w-32 h-32 bg-weather-amber rounded-full blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-40 h-40 bg-weather-amber rounded-full blur-3xl"
              animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white text-center lg:text-left">
              <motion.div 
                className="inline-flex items-center gap-2 bg-weather-amber/20 text-weather-amber px-4 py-2 rounded-full mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold">AVAILABLE 24/7</span>
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold mb-3">
                Storm Damage? We're Here to Help!
              </h3>
              <p className="text-lg opacity-90">
                Immediate response • Insurance assistance • Expert repairs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:843-877-5539"
                className="bg-weather-amber text-weather-navy px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Clock className="w-5 h-5 animate-pulse" />
                Emergency: (843) 877-5539
              </motion.a>
              <Link href="/quote">
                <motion.button
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-weather-navy transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DollarSign className="w-5 h-5" />
                  Get Free Quote
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}