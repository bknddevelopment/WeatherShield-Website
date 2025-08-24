'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { 
  Shield, 
  Award, 
  Star, 
  CheckCircle,
  TrendingUp,
  Users,
  ThumbsUp,
  Building,
  Clock,
  Phone,
  BadgeCheck,
  AlertCircle,
  Zap,
  HeartHandshake
} from 'lucide-react';

const certifications = [
  {
    name: 'BBB Accredited',
    rating: 'A+ Rating',
    icon: <Award className="w-8 h-8" />,
    description: 'Better Business Bureau',
    verified: true,
    yearEst: '2010'
  },
  {
    name: 'GAF Certified',
    rating: 'Certified',
    icon: <BadgeCheck className="w-8 h-8" />,
    description: 'Nationwide Certification',
    verified: true,
    featured: true
  },
  {
    name: 'Google Reviews',
    rating: '5.0 Stars',
    icon: <Star className="w-8 h-8" />,
    description: '500+ Reviews',
    verified: true
  },
  {
    name: 'Emergency Response',
    rating: '60 Min',
    icon: <Zap className="w-8 h-8" />,
    description: '24/7 Availability',
    emergency: true
  }
];

const manufacturers = [
  { name: 'GAF', certification: 'Certified Contractor', premium: true },
  { name: 'Owens Corning', certification: 'Platinum Preferred' },
  { name: 'CertainTeed', certification: 'SELECT ShingleMaster™' },
  { name: 'TAMKO', certification: 'Pro Certified Contractor' }
];

const achievements = [
  { 
    number: '25+', 
    label: 'Years Serving Myrtle Beach', 
    icon: <Building className="w-6 h-6" />,
    animate: true
  },
  { 
    number: '10,000+', 
    label: 'Roofs Installed', 
    icon: <CheckCircle className="w-6 h-6" />,
    animate: true
  },
  { 
    number: '100%', 
    label: 'Satisfaction Guaranteed', 
    icon: <HeartHandshake className="w-6 h-6" />,
    animate: true
  },
  { 
    number: '24/7', 
    label: 'Emergency Service', 
    icon: <Clock className="w-6 h-6" />,
    pulse: true
  }
];

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start > target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function TrustIndicators() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-weather-light relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-weather-navy rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-weather-amber rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white px-6 py-2 rounded-full mb-6 shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Shield className="w-5 h-5" />
            <span className="font-bold text-sm">TRUSTED SINCE 1999</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-weather-navy mb-4">
            Why Myrtle Beach Trusts Us
          </h2>
          <p className="text-xl text-weather-dark max-w-3xl mx-auto">
            Industry-leading certifications, unmatched response times, and a proven track record of excellence
          </p>
        </motion.div>

        {/* Enhanced Certifications Grid with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`relative bg-white rounded-2xl shadow-elevation-2 hover:shadow-elevation-4 p-6 text-center transition-all duration-300 group ${
                cert.featured ? 'ring-2 ring-weather-amber ring-offset-2' : ''
              }`}
            >
              {cert.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white text-xs font-bold px-3 py-1 rounded-full">
                  FEATURED
                </div>
              )}
              
              {cert.emergency && (
                <motion.div 
                  className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}

              <motion.div 
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                  cert.featured 
                    ? 'bg-gradient-to-br from-weather-amber/20 to-weather-amber/10' 
                    : 'bg-weather-navy/10'
                } group-hover:scale-110 transition-transform`}
                animate={cert.emergency ? { rotate: [0, 5, -5, 0] } : {}}
                transition={cert.emergency ? { duration: 2, repeat: Infinity } : {}}
              >
                <div className={cert.featured ? 'text-weather-amber' : 'text-weather-navy'}>
                  {cert.icon}
                </div>
              </motion.div>
              
              <h3 className="text-lg font-bold text-weather-navy mb-1">{cert.name}</h3>
              <p className={`text-2xl font-display font-bold mb-2 ${
                cert.featured ? 'text-weather-amber' : 'text-weather-navy-dark'
              }`}>
                {cert.rating}
              </p>
              <p className="text-sm text-weather-dark">{cert.description}</p>
              
              {cert.verified && (
                <div className="flex items-center justify-center gap-1 mt-3 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs font-semibold">Verified</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Manufacturer Certifications with Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white to-weather-light rounded-3xl shadow-elevation-3 p-8 lg:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-weather-amber/10 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-weather-navy to-weather-navy-dark rounded-full mb-4 shadow-lg"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-3xl font-display font-bold text-weather-navy mb-2">
              Factory-Certified Installer
            </h3>
            <p className="text-weather-dark">
              Authorized to install and warranty premium roofing systems from industry leaders
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturers.map((mfg, index) => (
              <motion.div 
                key={mfg.name} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`bg-white rounded-xl p-6 shadow-md group-hover:shadow-xl transition-all duration-300 ${
                  mfg.premium ? 'ring-2 ring-weather-amber ring-offset-2' : ''
                }`}>
                  <div className="h-16 flex items-center justify-center mb-3">
                    <div className="text-2xl font-display font-bold text-weather-navy">
                      {mfg.name}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-weather-amber">{mfg.certification}</p>
                  {mfg.premium && (
                    <div className="mt-2 text-xs text-weather-amber font-bold">
                      ELITE STATUS
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-weather-navy via-weather-navy-dark to-weather-navy rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mb-4"
                  animate={achievement.pulse ? { scale: [1, 1.1, 1] } : {}}
                  transition={achievement.pulse ? { duration: 2, repeat: Infinity } : {}}
                >
                  {achievement.icon}
                </motion.div>
                <div className="text-4xl lg:text-5xl font-display font-bold mb-2">
                  {achievement.animate && achievement.number.includes('+') ? (
                    <>
                      <AnimatedCounter target={parseInt(achievement.number.replace(/[^0-9]/g, ''))} />
                      {achievement.number.includes('+') ? '+' : ''}
                    </>
                  ) : (
                    achievement.number
                  )}
                </div>
                <div className="text-sm opacity-90">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Trust Statement with Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-weather-amber text-white px-6 py-3 rounded-full mb-6 shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <AlertCircle className="w-5 h-5 animate-pulse" />
            <span className="font-bold">STORM DAMAGE? WE'RE HERE 24/7</span>
          </motion.div>
          
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-weather-navy mb-4">
            Join 10,000+ Protected Homes
          </h3>
          <p className="text-lg text-weather-dark max-w-2xl mx-auto mb-8">
            Don't wait for the next storm. Get your FREE inspection today and ensure your home is protected 
            by Myrtle Beach's most trusted roofing experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:843-877-5539"
              className="bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 animate-pulse" />
              Call Now: (843) 877-5539
            </motion.a>
            <motion.a
              href="/quote"
              className="bg-white border-2 border-weather-navy text-weather-navy px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-weather-navy hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Inspection
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const React = require('react');