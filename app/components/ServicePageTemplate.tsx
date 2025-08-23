'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Star,
  Shield,
  Clock,
  DollarSign,
  Award,
  FileText,
  Users,
  Zap
} from 'lucide-react';
import HeroSection from './HeroSection';
import CTASection from './CTASection';
import TestimonialsSection from './TestimonialsSection';
import { JsonLd } from './JsonLd';

interface ServicePageProps {
  title: string;
  description: string;
  heroImage?: string;
  icon?: React.ReactNode;
  benefits: string[];
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices?: Array<{
    title: string;
    href: string;
    description: string;
  }>;
  emergencyService?: boolean;
  warranty?: string;
  pricing?: {
    range: string;
    factors: string[];
  };
}

export default function ServicePageTemplate({
  title,
  description,
  heroImage = '/images/service-hero.jpg',
  icon,
  benefits,
  process,
  features,
  faqs,
  relatedServices,
  emergencyService = false,
  warranty,
  pricing
}: ServicePageProps) {
  return (
    <>
      {/* SEO Schema */}
      <JsonLd.Service
        name={title}
        description={description}
        serviceType="Roofing Service"
      />

      {/* Hero Section */}
      <HeroSection
        title={title}
        subtitle={description}
        backgroundImage={heroImage}
        showEmergencyCTA={emergencyService}
      />

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Service Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-weather-black mb-6">
                  Why Choose Weather Shield for {title}?
                </h2>
                <div className="prose prose-lg text-weather-dark">
                  <p>{description}</p>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-weather-black mb-6">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-weather-teal flex-shrink-0 mt-0.5" />
                      <span className="text-weather-dark">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-weather-black mb-6">Our Process</h3>
                <div className="space-y-6">
                  {process.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-weather-teal rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-weather-black mb-2">
                          {step.title}
                        </h4>
                        <p className="text-weather-dark">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-weather-black mb-6">Service Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-weather-light rounded-lg p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-weather-teal">{feature.icon}</div>
                        <div>
                          <h4 className="font-semibold text-weather-black mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-weather-dark">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-weather-black mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.details
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-weather-light rounded-lg p-6 cursor-pointer group"
                    >
                      <summary className="font-semibold text-weather-black flex items-center justify-between">
                        {faq.question}
                        <span className="text-weather-teal group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <p className="mt-4 text-weather-dark">{faq.answer}</p>
                    </motion.details>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-weather-teal rounded-xl p-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:843-877-5539"
                      className="flex items-center justify-center gap-2 bg-white text-weather-purple px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="w-5 h-5" />
                      Call (843) 877-5539
                    </a>
                    <Link
                      href="/quote"
                      className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-weather-purple transition-all duration-300"
                    >
                      Get Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  {emergencyService && (
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4" />
                        <span>24/7 Emergency Service Available</span>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h4 className="font-bold text-weather-black mb-4">Why Trust Us?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-weather-teal" />
                      <span className="text-sm text-weather-dark">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-weather-teal" />
                      <span className="text-sm text-weather-dark">BBB A+ Rated</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-weather-teal" />
                      <span className="text-sm text-weather-dark">500+ Happy Customers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-weather-teal" />
                      <span className="text-sm text-weather-dark">5.0 Google Rating</span>
                    </div>
                  </div>
                </motion.div>

                {/* Warranty Info */}
                {warranty && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-weather-light rounded-xl p-6"
                  >
                    <h4 className="font-bold text-weather-black mb-3">Warranty</h4>
                    <p className="text-sm text-weather-dark">{warranty}</p>
                  </motion.div>
                )}

                {/* Pricing Info */}
                {pricing && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-weather-light rounded-xl p-6"
                  >
                    <h4 className="font-bold text-weather-black mb-3">Pricing</h4>
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-5 h-5 text-weather-teal" />
                      <span className="text-lg font-semibold text-weather-black">
                        {pricing.range}
                      </span>
                    </div>
                    <p className="text-sm text-weather-dark mb-3">Factors affecting cost:</p>
                    <ul className="space-y-1">
                      {pricing.factors.map((factor) => (
                        <li key={factor} className="text-sm text-weather-dark flex items-start gap-2">
                          <span className="text-weather-teal mt-1">•</span>
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Related Services */}
                {relatedServices && relatedServices.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <h4 className="font-bold text-weather-black mb-4">Related Services</h4>
                    <div className="space-y-3">
                      {relatedServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block group"
                        >
                          <h5 className="font-semibold text-weather-black group-hover:text-weather-teal transition-colors">
                            {service.title}
                          </h5>
                          <p className="text-sm text-weather-dark">{service.description}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection variant="primary" showFeatures />
    </>
  );
}