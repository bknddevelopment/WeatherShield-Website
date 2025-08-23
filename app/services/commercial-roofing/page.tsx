import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Building, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Shield, 
  Award,
  ArrowRight,
  Phone,
  DollarSign,
  Wrench,
  AlertTriangle,
  Package,
  FileText,
  Users
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingContact from '../../components/FloatingContact'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Commercial Roofing Services | WeatherShield Roofing',
  description: 'Professional commercial roofing solutions for businesses. Expert installation, maintenance, and repair services with minimal disruption to operations.',
  keywords: 'commercial roofing, business roof repair, flat roof, TPO roofing, EPDM, metal roofing, commercial roof maintenance',
}

const benefits = [
  {
    icon: Building,
    title: 'Minimal Business Disruption',
    description: 'Work around your schedule to minimize operational impact'
  },
  {
    icon: TrendingUp,
    title: 'ROI Focused',
    description: 'Energy-efficient solutions that reduce operating costs'
  },
  {
    icon: Shield,
    title: 'Comprehensive Warranties',
    description: 'Extended coverage for materials and workmanship'
  },
  {
    icon: FileText,
    title: 'Code Compliance',
    description: 'Meet all local building codes and regulations'
  }
]

const process = [
  {
    step: '1',
    title: 'Property Assessment',
    description: 'Thorough evaluation of your commercial roofing needs'
  },
  {
    step: '2',
    title: 'Custom Proposal',
    description: 'Tailored solutions with ROI analysis and timeline'
  },
  {
    step: '3',
    title: 'Scheduled Installation',
    description: 'Work performed around your business operations'
  },
  {
    step: '4',
    title: 'Ongoing Maintenance',
    description: 'Regular inspections and preventive maintenance plans'
  }
]

const problems = [
  'Ponding water on flat roofs',
  'Membrane punctures and tears',
  'Flashing failures and leaks',
  'HVAC penetration issues',
  'Drainage system problems',
  'Energy inefficiency',
  'Storm and wind damage',
  'Code compliance violations'
]

const materials = [
  {
    name: 'TPO Roofing',
    features: 'Energy-efficient, durable, 20-30 year lifespan',
    best: 'Flat and low-slope commercial buildings'
  },
  {
    name: 'EPDM Rubber',
    features: 'Cost-effective, weather-resistant, easy maintenance',
    best: 'Large flat roof surfaces'
  },
  {
    name: 'Modified Bitumen',
    features: 'Multi-layer protection, excellent waterproofing',
    best: 'High-traffic roof areas'
  },
  {
    name: 'Metal Roofing Systems',
    features: 'Longest lifespan, minimal maintenance, energy-efficient',
    best: 'Warehouses and industrial facilities'
  },
  {
    name: 'Built-Up Roofing (BUR)',
    features: 'Traditional multi-layer system, proven performance',
    best: 'Large commercial complexes'
  },
  {
    name: 'PVC Roofing',
    features: 'Chemical resistant, fire-rated, reflective',
    best: 'Restaurants and chemical facilities'
  }
]

const pricingFactors = [
  { icon: Building, factor: 'Building size and roof complexity' },
  { icon: Package, factor: 'Material selection and specifications' },
  { icon: Wrench, factor: 'Existing roof removal requirements' },
  { icon: AlertTriangle, factor: 'Structural modifications needed' },
  { icon: Clock, factor: 'Project timeline and scheduling' },
  { icon: FileText, factor: 'Permit and inspection requirements' }
]

const faqs = [
  {
    question: 'How long does commercial roof installation take?',
    answer: 'Project duration varies based on size and complexity, typically ranging from 3-14 days. We work with your schedule to minimize business disruption, including weekend and after-hours installation options.'
  },
  {
    question: 'What maintenance is required for commercial roofs?',
    answer: 'We recommend bi-annual inspections and preventive maintenance to maximize roof lifespan. Our maintenance programs include cleaning, minor repairs, and detailed condition reports to prevent costly emergency repairs.'
  },
  {
    question: 'Can you work with our insurance company?',
    answer: 'Yes, we have extensive experience working with commercial insurance claims. We provide detailed documentation, work directly with adjusters, and ensure all work meets insurance requirements.'
  },
  {
    question: 'Do you offer emergency commercial roofing services?',
    answer: 'We provide 24/7 emergency response for commercial properties. Our rapid response team can perform temporary repairs to prevent further damage and schedule permanent solutions quickly.'
  }
]

const relatedServices = [
  { name: 'Residential Roofing', href: '/services/residential-roofing' },
  { name: 'Gutter Services', href: '/services/gutter-services' },
  { name: 'Preventive Maintenance', href: '/services' }
]

export default function CommercialRoofingPage() {
  return (
    <div className="min-h-screen bg-weather-light">
      <Header />
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-weather-blue/90 to-weather-teal/90 z-10" />
        <Image
          src="/images/commercial-building.jpg"
          alt="Commercial Roofing"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Commercial Roofing Services
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional Solutions for Business Properties
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-weather-teal hover:bg-weather-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get Commercial Quote
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
                Trusted Commercial Roofing Partner
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                WeatherShield Roofing specializes in commercial roofing solutions that protect 
                your investment and keep your business running smoothly. Our experienced team 
                understands the unique challenges of commercial properties and delivers solutions 
                that meet your operational, budgetary, and timeline requirements.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From retail stores to industrial warehouses, we have the expertise and resources 
                to handle projects of any size. Our commitment to quality, safety, and minimal 
                disruption ensures your roofing project is completed on time and within budget.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="text-weather-teal" />
                <div>
                  <p className="font-semibold">Dedicated Project Manager</p>
                  <p className="text-gray-600">Single point of contact throughout</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/commercial-team.jpg"
                alt="Commercial roofing team"
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
            Why Businesses Choose WeatherShield
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
            Our Commercial Process
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
            Commercial Roofing Issues We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Commercial Roofing Systems
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Investment Considerations
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
              Get a comprehensive proposal with ROI analysis for your commercial property.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-weather-teal hover:bg-weather-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <DollarSign className="mr-2" />
              Request Commercial Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Commercial Roofing FAQs
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
            Commercial Project Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-center">Before</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/commercial-before.jpg"
                  alt="Commercial roof before"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-center">After</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/commercial-after.jpg"
                  alt="Commercial roof after"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Trusted by over 500+ businesses across the region
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Award className="text-weather-teal" />
              <span className="font-semibold">A+ BBB Rating | Licensed & Insured</span>
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