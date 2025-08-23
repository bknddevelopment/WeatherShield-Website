'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { 
  Shield, 
  Phone, 
  Star, 
  ChevronRight, 
  CheckCircle,
  CloudRain,
  Home,
  Award,
  Clock,
  BadgeCheck,
  TrendingUp
} from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  showEmergencyCTA?: boolean;
}

export default function HeroSection({
  title = "Elite Roofing Protection for Your Greatest Investment",
  subtitle = "GAF Master Elite® Contractor - Top 2% Nationwide",
  backgroundImage = "/images/hero-roof.jpg",
  backgroundVideo = "/videos/roofing-hero.mp4",
  showEmergencyCTA = true
}: HeroSectionProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-[800px] lg:min-h-[900px] flex items-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-weather-black/90 via-weather-navy-dark/70 to-weather-black/60 z-10" />
        {backgroundVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
            {/* Fallback to image if video doesn't load */}
            <Image
              src={backgroundImage}
              alt="Professional roofing services"
              fill
              className="object-cover"
              priority
            />
          </video>
        ) : (
          <Image
            src={backgroundImage}
            alt="Professional roofing services"
            fill
            className="object-cover"
            priority
          />
        )}
      </motion.div>

      {/* Logo Watermark - Subtle Background Element */}
      <motion.div
        className="absolute bottom-10 right-10 z-10 opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Image
          src="/images/logo/weather_shield_roofing_transparent.png"
          alt=""
          width={400}
          height={140}
          className="w-96 h-auto"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-20"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* GAF Master Elite Badge - Prominent Positioning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-8"
            >
              <div className="bg-gradient-to-br from-weather-amber to-weather-amber-dark p-1 rounded-xl shadow-2xl">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-6 py-4 flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-weather-amber/20 animate-pulse rounded-full blur-xl"></div>
                    <Award className="w-12 h-12 text-weather-amber relative" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-weather-navy uppercase tracking-wider">GAF Certified</p>
                    <p className="text-lg font-display font-bold text-weather-navy-dark">Master Elite® Contractor</p>
                    <p className="text-xs text-weather-dark">Top 2% of Roofing Contractors Nationwide</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Emergency Badge */}
            {showEmergencyCTA && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-weather-danger/20 backdrop-blur-sm border border-weather-danger/30 text-white px-4 py-2 rounded-full mb-6"
              >
                <CloudRain className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-semibold">24/7 Emergency • Response in 60 Minutes</span>
              </motion.div>
            )}

            {/* Main Title with Better Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl lg:text-2xl text-gray-200 mb-8 font-light"
            >
              {subtitle}
            </motion.p>

            {/* Animated Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <CheckCircle className="w-5 h-5 text-weather-amber flex-shrink-0" />
                <span className="text-sm">Lifetime Warranty Available</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <BadgeCheck className="w-5 h-5 text-weather-amber flex-shrink-0" />
                <span className="text-sm">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <TrendingUp className="w-5 h-5 text-weather-amber flex-shrink-0" />
                <span className="text-sm">$50M+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Clock className="w-5 h-5 text-weather-amber flex-shrink-0" />
                <span className="text-sm">Same-Day Estimates</span>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/quote"
                className="group bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white px-8 py-4 rounded-lg font-bold text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free Inspection
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:843-877-5539"
                className="group bg-white/95 backdrop-blur-sm text-weather-navy px-8 py-4 rounded-lg font-bold text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                (843) 877-5539
                <span className="text-xs font-normal">24/7</span>
              </a>
            </motion.div>

            {/* Animated Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mt-8"
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-white text-sm font-semibold">5.0 Google</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-white"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="w-5 h-5 text-weather-amber" />
                <span className="text-sm font-semibold">BBB A+ Rated</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-white"
                whileHover={{ scale: 1.05 }}
              >
                <Home className="w-5 h-5 text-weather-amber" />
                <span className="text-sm font-semibold">10,000+ Roofs</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Trust Badges Section (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="space-y-6">
              {/* Primary Trust Badge with Animation */}
              <motion.div 
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center relative overflow-hidden"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-0 right-0 bg-weather-amber text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  VERIFIED 2024
                </div>
                <motion.div 
                  className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-weather-amber to-weather-amber-dark rounded-full mb-4 shadow-lg"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Award className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-weather-navy mb-2">
                  GAF Master Elite®
                </h3>
                <p className="text-weather-dark mb-4">
                  Exclusive contractor status - Only 2% qualify nationwide
                </p>
                <div className="flex items-center justify-center gap-2 text-weather-navy">
                  <BadgeCheck className="w-5 h-5" />
                  <span className="text-sm font-semibold">
                    Factory-Certified Installation
                  </span>
                </div>
              </motion.div>

              {/* Stats Grid with Animations */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="text-3xl font-display font-bold text-weather-navy">25+</p>
                  <p className="text-sm text-weather-dark">Years Experience</p>
                </motion.div>
                <motion.div 
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="text-3xl font-display font-bold text-weather-navy">A+</p>
                  <p className="text-sm text-weather-dark">BBB Rating</p>
                </motion.div>
                <motion.div 
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="text-3xl font-display font-bold text-weather-navy">100%</p>
                  <p className="text-sm text-weather-dark">Satisfaction</p>
                </motion.div>
                <motion.div 
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="text-3xl font-display font-bold text-weather-navy">60min</p>
                  <p className="text-sm text-weather-dark">Emergency Response</p>
                </motion.div>
              </div>

              {/* Payment & Reviews */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                <p className="text-center text-sm text-weather-dark mb-4 font-semibold">Trusted by Homeowners</p>
                <div className="flex justify-center items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/icons/Google__G__Logo-512.webp"
                      alt="Google Reviews"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-weather-dark">Financing Available</p>
                    <p className="text-sm font-bold text-weather-navy">0% APR Options</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator with Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <motion.div 
            className="w-1 h-3 bg-weather-amber rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}