'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, 
  Calendar, 
  DollarSign, 
  Shield, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';

interface CTASectionProps {
  variant?: 'primary' | 'secondary' | 'emergency' | 'quote';
  title?: string;
  description?: string;
  showFeatures?: boolean;
}

export default function CTASection({
  variant = 'primary',
  title,
  description,
  showFeatures = false
}: CTASectionProps) {
  const variants = {
    primary: {
      bg: 'bg-weather-teal',
      title: title || 'Ready to Protect Your Home?',
      description: description || 'Get your free roof inspection and quote today. No obligations, just honest advice.',
      buttons: [
        { text: 'Get Free Quote', href: '/quote', icon: <DollarSign className="w-5 h-5" />, style: 'white' },
        { text: 'Call Now', href: 'tel:843-877-5539', icon: <Phone className="w-5 h-5" />, style: 'outline' }
      ]
    },
    secondary: {
      bg: 'bg-weather-black',
      title: title || 'Schedule Your Free Inspection',
      description: description || 'Our experts will assess your roof and provide a detailed report with recommendations.',
      buttons: [
        { text: 'Schedule Inspection', href: '/inspection', icon: <Calendar className="w-5 h-5" />, style: 'teal' },
        { text: 'Learn More', href: '/services', icon: <ArrowRight className="w-5 h-5" />, style: 'outline' }
      ]
    },
    emergency: {
      bg: 'bg-red-600',
      title: title || '24/7 Emergency Roofing Service',
      description: description || 'Storm damage? Leaking roof? We\'re here to help immediately. Call our emergency hotline now.',
      buttons: [
        { text: 'Emergency Service', href: 'tel:843-877-5539', icon: <Zap className="w-5 h-5" />, style: 'white' },
        { text: 'File Insurance Claim', href: '/insurance', icon: <Shield className="w-5 h-5" />, style: 'outline' }
      ]
    },
    quote: {
      bg: 'bg-weather-teal',
      title: title || 'Get Your Free Quote in Minutes',
      description: description || 'No hidden fees, no surprises. Just transparent pricing for quality roofing services.',
      buttons: [
        { text: 'Get Quote Online', href: '/quote', icon: <DollarSign className="w-5 h-5" />, style: 'white' },
        { text: 'Call for Quote', href: 'tel:843-877-5539', icon: <Phone className="w-5 h-5" />, style: 'outline' }
      ]
    }
  };

  const currentVariant = variants[variant];

  const features = [
    'Free comprehensive inspection',
    'Insurance claim assistance',
    'Lifetime warranty available',
    'Financing options',
    '24/7 emergency service',
    'Licensed & insured'
  ];

  return (
    <section className={`py-16 lg:py-24 ${currentVariant.bg} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Emergency Badge for Emergency Variant */}
          {variant === 'emergency' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">Available 24/7</span>
            </motion.div>
          )}

          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {currentVariant.title}
          </h2>

          {/* Description */}
          <p className="text-xl mb-8 opacity-95">
            {currentVariant.description}
          </p>

          {/* Features Grid */}
          {showFeatures && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-2 justify-center"
                >
                  <CheckCircle className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {currentVariant.buttons.map((button) => {
              const buttonStyles = {
                white: 'bg-white text-weather-black hover:bg-gray-100',
                outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-weather-black',
                teal: 'bg-weather-teal text-white hover:bg-weather-teal/90'
              };

              return button.href.startsWith('tel:') ? (
                <a
                  key={button.text}
                  href={button.href}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 ${buttonStyles[button.style as keyof typeof buttonStyles]}`}
                >
                  {button.icon}
                  {button.text}
                </a>
              ) : (
                <Link
                  key={button.text}
                  href={button.href}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 ${buttonStyles[button.style as keyof typeof buttonStyles]}`}
                >
                  {button.icon}
                  {button.text}
                </Link>
              );
            })}
          </motion.div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <p className="text-white/80 text-sm">
              Trusted by 500+ homeowners in Myrtle Beach • Licensed & Insured • BBB A+ Rated
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}