import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Shield, 
  CheckCircle, 
  Home, 
  Clock, 
  Users, 
  Award,
  ArrowRight,
  Phone,
  DollarSign,
  Wrench,
  AlertTriangle,
  Package
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingContact from '../../components/FloatingContact'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Residential Roofing Services | WeatherShield Roofing',
  description: 'Expert residential roofing installation, repair, and replacement services. Protect your home with quality materials and professional craftsmanship.',
  keywords: 'residential roofing, home roof repair, roof replacement, shingle roofing, roof installation',
}

const benefits = [
  {
    icon: Shield,
    title: 'Lifetime Protection',
    description: 'Industry-leading warranties on materials and workmanship'
  },
  {
    icon: Home,
    title: 'Increased Home Value',
    description: 'Quality roofing enhances curb appeal and property value'
  },
  {
    icon: Clock,
    title: 'Energy Efficiency',
    description: 'Modern materials reduce heating and cooling costs'
  },
  {
    icon: Users,
    title: 'Expert Installation',
    description: 'Certified professionals with decades of experience'
  }
]

const process = [
  {
    step: '1',
    title: 'Free Inspection',
    description: 'Comprehensive assessment of your current roof condition'
  },
  {
    step: '2',
    title: 'Detailed Estimate',
    description: 'Transparent pricing with multiple material options'
  },
  {
    step: '3',
    title: 'Professional Installation',
    description: 'Efficient, clean installation by certified technicians'
  },
  {
    step: '4',
    title: 'Final Inspection',
    description: 'Quality assurance and warranty documentation'
  }
]

const problems = [
  'Missing or damaged shingles',
  'Water leaks and moisture damage',
  'Poor ventilation and insulation',
  'Storm and wind damage',
  'Aging roof beyond repair',
  'Structural sagging or damage'
]

const materials = [
  {
    name: 'Asphalt Shingles',
    features: 'Cost-effective, versatile, 20-30 year lifespan',
    best: 'Budget-conscious homeowners'
  },
  {
    name: 'Architectural Shingles',
    features: 'Premium appearance, 30-50 year lifespan',
    best: 'Long-term value seekers'
  },
  {
    name: 'Metal Roofing',
    features: 'Durable, energy-efficient, 50+ year lifespan',
    best: 'Maximum durability needs'
  },
  {
    name: 'Cedar Shakes',
    features: 'Natural beauty, excellent insulation',
    best: 'Traditional aesthetic preferences'
  }
]

const pricingFactors = [
  { icon: Home, factor: 'Roof size and complexity' },
  { icon: Package, factor: 'Material selection' },
  { icon: Wrench, factor: 'Existing roof removal needs' },
  { icon: AlertTriangle, factor: 'Structural repairs required' },
  { icon: Award, factor: 'Warranty coverage level' },
  { icon: Clock, factor: 'Project timeline requirements' }
]

const faqs = [
  {
    question: 'How long does a residential roof replacement take?',
    answer: 'Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of your roof. We work efficiently while maintaining the highest quality standards.'
  },
  {
    question: 'How often should I have my roof inspected?',
    answer: 'We recommend annual professional inspections, especially after severe weather events. Regular inspections help identify minor issues before they become costly repairs.'
  },
  {
    question: 'What signs indicate I need a new roof?',
    answer: 'Key indicators include missing shingles, water stains on ceilings, daylight through roof boards, sagging areas, and roofs over 20 years old. Our free inspection can determine your specific needs.'
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer flexible financing plans to make your roofing project affordable. Our team can help you explore options that fit your budget.'
  }
]

const relatedServices = [
  { name: 'Commercial Roofing', href: '/services/commercial-roofing' },
  { name: 'Gutter Services', href: '/services/gutter-services' },
  { name: 'Siding Installation', href: '/services/siding-installation' }
]

export default function ResidentialRoofingPage() {
  return (
    <div className="min-h-screen bg-weather-light">
      <Header />
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-weather-blue/90 to-weather-teal/90 z-10" />
        <Image
          src="/images/residential-roof.jpg"
          alt="Residential Roofing"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Residential Roofing Services
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Protect Your Home with Expert Roofing Solutions
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-weather-teal hover:bg-weather-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get Free Inspection
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-weather-dark mb-6">
                Complete Residential Roofing Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Your home deserves the best protection. With over 20 years of experience, 
                WeatherShield Roofing delivers exceptional residential roofing services that 
                combine quality materials, expert craftsmanship, and unmatched customer service.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From minor repairs to complete roof replacements, we handle every project with 
                the same attention to detail and commitment to excellence. Our certified 
                professionals ensure your roof not only looks great but provides decades of 
                reliable protection.
              </p>
              <div className="flex items-center space-x-4">
                <Phone className="text-weather-teal" />
                <div>
                  <p className="font-semibold">24/7 Emergency Service</p>
                  <p className="text-gray-600">Call (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/roof-installation.jpg"
                alt="Professional roof installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Why Choose Our Residential Roofing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-weather-teal/10 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-weather-teal" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Our Proven Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-weather-blue text-white rounded-full font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-12 -right-4 text-weather-teal" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Common Roofing Problems We Address
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="text-weather-teal flex-shrink-0" />
                <span className="text-lg">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Quality Materials & Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="font-semibold text-2xl text-weather-blue mb-3">
                  {material.name}
                </h3>
                <p className="text-gray-700 mb-3">{material.features}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Best for:</span> {material.best}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Transparent Pricing Factors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingFactors.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <item.icon className="w-6 h-6 text-weather-teal flex-shrink-0" />
                <span className="text-lg">{item.factor}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Every home is unique. Get a personalized quote for your roofing project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-weather-teal hover:bg-weather-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <DollarSign className="mr-2" />
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="font-semibold text-xl text-weather-blue mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Before & After Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-center">Before</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/roof-before.jpg"
                  alt="Roof before renovation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-center">After</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/roof-after.jpg"
                  alt="Roof after renovation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-white p-6 rounded-lg shadow-soft hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-semibold text-xl text-weather-blue hover:text-weather-teal transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  )
}