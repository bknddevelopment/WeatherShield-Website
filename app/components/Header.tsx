'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StaticImage from './StaticImage';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail,
  MapPin,
  Clock,
  Shield,
  Home,
  Wrench,
  Droplets,
  Wind,
  Star,
  Award,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

interface ServiceLink {
  title: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  badge?: string;
}

const services: ServiceLink[] = [
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    icon: <Home className="w-5 h-5" />,
    description: 'Complete roof replacement services',
    badge: 'Most Popular'
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    icon: <Wrench className="w-5 h-5" />,
    description: 'Expert roof repair solutions'
  },
  {
    title: 'Storm Damage',
    href: '/services/storm-damage',
    icon: <Wind className="w-5 h-5" />,
    description: 'Emergency storm damage repair',
    badge: '24/7'
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    icon: <Shield className="w-5 h-5" />,
    description: 'Professional roof inspections',
    badge: 'Free'
  },
  {
    title: 'Gutter Services',
    href: '/services/gutter-services',
    icon: <Droplets className="w-5 h-5" />,
    description: 'Gutter installation and repair'
  }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Enhanced Top Bar with Better CTAs */}
      <div className="bg-gradient-to-r from-weather-navy to-weather-navy-dark text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-1 sm:mb-0">
              <motion.a 
                href="tel:843-877-5539" 
                className="flex items-center gap-2 font-semibold hover:text-weather-amber transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <Phone className="w-4 h-4 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-weather-amber rounded-full animate-ping"></div>
                </div>
                <span className="group-hover:underline">(843) 877-5539</span>
                <span className="text-weather-amber text-xs font-bold">24/7</span>
              </motion.a>
              <span className="hidden sm:inline opacity-50">|</span>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-weather-amber" />
                <span className="font-semibold">GAF Certified Contractor</span>
              </div>
            </div>
            <motion.div 
              className="flex items-center gap-2 bg-weather-danger/20 px-3 py-1 rounded-full"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertCircle className="w-3 h-3 text-weather-amber" />
              <span className="text-xs font-semibold">Storm Emergency? We're Here 24/7</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Header with Enhanced Sticky Behavior */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-elevation-3' 
            : 'bg-white shadow-sm'
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <StaticImage
                  src="/images/logo/weather_shield_roofing_transparent.png"
                  alt="Weather Shield Roofing"
                  width={200}
                  height={70}
                  className="h-16 sm:h-[70px] w-auto"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation with Enhanced Styling */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link 
                href="/" 
                className="text-weather-dark hover:text-weather-navy transition-colors font-semibold relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-weather-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Enhanced Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="flex items-center gap-1 text-weather-dark hover:text-weather-navy transition-colors font-semibold relative group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-weather-teal transition-all duration-300 group-hover:w-full"></span>
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-elevation-4 border border-weather-gray/20 overflow-hidden"
                    >
                      <div className="p-2">
                        {services.map((service, index) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-weather-navy/5 hover:to-weather-amber/5 transition-all group relative"
                          >
                            {service.badge && (
                              <span className="absolute top-2 right-2 text-xs font-bold text-weather-amber bg-weather-amber/10 px-2 py-1 rounded-full">
                                {service.badge}
                              </span>
                            )}
                            <div className="text-weather-navy mt-1 group-hover:scale-110 transition-transform">
                              {service.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-weather-navy group-hover:text-weather-navy-dark transition-colors">
                                {service.title}
                              </h3>
                              <p className="text-sm text-weather-dark mt-0.5">{service.description}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-weather-navy/30 group-hover:text-weather-amber group-hover:translate-x-1 transition-all mt-1" />
                          </Link>
                        ))}
                      </div>
                      <div className="bg-gradient-to-r from-weather-navy to-weather-navy-dark p-3">
                        <Link
                          href="/services"
                          className="text-white text-sm font-semibold hover:text-weather-amber transition-colors flex items-center gap-2"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                href="/about" 
                className="text-weather-dark hover:text-weather-navy transition-colors font-semibold relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-weather-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link 
                href="/gallery" 
                className="text-weather-dark hover:text-weather-navy transition-colors font-semibold relative group"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-weather-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link 
                href="/reviews" 
                className="text-weather-dark hover:text-weather-navy transition-colors font-semibold relative group"
              >
                Reviews
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-weather-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link 
                href="/faq" 
                className="text-weather-dark hover:text-weather-navy transition-colors font-semibold relative group"
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-weather-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link 
                href="/financing" 
                className="text-weather-dark hover:text-weather-navy transition-colors font-semibold relative group"
              >
                Financing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-weather-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link 
                href="/contact" 
                className="text-weather-dark hover:text-weather-navy transition-colors font-semibold relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-weather-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Enhanced CTA Section */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone Number CTA */}
              <motion.a
                href="tel:843-877-5539"
                className="flex items-center gap-2 text-weather-navy font-bold hover:text-weather-amber transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-weather-amber/20 rounded-full animate-ping"></div>
                  <div className="relative bg-weather-amber/10 p-2 rounded-full">
                    <Phone className="w-5 h-5 text-weather-amber" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-weather-dark">Call Now</span>
                  <span className="text-sm">(843) 877-5539</span>
                </div>
              </motion.a>

              {/* Primary CTA Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/quote"
                  className="bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-weather-gray/20 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-weather-dark" />
              ) : (
                <Menu className="w-6 h-6 text-weather-dark" />
              )}
            </button>
          </div>
        </nav>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-weather-gray/20 overflow-hidden shadow-lg"
            >
              <div className="container mx-auto px-4 py-4">
                {/* Mobile Phone CTA */}
                <motion.a
                  href="tel:843-877-5539"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white px-6 py-3 rounded-lg font-bold mb-4"
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: (843) 877-5539</span>
                </motion.a>

                <Link 
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-weather-dark hover:text-weather-navy transition-colors font-semibold border-b border-weather-gray/20"
                >
                  Home
                </Link>
                
                <div className="py-3 border-b border-weather-gray/20">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-weather-dark hover:text-weather-navy transition-colors font-semibold"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 py-2 text-weather-dark hover:text-weather-navy transition-colors"
                            >
                              <div className="text-weather-navy">{service.icon}</div>
                              <span>{service.title}</span>
                              {service.badge && (
                                <span className="text-xs font-bold text-weather-amber bg-weather-amber/10 px-2 py-0.5 rounded-full ml-auto">
                                  {service.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-weather-dark hover:text-weather-navy transition-colors font-semibold border-b border-weather-gray/20"
                >
                  About
                </Link>

                <Link 
                  href="/gallery"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-weather-dark hover:text-weather-navy transition-colors font-semibold border-b border-weather-gray/20"
                >
                  Gallery
                </Link>

                <Link 
                  href="/reviews"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-weather-dark hover:text-weather-navy transition-colors font-semibold border-b border-weather-gray/20"
                >
                  Reviews
                </Link>

                <Link 
                  href="/faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-weather-dark hover:text-weather-navy transition-colors font-semibold border-b border-weather-gray/20"
                >
                  FAQ
                </Link>

                <Link 
                  href="/financing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-weather-dark hover:text-weather-navy transition-colors font-semibold border-b border-weather-gray/20"
                >
                  Financing
                </Link>

                <Link 
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-weather-dark hover:text-weather-navy transition-colors font-semibold border-b border-weather-gray/20"
                >
                  Contact
                </Link>

                <Link
                  href="/quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-4 bg-gradient-to-r from-weather-navy to-weather-navy-dark text-white px-6 py-3 rounded-lg font-bold text-center shadow-lg"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Emergency Banner (Shows on scroll) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-weather-danger to-weather-amber text-white py-2 text-center shadow-lg"
          >
            <div className="container mx-auto px-4 flex items-center justify-center gap-3">
              <AlertCircle className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-bold">Storm Damage? Emergency Response Available 24/7</span>
              <a href="tel:843-877-5539" className="underline font-bold hover:text-weather-navy transition-colors">
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}