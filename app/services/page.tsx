import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import CTASection from '../components/CTASection';
import { 
  Home, 
  Building2, 
  Droplets, 
  Package, 
  CloudRain, 
  Search, 
  AlertTriangle, 
  Wrench,
  CheckCircle,
  FileText,
  HardHat,
  Shield,
  Phone,
  Clock,
  DollarSign,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roofing Services | WeatherShield Roofing - Rohnert Park, CA',
  description: 'Professional roofing services in Rohnert Park. Residential, commercial, gutters, siding, storm damage repair, and emergency services. Free inspections and quotes.',
  keywords: 'roofing services, residential roofing, commercial roofing, gutter services, siding installation, storm damage repair, roof inspection, emergency repairs, roof maintenance, Rohnert Park',
  openGraph: {
    title: 'Roofing Services | WeatherShield Roofing',
    description: 'Complete roofing solutions for residential and commercial properties in Rohnert Park, CA.',
    type: 'website',
    locale: 'en_US',
    siteName: 'WeatherShield Roofing',
  },
};

const mainServices = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for your home. From repairs to full replacements, we protect what matters most.',
    features: ['Shingle Roofing', 'Tile Roofing', 'Metal Roofing', 'Flat Roofing'],
    link: '/services/residential'
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Professional commercial roofing services designed to minimize business disruption and maximize protection.',
    features: ['TPO Systems', 'EPDM Roofing', 'Built-Up Roofing', 'Roof Coatings'],
    link: '/services/commercial'
  },
  {
    icon: Droplets,
    title: 'Gutter Services',
    description: 'Complete gutter solutions to protect your property from water damage and foundation issues.',
    features: ['Gutter Installation', 'Gutter Repair', 'Gutter Guards', 'Downspout Services'],
    link: '/services/gutters'
  },
  {
    icon: Package,
    title: 'Siding Installation',
    description: 'Transform your property\'s exterior with durable, beautiful siding that stands up to the elements.',
    features: ['Vinyl Siding', 'Fiber Cement', 'Wood Siding', 'Siding Repair'],
    link: '/services/siding'
  }
];

const additionalServices = [
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Fast response to storm damage with insurance claim assistance.',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections to identify issues before they become costly repairs.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Repairs',
    description: '24/7 emergency service to protect your property when you need it most.',
  },
  {
    icon: Wrench,
    title: 'Roof Maintenance',
    description: 'Preventive maintenance programs to extend your roof\'s lifespan.',
  }
];

const processSteps = [
  {
    icon: Search,
    title: 'Inspection',
    description: 'Free, comprehensive roof inspection to assess your needs'
  },
  {
    icon: FileText,
    title: 'Quote',
    description: 'Detailed, transparent pricing with no hidden fees'
  },
  {
    icon: HardHat,
    title: 'Installation',
    description: 'Professional installation by certified roofing experts'
  },
  {
    icon: Shield,
    title: 'Warranty',
    description: 'Industry-leading warranties on materials and workmanship'
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-weather-blue text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Professional Roofing Services
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Protecting Sonoma County homes and businesses with expert roofing solutions since 1985
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-weather-teal text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="tel:707-555-ROOF"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-weather-blue font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call 707-555-ROOF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From residential roofs to commercial properties, we offer comprehensive solutions for all your roofing needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="bg-weather-teal/10 p-3 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-weather-teal" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-weather-teal mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={service.link}
                        className="inline-flex items-center text-weather-blue font-semibold hover:text-weather-teal transition-colors"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete roofing solutions to handle any situation
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-weather-teal transition-colors">
                  <service.icon className="h-10 w-10 text-weather-teal mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Service Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, transparent, and professional from start to finish
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-weather-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Services Highlight */}
        <section className="py-20 bg-weather-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-weather-teal" />
              <h2 className="text-4xl font-bold mb-4">
                24/7 Emergency Roofing Services
              </h2>
              <p className="text-xl opacity-90 mb-8">
                When disaster strikes, we're here to help. Our emergency response team is available around the clock to protect your property from further damage.
              </p>
              <div className="grid sm:grid-cols-3 gap-8 mb-8">
                <div>
                  <Clock className="h-10 w-10 mx-auto mb-3 text-weather-teal" />
                  <h3 className="font-semibold text-lg mb-2">Rapid Response</h3>
                  <p className="opacity-80">Emergency crews on-call 24/7</p>
                </div>
                <div>
                  <Shield className="h-10 w-10 mx-auto mb-3 text-weather-teal" />
                  <h3 className="font-semibold text-lg mb-2">Insurance Help</h3>
                  <p className="opacity-80">We work directly with your insurance</p>
                </div>
                <div>
                  <Phone className="h-10 w-10 mx-auto mb-3 text-weather-teal" />
                  <h3 className="font-semibold text-lg mb-2">One Call Away</h3>
                  <p className="opacity-80">707-555-ROOF for emergencies</p>
                </div>
              </div>
              <a
                href="tel:707-555-ROOF"
                className="inline-flex items-center justify-center px-8 py-4 bg-weather-teal text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </a>
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-weather-teal/5 border-2 border-weather-teal rounded-xl p-8 text-center">
                <DollarSign className="h-12 w-12 text-weather-teal mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Flexible Financing Available
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Don't let budget concerns delay necessary roof repairs. We offer flexible financing options with competitive rates and terms to fit your budget.
                </p>
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div>
                    <p className="text-2xl font-bold text-weather-blue">0%</p>
                    <p className="text-gray-600">Interest options available</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-weather-blue">5 Minutes</p>
                    <p className="text-gray-600">Quick approval process</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-weather-blue">Flexible</p>
                    <p className="text-gray-600">Payment terms</p>
                  </div>
                </div>
                <a
                  href="/financing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-weather-blue text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Learn About Financing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
}