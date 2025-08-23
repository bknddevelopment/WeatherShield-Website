import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Home, 
  CheckCircle, 
  Shield, 
  Palette, 
  ThermometerSun, 
  Volume2,
  ArrowRight,
  Phone,
  DollarSign,
  Wrench,
  AlertTriangle,
  Package,
  Sparkles,
  Clock
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FloatingContact from '../../components/FloatingContact'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
  title: 'Siding Installation Services | WeatherShield Roofing',
  description: 'Professional siding installation and replacement services. Transform your home with durable, energy-efficient siding options.',
  keywords: 'siding installation, vinyl siding, fiber cement, home siding, siding replacement, exterior renovation',
}

const benefits = [
  {
    icon: Home,
    title: 'Enhanced Curb Appeal',
    description: 'Transform your home exterior with modern siding options'
  },
  {
    icon: ThermometerSun,
    title: 'Energy Efficiency',
    description: 'Improved insulation reduces heating and cooling costs'
  },
  {
    icon: Shield,
    title: 'Weather Protection',
    description: 'Durable materials protect against moisture and elements'
  },
  {
    icon: Volume2,
    title: 'Noise Reduction',
    description: 'Quality siding provides sound insulation benefits'
  }
]

const process = [
  {
    step: '1',
    title: 'Design Consultation',
    description: 'Review styles, colors, and material options'
  },
  {
    step: '2',
    title: 'Precise Measurements',
    description: 'Accurate measurements for perfect fit and minimal waste'
  },
  {
    step: '3',
    title: 'Professional Installation',
    description: 'Expert installation with attention to detail'
  },
  {
    step: '4',
    title: 'Quality Inspection',
    description: 'Final walkthrough and warranty documentation'
  }
]

const problems = [
  'Cracked or warped siding',
  'Fading and discoloration',
  'Moisture damage and rot',
  'Pest infestation damage',
  'Poor insulation performance',
  'Outdated appearance',
  'High maintenance requirements',
  'Energy inefficiency'
]

const materials = [
  {
    name: 'Vinyl Siding',
    features: 'Cost-effective, low maintenance, variety of colors',
    lifespan: '20-40 years',
    best: 'Budget-conscious homeowners seeking durability'
  },
  {
    name: 'Fiber Cement',
    features: 'Fire-resistant, termite-proof, mimics wood grain',
    lifespan: '25-50 years',
    best: 'Premium durability and aesthetic appeal'
  },
  {
    name: 'Wood Siding',
    features: 'Natural beauty, eco-friendly, customizable',
    lifespan: '15-30 years with maintenance',
    best: 'Traditional homes and natural aesthetics'
  },
  {
    name: 'Engineered Wood',
    features: 'Wood appearance, better durability, moisture resistant',
    lifespan: '20-30 years',
    best: 'Wood look without high maintenance'
  },
  {
    name: 'Metal Siding',
    features: 'Extremely durable, fire-resistant, modern look',
    lifespan: '40-70 years',
    best: 'Contemporary designs and maximum durability'
  },
  {
    name: 'Composite Siding',
    features: 'Low maintenance, weather resistant, eco-friendly',
    lifespan: '25-40 years',
    best: 'Sustainable options with long-term value'
  }
]

const styles = [
  'Traditional Lap Siding',
  'Board and Batten',
  'Shake and Shingle',
  'Vertical Panel',
  'Dutch Lap',
  'Beaded Seam'
]

const pricingFactors = [
  { icon: Home, factor: 'Square footage of home' },
  { icon: Package, factor: 'Material selection and grade' },
  { icon: Wrench, factor: 'Removal of existing siding' },
  { icon: AlertTriangle, factor: 'Structural repairs needed' },
  { icon: Palette, factor: 'Custom colors or finishes' },
  { icon: Clock, factor: 'Project complexity and timeline' }
]

const faqs = [
  {
    question: 'How long does siding installation take?',
    answer: 'Most residential siding projects take 3-7 days depending on home size and complexity. We work efficiently while ensuring quality installation and minimal disruption to your daily routine.'
  },
  {
    question: 'Can siding be installed over existing siding?',
    answer: 'In some cases, new siding can be installed over existing materials. However, we often recommend removal to inspect for damage, ensure proper installation, and achieve the best results.'
  },
  {
    question: 'What is the most energy-efficient siding?',
    answer: 'Insulated vinyl siding and fiber cement with foam backing offer excellent energy efficiency. We can help you choose options that maximize insulation value and reduce energy costs.'
  },
  {
    question: 'How do I maintain my new siding?',
    answer: 'Maintenance varies by material. Vinyl requires occasional washing, wood needs periodic staining or painting, while fiber cement is virtually maintenance-free. We provide specific care instructions for your chosen material.'
  }
]

const relatedServices = [
  { name: 'Residential Roofing', href: '/services/residential-roofing' },
  { name: 'Gutter Services', href: '/services/gutter-services' },
  { name: 'Window Installation', href: '/services' }
]

export default function SidingInstallationPage() {
  return (
    <div className="min-h-screen bg-weather-light">
      <Header />
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-weather-blue/90 to-weather-teal/90 z-10" />
        <Image
          src="/images/siding-hero.jpg"
          alt="Siding Installation"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Professional Siding Installation
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transform Your Home with Beautiful, Durable Siding
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-weather-teal hover:bg-weather-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get Free Consultation
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
                Complete Exterior Transformation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Your home's siding is its first line of defense against the elements while 
                defining its aesthetic appeal. WeatherShield Roofing provides expert siding 
                installation that combines beauty, durability, and energy efficiency to protect 
                and enhance your most valuable investment.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With extensive experience in all siding materials and styles, our certified 
                installers deliver flawless results that increase your home's value and reduce 
                maintenance needs for decades to come.
              </p>
              <div className="flex items-center space-x-4">
                <Sparkles className="text-weather-teal" />
                <div>
                  <p className="font-semibold">Exterior Excellence</p>
                  <p className="text-gray-600">Transforming homes with quality siding</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/siding-installation-process.jpg"
                alt="Professional siding installation"
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
            Benefits of New Siding
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
            Our Installation Process
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
            Signs You Need New Siding
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
            Siding Material Options
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="font-semibold text-2xl text-weather-blue mb-3">
                  {material.name}
                </h3>
                <p className="text-gray-700 mb-2">{material.features}</p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Lifespan:</span> {material.lifespan}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Best for:</span> {material.best}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Popular Siding Styles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {styles.map((style, index) => (
              <div key={index} className="bg-weather-light p-4 rounded-lg text-center">
                <h3 className="font-semibold text-lg text-weather-blue">{style}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Choose from dozens of colors and finishes to match your vision
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-weather-teal hover:bg-weather-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Palette className="mr-2" />
              View Color Options
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 px-4">
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
              Get a detailed quote for your siding project with financing options available.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-weather-teal hover:bg-weather-blue text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <DollarSign className="mr-2" />
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Siding Installation FAQs
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
            Siding Transformation Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-center">Before</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/siding-before.jpg"
                  alt="Home before siding replacement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-center">After</h3>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/siding-after.jpg"
                  alt="Home after siding installation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Complete exterior transformations with quality craftsmanship
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Home className="text-weather-teal" />
              <span className="font-semibold">Over 1,000 Homes Transformed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center text-weather-dark mb-12">
            Complete Exterior Services
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