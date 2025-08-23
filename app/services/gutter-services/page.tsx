import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Droplets, 
  CheckCircle, 
  Home, 
  Shield, 
  Wrench, 
  AlertTriangle,
  ArrowRight,
  Phone,
  DollarSign,
  Leaf,
  CloudRain,
  Wrench as Tool,
  ThermometerSun
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingContact from '../../components/FloatingContact'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Gutter Services | WeatherShield Roofing',
  description: 'Professional gutter installation, repair, and cleaning services. Protect your home from water damage with quality gutter systems and maintenance.',
  keywords: 'gutter services, gutter installation, gutter repair, gutter cleaning, seamless gutters, gutter guards, downspouts',
}

const benefits = [
  {
    icon: Home,
    title: 'Foundation Protection',
    description: 'Prevent costly foundation damage from water erosion'
  },
  {
    icon: Shield,
    title: 'Prevent Water Damage',
    description: 'Keep water away from walls, windows, and doors'
  },
  {
    icon: Leaf,
    title: 'Landscaping Protection',
    description: 'Preserve your yard and prevent soil erosion'
  },
  {
    icon: ThermometerSun,
    title: 'Year-Round Performance',
    description: 'Systems designed for all weather conditions'
  }
]

const process = [
  {
    step: '1',
    title: 'System Evaluation',
    description: 'Complete assessment of your gutter needs'
  },
  {
    step: '2',
    title: 'Custom Design',
    description: 'Tailored solution for optimal water management'
  },
  {
    step: '3',
    title: 'Professional Installation',
    description: 'Precise installation with proper pitch and drainage'
  },
  {
    step: '4',
    title: 'System Testing',
    description: 'Ensure proper flow and complete functionality'
  }
]

const problems = [
  'Overflowing gutters during rain',
  'Sagging or pulling away from house',
  'Visible cracks or holes',
  'Rust and corrosion',
  'Standing water in gutters',
  'Ice dams in winter',
  'Basement flooding',
  'Erosion around foundation'
]

const services = [
  {
    name: 'Gutter Installation',
    features: 'New seamless gutter systems custom-fitted to your home',
    details: 'Professional measurement and installation for optimal performance'
  },
  {
    name: 'Gutter Repair',
    features: 'Fix leaks, reattach sections, and restore functionality',
    details: 'Quick repairs to prevent water damage and extend gutter life'
  },
  {
    name: 'Gutter Cleaning',
    features: 'Remove debris, check for damage, ensure proper flow',
    details: 'Regular maintenance to prevent clogs and water overflow'
  },
  {
    name: 'Gutter Guards',
    features: 'Install protective systems to reduce maintenance',
    details: 'Keep leaves and debris out while allowing water flow'
  },
  {
    name: 'Downspout Services',
    features: 'Installation, repair, and extension of downspouts',
    details: 'Direct water safely away from your foundation'
  },
  {
    name: 'Emergency Services',
    features: '24/7 response for urgent gutter issues',
    details: 'Rapid repairs to prevent immediate water damage'
  }
]

const materials = [
  {
    name: 'Aluminum Gutters',
    features: 'Lightweight, rust-resistant, cost-effective',
    best: 'Most residential homes'
  },
  {
    name: 'Copper Gutters',
    features: 'Premium appearance, extremely durable, develops patina',
    best: 'High-end homes and historic properties'
  },
  {
    name: 'Steel Gutters',
    features: 'Strong, handles heavy snow loads, long-lasting',
    best: 'Areas with extreme weather'
  },
  {
    name: 'Vinyl Gutters',
    features: 'Budget-friendly, easy installation, lightweight',
    best: 'DIY projects and budget-conscious homeowners'
  }
]

const pricingFactors = [
  { icon: Home, factor: 'Linear feet of gutters needed' },
  { icon: Tool, factor: 'Material selection' },
  { icon: Wrench, factor: 'Removal of existing gutters' },
  { icon: AlertTriangle, factor: 'Repair complexity' },
  { icon: Leaf, factor: 'Gutter guard installation' },
  { icon: CloudRain, factor: 'Downspout additions or repairs' }
]

const faqs = [
  {
    question: 'How often should gutters be cleaned?',
    answer: 'We recommend cleaning gutters at least twice a year - in spring and fall. Homes with many trees nearby may need quarterly cleaning. Regular cleaning prevents clogs, water damage, and extends gutter lifespan.'
  },
  {
    question: 'What are seamless gutters?',
    answer: 'Seamless gutters are custom-made on-site to fit your home perfectly with minimal joints. This reduces leak points, improves appearance, and provides better performance than sectional gutters.'
  },
  {
    question: 'How do I know if I need new gutters?',
    answer: 'Signs include visible cracks or splits, rust spots, sagging sections, water pooling around foundation, peeling paint on gutters, or gutters pulling away from the house. Our free inspection can determine your needs.'
  },
  {
    question: 'Are gutter guards worth the investment?',
    answer: 'Gutter guards significantly reduce maintenance needs and prevent clogs. While they require upfront investment, they save time and money on cleaning and help prevent water damage.'
  }
]

const relatedServices = [
  { name: 'Residential Roofing', href: '/services/residential-roofing' },
  { name: 'Commercial Roofing', href: '/services/commercial-roofing' },
  { name: 'Siding Installation', href: '/services/siding-installation' }
]

export default function GutterServicesPage() {
  return (
    <div className="min-h-screen bg-weather-light">
      <Header />
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-weather-blue/90 to-weather-teal/90 z-10" />
        <Image
          src="/images/gutter-system.jpg"
          alt="Gutter Services"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Professional Gutter Services
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Complete Gutter Solutions to Protect Your Property
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-weather-teal hover:bg-weather-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Schedule Gutter Service
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
                Expert Gutter Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Properly functioning gutters are essential for protecting your home from water 
                damage. WeatherShield Roofing provides comprehensive gutter services that ensure 
                your property stays dry and damage-free year-round.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From seamless gutter installation to regular maintenance and emergency repairs, 
                our experienced technicians deliver solutions that protect your investment. We 
                use quality materials and proven techniques to ensure long-lasting performance.
              </p>
              <div className="flex items-center space-x-4">
                <Droplets className="text-weather-teal" />
                <div>
                  <p className="font-semibold">Water Management Experts</p>
                  <p className="text-gray-600">Protecting homes since 2004</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/gutter-installation.jpg"
                alt="Professional gutter installation"
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
            Benefits of Professional Gutter Services
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
            Our Service Process
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

      {/* Services Offered */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Complete Gutter Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-weather-light p-6 rounded-lg">
                <h3 className="font-semibold text-xl text-weather-blue mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-700 mb-2">{service.features}</p>
                <p className="text-sm text-gray-600">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Common Gutter Problems We Fix
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Gutter Material Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-weather-light p-6 rounded-lg shadow-soft">
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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Service Pricing Factors
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
              Get a free estimate for your gutter project today.
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Gutter Service FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-weather-light p-6 rounded-lg shadow-soft">
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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Gutter Installation Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-center">Before</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/gutter-before.jpg"
                  alt="Old gutter system"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-center">After</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/gutter-after.jpg"
                  alt="New gutter system"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Seamless gutters custom-fitted to your home
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Phone className="text-weather-teal" />
              <span className="font-semibold">Call (555) 123-4567 for Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-weather-light p-6 rounded-lg shadow-soft hover:shadow-lg transition-shadow text-center"
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